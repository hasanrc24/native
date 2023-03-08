import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import About from "../screen/About";
import Contact from "../screen/Contact";
import Header from "../components/Header";

const NavigationTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Header />
      <Tab.Navigator screenOptions={{}} initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact Us" component={Contact} />
      </Tab.Navigator>
    </>
  );
};

export default NavigationTab;

const styles = StyleSheet.create({});
