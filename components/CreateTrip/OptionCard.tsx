import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function OptionCard({ option, selectedOption }: any) {
  return (
    <View
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.light_gray,
        borderWidth: selectedOption?.id == option?.id ? 2 : 0.1,
        borderColor: Colors.gray,
        borderRadius: 15,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          {option?.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "outfit",
          }}
        >
          {option?.desc}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 30,
        }}
      >
        {option?.icon}
      </Text>
    </View>
  );
}
