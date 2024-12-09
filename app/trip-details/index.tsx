import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import FlightInfo from "@/components/TripDetails/FlightInfo";
import HotelList from "@/components/TripDetails/HotelList";
import PlannedTrip from "@/components/TripDetails/PlannedTrip";

export default function TripDetails() {
  const [tripData, setTripData] = useState<any>();
  const [tripContext, setTripContext] = useState<any>();
  const navigation = useNavigation();

  const {
    trip,
  }: {
    trip: string;
  } = useLocalSearchParams();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerBackTitle: "All Trips",
    });

    setTripContext(JSON.parse(trip)?.context);
    setTripData(JSON.parse(trip)?.tripData);
  }, []);

  return (
    tripData && (
      <ScrollView>
        {tripContext?.locationInfo?.photoRef ? (
          <Image
            style={{
              width: "100%",
              height: 350,
              objectFit: "cover",
            }}
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripContext?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY}`,
            }}
          />
        ) : (
          <Image
            style={{
              width: "100%",
              height: 350,
              objectFit: "cover",
            }}
            source={require("../../assets/images/placeholder.jpg")}
          />
        )}
        <View
          style={{
            padding: 15,
            marginBottom: 50,
            height: "100%",
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: Colors.white,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 22,
            }}
          >
            {tripData?.travelPlan?.location}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",

              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 18,
                color: Colors.gray,
              }}
            >
              {moment(tripContext?.startDate).format("DD MMM YYYY")} -{" "}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 18,
                color: Colors.gray,
              }}
            >
              {moment(tripContext?.endDate).format("DD MMM YYYY")}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 18,
              color: Colors.gray,
              marginTop: 5,
            }}
          >
            {tripContext?.traveler?.icon} {tripContext?.traveler?.title}
          </Text>

          {/* Flight Info */}
          <FlightInfo flightData={tripData?.travelPlan?.flight} />

          {/* Hotels List */}
          <HotelList
            hotelList={tripData?.travelPlan?.hotel}
            destination={tripData?.travelPlan?.location}
          />

          {/* Day Wise plan */}
          <PlannedTrip details={tripData?.travelPlan?.dayPlan} />
        </View>
      </ScrollView>
    )
  );
}
