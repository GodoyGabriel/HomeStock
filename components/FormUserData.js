import React, { useState, useEffect } from "react";
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";

export default function FormUserData(props) {
  const { existUser } = props;
  const [state, setState] = useState({
    name: existUser ? existUser.name : "",
    email: existUser ? existUser.email : "",
    phone: existUser ? existUser.phone : "",
  });

  useEffect(() => {
    if (existUser) {
      setState(existUser);
    }
  }, [existUser]);

  const changeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const submitForm = () => {
    if (state.name === "" || state.email === "" || state.phone === "") {
      Alert.alert("Completa todos los campos");
    } else {
      props.saveUser(state);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name user"
          value={state.name}
          onChangeText={(value) => changeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email user"
          value={state.email}
          onChangeText={(value) => changeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone user"
          value={state.phone}
          onChangeText={(value) => changeText("phone", value)}
        />
      </View>
      <View>
        <Button
          title={existUser ? "Update user" : "Save user"}
          color="#19AC52"
          onPress={submitForm}
        />
      </View>
      {existUser && (
        <View>
          <Button title="Delete user" color="#E37399" onPress={submitForm} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
