import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationTab from "./src/navigation/NavigationTab";

export default function App() {
  return (
    // <>
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
    /* <StatusBar barStyle="default" />
    </> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
});
