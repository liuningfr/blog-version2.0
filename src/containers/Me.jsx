import React from 'react';
import { connect } from 'react-redux';
import getState from '@/utils/getState';
import getActions from '@/utils/getActions';
import blog from '@/store/blog/list';

class Me extends React.Component {
  componentDidMount() {
    const { initUser } = this.props;
    initUser();
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>关于我</h1>
        <p>{name}</p>
      </div>
    );
  }
}

export default connect(
  getState('blog'),
  getActions(blog),
)(Me);
