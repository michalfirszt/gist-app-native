import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/home-screen/HomeScreen";
import CreateGistScreen from "./screens/create-gist-screen/CreateGistScreen";

const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} options={{title: 'Gists'}} />
                <Drawer.Screen name="CreateGist" component={CreateGistScreen} options={{title: 'Create gist'}} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;
