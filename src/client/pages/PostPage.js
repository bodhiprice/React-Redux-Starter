import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { css } from 'react-emotion';
import { Helmet } from 'react-helmet';
import { injectGlobal } from 'emotion';
import { fetchPosts, fetchPostsIfNeeded } from '../../actions';

class PostPage extends React.Component {
  componentDidMount() {
    this.props.fetchPostsIfNeeded();
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Post Page</title>
        </Helmet>
        <h1>Post Page</h1>
        <div className="alignment">
          <Link to="/">Return home</Link>
        </div>
        <p className={lineHeight}>{this.props.post.body}</p>
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

// Critical styles injected into head. Use to avoid flash of unstyled content.
injectGlobal`
  .alignment {
    text-align: right;
  }
`;

// Applied on the client.
const lineHeight = css`
  line-height: 1.4;
`;

export default {
  component: connect(mapStateToProps, { fetchPosts, fetchPostsIfNeeded })(
    withRouter(PostPage)
  ),
  loadData: store => {
    return store.dispatch(fetchPosts());
  }
};
