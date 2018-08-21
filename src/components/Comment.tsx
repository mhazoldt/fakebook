import * as React from 'react';


class Comment extends React.Component<any, any> {
    public render() {
        return (
            <li className="collection-item">
                <div><u>{this.props.data.email}</u></div>
                <div>
                    {this.props.data.body}
                </div>
                <div className="pt-1">
                    {this.props.data.date}
                </div>
            </li>
        );
    }
}

export default Comment;