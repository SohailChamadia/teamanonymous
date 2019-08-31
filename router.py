from flask import Blueprint, Response, request

from sklearn.externals import joblib
from sklearn.preprocessing import MinMaxScaler
import pandas as pd 
from sklearn.ensemble import RandomForestClassifier
import os

from http import HTTPStatus

from dal import insert_emp, insert_treatment, get_approval_list

router = Blueprint('prediction', 'prediction')

@router.route("/")
def healthcheck():
    return Response(status=HTTPStatus.OK)

@router.route("/loadmodel")
def model_check():
    try:
        classifier = joblib.load(os.path.join(os.path.dirname( __file__ ), 'treatment_model.sav'))
        return Response(status=HTTPStatus.OK)
    except Exception as e:
        return Response(str(e),status=HTTPStatus.BAD_REQUEST)

@router.route("/approval_list")
def approvals():
    try:

        df = get_approval_list()

        return Response(df)

    except Exception as e:
        return Response(str(e),status=HTTPStatus.BAD_REQUEST)


@router.route("/predict",methods=['POST',])
def predict():
    try:

        observation = pd.DataFrame()
        df = pd.DataFrame()
        classifier = joblib.load(os.path.join(os.path.dirname( __file__ ), 'treatment_model.sav'))
        encoders = joblib.load(os.path.join(os.path.dirname( __file__ ), 'encoders.sav'))
        for k, v in request.json.items():
            df[k] = pd.Series(v)
            if k in encoders.keys():
                observation[k] = encoders[k].transform(pd.Series(v))

        insert_emp(df)

        sc_x = encoders['minmax_transform']
        observation_df = pd.DataFrame(sc_x.transform(observation))
        observation_df.columns = observation.columns

        prediction = encoders['treatment'].inverse_transform(classifier.predict(observation_df))

        insert_treatment(df['emp_id'][0], df['emp_name'][0], prediction[0])

        return Response("Your response has been recorded and sent to your manager for approval.",status=HTTPStatus.OK)

    except Exception as e:
        return Response(str(e),status=HTTPStatus.BAD_REQUEST)


