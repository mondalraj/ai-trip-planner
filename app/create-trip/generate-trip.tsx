import { View, Text, Animated } from "react-native";
import React, { useContext, useEffect, useRef } from "react";
import { Colors } from "@/constants/Colors";
import { CreateTripContext } from "@/context/CreateTripContext";
import { AI_PROMPT } from "@/constants/Options";
import { chatSession } from "@/config/ai-model";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase-config";

export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);

  const user = auth.currentUser;
  const fadeAnim = useRef(new Animated.Value(0.5)).current;

  const router = useRouter();

  useEffect(() => {
    generateAITrip();
  }, []);

  const generateAITrip = async () => {
    const FINAL_PROMPT = AI_PROMPT.replaceAll(
      "{destination}",
      tripData?.locationInfo?.name
    )
      .replaceAll("{totalDays}", tripData.totalDays)
      .replaceAll("{startDate}", tripData.startDate)
      .replaceAll("{traveler}", tripData.traveler.title)
      .replaceAll("{budget}", tripData.budget.title);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    const tripResponse = JSON.parse(result.response.text());

    const docId = Date.now()?.toString();

    await setDoc(doc(db, "UserTrips", docId), {
      docId,
      createdAt: new Date(),
      userEmail: user?.email,
      tripData: tripResponse,
      context: tripData,
    });

    router.push("/mytrip");
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

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
          textAlign: "center",
        }}
      >
        Please wait...
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-medium",
          marginTop: 30,
          textAlign: "center",
          color: Colors.black,
        }}
      >
        We are working on generating your trip.
      </Text>

      <Animated.Image
        source={require("@/assets/images/plane.jpg")}
        style={{
          width: 200,
          height: 200,
          marginTop: 100,
          objectFit: "cover",
          borderRadius: 150,
          alignSelf: "center",
          opacity: fadeAnim,
        }}
      />

      <Text
        style={{
          fontSize: 16,
          fontFamily: "outfit",
          marginTop: 20,
          textAlign: "center",
          color: Colors.gray,
        }}
      >
        Do not go back, this may take a few seconds.
      </Text>
    </View>
  );
}
