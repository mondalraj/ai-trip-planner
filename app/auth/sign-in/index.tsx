import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase-config";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleSignIn = () => {
    if (!email || !password) {
      console.log("Please enter all details.");
      if (Platform.OS === "android") {
        ToastAndroid.show("Please enter all details.", ToastAndroid.BOTTOM);
      } else {
        Alert.alert("Missing Info", "Please enter all details.");
      }
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.replace("/mytrip");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if(errorCode === "auth/invalid-credential") {
          if (Platform.OS === "android") {
            ToastAndroid.show("Invalid Credentials.", ToastAndroid.LONG);
          } else {
            Alert.alert("Invalid Credentials", "Please enter valid email & password.");
          }
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 60,
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          marginTop: 30,
        }}
      >
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "outfit",
          marginTop: 20,
          color: Colors.gray,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "outfit",
          marginTop: 4,
          color: Colors.gray,
        }}
      >
        You have been missed!
      </Text>

      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity
        style={{
          padding: 15,
          borderRadius: 15,
          backgroundColor: Colors.black,
          marginTop: 50,
        }}
        onPress={handleSignIn}
      >
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.white,
            textAlign: "center",
            fontSize: 18,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 15,
          borderRadius: 15,
          backgroundColor: Colors.white,
          marginTop: 20,
          borderWidth: 1,
          borderColor: Colors.gray,
        }}
      >
        <Text
          onPress={() => router.replace("/auth/sign-up")}
          style={{
            fontFamily: "outfit",
            color: Colors.black,
            textAlign: "center",
            fontSize: 16,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: "outfit",
    marginTop: 20,
    color: Colors.gray,
  },
  input: {
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.gray,
    marginTop: 6,
  },
});
