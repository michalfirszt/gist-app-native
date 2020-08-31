import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import GistForm from "../../components/gist-form/GistForm";

const CreateGistScreen = ({navigation}) => {
    return (
        <View>
            <Header
                leftComponent={{icon: 'menu', color: '#fff', onPress: () => navigation.toggleDrawer()}}
            />

            <GistForm />
        </View>
    )
}

export default CreateGistScreen;
