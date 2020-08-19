import React, { Component } from "react";
import { ActivityIndicator, View, SafeAreaView, ScrollView } from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import GistCard from "../gist-card/GistCard";
import { StatusBar } from 'expo-status-bar';

class GistList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gists: [],
            loading: false,
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
        this.setState({
            loading: true,
        })

        this.state.client.get('gists')
            .then(response => {
                this.setState({
                    gists: response.data,
                    loading: false,
                });
            })
    }

    selectGists() {
        return this.state.gists.map(gist => {
            return (
                <View key={gist.id}>
                    <GistCard gist={gist} navigation={this.props.navigation} />
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
                <ActivityIndicator size="large" animating={this.state.loading} />
                <StatusBar style="auto" />
            </View>
        )
    }
}

export default GistList;
