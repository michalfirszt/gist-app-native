import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import File from "../file/File";

class GistDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [],
        };
    }

    componentDidMount() {
        this.getFiles();
    }

    getFiles() {
        let fileList = [];

        Object.keys(this.props.gist.files).forEach(key => {
            fileList.push(this.props.gist.files[key]);
        });

        this.setState({
            files: fileList,
        })
    }

    gistFiles() {
        return this.state.files.map((file, index) => {
            return (
                <View key={index}>
                    <File file={file} />
                </View>
            )
        })
    }

    render() {
        return (
            <View>
                <Text>
                    { this.props.gist.description }
                </Text>

                <SafeAreaView>
                    <ScrollView>
                        { this.gistFiles() }
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

export default GistDetails;
