import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";

class App extends React.Component {
  state = {
    fname: "",
    sname: ""
  };

  submitit() {
    fetch("https://love-calculator.p.rapidapi.com/getPercentage")
      .then(data => data.json())
      .then(data2 => {
        console.log(data2);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love % Calculator"
            style={{ alignItems: "center" }}
          />
        </Appbar.Header>
        <TextInput
          label="male"
          value={this.state.fname}
          onChangeText={text => setText(text)}
        />
        <TextInput
          label="female"
          value={this.state.sname}
          onChangeText={text => setText(text)}
        />
        <Button
          icon="cards-heart"
          mode="contained"
          style={{ margin: 10 }}
          onPress={this.submitit.bind(this)}
        >
          Calculate
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
export default App;
