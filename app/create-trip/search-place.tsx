import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SearchPlace() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const navigation = useNavigation();
  const router = useRouter()

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerBackTitle: "Trips",
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
      <GooglePlacesAutocomplete
        placeholder="Search Destination..."
        fetchDetails={true}
        onPress={(data, details: any = null) => {
          if (data && details && details?.photos) {
            setTripData({
              locationInfo: {
                name: data?.description,
                coordinates: details?.geometry?.location,
                photoRef: details?.photos[0]?.photo_reference,
                url: details?.url,
              },
            });
            router.push("/create-trip/select-traveler");
          }
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderColor: Colors.gray,
            borderRadius: 5,
            marginTop: 25,
          }
        }}
      />
    </View>
  );
}
