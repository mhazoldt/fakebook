import * as React from 'react';
import '../styles/Post.css';
import Post from './Post'


class Profile extends React.Component<any, any> {

    // this is a different implementation of the
    // toggle function that uses state instead
    // of the redux store.

    toggle = ((that) => (id: number) => {
        let posts = that.state.posts
        posts = posts.map((post: any) => {
            post.commentsVisible = (id === post.id) ?
                !post.commentsVisible :
                post.comments.Visible
            return post
        })
        that.setState({posts})
    })(this)


    renderPosts = (posts: any) => posts.map((post: any, idx: number) => {
        console.log('tried render')
        return <Post data={post} key={idx} toggle={this.toggle} />
    })


    // this was mostly copied from the getPosts() actionCreator,
    // this is not the most optimal way of doing this as all of
    // the API data could have been loaded into a BaseLayout section
    // of the redux store once then every other component could 
    // load the data from there as needed. I made these separate 
    // API calls for a few reasons.
    //
    // 1. I wasn't sure if having just one API call would meet
    //    the requirements of the code challenge because of needing
    //    a button or interface to make an API call, I figured
    //    profile pages might be enough for that. I was also in
    //    a bit of a time crunch and didn't have time to ask
    //    about this.
    // 2. It also shows how the same thing can be done without redux.
    // 3. It shows the advantages of using pure* components because
    //    the same Post component is used even though it's prop
    //    data is coming from a different source, on the feed page
    //    it is from redux but here it is coming from the profiles
    //    state. The Post comonent is also still able to call a 
    //    function that is in it's parent component using a callback.
    //
    //   *The post component isn't technically a pure component
    //    because it does require more than a shallow comparison.
    //    https://reactjs.org/docs/react-api.html

    getProfileData = async (user: any) => {
        let url = `https://jsonplaceholder.typicode.com/users/${user}`
        let data = await fetch(url).then(response => response.json())
        let photoUrl = `https://jsonplaceholder.typicode.com/photos/${user}`
        let photo = await fetch(photoUrl).then(response => response.json())
        data.photo = photo

        let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())

        posts = posts.filter((post: any) => post.userId == user)

        let ts: Date
        posts = posts.map((post: any ) => {
            post.username = data.username
            ts = new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
            post.timestamp = ts
            post.date = `${ts.getMonth()}/${ts.getDay() + 1}/${ts.getFullYear()}`
            return post
        })

        let comments = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())

        posts = posts.map((post: any ) => {
            post.comments = comments.filter((comment: any) => (comment.postId === post.id))
            post.comments = post.comments.map((c: any ) => {
                ts = new Date(+(new Date(post.timestamp)) + Math.floor(Math.random()*1000000000))
                c.timestamp = ts
                c.date = `${ts.getMonth()}/${ts.getDay() + 1}/${ts.getFullYear()}`
                return c
            })
            post.commentsVisible = false
            return post
        })

        let photos = await fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())

        let selectPhoto: number
        posts = posts.map((post: any ) => {
            
            if(Math.floor(Math.random() * 5) === 0) {
                selectPhoto = Math.floor(Math.random() * 20) + 10
                post.photo = photos.filter((photo: any) => (photo.id === post.userId + selectPhoto))[0]
            }

            post.userPhoto = photos.filter((photo: any) => (photo.id === post.userId))[0]
            return post
        })

        posts.sort(((x: any, y: any) => x.timestamp.getDate() - y.timestamp.getDate()))

        data.posts = posts

        this.setState(Object.assign({}, data))
    }


    componentWillReceiveProps(nextProps: any) {
        this.getProfileData(nextProps.match.params.id)
    }


    async componentDidMount() {
        this.getProfileData(this.props.match.params.id)
    }


    public render() {
        console.log('state: ', this.state)
        return (
            <div>
                {this.state &&
                    <div>
                        <div className="card">
                            <div className="card-image">
                                <img src='https://via.placeholder.com/600x200' />
                                <span className="card-title hide-on-small-only">{this.state.company.bs}</span>
                            </div>
                            <div className="card-content">
                                <div className="username-title">
                                    <div className="profile-picture-container">
                                        <img className="profile-picture" src={`${this.state.photo.thumbnailUrl}`} />
                                    </div>
                                    <div className="username p-1"><div>{this.state.username}</div></div>
                                </div>
                            </div>
                            <ul className="collection">
                                <li className="collection-item">Email: {this.state.email}</li>
                                <li className="collection-item">Phone: {this.state.phone}</li>
                                <li className="collection-item">Website: {this.state.website}</li>
                                <li className="collection-item">Company: {this.state.company.name}</li>
                            </ul>
                        </div>
                        {this.state.posts && this.renderPosts(this.state.posts)}
                    </div>
                }
            </div>
        );
    }
}

export default Profile;