import React, { Component } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import GistCard from "../gist-card/GistCard";

class GistList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gists: [],
            client: axios.create({
                baseURL: 'https://api.github.com/',
                responseType: 'json',
                headers: {
                    'Authorization': 'token ' + Constants.manifest.extra.gistToken,
                }
            })
        };
    }

    componentDidMount() {
        this.getGists();
    }

    getGists() {
        this.state.client.get('gists')
            .then(response => {
                this.setState({
                    gists: response.data,
                });
            })
    }

    selectGists() {
        return this.state.gists.map(gist => {
            return (
                <View key={gist.id}>
                    <GistCard gist={gist} />
                </View>
            )
        })
    }

    render() {
        return (
            <View>
                <SafeAreaView>
                    <ScrollView>
                        { this.selectGists() }
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

export default GistList;
