import React from "react";
import firebase from "../db/firebase";
import FormUserData from "../components/FormUserData";

export default function CreateUserScreen(props) {
  const saveNewUser = async (user) => {
    try {
      await firebase.db.collection("users").add({
        ...user,
      });
      props.navigation.navigate("UsersList");
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return <FormUserData userData={saveNewUser} />;
}
