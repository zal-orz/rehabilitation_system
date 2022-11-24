import React from 'react'
import axios from 'axios'
import './index.scss'
import { Item } from 'antd-mobile-v2/lib/tab-bar';

export default class Download extends React.Component {
    state = {
        data: [],
    }

    componentDidMount() {
        this.getdownloadlist();
    }

    getdownloadlist = async () => {
        const res = await axios.get('http://43.128.63.185:8000/download')
        console.log(res)
        this.setState({
            data: res.data,
        })
    }

    //渲染列表内容
    renderdownload() {
        return this.state.data.map((item) => (
            <a href={item.content} target="_blank" rel='noreferrer' key={item.id} className='course'>
                <li className="clears">
                    <div className="bconli_left">
                        <span>{item.day}</span>
                        <div>{item.ym}</div>
                    </div>
                    <div className="bconli_right">
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.brief}</p>
                        </div>
                    </div>
                </li>

            </a>
        ))
    }
    //渲染列表
    renderlist() {
        return (
            <div>
                <div className='am-list-header'>
                    相关资源下载
                </div>
            <div className='box_con'>
                <ul>
                    {this.renderdownload()}
                </ul>
            </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderlist()}
            </div>
        )
    }
}