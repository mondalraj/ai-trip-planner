import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import { GetPhotoRef } from "@/services/GooglePlaceApi";

export default function HotelCard({
  item,
  destination,
}: {
  item: any;
  destination: string;
}) {
  const [photoRef, setPhotoRef] = React.useState<string | null>(null);
  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(`${item?.location}`);

    setPhotoRef(result);
  };

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);
  return (
    <View
      style={{
        marginTop: 20,
        marginRight: 15,
        borderWidth: 2,
        borderColor: Colors.light_gray,
        padding: 10,
        borderRadius: 10,
        width: 245,
      }}
    >
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_API_KEY}`,
        }}
        style={{
          width: 220,
          height: 140,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
            marginTop: 7,
          }}
        >
          {item.name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 8,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 16,
              color: Colors.gray,
            }}
          >
            <Entypo name="location-pin" size={20} color="black" />{" "}
            {item.location}
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 16,
              color: Colors.gray,
            }}
          >
            ⭐ {item.rating}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            color: Colors.gray,
          }}
        >
          💰 {item.price}
        </Text>

        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            color: Colors.gray,
            marginTop: 10,
          }}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );
}
