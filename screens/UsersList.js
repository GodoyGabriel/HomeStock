import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import firebase from "../db/firebase";
import { ListItem, Avatar } from "react-native-elements";

const UsersList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const usersDB = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        usersDB.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setUsers(usersDB);
    });
  }, []);
  return (
    <ScrollView>
      <Button
        title="Create user"
        onPress={() => props.navigation.navigate("CreateUserScreen")}
      />
      {
        users.map(user => {
          return (
            <ListItem key={user.id} bottomDivider onPress={() => {
              props.navigation.navigate('UserDetailScreen', {
                userId: user.id
              })
            }}>
              <ListItem.Chevron/>
              <Avatar source={{uri: "https://picsum.photos/200/300"}} rounded/>
              <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem> 
          )
        })
      }
    </ScrollView>
  );
};

export default UsersList;
