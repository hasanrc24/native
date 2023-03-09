import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import FrndReqBody from "../components/FrndReqBody";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.req}>
        <View style={styles.frndTop}>
          <View style={styles.frndLeft}>
            <Text>FRIEND REQUESTS</Text>
            <Image
              style={{ height: 17 }}
              source={require("../../assets/Vector.png")}
            />
          </View>
          <View style={styles.frndRight}>
            <Image source={require("../../assets/Search.png")} />
            <Image source={require("../../assets/setting.png")} />
          </View>
        </View>
        <FrndReqBody />
        <FrndReqBody />
        <FrndReqBody />
        <Text
          style={{
            textAlign: "right",
            paddingRight: 10,
            color: "#C4C4C4",
            fontSize: 10,
          }}
        >
          Show More...
        </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  req: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    borderWidth: 2,
    borderColor: "#C4C4C4",
    // paddingHorizontal: "4%",
  },
  frndTop: {
    paddingVertical: 4,
    borderBottomWidth: 2,
    borderColor: "#C4C4C4",
    paddingHorizontal: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  frndLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  frndRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
