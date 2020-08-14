import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";

function HomeScreen({navigation}) {
    return (
        <View>
            <Header
                leftComponent={{icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer()}}
            />
        </View>
    )
}

export default HomeScreen;
