import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name.length < 4 ? (
        <Text>Password has to be at least 5 characters long. </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
