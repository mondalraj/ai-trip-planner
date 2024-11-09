import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment, { Moment } from "moment";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectDates() {
  const [startDate, setStartDate] = React.useState<Moment>();
  const [endDate, setEndDate] = React.useState<Moment>();

  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerBackTitle: "",
    });
  }, []);

  const onDateChange = (date: Date, type: string) => {
    if (type === "START_DATE") {
      setStartDate(moment(date));
    }
    if (type === "END_DATE") {
      setEndDate(moment(date));
    }
  };

  const OnDateSelectionContinue = () => {
    if (!startDate || !endDate) {
      if (Platform.OS === "android") {
        ToastAndroid.show("Please select travel dates.", ToastAndroid.LONG);
      } else {
        Alert.alert("Missing Info", "Please select travel dates.");
      }
    }
    const totalDays = endDate?.diff(startDate, "days") || 1;
    setTripData({
      ...tripData,
      startDate: startDate?.format("YYYY-MM-DD"),
      endDate: endDate?.format("YYYY-MM-DD"),
      totalDays: totalDays + 1,
    });
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
        Travel Dates
      </Text>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={10}
          selectedRangeStyle={{
            backgroundColor: Colors.black,
          }}
          selectedDayTextStyle={{ color: Colors.white }}
          nextComponent={
            <Ionicons name="chevron-forward" size={22} color="black" />
          }
          previousComponent={
            <Ionicons name="chevron-back" size={22} color="black" />
          }
        />
      </View>
      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        style={{
          backgroundColor: Colors.black,
          padding: 15,
          borderRadius: 10,
          marginTop: 40,
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
