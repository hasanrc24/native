import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.image} source={{}} />
          <View style={{}}>
            <Text style={styles.welcome}>Welcome Back, Fariha</Text>
            <View style={{ flexDirection: "row", fontSize: 10 }}>
              <View>
                <Text style={{ fontSize: 10 }}>@Pizzaa.Monster23</Text>
                <Text style={{ fontSize: 10 }}>Fariha Rodriguez</Text>
              </View>
              <View style={{ paddingLeft: 5 }}>
                <Text style={{ color: "white", fontSize: 10 }}>Online</Text>
                <Text style={{ color: "white", fontSize: 10 }}>63 Friends</Text>
              </View>
            </View>
            <View style={{ paddingTop: 12 }}>
              <Text style={{ fontSize: 10 }}>
                STUDENT |{" "}
                <Text style={{ color: "white" }}>
                  SUSAN B. ANTHONY MIDDLE SCHOOL
                </Text>
              </Text>
              <Text style={{ fontSize: 10 }}>SAN FRANCISCO, CALIFORNIA</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 10, paddingRight: 3 }}>
          <Image style={{ height: 19, width: 27 }} source={{}} />
          <Image style={{ height: 25, width: 47 }} source={{}} />
          <Image style={{ height: 18, width: 4 }} source={{}} />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#EEEEEE",
  },
  image: {
    marginRight: 10,
    height: 100,
    width: 100,
  },
  welcome: {
    color: "white",
    fontSize: 14,
    fontWeight: 600,
    paddingBottom: 3,
  },
  header: {
    backgroundColor: "#53C0C0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
