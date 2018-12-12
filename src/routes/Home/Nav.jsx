import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import ScrollAnim from 'rc-scroll-anim';
import img1 from  '../../assets/img/logo.png';

const Link = ScrollAnim.Link;

const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen
    });
  }



  render() {

    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;

    const navChildren =this.props.data.map((item) => {
      return (
        <Item key={ item.target}>  <Link
          to={item.target}
          toHash={false}
        >{item.label}</Link>
        </Item>
      );
    }) ;
    return (
        <TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        {/*<span style={{fontSize:'20px',color:'#ffffff'}}>动岚健身</span>*/}
        <img height='34px' src={img1} />
        {/*<img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" />*/}
      </TweenOne>
      {isMobile ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={ this.phoneClick }
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >

          <Menu
            defaultSelectedKeys={['0']}
            mode="inline"
            theme="dark"
            onClick={  this.phoneClick}
          >
            {navChildren}
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={['0']}
          id={`${this.props.id}-menu`}
        >
          {navChildren}
        </Menu>
      </TweenOne>)}
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
