#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
screensize(800, 600, 'white')
    pensize(3)
    title('海绵宝宝')
    speed(19)
（2）首先咱们调整画笔位置，找到对应原点位置。

def go_to(x, y):
    penup()
    goto(x, y)
    pendown()
​
go_to(0, 0)


def head():
    go_to(-200, 180)
    fillcolor('yellow')
    begin_fill()
    seth(-30)
    for _ in range(6):
        circle(36, 60)
        circle(-36, 60)
    seth(-125)
    for _ in range(5):
        circle(40,60)
        circle(-40,60)
    seth(-210)
    for _ in range(4):
        circle(45,60)
        circle(-45,60)
    seth(65)
    for _ in range(5):
        circle(40,60)
        circle(-40,60)
    end_fill()
import re,os,sys
 
def compute_exponent(arg):
    """ 操作指数
    :param expression:表达式
    :return:计算结果
    """
 
    val = arg[0]
    pattern = re.compile(r'\d+\.?\d*[\*]{2}[\+\-]?\d+\.?\d*')
    mch = pattern.search(val)
    if not mch:
        return
    content = pattern.search(val).group()
 
    if len(content.split('**'))>1:
        n1, n2 = content.split('**')
        value = float(n1) ** float(n2)
    else:
        pass
 
    before, after = pattern.split(val, 1)
    new_str = "%s%s%s" % (before,value,after)
    arg[0] = new_str
    compute_exponent(arg)
 
def compute_mul_div(arg):
    """ 操作乘除
    :param expression:表达式
    :return:计算结果
    """
 
    val = arg[0]
    pattern = re.compile(r'\d+\.?\d*[\*\/\%\/\/]+[\+\-]?\d+\.*\d*')
    mch = pattern.search(val)
    if not mch:
        return
    content = pattern.search(val).group()
 
    if len(content.split('*'))>1:
        n1, n2 = content.split('*')
        value = float(n1) * float(n2)
    elif len(content.split('//'))>1:
        n1, n2 = content.split('//')
        value = float(n1) // float(n2)
    elif len(content.split('%'))>1:
        n1, n2 = content.split('%')
        value = float(n1) % float(n2)
    elif len(content.split('/'))>1:
        n1, n2 = content.split('/')
        value = float(n1) / float(n2)
    else:
        pass
 
    before, after = pattern.split(val, 1)
    new_str = "%s%s%s" % (before,value,after)
    arg[0] = new_str
    compute_mul_div(arg)
 
 
def compute_add_sub(arg):
    """ 操作加减
    :param expression:表达式
    :return:计算结果
    """
    while True:
        if arg[0].__contains__('+-') or arg[0].__contains__("++") or arg[0].__contains__('-+') or arg[0].__contains__("--"):
            arg[0] = arg[0].replace('+-','-')
            arg[0] = arg[0].replace('++','+')
            arg[0] = arg[0].replace('-+','-')
            arg[0] = arg[0].replace('--','+')
        else:
            break
 
 
    if arg[0].startswith('-'):
 
        arg[1] += 1
        arg[0] = arg[0].replace('-','&')
        arg[0] = arg[0].replace('+','-')
        arg[0] = arg[0].replace('&','+')
        arg[0] = arg[0][1:]
    val = arg[0]
 
    pattern = re.compile(r'\d+\.?\d*[\+\-]{1}\d+\.?\d*')
    mch = pattern.search(val)
    if not mch:
        return
    content = pattern.search(val).group()
    if len(content.split('+'))>1:
        n1, n2 = content.split('+')
        value = float(n1) + float(n2)
    else:
        n1, n2 = content.split('-')
        value = float(n1) - float(n2)
 
    before, after = pattern.split(val, 1)
    new_str = "%s%s%s" % (before,value,after)
    arg[0] = new_str
    compute_add_sub(arg)
 
 
def compute(expression):
    """ 操作加减乘除
    :param expression:表达式
    :return:计算结果
    """
    inp = [expression,0]
 
    # 处理表达式中的指数
    compute_exponent(inp)
 
    # 处理表达式中的乘除求余等
    compute_mul_div(inp)
 
    # 处理表达式的加减
    compute_add_sub(inp)
    if divmod(inp[1],2)[1] == 1:
        result = float(inp[0])
        result = result * -1
    else:
        result = float(inp[0])
    return result
 
 
