import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "16" },
    { name: "Friend #2", age: "17" },
    { name: "Friend #3", age: "18" },
    { name: "Friend #4", age: "19" },
    { name: "Friend #5", age: "20" },
    { name: "Friend #6", age: "21" },
    { name: "Friend #7", age: "22" },
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // return <Text>{item.name}</Text>;
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
