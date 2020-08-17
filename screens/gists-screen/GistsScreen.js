import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import GistList from "../../components/gist-list/GistList";

function GistsScreen({navigation}) {
    return (
        <View>
            <Header
                leftComponent={{icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer()}}
            />

            <GistList navigation={navigation} />
        </View>
    )
}

export default GistsScreen;
