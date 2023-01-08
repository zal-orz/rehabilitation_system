ming={"语文":85,"数学":96,"英语":88}
hong={"语文":72,"数学":80,"英语":91}
liang={"语文":83,"数学":69,"英语":75}
sum_ming_score=0
sum_hong_score=0
sum_liang_score=0
for i in ming:
    sum_ming_score+=ming[i]
for j in hong:
    sum_hong_score+=hong[j]
for k in liang:
    sum_liang_score+=liang[k]
print("小明的总成绩为：%d"%(sum_ming_score))
print("小红的总成绩为：%d"%(sum_hong_score))
print("小亮的总成绩为：%d"%(sum_liang_score))
a=0
b=0
if sum_ming_score>sum_hong_score:
    if sum_ming_score>sum_liang_score:
        a="小明"
    else:
        a="小亮"
else:
    if sum_hong_score>sum_liang_score:
        a="小红"
    else:
        a="小亮"
print("总分最高的是%s"%(a))
