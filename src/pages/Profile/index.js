import React from 'react'
import axios from 'axios'
import { Consumer } from "../../App.js"
import Login from './login/index.js'
import withRouter from '../../components/withRouter.js'
import { Avatar, NavBar, List, Modal, Form, Input, Button } from 'antd-mobile-v5'
import './index.scss'
import transformArrayBufferToBase64 from '../../components/transfromBuffer'
import { clear } from 'antd-mobile-v5/es/components/dialog/clear'


const LoginRouter = withRouter(Login)
const IP='167.99.66.97'

export default class Profile extends React.Component {

  state = {
    id: '',
    username: '',
    password: '',
  }

  avatarInputRef = React.createRef();

  //判断是否已经登录
  isLogin(data, updata) {
    if (data == null) {
      return <LoginRouter />
    } else {
      return <div>
        {this.renderProfile(data, updata)}
      </div>
    }
  }

  //已经登录
  renderProfile(data, updata) {
    return <div>
      <div className='nav'>
        <NavBar onBack={() => { this.props.router.navigate('/home') }}>个人详情</NavBar>
      </div>
      <Avatar className='avatar' src={this.getAvatar(data)} style={{ '--size': '8rem' }} />
      <div>
        <div>
          <h2 className='name'>{data.name}</h2>
        </div>
        {/*卡片列表*/}
        <div className='cardList'>
          <List mode='card'>
            <List.Item extra={<input ref={this.avatarInputRef} type="file" accept='image/*' id="images" onInput={(e) => {
              this.changeAvatar(data, updata)
            }} style={{ width: '5rem' }} />}>
              上传头像</List.Item>
            <List.Item onClick={() => this.changeName(data, updata)}> 修改用户名 </List.Item>
            <List.Item onClick={() => this.changePassword(data, updata)}> 修改密码 </List.Item>
            <List.Item onClick={() => this.introduce()}> 微平台介绍 </List.Item>
            <List.Item onClick={() => this.connectUs()}> 联系我们 </List.Item>
            <List.Item onClick={() => { updata(null) }}> 注销 </List.Item>
          </List>
        </div>
      </div>
    </div>
  }

  //获取头像src
  getAvatar(data) {
    //console.log(data)
    const dataStr = transformArrayBufferToBase64(data.avatar.data)
    //console.log(data.avatar.data)
    return "data:image/png;base64," + dataStr
  }

  //修改用户名
  changeName(data, updata) {
    Modal.show({
      title: '修改用户名',
      content: (
        <>
          <Form layout='horizontal'>
            <Form.Item label='用户名' name='username'>
              <Input placeholder='请输入用户名' onChange={value => { this.setState({ username: value }) }} clearable />
            </Form.Item>
          </Form>
          <div className='button_box'>
            <Button block color='primary' size='large' onClick={
              async () => {
                if (this.state.username !== '') {
                  const res = await axios.post('http://'+IP+':8000/change_name', {
                    'name': this.state.username,
                    'id': data.id,
                  })
                  if (res.data.code && res.data.code === '500') { alert('用户名已被使用') }
                  else {
                    updata({ ...data, 'name': this.state.username })
                  }
                  Modal.clear();
                }
              }}>
              确定
            </Button>
          </div>
        </>
      ),
      closeOnAction: true,
      actions: [
        {
          key: 'online',
          text: '取消',
          primary: true,
        },],
      closeOnMaskClick: true,
    })
  }

  //修改密码
  changePassword(data, updata) {
    Modal.show({
      title: '修改密码',
      content: (
        <>
          <Form layout='horizontal'>
            <Form.Item label='密码' name='password'>
              <Input placeholder='请输入密码' onChange={value => { this.setState({ password: value }) }} clearable />
            </Form.Item>
          </Form>
          <div className='button_box'>
            <Button block color='primary' size='large' onClick={
              async () => {
                if (this.state.password !== '') {
                  const res = await axios.post('http://'+IP+':8000/change_password', {
                    'password': this.state.password,
                    'id': data.id,
                  })
                  if (res.data.code && res.data.code === '500') { alert('修改密码失败') }
                  else {
                    updata({ ...data, 'password': this.state.password })
                  }
                  Modal.clear();
                }
              }}>
              确定
            </Button>
          </div>
        </>
      ),
      closeOnAction: true,
      actions: [
        {
          key: 'online',
          text: '取消',
          primary: true,
        },],
      closeOnMaskClick: true,
    })
  }

  //介绍
  introduce() {
    Modal.show({
      title: '微平台介绍',
      content: (
        <>
          <div>
            《密码应用》微平台旨在开发一个开放便捷的网络平台，方便学生在课余时间学习《密码应用》相关知识，主要内容为密码学各模块中涉及到的一些核心算法是如何应用于具体的应用场景，从多个方面巩固学生《密码应用》课程所学。
            这是一个面向手机端的网页，通过域名可以随时随地的访问网站，实现浏览资讯、观看视频、下载资料、师生讨论等功能，为学生提供资料辅助学习《密码应用》课程。
          </div>
        </>
      ),
      closeOnAction: true,
      actions: [
        {
          key: 'online',
          text: '确定',
          primary: true,
        },],
      closeOnMaskClick: true,
    })
  }

  //联系我们
  connectUs() {
    Modal.show({
      title: '联系我们',
      content: (
        <>
          <div>
            如果需要帮助，请发送邮件到1659027329@qq.com
          </div>
        </>
      ),
      closeOnAction: true,
      actions: [
        {
          key: 'online',
          text: '确定',
          primary: true,
        },],
      closeOnMaskClick: true,
    })
  }

  //修改头像
  async changeAvatar(data, updata) {
    const body = new FormData();
    body.append('file', this.avatarInputRef.current.files[0])
    body.append('id', data.id)
    //console.log('files', this.avatarInputRef.current.files[0])
    const res = await axios.post('http://'+IP+':8000/change_avatar', body, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
    const res1 = await axios.post('http://'+IP+':8000/login', {
      'name': data.name,
      'password': data.password,
    })
    //* 需要优化！！！！！ */
    updata(res1.data[0]);
    //updata({ ...data, 'avatar': })
  }

  render() {
    return (
      <div>
        <Consumer>
          {({ data, updata }) => this.isLogin(data, updata)}
        </Consumer>
      </div>
    )
  }
}
