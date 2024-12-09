import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import HotelCard from "./HotelCard";

export default function HotelList({
  hotelList,
  destination,
}: {
  hotelList: any;
  destination: string;
}) {
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
        🏩 Hotel Recommendation
      </Text>

      <FlatList
        data={hotelList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <HotelCard item={item} destination={destination} />
        )}
      />
    </View>
  );
}
