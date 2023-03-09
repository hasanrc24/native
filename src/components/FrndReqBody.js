import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const FrndReqBody = () => {
  return (
    <View style={styles.reqBody}>
      <View style={styles.bodyLeft}>
        <Image source={{}} />
        <View style={styles.reqDetails}>
          <Text style={{ fontSize: 10 }}>
            Hannah S. |{" "}
            <Text style={{ color: "#73B6F7" }}>
              @HannahSpice | Susan B. Anthony Middle School
            </Text>{" "}
            | requested to follow you
            <Text style={{ color: "#C4C4C4" }}> | 1 Day ago</Text>
          </Text>
        </View>
      </View>

      <View style={styles.bodyRight}>
        <Image
          style={{ height: 15, width: 15 }}
          source={require("../../assets/add.png")}
        />
        <Image
          style={{ height: 15, width: 15 }}
          source={require("../../assets/delete.png")}
        />
        <Image
          style={{ height: 15, width: 15 }}
          source={require("../../assets/cancel.png")}
        />
      </View>
    </View>
  );
};

export default FrndReqBody;

const styles = StyleSheet.create({
  reqBody: {
    paddingHorizontal: "4%",
    paddingVertical: "2%",
    borderBottomWidth: 2,
    borderColor: "#C4C4C4",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  bodyLeft: {
    flexDirection: "row",
  },
  bodyRight: {
    flexDirection: "row",
    gap: 4,
  },
  reqDetails: {
    justifyContent: "space-between",
    width: "79%",
  },
});
