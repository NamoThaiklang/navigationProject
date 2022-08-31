import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FirstPage from "./screens/FirstPage";
import SecondPage from "./screens/SecondPage";
import ThirdPage from "./screens/ThirdPage";

const Stack = createNativeStackNavigator();



export default function App_() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#a52a2a" },
          headerTintColor: "#ffff",
          headerTitleStyle: { fontWeight: "bold", fontSize: 30 },
        }}
      >
        <Stack.Screen name="First" component={FirstPage} />
        <Stack.Screen name="Second" component={SecondPage} />
        <Stack.Screen name="Third" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


