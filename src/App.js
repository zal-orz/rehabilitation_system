import React from 'react'
import { useEffect } from 'react'

//导入首页和城市选择页面组件
import Home from './pages/Home'
//react路由
import {
  BrowserRouter as Router,
  Routes,
  Route, Link, useNavigate
} from 'react-router-dom'
import withRouter from './components/withRouter'
import { useState } from 'react/cjs/react.production.min'


export const { Provider, Consumer } = React.createContext();

//重定向
function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

const HomeRouter = withRouter(Home);

class App extends React.Component {
  constructor(){
    super()
    this.updata=(data)=>{
      this.setState({
        data:data
      })
    }
    this.state={
      data:null,
      updata:this.updata,
    }
  }

  render() {
    return (
      <div>
        <Provider value={this.state}>
          <Router>
            <div className="App">
              {/*配置路由*/}
              <Routes>
                <Route exact path='/' element={<Redirect to='/home' />} />
                <Route path='/home/*' element={<HomeRouter />}></Route>
              </Routes>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
