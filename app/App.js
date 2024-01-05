import "react-native-gesture-handler";

import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostScreen from "./screens/PostScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{isLoggedIn}</Text>
      {!isLoggedIn ? (
        <LoginScreen handleIsLoggedIn={setIsLoggedIn} />
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="Post"
              component={PostScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <MaterialCommunityIcons
                    name="post"
                    size={size}
                    color={color}
                  />
                ),
                tabBarLabel: "Post",
              }}
            />
            <Tab.Screen
              name="Chat"
              component={ChatScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Entypo name="chat" size={size} color={color} />
                ),
                tabBarLabel: "Chat",
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Fontisto name="person" size={size} color={color} />
                ),
                tabBarLabel: "Profile",
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
