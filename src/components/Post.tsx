import * as React from 'react';
import Comment from './Comment';
import '../styles/Post.css';
import { NavLink } from 'react-router-dom';


class Post extends React.Component<any, any> {

    renderComments = (comments: any) => comments.map((c: any, idx: any)  => <Comment data={c} key={idx} />)

    public render() {
        return (
            <div className="card hoverable z-depth-3">
                <div className="card-content">
                    <span className="card-title">
                        <div className="username-title">
                            <div className="profile-picture-container">
                                <img className="profile-picture" src={`${this.props.data.userPhoto.thumbnailUrl}`} />
                            </div>
                            <div className="username p-1">
                                <NavLink className="username-link" to={`/profile/${this.props.data.userId}`}>{this.props.data.username}</NavLink>
                            </div>
                        </div>
                        { !this.props.data.photo &&
                            <div>
                                {this.props.data.title}
                            </div>
                        }
                    </span>
                    <p className="pb-1">{this.props.data.body}</p>
                    { this.props.data.photo && 
                        <div className="card-image">
                            <img src={`${this.props.data.photo.url}`} />
                            <span className="card-title">{this.props.data.title}</span>
                        </div>
                    }
                    <div className="pt-2">{this.props.data.date}</div>
                </div>
                <div className="card-action">
                    <a onClick={(e) => {
                            e.preventDefault()
                            this.props.toggle(this.props.data.id)
                        }
                    }>
                        Comments
                    </a>
                </div>
                <div>
                    {this.props.data.commentsVisible && 
                        <div className="pl-2 pr-2">
                            <ul className="collection">
                                {this.renderComments(this.props.data.comments)}
                            </ul>
                            <div className="card-action" style={{borderTop: '0px', marginTop: '0px', paddingTop: '0px',  paddingLeft: '5px'}}>
                                <a className="blue-text pl-1" onClick={(e) => {
                                    e.preventDefault()
                                    this.props.toggle(this.props.data.id)
                                    }
                                }>
                                    X
                                </a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}


export default Post;