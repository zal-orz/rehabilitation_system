import React from 'react'
import { List } from 'antd-mobile';//引入列表
import { Pagination, Icon } from 'antd-mobile';//引入分页器和符号
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import showhtml from '../../components/showhtml';//string转换html
import 'antd-mobile/dist/antd-mobile.css';
import './index.scss';

const IP='167.99.66.97'

const Item = List.Item;
const Brief = Item.Brief;

export default class videos extends React.Component {
  state = {
    disabled: false,
    data: [],
    page:1,
    total:0,
  }

  componentDidMount() {
    this.getvideoslist();
    this.gettotal();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.page!==prevState.page){
      this.getvideoslist();
    }
  }

  //获取分页信息
  gettotal= async ()=>{
    const res1 = await axios.get('http://'+IP+':8000/getvideoslist')
    //console.log(res1)
    this.setState({
      total:parseInt(res1.data.total)
    })
  }

  //获取视频信息
  getvideoslist = async () => {
    const res = await axios.get('http://'+IP+':8000/getvideoslist/'+this.state.page)//请求对应页数
    //console.log(res)
    this.setState({
      data: res.data,
    })
  }

  //渲染视频列表
  renderVideos() {
    return this.state.data.map((item) =>
    (<Item key={item.id}
      arrow='horizontal'
      multipleLine
      onClick={() => { this.props.router.navigate(`../videoDetails/${item.id}`) }}
      thumb={item.thumb}>
      {item.title}<Brief wrap='true'>{showhtml(item.brief)}</Brief>
    </Item>)
    )
  }

  //切换前一页
  prevPage(){
    if(this.state.page>1){
      this.setState({
        page:this.state.page-1
      })
    }
  }
  //切换下一页
  nextPage(){
    if(this.state.page<this.state.total)
    this.setState({
      page:this.state.page+1
    })
  }

  //渲染分页器
  renderPagination() {
    return (
      <div>
        <Pagination total={this.state.total}
          className="custom-pagination-with-icon"
          current={this.state.page}
          locale={{
            prevText: (<span className="arrow-align" onClick={()=>this.prevPage()}><Icon type="left" />上一步</span>),
            nextText: (<span className="arrow-align" onClick={()=>this.nextPage()}>下一步<Icon type="right" /></span>),
          }}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <List renderHeader={() => '视频'} className="my-list">
          {this.renderVideos()}
        </List>
        {this.renderPagination()}
        <br />
        <br />
        <br />
        <Outlet></Outlet>
      </div>
    )
  }
}