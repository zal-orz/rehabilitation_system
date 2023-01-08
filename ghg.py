import pandas as pd
import numpy as np
from pandas import Series
from sklearn import metrics
from sklearn.multiclass import OneVsRestClassifier, OneVsOneClassifier
from sklearn.preprocessing import OneHotEncoder
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import AdaBoostClassifier
from sklearn.ensemble import ExtraTreesClassifier
from sklearn.ensemble import BaggingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.neural_network import MLPClassifier
from sklearn.ensemble import (RandomTreesEmbedding,RandomForestClassifier,GradientBoostingClassifier)
from sklearn.model_selection import train_test_split, ShuffleSplit
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt
from sklearn.model_selection import learning_curve
from sklearn.metrics import roc_auc_score
from sklearn.metrics import roc_curve
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import f1_score
import os
def feature_importances_(self):
    total_sum = np.zeros((self.n_features, ), dtype=np.float64)
    for tree in self.estimators_:
        total_sum += tree.feature_importances_
    importances = total_sum / len(self.estimators_)
    return importances
############读入数据#########

crypt = pd.read_csv(r"F:\LW\last\diffkey\data2.csv")
train = crypt.iloc[:,:-1].values
target = crypt.iloc[:, 8].values
# Splitting the dataset into the Training set and Test set 划分数据集
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(train, target, test_size = 0.2, random_state =9)

##########绘制roc图#############
def roc_plot(final_prediction,classifier,X_test,lable):
    # ROC
    logit_roc_auc = roc_auc_score(y_test, final_prediction)
    fpr, tpr, thresholds = roc_curve(y_test, classifier.predict_proba(X_test)[:, 1])
    plt.figure()
    plt.plot(fpr, tpr, label=lable+' (area = %0.2f)' % logit_roc_auc)
    plt.plot([0, 1], [0, 1], 'r--')
    plt.xlim([0.0, 1.0])
    plt.ylim([0.0, 1.05])
    plt.xlabel('False Positive Rate')
    plt.ylabel('True Positive Rate')
    plt.title('Receiver operating characteristic')
    plt.legend(loc="lower right")
    plt.show()


title_rbf = "Learning Curves (SVM, RBF kernel, $\gamma=0.001$)"
title_linear = "Learning Curves (SVM, Linear kernel, $\gamma=0.001$)"
title_poly = "Learning Curves (SVM, Poly kernel, $\gamma=0.001$)"
title_sig = "Learning Curves (SVM, Sigmoid kernel, $\gamma=0.001$)"
title_nb = "Learning Curves (Naive Bayes)"
title_rf = "Learning Curves (Random Forest)"
title_lr = "Learning Curves (Logistic Regression)"
title_dt = "Learning Curves (Decision Tree)"
title_knn = "Learning Curves (KNeighbors)"
title_nn = "Learning Curves (Deep Learning)"
title_ab = "Learning Curves (AdaBoost)"
title_bagging = "Learning Curves (Bagging)"
title_gdbt = "Learning Curves (GDBT)"
########### 建模################
cv = ShuffleSplit(n_splits=3, test_size=0.2, random_state=0)
#SVM
clf_rbf = SVC(kernel='rbf',gamma=0.001,probability=True)
clf_linear = SVC(kernel='linear',gamma=0.001,probability=True)
clf_poly = SVC(kernel='poly',gamma=0.001,probability=True)
clf_sigmoid = SVC(kernel='sigmoid',gamma=0.001,probability=True)
#贝叶斯
clf_GNB = GaussianNB()
#随机森林
clf_RF =RandomForestClassifier(n_estimators=20)
#逻辑回归
clf_LR =LogisticRegression()
#决策树
clf_DT = DecisionTreeClassifier(criterion = 'entropy', random_state = 8)#信息熵做损失函数,每次随机生成种子为8
#KNN
clf_KNN = KNeighborsClassifier(n_neighbors=3)
#deep learning
clf_DL =  MLPClassifier(hidden_layer_sizes=(8,8,8),activation='logistic',solver='adam',max_iter=500)
#AdaBoost
clf_AB=AdaBoostClassifier(learning_rate=0.1)
#ExtraTrees
clf_bagging = BaggingClassifier(n_estimators=100, max_samples=1.0, max_features=1.0, bootstrap=True, bootstrap_features=False, n_jobs=1, random_state=1)
#ExtraTrees
clf_gbdt = GradientBoostingClassifier(learning_rate=0.1, n_estimators=80, max_depth=2)


for n_estimator in [80, 100, 150, 200, 250]:
    for depth in [1, 2, 3, 5]:
        for maxiter in [300, 400, 500]:
            plt.figure(0).clf()
            #model1
            clf_gbdt.fit(X_train,y_train)
            final_prediction_gbdt = clf_gbdt.predict(X_test)