def exec_bracket(expression):
    """ 递归处理括号，并计算
    :param expression: 表达式
    :return:最终计算结果
    """
    pattern = re.compile(r'\(([\+\-\*\/\%\/\/\*\*]*\d+\.*\d*){2,}\)')
    # 如果表达式中已经没有括号，则直接调用负责计算的函数，将表达式结果返回，如：2*1-82+444
    #if not re.search('\(([\+\-\*\/]*\d+\.*\d*){2,}\)', expression):
    if not pattern.search(expression):
        final = compute(expression)
        return final
    # 获取 第一个 只含有 数字/小数 和 操作符 的括号
    # 如：
    #    ['1-2*((60-30+(-40.0/5)*(9-2*5/3+7/3*99/4*2998+10*568/14))-(-4*3)/(16-3*2))']
    #    找出：(-40.0/5)
    content = pattern.search(expression).group()
 
 
    # 分割表达式，即：
    # 将['1-2*((60-30+(-40.0/5)*(9-2*5/3+7/3*99/4*2998+10*568/14))-(-4*3)/(16-3*2))']
    # 分割更三部分：['1-2*((60-30+(    (-40.0/5)      *(9-2*5/3+7/3*99/4*2998+10*568/14))-(-4*3)/(16-3*2))']
    before, nothing, after = pattern.split(expression, 1)
 
    print('before:',expression)
    content = content[1:len(content)-1]
 
    # 计算，提取的表示 (-40.0/5)，并活的结果，即：-40.0/5=-8.0
    ret = compute(content)
 
    print('%s=%s' %( content, ret))
 
    # 将执行结果拼接，['1-2*((60-30+(      -8.0     *(9-2*5/3+7/3*99/4*2998+10*568/14))-(-4*3)/(16-3*2))']
    expression = "%s%s%s" %(before, ret, after)
    print('after:',expression)
    print("="*10,'previous result is',"="*10)
 
    # 循环继续下次括号处理操作，本次携带者的是已被处理后的表达式，即：
    # ['1-2*((60-30+   -8.0  *(9-2*5/3+7/3*99/4*2998+10*568/14))-(-4*3)/(16-3*2))']
 
    # 如此周而复始的操作，直到表达式中不再含有括号
    return exec_bracket(expression)
 
 
 
# 使用 __name__ 的目的：
#   只有执行 python index.py 时，以下代码才执行
#   如果其他人导入该模块，以下代码不执行
if __name__ == "__main__":
    flag = True
 
    os.system('clear')                                                     ###清屏###
 
    print('\n================================================================')
    print('\033[33m 欢迎使用计算器 ：\033[0m')
    print('\n================================================================')
 
 
 
    while flag:
        calculate_input = raw_input('\033[32m请输入计算的表达式 | (退出:q)\033[0m')
        calculate_input = re.sub('\s*','',calculate_input)
        if len(calculate_input) == 0:
            continue
        elif calculate_input == 'q':
            sys.exit('退出程序')
        elif re.search('[^0-9\.\-\+\*\/\%\/\/\*\*\(\)]',calculate_input):
            print('\033[31m 输入错误，请重新输入!!!\033[0m')
        else:
            result = exec_bracket(calculate_input)
            print('the expression result is %s' % result)
def eye():
    # 眼白
    go_to(14, -5)
    fillcolor('#f0f0f0')
    begin_fill()
    circle(65, 360)
    end_fill()
    begin_fill()
    go_to(13,12)
    seth(98)
    circle(-65,360)
    end_fill()
​
    #眼球
    go_to(-10,20)
    fillcolor('blue')
    begin_fill()
    circle(20,360)
    end_fill()
    go_to(-22,20)
    fillcolor('black')
    begin_fill()
    circle(7,360)
    end_fill()
    go_to(40,15)
    fillcolor('blue')
    begin_fill()
    circle(-20, 360)
    end_fill()
    go_to(53,15)
    fillcolor('black')
    begin_fill()
    circle(-7,360)
    end_fill()
​
    #睫毛
    go_to(-95,65)
    left(20)
    forward(40)
    go_to(-50,87)
    right(25)
    forward(32)
    go_to(0,70)
    right(25)
    forward(40)
