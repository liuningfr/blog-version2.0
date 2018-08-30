import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../reducers/article';
import Article from '../components/Article';

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

const mapStateToProps = (state) => (
  {
    detail: state.articleReducer.detail,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    getArticle: (id) => {
      dispatch(actions.getArticle(id));
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleDetail);
