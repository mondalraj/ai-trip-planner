import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { CreateTripContext } from "@/context/CreateTripContext";
import { Colors } from "@/constants/Colors";
import { SelectBudgetOptions } from "@/constants/Options";
import OptionCard from "@/components/CreateTrip/OptionCard";

export default function SelectBudget() {
  const [selectedOption, setSelectedOption] = useState({});
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerBackTitle: "",
    });
  }, []);

  useEffect(() => {
    if (Object.keys(selectedOption).length > 0) {
      setTripData({
        ...tripData,
        budget: selectedOption,
      });
    }
  }, [selectedOption]);

  const onClickContinue = () => {
    if (Object.keys(selectedOption).length === 0) {
      if (Platform.OS === "android") {
        ToastAndroid.show("Please select your budget.", ToastAndroid.LONG);
      } else {
        Alert.alert("Missing Info", "Please select your budget.");
      }
      return;
    }
    router.push("/create-trip/review-trip");
  };

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
        Budget
      </Text>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "outfit-medium",
            color: Colors.gray,
          }}
        >
          Choose spending habits for your trip
        </Text>

        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item)}
              style={{
                marginVertical: 14,
              }}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={onClickContinue}
        style={{
          backgroundColor: Colors.black,
          padding: 15,
          borderRadius: 15,
          marginTop: 20,
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
      </TouchableOpacity>
    </View>
  );
}
