import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { CreateTripContext } from "@/context/CreateTripContext";
import { Colors } from "@/constants/Colors";
import moment from "moment";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);

  console.log(tripData);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerBackTitle: "",
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 100,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Trip Details
      </Text>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "outfit-medium",
            color: Colors.gray,
          }}
        >
          Please review your trip details before proceeding.
        </Text>

        {/* Destination Info */}
        <View
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            📍
          </Text>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit",
                color: Colors.gray,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "outfit-medium",
                marginTop: 5,
              }}
            >
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

        {/* Date Info */}
        <View
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            📅
          </Text>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit",
                color: Colors.gray,
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "outfit-medium",
                marginTop: 5,
              }}
            >
              {moment(tripData?.startDate).format("DD MMM")} -{" "}
              {moment(tripData?.endDate).format("DD MMM")}
              {"  "}({tripData?.totalDays} days)
            </Text>
          </View>
        </View>

        {/* Traveler Info */}
        <View
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            {tripData?.traveler?.icon}
          </Text>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit",
                color: Colors.gray,
              }}
            >
              Traveler
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "outfit-medium",
                marginTop: 5,
              }}
            >
              {tripData?.traveler?.title} ({tripData?.traveler?.people})
            </Text>
          </View>
        </View>

        {/* Budget Info */}
        <View
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
            }}
          >
            {tripData?.budget?.icon}
          </Text>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit",
                color: Colors.gray,
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "outfit-medium",
                marginTop: 5,
              }}
            >
              {tripData?.budget?.title}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        // onPress={onClickContinue}
        style={{
          backgroundColor: Colors.black,
          padding: 15,
          borderRadius: 15,
          marginTop: 60,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.white,
            fontSize: 20,
            fontFamily: "outfit-medium",
          }}
        >
          Generate Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
