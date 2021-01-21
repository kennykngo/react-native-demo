import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to list demo!"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to image demo!"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to counter demo!"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color demo!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
