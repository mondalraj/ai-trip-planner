import { View, Text, Touchable, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function FlightInfo({ flightData }: { flightData: any }) {
  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 2,
        borderColor: Colors.light_gray,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <View style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
      }}>

      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
        >
        ✈️ Flights
      </Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(flightData?.bookingUrl);
        }}
        style={{
          backgroundColor: Colors.black,
          padding: 10,
          borderRadius: 5,
          width: 100,
          marginTop: 10,
        }}
      >
        <Text style={{
          textAlign: "center",
          color: Colors.white,
          fontFamily: "outfit",
          fontSize: 16,
        }}>Book Now</Text>
      </TouchableOpacity>
        </View>

      <Text style={{
        fontFamily: "outfit",
        fontSize: 18,
        marginBottom: 5,
      }}>Airline: {flightData?.airline}</Text>
      <Text style={{
        fontFamily: "outfit",
        fontSize: 18,
        marginBottom: 5,
      }}>Price: {flightData?.price}</Text>
      
    </View>
  );
}
