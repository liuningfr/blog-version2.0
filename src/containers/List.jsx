import React from 'react';
import { connect } from 'react-redux';
import getState from '@/utils/getState';
import getActions from '@/utils/getActions';
import blog from '@/store/blog/list';
import ArticlesList from '@/components/ArticlesList';

class List extends React.Component {
  componentDidMount() {
    const { initList } = this.props;
    initList();
  }

  render() {
    const { list } = this.props;
    return (
      <ArticlesList dataSouce={list} />
    );
  }
}

export default connect(
  getState('blog'),
  getActions(blog),
)(List);
