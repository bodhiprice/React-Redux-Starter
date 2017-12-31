import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { css } from 'react-emotion';
import { fetchPosts, fetchPostsIfNeeded } from '../../actions';

class PostPage extends React.Component {
  componentDidMount() {
    this.props.fetchPostsIfNeeded();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Post Page</h1>
        <div className={alignment}>
          <Link to="/">Return home</Link>
        </div>
        <p>{this.props.post.body}</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts[`${ownProps.match.params.id}`]
  return {
    post
  };
};

const alignment = css`
  text-align: right;
`;
export default {
  component: connect(mapStateToProps, { fetchPosts, fetchPostsIfNeeded })(
    withRouter(PostPage)
  ),
  loadData: store => {
    return store.dispatch(fetchPosts());
  }
};
