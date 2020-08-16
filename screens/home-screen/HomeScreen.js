import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import GistList from "../../components/gist-list/GistList";

function HomeScreen({navigation}) {
    return (
        <View>
            <Header
                leftComponent={{icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer()}}
            />

            <GistList />
        </View>
    )
}

export default HomeScreen;
