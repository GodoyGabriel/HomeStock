import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import firebase from "../db/firebase";
import FormUserData from '../components/FormUserData';

export default function UserDetailScreen(props) {
  const [user, setUser] = useState({})
  useEffect(() => {
    getUserById(props.route.params.userId);
  }, [props.route.params.userId]);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const userDB = doc.data();
    setUser(userDB);
  };
  return (
    <FormUserData existUser={user}/>
  );
}
