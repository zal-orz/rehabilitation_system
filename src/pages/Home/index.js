import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
// 导入TabBar菜单的组件
import News from '../News'
import Index from '../Index'
import videos from '../Videos'
import Profile from '../Profile'
// 导入组件自己的样式文件
import './index.css'

//导入资讯详情页面
import NewsDetails from '../NewsDetails';
//导入包装器
import withRouter from '../../components/withRouter'
//导入视频详情页面
import videoDetails from '../videoDetails'
//导入下载界面
import Download from '../download'
//导入注册页面
import Register from '../Profile/register'
//导入讨论室界面
import Chatroom from '../chatroom'
//导入测试界面
import Test from '../test'

//导入context
import { Consumer } from '../../App'

const NewsDetailsRouter = withRouter(NewsDetails)
const IndexRouter = withRouter(Index);
const NewsRouter = withRouter(News);
const VideoRouter = withRouter(videos);
const VideoDetailsRouter = withRouter(videoDetails);
const RegisterRouter = withRouter(Register)
const ProfileRouter = withRouter(Profile)
const ChatroomRouter = withRouter(Chatroom)
const TestRouter = withRouter(Test)

// TabBar 数据
const tabItems = [
  {
    title: '首页',
    icon: 'icon-ind',
    path: '/home'
  },
  {
    title: '视频',
    icon: 'icon-findHouse',
    path: '/home/videos'
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news'
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile'
  }
]

export default class Home extends React.Component {
  state = {
    // 默认选中的TabBar菜单项
    selectedTab: this.props.router.location.pathname
  }

  // 渲染 TabBar.Item
  renderTabBarItem() {
    return tabItems.map(item => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path
          })

          // 路由切换
          this.props.router.navigate(item.path)
        }}
      />
    ))
  }

  //解决其他方式跳转tabBar刷新问题
  componentDidUpdate(prevProps) {
    //console.log('上一次路由信息：',prevProps);
    //console.log('这次的路由信息：',this.props);
    if (prevProps.router.location.pathname !== this.props.router.location.pathname) {
      this.setState({
        selectedTab: this.props.router.location.pathname,
      })
    }
  }


  render() {
    console.log(this.props.router.location.pathname)
    return (
      <div className="home">
        {/* 2.3 渲染子路由 */}
        <Routes>
          <Route exact path="/" element={<IndexRouter />}></Route>
          <Route path="news" element={<NewsRouter />} />
          <Route path="videos" element={<VideoRouter />} />
          <Route path="profile" element={<ProfileRouter />} />
          <Route path='newsDetails/*' element={<NewsDetailsRouter />} />
          <Route path='videoDetails/*' element={<VideoDetailsRouter />} />
          <Route path='download' element={<Download />} />
          <Route path='register' element={<RegisterRouter />} />
          <Route path='test' element={<TestRouter/>}/>
          <Route path='chatroom' element={<Consumer>{({data,updata})=><ChatroomRouter data={data} updata={updata}/>}</Consumer>} />
        </Routes>
        {/* TabBar */}

        <TabBar tintColor="#21b97a" noRenderContent={true} barTintColor="white">
          {this.renderTabBarItem()}
        </TabBar>
        <Outlet></Outlet>
      </div>
    )
  }
}

