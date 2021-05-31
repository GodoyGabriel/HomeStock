import React, {useEffect} from "react";
import { View, Text } from "react-native";
import firebase from "../db/firebase";

export default function UserDetailScreen(props) {
  useEffect(() => {
    getUserById(props.route.params.userId);
  }, [props.route.params.userId]);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    console.log(`user`, user);
  };
  return (
    <View>
      <Text>UserDetailScreen</Text>
    </View>
  );
}
