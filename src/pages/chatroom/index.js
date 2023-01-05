import React from 'react'
import axios from 'axios'
import './index.scss'
import { NavBar, TextArea, Toast } from 'antd-mobile-v5'
import { Consumer } from "../../App.js"
import transformArrayBufferToBase64 from '../../components/transfromBuffer'

import textimg from '../../assets/images/head.jpg'

const IP='167.99.66.97'

export default class Chatroom extends React.Component {

    constructor({ data, updata }) {
        super();
        if (!data) { return }
        //websocket建立连接
        //用于发送消息到服务端以及接收自己的消息
        this.ws = new WebSocket("ws:"+IP+":8000/ws");
        this.ws.onopen = () => {
            /*得到连接状态：
                CONNECTING：值为0，表示正在连接。
                OPEN：值为1，表示连接成功，可以通信了。
                CLOSING：值为2，表示连接正在关闭。
                CLOSED：值为3，表示连接已经关闭，或者打开连接失败。*/
            console.log("ws连接状态：", this.ws.readyState);
        }
        this.ws.onclose = () => {
            console.log("连接已断开")
        }
        this.ws.onmessage = (e) => {
            var data = JSON.parse(e.data)
            //console.log(this.state)
            const src = this.getAvatar(data)
            src.then((value) => {
                this.setState({ value: '', data: [...this.state.data, { name: data.name, avatar: value, content: data.content }] })

                //dom操作，msg滚动到底部
                const msgbox = document.getElementById('msgbox');
                msgbox.scrollTo({
                    top: msgbox.scrollHeight,
                    behavior: "smooth",

                })
            })
        }

        this.state = {
            value: '',//新输入进去的文本
            data: [],//当前显示的文本
        }

    }

    componentDidMount() {
        if (this.props.data) {
            this.getMessage();
        }
    }

    getMessage = async () => {
        const res = await axios.get('http://'+IP+':8000/chatroom_msg');
        const msg = res.data.reverse().map(item => ({ ...item, avatar: '' }));
        Promise.all(msg.map(async (item, index) => {
            return this.getAvatar(item).then((value) => {
                item.avatar = value;
            })
        })).then(() => {
            //console.log(this)
            msg.forEach(item => {
                if (!this.state.data) {
                    this.setState({ data: [{ name: item.name, avatar: item.avatar, content: item.content }] })
                } else {
                    this.setState({ data: [...this.state.data, { name: item.name, avatar: item.avatar, content: item.content }] })
                }

                //console.log(item)
                //dom操作，msg滚动到底部
                const msgbox = document.getElementById('msgbox');
                msgbox.scrollTo({
                    top: msgbox.scrollHeight,
                    behavior: "smooth",

                })
            })
        })
    }

    //获取头像src
    async getAvatar(data) {
        let dataStr = '';
        //console.log('头像：', data.name)
        if (data.name) {
            const res = await axios.post('http://'+IP+':8000/get_avatar_byname', {
                'name': data.name,
            })

            const avatar = res.data[0].avatar.data;
            dataStr = transformArrayBufferToBase64(avatar)
        }
        return "data:image/png;base64," + dataStr
    }

    //渲染整体盒子
    renderBox(data) {
        return (
            <div className='box'>
                <main>
                    {/*消息显示*/}
                    <div className='msgbox' id='msgbox'>
                        {this.renderMsg(data)}
                    </div>
                    {/*输入框*/}
                    <div className='textarea'>
                        <TextArea
                            placeholder='请输入内容'
                            rows={5}
                            value={this.state.value}
                            onChange={(val) => this.textChange(val, data)}
                            id='txt'
                        />
                    </div>
                </main>
            </div>
        )
    }

    //渲染消息窗口
    renderMsg(data) {
        return this.state.data.map((item, index) => {
            if (item.name !== data.name) {
                return (
                    <div className='msg left' key={index}>
                        <img src={item.avatar} width="40" height="40" alt='' onClick={() =>
                            Toast.show({
                                content: item.name,
                                duration: 1000,
                                afterClose: () => {
                                    console.log('name')
                                },
                            })
                        }></img>
                        <section>{item.content}</section>
                    </div>
                )
            } else {
                return (
                    <div className='msg right' key={index}>
                        <section>{item.content}</section>
                        <img src={item.avatar} width="40" height="40" alt='' onClick={() =>
                            Toast.show({
                                content: item.name,
                                duration: 1000,
                                afterClose: () => {
                                    console.log('name')
                                },
                            })
                        }></img>
                    </div>
                )
            }
        })
    }


    //文本输入
    textChange(val, data) {

        //空输入
        if (val[val.length - 1] === '\n' && val.length === 1) {
            //console.log(data)
            this.setState({ value: '', })
        }
        //非空输入后空格(在这里发送数据)
        else if (val[val.length - 1] === '\n') {
            let content = val.substring(0, val.length - 1)
            //websocket只传递字符串数据，需要通过JSON.stringify()进行编码，通过JSON.parse()进行解码
            const str = JSON.stringify({ name: data.name, content: content })
            //使用websocket发送消息
            this.ws.send(str)
            //清空输入框
            this.setState({ value: '' });

        }
        //非空格输入
        else { this.setState({ value: val, }) }
    }


    render() {
        return (
            <div>
                <div className='nav'>
                    <NavBar onBack={() => { this.props.router.navigate('/home') }}>讨论室</NavBar>
                </div>
                {this.props.data ? this.renderBox(this.props.data) : this.props.router.navigate('/home/profile')}
            </div>
        )
    }
}