import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import styles from './BasicLayout.scss';

class BasicLayout extends React.Component {
  render() {
    const { children } = this.props;
    const { Header, Footer, Content } = Layout;
    return (
      <Layout>
        <Header className={styles.menu}>
          <ul>
            <li>
              <NavLink exact to={'/'} activeClassName="active">Blog</NavLink>
            </li>
            <li>
              <NavLink exact to={'/me'} activeClassName="active">Contact me</NavLink>
            </li>
          </ul>
        </Header>
        <Content>
          {children}
        </Content>
        <Footer>
          &copy; 2018 Ning LIU
        </Footer>
      </Layout>
    );
  }
}

export default withRouter(BasicLayout);
