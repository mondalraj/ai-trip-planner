import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Touchable,
  ToastAndroid,
  Platform,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase-config";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleSignUp = () => {
    if (!email || !password || !fullName) {
      console.log("Please enter all details.");
    if (Platform.OS === 'android') {
      ToastAndroid.show("Please enter all details.", ToastAndroid.LONG);
    } else {
      Alert.alert("Missing Info", "Please enter all details.");
    }
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.replace("/mytrip");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
        Create New Account
      </Text>
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter Full name"
          style={styles.input}
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View>
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
        onPress={handleSignUp}
      >
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.white,
            textAlign: "center",
            fontSize: 18,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 15,
          borderRadius: 15,
          backgroundColor: Colors.white,
          marginTop: 20,
          //   borderWidth: 1,
        }}
      >
        <Text
          onPress={() => router.replace("/auth/sign-in")}
          style={{
            fontFamily: "outfit",
            color: Colors.gray,
            textAlign: "center",
            fontSize: 16,
          }}
        >
          Already have an account? Sign In
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
