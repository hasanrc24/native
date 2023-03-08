import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <View style={styles.home}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#EEEEEE",
  },
});
