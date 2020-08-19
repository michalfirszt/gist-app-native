import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import axios from "axios";
import Constants from "expo-constants";
import Comment from "../comment/Comment";

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loading: false,
            client: axios.create({
                baseURL: 'https://api.github.com/',
                responseType: 'json',
                headers: {
                    'Authorization': 'token ' + Constants.manifest.extra.gistToken,
                }
            }),
        };
    }

    componentDidMount() {
        this.getComments();
    }

    getComments() {
        this.setState({
            loading: true,
        });

        this.state.client.get('gists/' + this.props.id + '/comments')
            .then(response => {
                this.setState({
                    comments: response.data,
                    loading: false,
                })
            })
    }

    selectComments() {
        return this.state.comments.map(comment => {
            return (
                <Comment key={comment.id} comment={comment} />
            )
        })
    }

    render() {
        return (
            <View>
                <ActivityIndicator size="large" animating={this.state.loading} />
                { this.selectComments() }
            </View>
        )
    }
}

export default CommentList;
