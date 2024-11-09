import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "@/components/MyTrips/StartNewTripCard";
import { useRouter } from "expo-router";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const router = useRouter();
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 60,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
          }}
        >
          MyTrips
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/create-trip/search-place")}
        >
          <Ionicons name="add-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>
      {userTrips?.length === 0 ? <StartNewTripCard /> : null}
    </View>
  );
}
