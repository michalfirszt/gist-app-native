import React, { Component } from "react";
import { View, Text } from "react-native";

class GistDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View>
                <Text>
                    { this.props.gist.description }
                </Text>
            </View>
        )
    }
}

export default GistDetails;
