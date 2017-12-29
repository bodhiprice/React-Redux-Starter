import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, fetchPostsIfNeeded } from '../../actions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchPostsIfNeeded();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Home Page</h1>
        <ul>
          {this.props.posts.map(post => {
            return (
              <li key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default {
  component: connect(mapStateToProps, { fetchPosts, fetchPostsIfNeeded })(
    HomePage
  ),
  loadData: store => {
    return store.dispatch(fetchPosts());
  }
};
