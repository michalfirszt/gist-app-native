import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/home-screen/HomeScreen";

const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={HomeScreen}>
                <Drawer.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;
