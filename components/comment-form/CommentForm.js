import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
import Constants from "expo-constants";

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            body: '',
            client: axios.create({
                baseURL: 'https://api.github.com/',
                responseType: 'json',
                headers: {
                    'Authorization': 'token ' + Constants.manifest.extra.gistToken,
                }
            }),
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.body.length > 0) {
            this.state.client.post('gists/' + this.props.id + '/comments', {
                body: this.state.body,
            })
            .then(response => {
                this.props.addNewComment(response.data);
            })

            this.setState({
                body: '',
            });
        }
    }

    render() {
        return (
            <View>
                <Input placeholder="Type comment" name="body" onChange={this.handleChange} />
                <Button
                    title="Comment"
                    onClick={this.handleSubmit}
                    buttonStyle={{
                        alignItems: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '50%',
                    }} />
            </View>
        )
    }
}

export default CommentForm;
