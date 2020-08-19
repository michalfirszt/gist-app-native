import React, { Component } from "react";
import { ListItem } from "react-native-elements";

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createdAt: new Date(props.comment.created_at),
        };
    }

    render() {
        return (
            <ListItem
                leftAvatar={{ source: { uri: this.props.comment.user.avatar_url } }}
                title={this.props.comment.user.login}
                subtitle={this.props.comment.body}
                rightTitle={
                    this.state.createdAt.getDay() +
                    "-" +
                    this.state.createdAt.getMonth() +
                    "-" +
                    this.state.createdAt.getFullYear()
                }
            />
        )
    }
}

export default Comment;
