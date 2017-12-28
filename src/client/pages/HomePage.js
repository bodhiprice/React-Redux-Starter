import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <ul>
        {this.props.posts.map(post => {
          return (
            <li key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default {
  component: connect(mapStateToProps, { fetchPosts })(HomePage),
  loadData: store => { return store.dispatch(fetchPosts()); }
}
