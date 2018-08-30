import React from 'react';
import { connect } from 'react-redux';
import { actions } from '@/reducers/blog';
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

const mapStateToProps = (state) => (
  {
    list: state.blogReducer.list,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    initList: () => {
      dispatch(actions.initList());
    },
  }
);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
