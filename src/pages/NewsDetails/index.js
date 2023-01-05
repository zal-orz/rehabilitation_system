import React from 'react'
import './index.scss'
import houseicon from '../../assets/images/home.png'
import axios from 'axios'
import showhtml from '../../components/showhtml'

const IP='167.99.66.97'

export default class NewsDetails extends React.Component {
  state = {
    url:'',
    id:'',
    title:'',//文章标题
    subtitle:'',//副标题
    content:'',//正文
  }

  componentDidMount(){
    //根据url向服务器提取数据
    const href=this.props.router.location.pathname
    let index = href.lastIndexOf("\/");
    let str = href.substring(index + 1,href.length);
    this.setState({
      url:href,
      id:str,
    })
    this.getContent(str);
  }
  
  //渲染面包屑
  renderBread(){
    return(
      <div className='bread_nav'>
        <div className='inner'>
          <i  className='iconfont'><img className='home' src={houseicon} alt=""></img></i>
          <a href='/'>首页</a>
          <i className="iconfont right_arrow">{'>'}</i>
          <a href='/home/news'>最新资讯</a>
          <i className="iconfont right_arrow">{'>'}</i>
          <a >正文</a>
        </div>
      </div>
    )
  }

  //获取数据
  getContent=async (id)=>{
    //console.log(id)
    const res = await axios.get('http://'+IP+':8000/getcontent/news_'+id)
    console.log(res)
    this.setState({
      title:res.data[0].title,
      subtitle:res.data[0].subtitle,
      content:res.data[0].content,
    })
  }

  renderContent(){
    return(
      <div className='sub_con'>
        <div className='sub_l'>
          <h1 className='sub_tt'>{this.state.title}</h1>
          <p className='time'>{this.state.subtitle}</p>
          {/*正文*/}
          <div className='sub_txt'>
            <div className='txt'>{showhtml(this.state.content)}</div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderBread()}
        {this.renderContent()}
      </div>
    )
  }
}
