import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'
import {
    Player,
    ControlBar,
    PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
    ReplayControl, // 后退按钮
    ForwardControl,  // 前进按钮
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,  // 倍速播放选项
    VolumeMenuButton
} from 'video-react';
import "video-react/dist/video-react.css"; // import css
import axios from 'axios'
import houseicon from '../../assets/images/home.png'
import './index.scss';

export default class videoDetails extends React.Component {
    state = {
        url: '',
        id: '',
        title: '',//视频标题
        subtitle: '',//副标题
        poster: '',//视频预览图
        content: '',//视频
        abstract: '',//摘要
    }
    componentDidMount() {
        //根据url向服务器提取数据
        const href = this.props.router.location.pathname
        let index = href.lastIndexOf("\/");
        let str = href.substring(index + 1, href.length);
        this.setState({
            url: href,
            id: str,
        })
        this.getContent(str);
    }

    //获取数据
    getContent = async (id) => {
        //console.log(id)
        const res = await axios.get('http://43.128.63.185:8000/getVideoContent/' + id)
        console.log(res)
        this.setState({
            title: res.data[0].title,
            subtitle: res.data[0].subtitle,
            poster: res.data[0].poster,
            content: res.data[0].content,
            abstract: res.data[0].abstract,
        })
    }

    //渲染面包屑
    renderBread() {
        return (
            <div className='bread_nav'>
                <div className='inner'>
                    <i className='iconfont'><img className='home' src={houseicon} alt=""></img></i>
                    <a href='/'>首页</a>
                    <i className="iconfont right_arrow">{'>'}</i>
                    <a href='/home/videos'>密码应用相关视频</a>
                    <i className="iconfont right_arrow">{'>'}</i>
                    <a >正文</a>
                </div>
            </div>
        )
    }

    //渲染视频组件
    renderVideo() {
        return (
            <div className='video'>
                <Player
                    ref={c => {
                        this.player = c;
                    }}
                    //autoPlay='true'
                    //playsInline='true'
                    src={this.state.content}
                    poster={this.state.poster}>
                    <ControlBar autoHide={false} >
                        <ReplayControl seconds={10} order={1.1} />
                        <PlayToggle />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
                        <VolumeMenuButton />
                    </ControlBar>
                </Player>
            </div>
        )
    }


    renderContent() {
        return (
            <div className='content'>
                <div className='sub_con'>
                  <div className='sub_l'>
                    <h1 className='sub_tt'>{this.state.title}</h1>
                    <p className='time'>{this.state.subtitle}</p>
                    {/*正文*/}
                    <div className='sub_txt'>
                      <div className='txt'>{this.state.abstract}</div>
                    </div>
                  </div>
                </div>
            </div>

        )
    }

    render() {
        return (
            <div>
                {this.renderBread()}
                {this.renderVideo()}
                {this.renderContent()}
            </div>
        )
    }
}