import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GistsScreen from "../gists-screen/GistsScreen";
import GistScreen from "../gist-screen/GistScreen";

function HomeScreen() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Gists" screenOptions={{headerShown: false}} >
            <Stack.Screen name="Gists" component={GistsScreen} options={{title: 'Gists'}} />
            <Stack.Screen name="Gist" component={GistScreen} options={{title: 'Gist'}} />
        </Stack.Navigator>
    )
}

export default HomeScreen;
