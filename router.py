from flask import Blueprint, Response, request

from sklearn.externals import joblib
import pandas as pd

import os

from http import HTTPStatus

router = Blueprint('prediction', 'prediction')

@router.route("/")
def healthcheck():
    return Response(status=HTTPStatus.OK)

@router.route("/loadmodel")
def model_check():
    try:
=        classifier = joblib.load(os.path.join(os.path.dirname( __file__ ), 'treatment_model.sav'))
        return Response(status=HTTPStatus.OK)
    except Exception as e:
        return Response(e,status=HTTPStatus.BAD_REQUEST)

@router.route("/predict",methods=['POST',])
def predict():

    observation = pd.DataFrame()

    observation['family_history'] = request.form['family_history']
    observation['work_interfere'] = request.form['work_interfere']
    observation['benifits'] = request.form['benifits']
    observation['care_options'] = request.form['care_options']
    observation['obs_consequence'] =request.form['obs_consequence']
    observation['leave'] =  request.form['leave']
    classifier = joblib.load('treatment_model.sav')

    return Response(status=HTTPStatus.OK)


