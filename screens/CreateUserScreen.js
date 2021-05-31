import React, {useState} from "react";
import firebase from "../db/firebase";
import FormUserData from "../components/FormUserData";
import { ActivityIndicator, View } from "react-native";

export default function CreateUserScreen(props) {
  const [loading, setLoading] = useState(false);
  const saveNewUser = async (user) => {
    try {
      setLoading(true);
      await firebase.db.collection("users").add({
        ...user,
      });
      setLoading(false);
      props.navigation.navigate("UsersList");
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#9e9e9e" />
      </View>
    );
  }
  return <FormUserData saveUser={saveNewUser} />;
}
