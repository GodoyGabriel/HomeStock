import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import fireLogo from "../assets/fire.png";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult === false) {
      Alert.alert("Permission to access camera is required");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
    console.log("pickerResult :>> ", pickerResult);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Stock</Text>
      {/* <Image source={fireLogo} style={styles.img} /> */}
      <Image
        source={!selectedImage ? fireLogo : { uri: selectedImage.localUri }}
        style={styles.img}
      />
      <Button
        onPress={() => Alert.alert("Simple Button pressed")}
        title="To access"
        color="#841584"
      />
      <TouchableOpacity onPress={openImagePicker} style={styles.button}>
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: "#fff" },
  img: { height: 200, width: 200, borderRadius: 100, resizeMode: "contain" },
  button: { backgroundColor: "darkturquoise", padding: 7 },
  buttonText: { color: "black" },
});
