import React from 'react'

// 导入组件
import { Carousel, Flex, List } from 'antd-mobile'

// 导入axios
import axios from 'axios'

//导入html识别函数
import showhtml from '../../components/showhtml'

// 导入导航菜单图片
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'

// 导入样式文件
import './index.scss'

//引入Item和Brief组件
const Item = List.Item;
const Brief = Item.Brief;

// 导航菜单数据
const navs = [
  {
    id: 1,
    img: Nav1,
    title: '资源下载',
    path: '/home/download'
  },
  {
    id: 2,
    img: Nav2,
    title: '讨论室',
    path: '/home/chatroom'
  },
  {
    id: 4,
    img: Nav4,
    title: '小测验',
    path: '/home/test'
  },
  {
    id: 3,
    img: Nav3,
    title: '个人中心',
    path: '/home/profile'
  },
]

export default class Index extends React.Component {
  state = {
    // 轮播图状态数据
    swipers: [],
    isSwiperLoaded: false,
    newslist: [],
  }

  //渲染之前使用钩子函数获取数据
  componentDidMount() {
    this.getSwipers();
    this.getlist();
  }

  // 获取轮播图数据
  async getSwipers() {
    const res = await axios.get('http://43.128.63.185:8000/home/swiper')
    //console.log(res)
    this.setState({
      swipers: res.data.body,//加载的数据
      isSwiperLoaded: true//是否已经完成加载
    })
  }

  //获取最新资讯数据
  async getlist() {
    const res = await axios.get('http://43.128.63.185:8000/gethomelist')
    //console.log(res)
    this.setState({
      newslist: res.data
    })
  }


  // 渲染轮播图结构
  renderSwipers() {
    return this.state.swipers.map(item => (
      <a
        key={item.id}
        href={"/home/newsDetails/"+item.news}
        style={{
          display: 'inline-block',
          width: '100%',
          height: 212
        }}
      >
        <img
          src={`http://43.128.63.185:8000/getimg/${item.imgSrc}`}
          alt=""
          style={{ width: '100%', verticalAlign: 'top' }}
        />
      </a>
    ))
  }

  //渲染导航菜单
  renderNavs() {
    return navs.map(item => (
      <Flex.Item key={item.id} onClick={() => { this.props.router.navigate(item.path) }}>
        <img src={item.img} alt=''></img>
        <h2>{item.title}</h2>
      </Flex.Item>))
  }

  //渲染最新资讯列表
  renderNews(){
    return this.state.newslist.map((item) =>
    (<Item key={item.id}
      arrow='horizontal'
      multipleLine
      onClick={() => { this.props.router.navigate(`../newsDetails/${item.id}`) }}
      thumb={item.thumb}>
      {item.title}<Brief wrap='true'>{showhtml(item.brief)}</Brief>
    </Item>)
    )
  }

  render() {
    return (
      <div className="index">
        {/* 轮播图 */}
        <div className='swiper'>
          {
            this.state.isSwiperLoaded ?
              <Carousel autoplay infinite autoplayInterval={4000}>
                {this.renderSwipers()}
              </Carousel>
              : ''
          }
        </div>

        {/* download chatroom profile 图标导航菜单 */}
        <Flex className="nav">{this.renderNavs()}</Flex>

        {/*资讯列表*/}
        <List className="my-list">
          {this.renderNews()}
        </List>

      </div>
    )
  }
}
