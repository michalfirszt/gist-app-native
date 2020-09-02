import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons"
import FilesScreen from "../files-screen/FilesScreen";
import CommentsScreen from "../comments-screen/CommentsScreen";

function GistScreen({route, navigation}) {
    const { gist } = route.params;
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Files"
                        children={() => <FilesScreen gist={gist} navigation={navigation} />}
                        options={{ tabBarIcon: ({color, size}) => <MaterialIcons name="insert-drive-file" size={size} color={color} /> }} />
            <Tab.Screen name="Comments"
                        children={() => <CommentsScreen gist={gist} navigation={navigation} />}
                        options={{ tabBarIcon: ({color, size}) => <MaterialIcons name="comment" size={size} color={color} /> }} />
        </Tab.Navigator>
    )
}

export default GistScreen;
