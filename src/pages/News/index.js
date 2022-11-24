import React from 'react'
import { List } from 'antd-mobile';//引入列表
import { Pagination, Icon } from 'antd-mobile';//引入分页器和符号
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import showhtml from '../../components/showhtml';//string转换html
import 'antd-mobile/dist/antd-mobile.css';
import './index.scss';

const Item = List.Item;
const Brief = Item.Brief;
const locale = {
  prevText: 'Prev',
  nextText: 'Next',
};//分页器按钮

export default class News extends React.Component {
  state = {
    disabled: false,
    data: [],
    page:1,
    total:0,
  }

  componentDidMount() {
    this.getnewlist();
    this.gettotal();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.page!==prevState.page){
      this.getnewlist();
    }
  }

  //获取分页信息
  gettotal= async ()=>{
    const res1 = await axios.get('http://43.128.63.185:8000/getnewslist')
    //console.log(res1)
    this.setState({
      total:parseInt(res1.data.total)
    })
  }

  //获取资讯信息
  getnewlist = async () => {
    const res = await axios.get('http://43.128.63.185:8000/getnewslist/'+this.state.page)//请求对应页数
    //console.log(res)    
    this.setState({
      data: res.data,
    })
  }

  //渲染news
  renderNews() {
    return this.state.data.map((item) =>
    (<Item key={item.id}
      arrow='horizontal'
      multipleLine
      onClick={() => { this.props.router.navigate(`../newsDetails/${item.id}`) }}
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
        <List renderHeader={() => '资讯'} className="my-list">
          {this.renderNews()}
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