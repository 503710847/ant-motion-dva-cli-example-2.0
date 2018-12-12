import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnim from 'rc-scroll-anim';

const Link = ScrollAnim.Link;
export default class Point extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.array,
  };

  static defaultProps = {
    className: 'templates-list',
  };

  render() {
    const children = this.props.data.map((item) => {
      return (
        <Link
          key={item.target}
          className={this.props.className}
          to={item.target}
          toHash={false}
        />
      );
    }) ;
    return (<div
      className={`${this.props.className}-wrapper`}
      style={this.props.style}
    >
      <div>
        {children}
      </div>
    </div>);
  }
}