#            fpr, tpr, thresh = metrics.roc_curve(y_test,  final_prediction_gbdt)
#            auc = metrics.roc_auc_score(y_test,  final_prediction_gbdt)
            print("######model1#########")
            print("gbdtAccuracy: ", accuracy_score(y_test, final_prediction_gbdt))
            print("precision: ", precision_score(y_test,  final_prediction_gbdt, average='weighted'))#多分类加参数
            print("recall_score: ", recall_score(y_test,  final_prediction_gbdt, average='weighted'))
            print("f1_score: ", f1_score(y_test,  final_prediction_gbdt, average='micro'))
#            plt.plot(fpr,tpr,label="GBDT",linewidth=2,linestyle='--', marker=',')
            #model2
            clf_LR.fit(X_train,y_train)
            final_prediction_LR = clf_LR.predict(X_test)

            print("######model2#########")
            print("LRAccuracy: ", accuracy_score(y_test,final_prediction_LR))
            print("precision: ", precision_score(y_test, final_prediction_LR, average='weighted'))#多分类加参数
            print("recall_score: ", recall_score(y_test, final_prediction_LR, average='weighted'))
            print("f1_score: ", f1_score(y_test, final_prediction_LR, average='micro'))
            #MODEL3
            clf_DT.fit(X_train,y_train)
            final_prediction_DT = clf_DT.predict(X_test)

            print("######model3#########")
            print("DTAccuracy: ", accuracy_score(y_test,final_prediction_DT))
            print("precision: ", precision_score(y_test, final_prediction_DT, average='weighted'))#多分类加参数
            print("recall_score: ", recall_score(y_test, final_prediction_DT, average='weighted'))
            print("f1_score: ", f1_score(y_test, final_prediction_DT, average='micro'))

            #MODEL4
            clf_KNN.fit(X_train,y_train)
            final_prediction_KNN = clf_KNN.predict(X_test)

            print("######model4#########")
            print("KNNAccuracy: ", accuracy_score(y_test,final_prediction_KNN))
            print("precision: ", precision_score(y_test, final_prediction_KNN, average='weighted'))#多分类加参数
            print("recall_score: ", recall_score(y_test, final_prediction_KNN, average='weighted'))
            print("f1_score: ", f1_score(y_test, final_prediction_KNN, average='micro'))

            #MODEL5
            clf_AB.fit(X_train,y_train)
            final_prediction_Adaboost = clf_AB.predict(X_test)

            print("######model5#########")
            print("AdaboostAccuracy: ", accuracy_score(y_test,final_prediction_Adaboost))
            print("precision: ", precision_score(y_test, final_prediction_Adaboost, average='weighted'))#多分类加参数
            print("recall_score: ", recall_score(y_test, final_prediction_Adaboost, average='weighted'))
            print("f1_score: ", f1_score(y_test, final_prediction_Adaboost, average='micro'))

            #MODEL6
            clf_GNB.fit(X_train,y_train)
            final_prediction_GNB = clf_GNB.predict(X_test)

            print("######model6#########")
            print("GNBAccuracy: ", accuracy_score(y_test,final_prediction_GNB))
            print("precision: ", precision_score(y_test, final_prediction_GNB, average='weighted'))#多分类加参数
            print("recall_score: ", recall_score(y_test, final_prediction_GNB, average='weighted'))
            print("f1_score: ", f1_score(y_test, final_prediction_GNB, average='micro'))

            #MODEL7
            clf_linear.fit(X_train,y_train)
            final_prediction_SVM = clf_linear.predict(X_test)

            print("######model7#########")
            print("SVMAccuracy: ", accuracy_score(y_test,final_prediction_SVM))
            print("precision: ", precision_score(y_test, final_prediction_SVM, average='weighted'))#多分类加参数
            print("recall_score: ", recall_score(y_test, final_prediction_SVM, average='weighted'))
            print("f1_score: ", f1_score(y_test, final_prediction_SVM, average='micro'))

            #model8
            X_train_tree,X_train_lr,Y_train_tree,Y_train_lr = train_test_split(X_train,y_train,test_size=0.2)

            # model9
            GBDT = GradientBoostingClassifier(learning_rate=0.1, n_estimators=n_estimator, max_depth=depth)
            OHE = OneHotEncoder()  # 预处理
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

            print("######model9#########")
            print("HGDBTLRAccuracy: ", accuracy_score(y_test, Y_pred_gbdt_lr))
            print("precision: ", precision_score(y_test, Y_pred_gbdt_lr, average='weighted'))  # 多分类加参数
            print("recall_score: ", recall_score(y_test, Y_pred_gbdt_lr, average='weighted'))
            print("f1_score: ", f1_score(y_test, Y_pred_gbdt_lr, average='micro'))
            print(n_estimator, depth, maxiter)


