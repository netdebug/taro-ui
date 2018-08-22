import * as Nerv from 'nervjs'
import { Link, NavLink } from 'react-router-dom'

import PageHeader from '../components/header'
import Footer from '../components/footer'
import '../assets/style/index.scss'
import '../assets/style/animate.css'

class Index extends Nerv.Component {
  goToGuide (e) {
    e.preventDefault()
  }
  goToSource (e) {
    e.preventDefault()
  }
  componentDidMount() {
    let header = document.getElementById('J-page-header')
    let panels = document.getElementsByClassName('panel')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.add('fixed')
      } else {
        header.classList.remove('fixed')
      }
    }, 100)

  }
  render () {
    return (
      <div className='wrapper'>
        <PageHeader />
        {/* Banner */}
        <div className='bg-container'>
          <div className='bg-top-border'></div>
          <div className='bg-top-shadow'></div>
          <div className='bg-bottom-border'></div>
          <div className='bg-bottom-shadow'></div>
          <div className='info-container'>
            <div className='img-container'></div>
            <h1>Taro UI</h1>
            <div className='info-desc'>一套基于 Taro 框架开发的多端 UI 组件库</div>
            <div className='btn-container'>
              <NavLink className='btn btn-start' to='/docs/introduction'>开始使用</NavLink>
              <a className='btn btn-github' href="https://github.com/NervJS/taro-ui">Github</a>
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="feature-wrapper">
          <div className='main-title'>特性</div>
          <div className='panel-container'>
            <div className='panel'>
              <div className='panel-img'><img src={require('../assets/panel-img1.png')} /></div>
              <div className='panel-title'>多端适配</div>
              <div className='panel-desc'>一套组件可以在微信小程序 / H5 / ReactNative 等多端适配运行</div>
            </div>
            <div className='panel'>
              <div className='panel-img'><img src={require('../assets/panel-img2.png')} /></div>
              <div className='panel-title'>组件丰富</div>
              <div className='panel-desc'>提供丰富的基础组件，覆盖大部分使用场景，满足各种功能需求</div>
            </div>
            <div className='panel'>
              <div className='panel-img'><img src={require('../assets/panel-img3.png')} /></div>
              <div className='panel-title'>按需引用</div>
              <div className='panel-desc'>可按需使用独立的组件，不必引入所有文件，可最小化的注入到项目中</div>
            </div>
            <div className='panel'>
              <div className='panel-tip-container'><img src={require('../assets/panel-tip.png')} /></div>
              <div className='panel-img'><img src={require('../assets/panel-img4.png')} /></div>
              <div className='panel-title'>多套主题</div>
              <div className='panel-desc'>目前只提供默认的蓝色主题，后期会新增红色主题，渐变色主题，以及自定义主题</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Index
