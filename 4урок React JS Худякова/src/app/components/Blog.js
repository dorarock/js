import React from 'react';
import Post from "./Post";

export default class Blog extends React.Component {
    render() {
        const postsList = this.props.postsList.map((post, index) => {
            return <Post key={index} title={post.title} body={post.body}></Post>
        })

        return (
        <div>
            <div>
            {postsList}
            </div>
        </div>
        )
    }
}