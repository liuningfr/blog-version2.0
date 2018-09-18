import React from 'react';
import { connect } from 'react-redux';
import getState from '@/utils/getState';
import getActions from '@/utils/getActions';
import article from '@/store/article/detail';
import Article from '@/components/Article';

class ArticleDetail extends React.Component {
  componentDidMount() {
    const { getArticle, match: { params } } = this.props;
    getArticle(params.id);
  }

  render() {
    const { detail } = this.props;
    return (
      <Article dataSouce={detail} />
    );
  }
}

export default connect(
  getState('article'),
  getActions(article),
)(ArticleDetail);
