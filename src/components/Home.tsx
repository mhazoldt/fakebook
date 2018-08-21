import * as React from 'react';
import { connect } from 'react-redux';
import { getPosts, toggleComments } from '../redux/home/actionCreators';
import Post from './Post'


class Home extends React.Component<any, any> {


  // this a self executing closure function that returns a function
  // that accepts an id for the post that needs to have it's comments
  // toggled. This was not included in the Post component itself so
  // the component could still be used independently from redux like
  // on the profile pages.

  toggle = ((t, d) => (id: number) => d(t(id)))(toggleComments, this.props.dispatch)

  renderPosts = (posts: any) => posts.map((post: any, idx: number) => <Post data={post} key={idx} toggle={this.toggle} />)

  componentDidMount() {
    if(this.props.posts.length === 0) {
      this.props.dispatch(getPosts())
    }
  }

  public render() {
    let posts = this.props.posts
    
    return (
        <div>
            {this.renderPosts(posts)}
        </div>
    );
  }
}

function mapStateToProps(appState: any): any {
  return {
    posts: appState.home.posts
  }
}


export default connect<any>(mapStateToProps)(Home);