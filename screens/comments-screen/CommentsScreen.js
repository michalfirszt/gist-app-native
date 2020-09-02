import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Header } from "react-native-elements";
import CommentList from "../../components/comment-list/CommentList";

const CommentsScreen = (props) => {
    return (
        <View>
            <Header
                leftComponent={{icon: 'arrow-back', color: '#fff', onPress: () => props.navigation.goBack()}}
            />

            <SafeAreaView>
                <ScrollView>
                    <CommentList id={props.gist.id} />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default CommentsScreen;
