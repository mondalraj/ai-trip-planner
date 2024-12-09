import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { GetPhotoRef } from "@/services/GooglePlaceApi";

export default function ItineraryPlaceCard({ schedule }: { schedule: any }) {
  const [photoRef, setPhotoRef] = React.useState<string | null>(null);
  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(`${schedule?.location}`);

    setPhotoRef(result);
  };

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);
  return (
    <View
      style={{
        marginTop: 20,
        padding: 10,
        borderRadius: 15,
        backgroundColor: Colors.light_gray,
        position: "relative",
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 150,
          borderRadius: 15,
        }}
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY}`,
        }}
      />
      <View
        style={{
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 18,
          }}
        >
          {schedule?.location}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            color: Colors.gray,
          }}
        >
          {schedule?.details}
        </Text>
        {schedule?.ticketPricing && (
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 16,
              marginTop: 5,
            }}
          >
            🎟️ Ticket Price:{" "}
            <Text
              style={{
                fontFamily: "outfit-bold",
              }}
            >
              {schedule?.ticketPricing || "Free"}
            </Text>
          </Text>
        )}
        {schedule?.timeToTravel && (
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 16,
              marginTop: 3,
            }}
          >
            ⏱️ Time to Travel:{" "}
            <Text
              style={{
                fontFamily: "outfit-bold",
              }}
            >
              {schedule?.timeToTravel}
            </Text>
          </Text>
        )}

        <View
          style={{
            position: "absolute",
            top: -150,
            right: 5,
            backgroundColor: Colors.white,
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 100,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 12,
            }}
          >
            {schedule?.activity}
          </Text>
        </View>
      </View>
    </View>
  );
}
