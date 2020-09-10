import React, { Component } from "react";
import { ActivityIndicator, View, SafeAreaView, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
import Constants from "expo-constants";
import styles from "./styles";
import FileSubform from "../file-subform/FileSubform";

class GistForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            files: [],
            nextFileId: 1,
            public: true,
            loading: false,
            client: axios.create({
                baseURL: 'https://api.github.com/',
                responseType: 'json',
                headers: {
                    'Authorization': 'token ' + Constants.manifest.extra.gistToken,
                }
            })
        };

        this.handleChange = this.handleChange.bind(this);
        this.addNewFile = this.addNewFile.bind(this);
        this.removeFile = this.removeFile.bind(this);
        this.updateFile = this.updateFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.addNewFile();
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    addNewFile(filename = '', content = '') {
        let newFileList = this.state.files;

        newFileList.push({
            id: this.state.nextFileId,
            filename: filename,
            content: content,
        })

        this.setState({
            files: newFileList,
            nextFileId: this.state.nextFileId + 1,
        })
    }

    removeFile() {
        let newFileList = this.state.files;

        if (newFileList.length > 1) {
            newFileList.pop();
        }

        this.setState({
            files: newFileList,
        })
    }

    updateFile(updatedFile) {
        let newFileList = this.state.files.map(file => {
            return file.id === updatedFile.id ? updatedFile : file;
        })

        this.setState({
            files: newFileList,
        });
    }

    fileActions() {
        return (
            <View style={styles.buttonContainer}>
                <Button title="Add file" onPress={this.addNewFile} buttonStyle={styles.button} />
                <Button title="Remove file" onPress={this.removeFile} buttonStyle={styles.button} />
            </View>
        )
    }

    selectFiles() {
        return this.state.files.map(file => {
            return (
                <View key={file.id}>
                    <FileSubform id={file.id}
                                 filename={file.filename}
                                 content={file.content}
                                 updateFile={this.updateFile} />
                </View>
            )
        })
    }

    handleSubmit() {
        this.setState({
            loading: true,
        });

        let files = {};

        this.state.files.forEach(file => {
            files[file.filename] = {
                filename: file.filename,
                content: file.content,
            }
        });

        this.state.client.post('gists', {
            description: this.state.description,
            public: this.state.public,
            files: files,
        }).then(response => {
            this.setState({
                loading: false,
            });

            alert('Gist created successfully');
        })
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            { this.fileActions() }
                        </View>
                        <Input label="Description"
                               name="description"
                               defaultValue={this.state.description}
                               onChangeText={(text) => this.handleChange('description', text)} />
                        <View>
                            { this.selectFiles() }
                        </View>
                        <View style={styles.createButton}>
                            { this.state.loading ? (
                                <ActivityIndicator size="large" animating={this.state.loading} />
                            ) : (
                                <Button title="Create" onPress={this.handleSubmit} />
                            )}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default GistForm;