​
    go_to(40, 75)
    left(35)
    forward(40)
    go_to(90, 87)
    right(18)
    forward(30)
    go_to(120, 70)
    right(25)
    forward(40)
​
def nose():
    fillcolor('yellow')
    go_to(0, -7)
    begin_fill()
    right(50)
    circle(-60, 30)
    color('yellow')
    goto(15,-40)
    end_fill()
    color('black')
    go_to(0, -7)
    seth(-75)
    forward(30)
    go_to(30,-7)
    seth(-105)
    forward(30)
def mouth():
    go_to(-120, - 60)
    seth(-45)
    circle(200, 30)
    seth(0)
    forward(100)
    seth(15)
    circle(200, 30)
​
def tooth():
    go_to(-30,-114)
    seth(-95)
    fillcolor('white')
    begin_fill()
    forward(30)
    seth(0)
    forward(40)
    seth(95)
    forward(30)
    go_to(-30,-114)
    end_fill()
​
    go_to(30, -114)
    seth(-95)
    fillcolor('white')
    begin_fill()
    forward(30)
    seth(0)
    forward(40)
    seth(95)
    forward(30)
    go_to(60, -114)
    end_fill()def body():
    go_to(-170,-180)
    seth(-120)
    circle(150, 30)
    seth(0)
    forward(40)
    seth(100)
    forward(35)
    seth(-80)
    forward(100)
    fillcolor('brown')
    begin_fill()
    seth(0)
    forward(300)
    seth(80)
    forward(110)
    seth(-100)
    forward(65)
    seth(180)
    forward(315)
    go_to(-118,-400)
    end_fill()
    go_to(-170,-255)
    fillcolor('yellow')
    begin_fill()
    seth(-75)
    forward(80)
    seth(0)
    forward(17)
    seth(105)
    forward(85)
    end_fill()
​
    go_to(200, -170)
    seth(-60)
    circle(-150,30)
    seth(-180)
    forward(45)
    begin_fill()
    seth(0)
    forward(20)
    seth(-100)
    forward(85)
    seth(180)
    forward(20)
    end_fill()def tie():
    go_to(-50,-225)
    seth(-40)
    forward(40)
    seth(30)
    forward(52)
    go_to(30,-225)
    seth(-30)
    forward(40)
    seth(40)
    forward(45)
    fillcolor('red')
    go_to(0, -240)
    begin_fill()
    seth(-60)
    forward(10)
    seth(0)
    forward(30)
    seth(60)
    forward(15)
    go_to(30,-225)
    end_fill()
    go_to(4,-250)
    begin_fill()
    seth(-100)
    forward(80)
    seth(0)
    forward(55)
    seth(100)
    forward(80)
    end_fill()
import re,os,sys
 
def compute_exponent(arg):
    """ 操作指数
    :param expression:表达式
    :return:计算结果
    """
 
    val = arg[0]
    pattern = re.compile(r'\d+\.?\d*[\*]{2}[\+\-]?\d+\.?\d*')
    mch = pattern.search(val)
    if not mch:
        return
    content = pattern.search(val).group()
 
    if len(content.split('**'))>1:
        n1, n2 = content.split('**')
        value = float(n1) ** float(n2)
    else:
        pass
 
    before, after = pattern.split(val, 1)
    new_str = "%s%s%s" % (before,value,after)
    arg[0] = new_str
    compute_exponent(arg)
 
def compute_mul_div(arg):
    """ 操作乘除
    :param expression:表达式
    :return:计算结果
    """
 
    val = arg[0]
    pattern = re.compile(r'\d+\.?\d*[\*\/\%\/\/]+[\+\-]?\d+\.*\d*')
    mch = pattern.search(val)
    if not mch:
        return
    content = pattern.search(val).group()
 
    if len(content.split('*'))>1:
        n1, n2 = content.split('*')
        value = float(n1) * float(n2)
    elif len(content.split('//'))>1:
        n1, n2 = content.split('//')
        value = float(n1) // float(n2)
    elif len(content.split('%'))>1:
        n1, n2 = content.split('%')
        value = float(n1) % float(n2)
    elif len(content.split('/'))>1:
        n1, n2 = content.split('/')
        value = float(n1) / float(n2)
    else:
        pass
 
    before, after = pattern.split(val, 1)
    new_str = "%s%s%s" % (before,value,after)
    arg[0] = new_str
    compute_mul_div(arg)
 
 
