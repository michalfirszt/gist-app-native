import React, { Component } from "react";
import { Card, Input } from "react-native-elements";

class FileSubform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            filename: props.filename,
            content: props.content,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    static defaultProps = {
        filename: '',
        content: '',
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        }, () => {
            this.props.updateFile({
                id: this.state.id,
                filename: this.state.filename,
                content: this.state.content,
            });
        });
    }

    render() {
        return (
            <Card style={{ marginHorizontal: 20 }}>
                <Input label="Filename"
                       name="filename"
                       defaultValue={this.state.filename}
                       onChangeText={(text) => this.handleChange('filename', text)} />
                <Input label="Content"
                       name="content"
                       defaultValue={this.state.content}
                       onChangeText={(text) => this.handleChange('content', text)} />
            </Card>
        )
    }
}

export default FileSubform;
