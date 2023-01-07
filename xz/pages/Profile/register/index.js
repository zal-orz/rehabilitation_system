import React from 'react'
import axios from 'axios'
import { Consumer } from "../../../App.js"
import back from '../../../assets/images/back.jpg'
import { Form, Input, Button, } from 'antd-mobile-v5'

import './index.scss'

const IP='167.99.66.97'

export default class Register extends React.Component {
    state = {
        username: '',
        password: '',
    }

    //渲染标题栏
    rendertitle() {
        return (
            <h3>
                <img src={back} alt='' onClick={() => { this.props.router.navigate('/home') }} />
                用户注册
            </h3>
        )
    }

    //渲染用户名密码输入框
    renderinput(data, updata) {
        return (
            <div>
                <Form layout='horizontal'>
                    <Form.Item label='用户名' name='username'>
                        <Input placeholder='请输入用户名' onChange={value => { this.setState({ username: value }) }} clearable />
                    </Form.Item>
                    <Form.Item label='密码' name='password'>
                        <Input placeholder='请输入密码' onChange={value => { this.setState({ password: value }) }} clearable />
                    </Form.Item>
                </Form>
                <div className='button_box'>
                    <Button block color='primary' size='large' onClick={() => this.login(updata)}>
                        注册
                    </Button>
                </div>
            </div>
        )
    }

    //处理注册请求
    async login(updata) {
        if (this.state.username !== '' && this.state.password !== '') {
            const res = await axios.post('http://'+IP+':8000/register_name', {
                'name': this.state.username,
            })
            if (res.data.length === 0) {
                const res1 = await axios.post('http://'+IP+':8000/register_getid')
                const id = res1.data.id + 1;
                //console.log(id)
                const res2 = await axios.post('http://'+IP+':8000/register', {
                    'id': id,
                    'name': this.state.username,
                    'password': this.state.password,
                })
                if (res2.status === 200) {
                    console.log('注册成功')
                    //更新context状态
                    updata({
                        'id': id,
                        'name': this.state.username,
                        'password': this.state.password,
                    })
                    //跳转到个人界面
                    this.props.router.navigate('/home/profile')
                } else {
                    console.log('注册失败')
                    alert('服务器维护中，注册失败')
                }
            } else {
                alert('用户名称已被注册')
                updata(res.data[0])
            }
        }
    }

    render() {
        return (
            <div>
                {this.rendertitle()}
                <Consumer>
                    {({ data, updata }) =>
                        <div>
                            {this.renderinput(data, updata)}
                        </div>
                    }
                </Consumer>
            </div>
        )
    }
}