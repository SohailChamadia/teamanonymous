

# -*- coding: utf-8 -*-
"""
Created on Wed Aug 28 23:20:51 2019

@author: sohai
"""

import pandas as pd
from sklearn.ensemble import RandomForestClassifier, ExtraTreesClassifier
from sklearn.tree import DecisionTreeClassifier
from xgboost import XGBClassifier
from sklearn.ensemble import VotingClassifier
from sklearn.preprocessing import LabelEncoder 
from sklearn.svm import SVC
from sklearn.feature_selection import SelectKBest
from sklearn.feature_selection import chi2
import seaborn as sns

from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix, accuracy_score

from sklearn_pandas import CategoricalImputer
from sklearn.impute import SimpleImputer

import matplotlib.pyplot as plt
import numpy as np

from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import StratifiedKFold

from sklearn.preprocessing import MinMaxScaler

test = pd.read_csv("testms.csv", parse_dates = ['Timestamp'], index_col='s.no',keep_default_na=False)
train = pd.read_csv("survey.csv", parse_dates = ['Timestamp'],  keep_default_na=False)

train_df = train.drop(['Timestamp','comments','state','Age','Country','phys_health_consequence',
                       'phys_health_interview','tech_company'], axis=1)
test_df = test.drop(['Timestamp','comments','state','Age','Country','phys_health_consequence',
                       'phys_health_interview','tech_company'], axis=1)

test_df = test_df[['work_interfere', 'care_options','family_history', 'obs_consequence','benefits']]

training_df = train[['work_interfere','care_options', 'family_history', 'obs_consequence','benefits',
                     'treatment']]

training_df.dropna(inplace=True)

training_df = training_df.reset_index(drop=True)

encoders = {}

#countries = train_df.Country.append(test_df.Country, ignore_index=True).unique()
#encoders['Country'] = LabelEncoder().fit(countries)
encoded_df = pd.DataFrame()

for col in training_df.columns:
    label_encoder = LabelEncoder()
    data = CategoricalImputer(strategy='most_frequent').fit_transform(training_df[col])
    if col == 'work_interfere':
        data = training_df[col]
    elif col == 'Age':
        data = SimpleImputer(missing_values=np.nan).fit_transform(training_df['Age'].abs().values.reshape(-1,1))
        encoded_df[col] = data.ravel()
    elif col == 'Gender':
        data = training_df[col].str.lower()
        training_df.loc[data.str.startswith('f') | data.str.contains('female|woman'),'Gender'] = 'F'
        training_df.loc[~(data.str.startswith('f') | data.str.contains('female|woman')),'Gender'] = 'M'
        data = training_df['Gender']
    if col == 'Country':
        encoded_df[col] = encoders[col].transform(data)
    elif col != 'Age':
        encoded_df[col] = label_encoder.fit_transform(data)
        encoders[col] = label_encoder

X_test_df = pd.DataFrame()

for col in test_df.columns:
    print(col)
    data = CategoricalImputer(strategy='most_frequent').fit_transform(test_df[col])
    if col == 'work_interfere':
        data = test_df[col]
    elif col == 'Age':
        data = SimpleImputer(missing_values=np.nan).fit_transform(test_df['Age'].abs().values.reshape(-1,1))
        X_test_df[col] = data.ravel()
    elif col == 'Gender':
        data = test_df[col].str.lower()
        test_df.loc[data.str.startswith('f') | data.str.contains('female|woman'),'Gender'] = 'F'
        test_df.loc[~(data.str.startswith('f') | data.str.contains('female|woman')),'Gender'] = 'M'
        data = test_df['Gender']
    if col != 'Age':
        X_test_df[col] = encoders[col].transform(data)
    
X = encoded_df.loc[:,encoded_df.columns != 'treatment']
sc_X = MinMaxScaler()
X_t = pd.DataFrame(sc_X.fit_transform(X))
X_t.columns = X.columns

X_test = X_test_df.loc[:,X_test_df.columns != 'treatment']
X_test = pd.DataFrame(sc_X.transform(X_test_df))
X_test.columns = X_test_df.columns

X_test_df.columns
encoded_df.columns

y = encoded_df['treatment']

bestfeatures = SelectKBest(score_func=chi2,k='all')
fit = bestfeatures.fit(X_t,y)
dfscores = pd.DataFrame(fit.scores_)
dfcolumns = pd.DataFrame(X_t.columns)
#concat two dataframes for better visualization 
featureScores = pd.concat([dfcolumns,dfscores],axis=1)
featureScores.columns = ['Specs','Score']  #naming the dataframe columns
print(featureScores.nlargest(10,'Score')) 

#get correlations of each features in dataset
corrmat = encoded_df.corr()
top_corr_features = corrmat.index
plt.figure(figsize=(20,20))
#plot heat map
g=sns.heatmap(encoded_df[top_corr_features].corr(),annot=True,cmap="RdYlGn")

x_train, x_test, y_train, y_test = train_test_split(X_t, y, test_size = 0.20,random_state= 42)

classifier = RandomForestClassifier(n_estimators=1500, criterion='entropy', max_features=None,min_samples_split=2, max_depth=4)
#classifier = XGBClassifier(n_estimators = 1500,max_depth=4, learning_rate = 0.15)
#classifier = DecisionTreeClassifier(criterion='entropy')
#classifier = VotingClassifier(estimators = estimators, voting='hard')

classifier = classifier.fit(x_train, y_train)

y_pred = classifier.predict(x_test)

confusion_matrix(y_test, y_pred)
accuracy_score(y_test, y_pred)
classifier.feature_importances_

# Identifying the optimal depth and iterators

classifier = XGBClassifier()
n_estimators = range(50, 200, 50)
max_depth = range(1,11,1)
learning_rate = [0.01,0.05,0.1,0.15,0.2]
param_grid = dict(n_estimators=n_estimators, max_depth=max_depth, learning_rate=learning_rate)
kfold = StratifiedKFold(n_splits=10, shuffle=True, random_state=7)
grid_search = GridSearchCV(classifier, param_grid, scoring="neg_log_loss", n_jobs=-1, cv=kfold)
grid_result = grid_search.fit(X_t, y)
# summarize results
print("Best: %f using %s" % (grid_result.best_score_, grid_result.best_params_))
means = grid_result.cv_results_['mean_test_score']
stds = grid_result.cv_results_['std_test_score']
params = grid_result.cv_results_['params']
for mean, stdev, param in zip(means, stds, params):
	print("%f (%f) with: %r" % (mean, stdev, param))

classifier.fit(X_t, y)

y_pred = classifier.predict(X_test)
#y_test = encoded_df['treatment']
y_pred = encoders['treatment'].inverse_transform(y_pred)

df = pd.DataFrame()
df['s.no'] = test.index.values
df['treatment'] = y_pred

df.to_csv('output.csv', index = False)

from sklearn.externals import joblib

filename = 'treatment_model.sav'
joblib.dump(classifier, filename, 9)