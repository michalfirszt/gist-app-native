import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import GistDetails from "../../components/gist-details/GistDetails";

function GistScreen({route, navigation}) {
    const { gist } = route.params;

    return (
        <View>
            <Header
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => navigation.goBack()}}
            />

            <View>
                <GistDetails gist={gist} />
            </View>
        </View>
    )
}

export default GistScreen;
