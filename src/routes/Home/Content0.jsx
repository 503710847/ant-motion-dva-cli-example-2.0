import React, {PropTypes} from 'react';
import {Button, Icon,Modal} from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
// import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import logoCenter from '../../assets/img/logo48.png'
import ScrollAnim from 'rc-scroll-anim';

const Link = ScrollAnim.Link;
const OverPack = ScrollAnim.OverPack;

class Content extends React.Component {
/*  state = {visible:false}
  showModal = ()=> {
    this.setSate=({
      visible:true
    })
  }*/
  render() {
    const props = {...this.props};
    delete props.isMobile;
    return (
      <div>
        <div style={{"textAlign":"center","background":"#ffffff"}}>
          <h1>
            <Link
              to={"content_2_0"}
              toHash={false}
            >
              关于1
            </Link>
          </h1>
        </div>

      <OverPack
        replay
        playScale={[0.3, 0.1]}
       {...props}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}
        >
          <span
            className="title"
            key="title"
            id={`${props.id}-title`}
          >
            <img width="60%" src={logoCenter}/>
          </span>
          <p
            key="content"
            id={`${props.id}-content`}
          >
            动岚未来，将一切化繁为简，打造智能的健身健身服务系统
          </p>
          <h1>
            <Link style={{"color":"#fff"}}
              to={"content_2_0"}
              toHash={false}
            >
              关于2
            </Link>
          </h1>

          <Button type="ghost" key="button" id={`${props.id}-button`} onClick={()=>{
          // props.webRouter.push("/#content_2_0");
          }}  >
          在线咨询
          </Button>
          {/*<Button type="ghost" key="button" id={`${props.id}-button`} onClick={()=>{*/}
          {/*// props.webRouter.push("/#content_2_0");*/}
          {/*}}  >*/}
          {/*关于我们*/}
          {/*</Button>*/}
        </QueueAnim>

        <TweenOne
          animation={{y: '-=20', yoyo: true, repeat: -1, duration: 1000}}
          className={`${props.className}-icon`}
          key="icon"
        >
          <Icon type="down"/>
        </TweenOne>
      </OverPack>
      </div>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
