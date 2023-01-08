import numpy as np
import pandas as pd
from sklearn import metrics
from sklearn.datasets import make_classification
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import (RandomTreesEmbedding,RandomForestClassifier,GradientBoostingClassifier)
from sklearn.multiclass import OneVsRestClassifier
from sklearn.preprocessing import OneHotEncoder
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_curve,roc_auc_score,accuracy_score,auc
from sklearn.metrics import accuracy_score
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import f1_score

import time

def feature_importances_(self):
    total_sum = np.zeros((self.n_features, ), dtype=np.float64)
    for tree in self.estimators_:
        total_sum += tree.feature_importances_
    importances = total_sum / len(self.estimators_)
    return importances


crypt = pd.read_csv(r".\diffkey\data.csv")
data = crypt.iloc[:,:-1].values
label = crypt.iloc[:, 8].values
X_train,X_test,Y_train,Y_test = train_test_split(data,label,test_size=0.2)
X_train_tree,X_train_lr,Y_train_tree,Y_train_lr = train_test_split(X_train,Y_train,test_size=0.5)


accuracy1=[]
precision1=[]
recall_score1=[]
f1_score1=[]
DictOfPvalue = {}
Dict = {}

for n_estimator in [80, 100, 150, 200, 250]:
    for depth in [1, 2, 3, 5]:
        for maxiter in [300, 400, 500]:

            time_start_all = time.time()

            GBDT = GradientBoostingClassifier(learning_rate=0.1, n_estimators=n_estimator, max_depth=depth)
            OHE = OneHotEncoder()#预处理
            LRGBDT = LogisticRegression(max_iter=maxiter)
            GBDT.fit(X_train_tree, Y_train_tree)
            OHE.fit(GBDT.apply(X_train_tree)[:, :, 0])
            LRGBDT = OneVsRestClassifier(LRGBDT)  # 1-2进行多分类转换OVR
            LRGBDT.fit(OHE.transform(GBDT.apply(X_train_lr)[:, :, 0]), Y_train_lr)
            gbdt_apply = GBDT.apply(X_test)
            gbdt_apply_lable = GBDT.apply(X_test)[:, :, 0]
            ohe_label = OHE.transform(GBDT.apply(X_test)[:, :, 0])
            Y_pred_gbdt_lr_auc = LRGBDT.predict_proba(OHE.transform(GBDT.apply(X_test)[:, :, 0]))[:, 1]
            Y_pred_gbdt_lr = LRGBDT.predict(OHE.transform(GBDT.apply(X_test)[:, :, 0]))

            time_end_all = time.time()
            time_c_all = time_end_all - time_start_all
            print("GBDT_Time:", time_c_all)

            Accuracy0 = accuracy_score(Y_test, Y_pred_gbdt_lr)
            precision0 = precision_score(Y_test, Y_pred_gbdt_lr, average='weighted')
            recall_score0 = recall_score(Y_test, Y_pred_gbdt_lr, average='weighted')
            f1_score0 = f1_score(Y_test, Y_pred_gbdt_lr, average='micro')
            print("Accuracy: ", Accuracy0)
            print("precision: ", precision0)
            print("recall_score: ", recall_score0)
            print("f1_score: ", f1_score0)
            print("time:", time_c_all)
            print("原始标签：",Y_test)
            print("预测标签：",Y_pred_gbdt_lr)
            print("------------")
            accuracy1.append(round(Accuracy0, 4))
            precision1.append(round(precision0, 4))
            recall_score1.append(round(recall_score0, 4))
            f1_score1.append(round(f1_score0, 4))

            print(n_estimator, depth, maxiter)

DictOfPvalue={'accuracy1':accuracy1,
              'precision1':precision1,
              'recall_score1':recall_score1,
              'f1_score1':f1_score1}
df = pd.DataFrame(DictOfPvalue)

df.to_csv(r"F:\lw2022\all_test.csv", index=False, encoding='utf8')
