import React from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

class TopMenu extends React.Component {
  handleClick = (e) => {
    console.log(this.props);
    const { history } = this.props;
    history.push(`${e.key}`);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Menu
          selectedKeys={['mail']}
          mode="horizontal"
          onClick={this.handleClick}>
          <Menu.Item key="/">
            <Icon type="book" />
            文章
          </Menu.Item>
          <Menu.Item key="/aboutme">
            <Icon type="user" />
            关于我
          </Menu.Item>
        </Menu>
        {children}
      </div>
    );
  }
}

export default withRouter(TopMenu);
