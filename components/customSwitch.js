import React, { useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CustomSwitch = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = (val) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View
      style={{
        height: 27,
        width: 308,
        backgroundColor: "#F6E9E7",
        borderRadius: getRoundCorner ? 25 : 0,
        borderWidth: 1,
        borderColor: selectionColor,
        flexDirection: "row",
        justifyContent: "center",
        padding: 2,
        marginTop: 23,
        marginBottom: 35
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? selectionColor : "#F6E9E7",
          borderRadius: getRoundCorner ? 20 : 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 12,
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? selectionColor : "#F6E9E7",
          borderRadius: getRoundCorner ? 25 : 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 12,
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomSwitch;
