import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { SelectTravelerList } from "@/constants/Options";
import OptionCard from "@/components/CreateTrip/OptionCard";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectTraveler() {
  const [selectedTraveler, setSelectedTraveler] = useState({});

  const { tripData, setTripData } = useContext(CreateTripContext);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerBackTitle: "",
    });
  }, []);

  useEffect(() => {
    if (Object.keys(selectedTraveler).length > 0) {
      setTripData({
        ...tripData,
        traveler: selectedTraveler,
      });
    }
  }, [selectedTraveler]);

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
        Who's Traveling
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "outfit",
            color: Colors.gray,
          }}
        >
          Chose your travelers
        </Text>

        <FlatList
          data={SelectTravelerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              style={{
                marginVertical: 14,
              }}
            >
              <OptionCard option={item} selectedOption={selectedTraveler} />
            </TouchableOpacity>
          )}
        />
        <View
          style={{
            width: "100%",
            backgroundColor: Colors.black,
            padding: 15,
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <Link
            href="/create-trip/select-dates"
            style={{
              width: "100%",
              textAlign: "center",
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
              Continue
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
