import React from 'react';
import ReactDOM from 'react-dom';
import { enquireScreen } from 'enquire-js';
import scrollScreen from 'rc-scroll-anim/lib/ScrollScreen';

import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Footer from './Footer';
import Point from './Point';

import './less/antMotion_style.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }

  }

  render() {

    let menuData =[
      {
        label: '互联网浪潮中的体育健身行业',
        target: 'content_0_0'
      },
      {
        label: '公司简介',
        target: 'content_2_0'
      },
      {
        label: '产品介绍',
        target: 'content_3_0'
      },
      {
        label: '智能产品',
        target: 'content_4_0'
      },
      {
        label: '实景健身',
        target: 'content_5_0'
      },
      {
        label: '大数据健康',
        target: 'content_6_0'
      }
    ];
    console.log(this.props)
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" data={menuData} isMobile={this.state.isMobile}/>,
      <Content0 id="content_0_0" key="content_0_0" isMobile={this.state.isMobile} />,
      <Content1 id="content_2_0" key="content_2_0" isMobile={this.state.isMobile}/>,
      <Content2 id="content_3_0" key="content_3_0" isMobile={this.state.isMobile}/>,
      <Content3 id="content_4_0" key="content_4_0" isMobile={this.state.isMobile}/>,

      <Footer id="footer_0_0" key="footer_0_0" isMobile={this.state.isMobile}/>,
      //<Content3 id="content_5_0" key="content_5_0" isMobile={this.state.isMobile}/>,
      //<Content3 id="content_6_0" key="content_6_0" isMobile={this.state.isMobile}/>,
      // 导航和页尾不进入锚点区，如果需要，自行添加;
      <Point key="list" ref="list" data={menuData} />,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}
