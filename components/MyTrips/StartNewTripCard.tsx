import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-sharp" size={36} color="black" />
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 24,
        }}
      >
        No Trips planned yet!
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 20,
          textAlign: "center",
          color: Colors.gray,
        }}
      >
        Looks like its time to plan a new travel experience! Get Started below
      </Text>
      <TouchableOpacity
      onPress={() => router.push("/create-trip/search-place")}
        style={{
          padding: 15,
          backgroundColor: Colors.black,
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            color: Colors.white,
            textAlign: "center",
            fontSize: 18,
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
