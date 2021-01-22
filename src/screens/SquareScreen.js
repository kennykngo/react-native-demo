import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === {red: number, green: num, blue: num}
  switch (action.colorToChange) {
    case "red":
      // creating a new object and overwriting the red property by placing the new property on the right
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [{ red, green, blue }, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  // /**
  //  * @function setColor
  //  * @param {*} color
  //  * @param {*} change
  //  */

  // const setColor = (color, change) => {
  //   // color === "red", "green", "blue"
  //   switch (color) {
  //     case "red":
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     case "green":
  //       green + change > 255 || green + change < 0
  //         ? null
  //         : setGreen(green + change);
  //       return;
  //     case "blue":
  //       blue + change > 255 || blue + change < 0
  //         ? null
  //         : setBlue(blue + change);
  //       return;
  //     default:
  //       return;
  //   }
  // };

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
