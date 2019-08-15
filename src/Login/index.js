import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import {
  MaterialCommunityIcons as Icon
} from '@expo/vector-icons';
import styles from './styles'
import { connect } from 'react-redux';
import Students from '../Components/Students'
import GeneralStatusBarColor from "../Components/StatusBar";

function Login(props) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isHomepage,setisHomepage] = useState(false)
  const onSubmit = () => {
    if (props.password == password)
      setisHomepage(true)
    else alert("Please check the password")
  }
  return (
    <>
      <GeneralStatusBarColor
        backgroundColor="#13ca91"
        barStyle="light-content"
      />
      {isHomepage ? (
        <Students />
      ) : (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Icon name="account" style={styles.mobileIcon} />
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="Name"
              defaultValue={name}
              autoFocus={true}
              onChangeText={name => setName(name)}
              underlineColorAndroid="#0000"
            />
          </View>
          <View
            style={{
              marginTop: 16,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Icon name="key" style={styles.mobileIcon} />
            <TextInput
              placeholder="Password"
              style={styles.phoneNumberInput}
              maxLength={6}
              keyboardType={"phone-pad"}
              underlineColorAndroid="#0000"
              returnKeyType="go"
              onChangeText={pass => setPassword(pass)}
            />
          </View>
          <TouchableOpacity
            style={styles.loginContainer}
            onPress={() => onSubmit()}
          >
            <Text style={{ color: "white", fontSize: 16, padding: 8 }}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    password: state.StudentReducer.password,
  }
}

export default connect(mapStateToProps)(Login);

