import React from 'react'
import { List } from 'antd-mobile-v5';//引入列表
import { Pagination, Icon } from 'antd-mobile';//引入分页器和符号
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import showhtml from '../../components/showhtml';//string转换html
import 'antd-mobile/dist/antd-mobile.css';
import './index.scss';
import { Radio, Space, NavBar, Button, Modal } from 'antd-mobile-v5';

const Item = List.Item;
const Brief = Item.Brief;
var score = [];//当前正确题目数组，1为正确0为错误，初始全部错误

export default class Text extends React.Component {
  state = {
    data: [],
    totle: 0,//总分
  }

  componentDidMount() {
    this.gettest();

  }

  gettest = async () => {
    const res = await axios.get('http://43.128.63.185:8000/gettest')//请求对应页数
    //console.log(res)    
    this.setState({
      data: res.data,
      totle: res.data.length,
    })
    score = new Array(res.data.length).fill(0)
  }

  //渲染试题
  renderTest() {
    return this.state.data.map((item) =>
      <List.Item key={item.id}>
        <h4>{item.question}</h4>
        <div className='ans'>
          <Radio.Group
            //value={value}
            onChange={val => {
              //console.log(val)
              if (val == item.accurate) {
                score[item.id-1] = 1;
              }
              else {
                score[item.id-1] = 0;
              }
            }}
          >
            <Space direction='vertical'>
              <Radio value='1'>{item.ans1}</Radio>
              <Radio value='2'>{item.ans2}</Radio>
              <Radio value='3'>{item.ans3}</Radio>
            </Space>
          </Radio.Group>
        </div>
      </List.Item>
    )
  }

  showScore() {
    let str='出错题目为';
    let nowScore=0;
    console.log(score)
    score.forEach((item,index) => {
       if(item=='0'){
        str=str+(index+1)+','
       }else{
         nowScore=nowScore+1;
       }
    });
    str=str.slice(0,str.length-1)
    if(nowScore==this.state.totle){
      str='全部正确'
    }
    Modal.alert({
      content: '得分为：'+nowScore+'，'+str,
      closeOnAction: true,
      actions: [
        {
          key: '确定',
          text: '确定',
          primary: true,
        },
      ],
    })
  }


  render() {
    return (
      <div>
        <div className='nav'>
          <NavBar onBack={() => { this.props.router.navigate('/home') }}>小测验</NavBar>
        </div>
        <List>
          {this.renderTest()}
        </List>
        <div className='submit_box'>
          <Button block color='primary' size='large' className='submit' onClick={() => this.showScore()}>
            提交
          </Button>
        </div>

      </div>
    )
  }
}