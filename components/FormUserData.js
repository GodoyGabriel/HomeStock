import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function FormUserData(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const changeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const submitForm = () => {
    if(state.name === '' || state.email === '' || state.phone === ''){
      Alert.alert("Completa todos los campos");
    } else {
      props.userData(state)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name user"
          onChangeText={(value) => changeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email user"
          onChangeText={(value) => changeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone user"
          onChangeText={(value) => changeText("phone", value)}
        />
      </View>
      <View>
        <Button title="Save user" onPress={submitForm} />
      </View>
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
