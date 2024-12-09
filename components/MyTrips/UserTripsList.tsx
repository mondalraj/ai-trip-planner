import { View, Text, Image, TouchableOpacity } from "react-native";
import moment from "moment";
import React from "react";
import { Colors } from "@/constants/Colors";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";

export default function UserTripsList({ userTrips }: { userTrips: any[] }) {
  const latestTripData = userTrips[0]?.tripData;
  const latestTripContext = userTrips[0]?.context;

  const router = useRouter();

  return (
    <View >
      <View
        style={{
          marginTop: 20,
        }}
      >
        {
          latestTripContext?.locationInfo?.photoRef ? ( <Image
            style={{
              width: "100%",
              height: 220,
              objectFit: "cover",
              borderRadius: 15,
            }}
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${latestTripContext?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY}`,
            }}
          />): ( <Image
            style={{
              width: "100%",
              height: 220,
              objectFit: "cover",
              borderRadius: 15,
            }}
            source={require("../../assets/images/placeholder.jpg")}
          />)
        }
       
        <View>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            {latestTripData?.travelPlan?.location}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
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
              {moment(latestTripContext?.startDate).format("DD MMM YYYY")}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 16,
                color: Colors.gray,
              }}
            >
              {latestTripContext?.traveler?.icon}{" "}
              {latestTripContext?.traveler?.title}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.black,
              padding: 15,
              borderRadius: 15,
              marginTop: 10,
            }}
            onPress={() => router.push({
              pathname: "/trip-details",
              params: {
               trip: JSON.stringify(userTrips[0])
              },
            })}

          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 16,
                color: Colors.white,
                textAlign: "center",
              }}
            >
              View Trip
            </Text>
          </TouchableOpacity>
        </View>

        {
          userTrips?.map((trip, index) => (
            <UserTripCard key={index} trip={trip} />
          ))
        }
      </View>
    </View>
  );
}
