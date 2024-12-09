import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "@/components/MyTrips/StartNewTripCard";
import { useRouter } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "@/config/firebase-config";
import UserTripsList from "@/components/MyTrips/UserTripsList";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth?.currentUser;

  useEffect(() => {
    user && getMyTrips();
  }, [user]);

  const getMyTrips = async () => {
    setUserTrips([]);
    setLoading(true);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserTrips((prev) => [...prev, doc.data()]);
    });
    setLoading(false);
  };
  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 60,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
          }}
        >
          MyTrips
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/create-trip/search-place")}
        >
          <Ionicons name="add-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>
      {
        loading && <ActivityIndicator size="large" color={Colors.black} style={{
          marginTop: 50
        }}/>
      }
      {userTrips?.length === 0 ? <StartNewTripCard /> : <UserTripsList userTrips={userTrips} />}
      <View style={{ height: 100 }}/>
    </ScrollView>
  );
}
