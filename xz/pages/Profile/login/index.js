import React from 'react'
import axios from 'axios'
import { Consumer } from "../../../App.js"
import back from '../../../assets/images/back.jpg'
import { Form, Input, Button, } from 'antd-mobile-v5'

import './index.scss'

const IP='167.99.66.97'

export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    //渲染标题栏
    rendertitle() {
        return (
            <h3>
                <img src={back} alt='' onClick={() => { this.props.router.navigate('/home') }} />
                登录
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
                        <Input placeholder='请输入密码' onChange={value => { this.setState({ password: value }) }} clearable type='password' />
                    </Form.Item>
                </Form>
                <div className='button_box'>
                    <Button block color='primary' size='large' onClick={() => this.login(updata)}>
                        登录
                    </Button>
                </div>
                <div className='register'>
                    <span onClick={() => { this.props.router.navigate('/home/register') }}>新用户注册</span>
                </div>
            </div>
        )
    }

    //处理登录请求
    async login(updata) {
        const res = await axios.post('http://'+IP+':8000/login', {
            'name': this.state.username,
            'password': this.state.password,
        })
        //console.log(res)
        if (res.data.length === 0) {
            alert('账号或密码错误')
        } else {
            console.log('登录成功')
            updata(res.data[0])
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