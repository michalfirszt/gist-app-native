import React, { Component } from "react";
import { Card } from "react-native-elements";

class File extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Card title={this.props.file.filename}>
            </Card>
        )
    }
}

export default File;
