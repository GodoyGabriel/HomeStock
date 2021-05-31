import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonGroup } from "react-native-elements";

export default function Home() {
const [selectedIndex, setselectedIndex] = useState(null)
  const buttons = ["Hello", "World", "Buttons"];
  const updateIndex = (selectedIndex) =>  {
    //this.setState({selectedIndex})
  }
  return (
    <View style={styles.container}>
      <ButtonGroup
      style={styles.titleWrapper}
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 100, justifyContent: "center" }}
      />
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
  },
  titleWrapper: {

  },
  inputWrapper: {

  },
  contentContainer: {
      flex: 1 // pushes the footer to the end of the screen
  },
  footer: {
      height: 100
  }
});