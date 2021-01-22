import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    borderWidth: 3,
    // borderColor: "red",
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  viewTwoStyle: {
    borderWidth: 3,
    // borderColor: "red",
    backgroundColor: "green",
    height: 100,
    width: 100,
    alignSelf: "flex-end",
  },
  viewThreeStyle: {
    borderWidth: 3,
    // borderColor: "red",
    backgroundColor: "purple",
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
