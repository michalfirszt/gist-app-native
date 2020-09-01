import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import GistDetails from "../../components/gist-details/GistDetails";

const FilesScreen = (props) => {
    return (
        <View>
            <Header
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => props.navigation.goBack()}}
            />

            <View>
                <GistDetails gist={props.gist} />
            </View>
        </View>
    )
}

export default FilesScreen;
