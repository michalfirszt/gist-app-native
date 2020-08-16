import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { Card } from "react-native-elements";

class GistCard extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderItem(item) {
        return (
            <Text>{ item.key + ': ' + item.value }</Text>
        )
    }

    render() {
        return (
            <Card title={this.props.gist.owner.login}>
                <Text style={{marginBottom: '5%'}}>
                    { this.props.gist.description }
                </Text>
                <FlatList
                    data={[
                        {
                            key: 'Files',
                            value: Object.keys(this.props.gist.files).length,
                        },
                        {
                            key: 'Comments',
                            value: this.props.gist.comments,
                        },
                    ]}
                    renderItem={({item}) => this.renderItem(item)}
                />
            </Card>
        )
    }
}

export default GistCard;
