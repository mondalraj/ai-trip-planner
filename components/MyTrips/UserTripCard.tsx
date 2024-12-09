import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function UserTripCard({ trip }: { trip: any }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
      }}
      onPress={() => router.push({
        pathname: "/trip-details",
        params: {
         trip: JSON.stringify(trip)
        },
      })}
    >
      {trip?.context?.locationInfo?.photoRef ? (
        <Image
          style={{
            width: 130,
            height: 100,
            objectFit: "cover",
            borderRadius: 10,
          }}
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${trip?.context?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY}`,
          }}
        />
      ) : (
        <Image
          style={{
            width: 130,
            height: 100,
            objectFit: "cover",
            borderRadius: 10,
          }}
          source={require("../../assets/images/placeholder.jpg")}
        />
      )}
      <View>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          {trip?.tripData?.travelPlan?.location}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 2,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 16,
              color: Colors.gray,
            }}
          >
            {moment(trip?.context?.startDate).format("DD MMM YYYY")}
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 16,
              color: Colors.gray,
            }}
          >
            {trip?.context?.traveler?.icon} {trip?.context?.traveler?.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
