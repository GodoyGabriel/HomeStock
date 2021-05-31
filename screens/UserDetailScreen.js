import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import firebase from "../db/firebase";
import FormUserData from "../components/FormUserData";
import { ActivityIndicator } from "react-native";

export default function UserDetailScreen(props) {
  const userId = props.route.params.userId;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(userId);
  }, [userId]);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();

    const userDB = doc.data();
    setUser({ ...userDB});
    setLoading(false);
  };

  const deleteUser = async () => {
    setLoading(true);
    const dbRef = firebase.db.collection("users").doc(userId);
    await dbRef.delete();
    setLoading(false);
    props.navigation.navigate("UsersList");
  };

  const confirmationDelete = () => {
    Alert.alert("Remove the user", "Are you sure?", [
      { text: "Yes", onPress: () => deleteUser },
      { text: "No", onPress: () => Alert.alert("Cancelado") },
    ]);
  };

  const updateUser = async (userData) => {
    setLoading(true);
    const dbRef = firebase.db.collection("users").doc(userId);
    await dbRef.set(userData);
    setLoading(false);
    props.navigation.navigate("UsersList");
  }

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#9e9e9e" />
      </View>
    );
  }
  return <FormUserData existUser={user} deleteUser={confirmationDelete} saveUser={updateUser}/>;
}
