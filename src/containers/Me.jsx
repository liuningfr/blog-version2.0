import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../reducers/blog';

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

const mapStateToProps = (state) => (
  {
    name: state.blogReducer.name,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    initUser: () => {
      dispatch(actions.initUser());
    },
  }
);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Me);
