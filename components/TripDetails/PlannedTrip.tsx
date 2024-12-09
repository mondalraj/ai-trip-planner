import { View, Text } from "react-native";
import React from "react";
import ItineraryPlaceCard from "./ItineraryPlaceCard";

export default function PlannedTrip({ details }: { details: any }) {
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
        }}
      >
        🏕️ Detailed Itinerary
      </Text>

      {details?.map((day: any, index: number) => (
        <View key={index}>
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 20,
              marginTop: 20,
            }}
          >
            📅 {day?.day}
          </Text>
          {day?.schedule?.map((schedule: any, index: number) => (
            <ItineraryPlaceCard key={index} schedule={schedule} />
          ))}
        </View>
      ))}
    </View>
  );
}
