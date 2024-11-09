import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Image
        source={require("./../assets/images/login.jpg")}
        style={{
          width: "100%",
          height: "65%",
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 24,
            textAlign: "center",
            marginTop: 12,
          }}
        >
          Go Tours
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            textAlign: "center",
            color: Colors.gray,
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driven insights."
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/sign-in")}
        >
          <Text
            style={{
              fontFamily: "outfit",
              color: Colors.white,
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -30,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },

  button: {
    padding: 15,
    backgroundColor: Colors.black,
    borderRadius: 100,
    marginTop: "20%",
  },
});