def compute_add_sub(arg):
    """ 操作加减
    :param expression:表达式
    :return:计算结果
    """
    while True:
        if arg[0].__contains__('+-') or arg[0].__contains__("++") or arg[0].__contains__('-+') or arg[0].__contains__("--"):
            arg[0] = arg[0].replace('+-','-')
            arg[0] = arg[0].replace('++','+')
            arg[0] = arg[0].replace('-+','-')
            arg[0] = arg[0].replace('--','+')
        else:
            break
 
 
    if arg[0].startswith('-'):
 
        arg[1] += 1
        arg[0] = arg[0].replace('-','&')
        arg[0] = arg[0].replace('+','-')
        arg[0] = arg[0].replace('&','+')
        arg[0] = arg[0][1:]
    val = arg[0]
 
    pattern = re.compile(r'\d+\.?\d*[\+\-]{1}\d+\.?\d*')
    mch = pattern.search(val)
    if not mch:
        return
    content = pattern.search(val).group()
    if len(content.split('+'))>1:
        n1, n2 = content.split('+')
        value = float(n1) + float(n2)
    else:
        n1, n2 = content.split('-')
        value = float(n1) - float(n2)
 
    before, after = pattern.split(val, 1)
    new_str = "%s%s%s" % (before,value,after)
    arg[0] = new_str
    compute_add_sub(arg)
 
 
def compute(expression):
    """ 操作加减乘除
    :param expression:表达式
    :return:计算结果
    """
    inp = [expression,0]
 
    # 处理表达式中的指数
    compute_exponent(inp)
 
    # 处理表达式中的乘除求余等
    compute_mul_div(inp)
 
    # 处理表达式的加减
    compute_add_sub(inp)
    if divmod(inp[1],2)[1] == 1:
        result = float(inp[0])
        result = result * -1
    else:
        result = float(inp[0])
    return result
 
 
def exec_bracket(expression):
    """ 递归处理括号，并计算
    :param expression: 表达式
    :return:最终计算结果
    """
    pattern = re.compile(r'\(([\+\-\*\/\%\/\/\*\*]*\d+\.*\d*){2,}\)')
    # 如果表达式中已经没有括号，则直接调用负责计算的函数，将表达式结果返回，如：2*1-82+444
    #if not re.search('\(([\+\-\*\/]*\d+\.*\d*){2,}\)', expression):
    if not pattern.search(expression):
        final = compute(expression)
        return final
    # 获取 第一个 只含有 数字/小数 和 操作符 的括号
    # 如：
    #    ['1-2*((60-30+(-40.0/5)*(9-2*5/3+7/3*99/4*2998+10*568/14))-(-4*3)/(16-3*2))']
    #    找出：(-40.0/5)
    content = pattern.search(expression).group()
 
 
    # 分割表达式，即：
    # 将['1-2*((60-30+(-40.0/5)*(9-2*5/3+7/3*99/4*2998+10*568/14))-(-4*3)/(16-3*2))']
    # 分割更三部分：['1-2*((60-30+(    (-40.0/5)      *(9-2*5/3+7/3*99/4*2998+10*568/14))-(-4*3)/(16-3*2))']
    before, nothing, after = pattern.split(expression, 1)
 
    print('before:',expression)
    content = content[1:len(content)-1]
 
    # 计算，提取的表示 (-40.0/5)，并活的结果，即：-40.0/5=-8.0
    ret = compute(content)
 
    print('%s=%s' %( content, ret))
 
    # 将执行结果拼接，['1-2*((60-30+(      -8.0     *(9-2*5/3+7/3*99/4*2998+10*568/14))-(-4*3)/(16-3*2))']
    expression = "%s%s%s" %(before, ret, after)
    print('after:',expression)
    print("="*10,'previous result is',"="*10)
 
    # 循环继续下次括号处理操作，本次携带者的是已被处理后的表达式，即：
    # ['1-2*((60-30+   -8.0  *(9-2*5/3+7/3*99/4*2998+10*568/14))-(-4*3)/(16-3*2))']
 
    # 如此周而复始的操作，直到表达式中不再含有括号
    return exec_bracket(expression)
 
 
 
