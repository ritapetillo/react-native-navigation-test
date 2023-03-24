import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useCallback, useEffect, useState } from "react";

//regex for diffrient input fields
const fnameRE = /^[a-zA-Z]+$/;
const lnameRE = /^[a-zA-Z]+$/;
const numRE =
  /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
const mailRE =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//const pass = ;
//const zip = ;

// utility function to validate input fields that takes in the name of the input field and the value of the input field
// we don't insert it in the component because we don't want to re-create the function every time the component re-renders
// this is an utility function that could be also written in another file and imported in this component
const validateInput = (name, value) => {
  // we use a switch statement to check the name of the input field and return the error message in case of an error.
  // if there is no error, we return an empty string
  switch (name) {
    case "firstname":
      return fnameRE.test(value) ? "" : "Invalid First Name";
    case "lastname":
      return lnameRE.test(value) ? "" : "Invalid Last Name";
    case "phonenum":
      return numRE.test(value) ? "" : "Invalid Phone Number";
    case "mail":
      return mailRE.test(value) ? "" : "Invalid Email";
    default:
      return "";
  }
};

export default function Register({ navigation }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenum, setPhoneNum] = useState("");
  const [mail, setMail] = useState("");

  const validateAll = useCallback(() => {
    let errors = [];
    // validate each input field and push the error message to the errors array in case of an error
    errors.push(validateInput("firstname", firstname));
    errors.push(validateInput("lastname", lastname));
    errors.push(validateInput("phonenum", phonenum));
    errors.push(validateInput("mail", mail));

    // filter the errors array to remove the empty strings (the ones that don't have errors)
    errors = errors.filter((error) => error !== "");

    // if the filtered errors array is not empty, it means that there are errors and we want to view them in an alert
    if (errors.length) {
      // return all the errors
      alert(errors.join(""));
      // by returning here, we stop the execution of the function and we don't go to the next line where we show the alert "Registration Successful"
      return;
    }
    // if we get here, it means that there are no errors (we skipped the condition before) and we can show the alert "Registration Successful"
    alert("Registration Successful");
    navigation.navigate("Login");
  }, [firstname, lastname, phonenum, mail]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inputfield}>
          <TextInput
            style={styles.input}
            placeholder="firstname"
            testID="firstname"
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="lastname"
            testID="lastname"
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            testID="username"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            testID="phonenumber"
            onChangeText={setPhoneNum}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            testID="password"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            testID="confirmpassword"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            testID="email"
            onChangeText={setMail}
          />
          <TextInput style={styles.input} placeholder="Zip Code" testID="zip" />
          <Button title="Register" color={"white"} onPress={validateAll} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgray",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "lightgray",
    //borderColor: 'black',
    //borderWidth: 1,
    borderRadius: 25,
    width: 350,
    marginTop: 10,
    marginBottom: 10,
  },
  inputfield: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});