# 使用 __name__ 的目的：
#   只有执行 python index.py 时，以下代码才执行
#   如果其他人导入该模块，以下代码不执行
if __name__ == "__main__":
    flag = True
 
    os.system('clear')                                                     ###清屏###
 
    print('\n================================================================')
    print('\033[33m 欢迎使用计算器 ：\033[0m')
    print('\n================================================================')
 
 
 
    while flag:
        calculate_input = raw_input('\033[32m请输入计算的表达式 | (退出:q)\033[0m')
        calculate_input = re.sub('\s*','',calculate_input)
        if len(calculate_input) == 0:
            continue
        elif calculate_input == 'q':
            sys.exit('退出程序')
        elif re.search('[^0-9\.\-\+\*\/\%\/\/\*\*\(\)]',calculate_input):
            print('\033[31m 输入错误，请重新输入!!!\033[0m')
        else:
            result = exec_bracket(calculate_input)
            print('the expression result is %s' % result)
import re,os,sys
 
def compute_exponent(arg):
    """ 操作指数
    :param expression:表达式
    :return:计算结果
    """
 
    val = arg[0]
    pattern = re.compile(r'\d+\.?\d*[\*]{2}[\+\-]?\d+\.?\d*')
    mch = pattern.search(val)
    if not mch:
        return
    content = pattern.search(val).group()
 
    if len(content.split('**'))>1:
        n1, n2 = content.split('**')
        value = float(n1) ** float(n2)
    else:
        pass
 
    before, after = pattern.split(val, 1)
    new_str = "%s%s%s" % (before,value,after)
    arg[0] = new_str
    compute_exponent(arg)
 
def compute_mul_div(arg):
    """ 操作乘除
    :param expression:表达式
    :return:计算结果
    """
 
    val = arg[0]
    pattern = re.compile(r'\d+\.?\d*[\*\/\%\/\/]+[\+\-]?\d+\.*\d*')
    mch = pattern.search(val)
    if not mch:
        return
    content = pattern.search(val).group()
 
    if len(content.split('*'))>1:
        n1, n2 = content.split('*')
        value = float(n1) * float(n2)
    elif len(content.split('//'))>1:
        n1, n2 = content.split('//')
        value = float(n1) // float(n2)
    elif len(content.split('%'))>1:
        n1, n2 = content.split('%')
        value = float(n1) % float(n2)
    elif len(content.split('/'))>1:
        n1, n2 = content.split('/')
        value = float(n1) / float(n2)
    else:
        pass
 
    before, after = pattern.split(val, 1)
    new_str = "%s%s%s" % (before,value,after)
    arg[0] = new_str
    compute_mul_div(arg)
 
 
def compute_add_sub(arg):
    """ 操作加减
    :param expression:表达式
    :return:计算结果
    """
    while True:
        if arg[0].__contains__('+-') or arg[0].__contains__("++") or arg[0].__contains__('-+') or arg[0].__contains__("--"):
            arg[0] = arg[0].replace('+-','-')
            arg[0] = arg[0].replace('++','+')
            arg[0] = arg[0].replace('-+','-')
            arg[0] = arg[0].replace('--','+')
        else:
            break
 
 
    if arg[0].startswith('-'):
 
        arg[1] += 1
        arg[0] = arg[0].replace('-','&')
        arg[0] = arg[0].replace('+','-')
        arg[0] = arg[0].replace('&','+')
        arg[0] = arg[0][1:]
    val = arg[0]
 
    pattern = re.compile(r'\d+\.?\d*[\+\-]{1}\d+\.?\d*')
    mch = pattern.search(val)
    if not mch:
        return
    content = pattern.search(val).group()
    if len(content.split('+'))>1:
        n1, n2 = content.split('+')
        value = float(n1) + float(n2)
    else:
        n1, n2 = content.split('-')
        value = float(n1) - float(n2)
 
    before, after = pattern.split(val, 1)
    new_str = "%s%s%s" % (before,value,after)
    arg[0] = new_str
    compute_add_sub(arg)
 
 
def compute(expression):
    """ 操作加减乘除
    :param expression:表达式
    :return:计算结果
    """
    inp = [expression,0]
 
    # 处理表达式中的指数
    compute_exponent(inp)
 
   
   
 



