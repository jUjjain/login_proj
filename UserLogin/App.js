/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const App: () => React$Node = () => {
  const [isDashboard, setDashboard] = useState(true)
  return isDashboard ? <DashBoard validated={setDashboard} /> : <Login validated={setDashboard} />
};
const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const validUser = useSelector(state => state).userReducer.validUser;
  const validate = () => {
    if (username === validUser.username && password === validUser.password) {
      props.validated(true)
    } else {
      alert("Error")
    }
  }
  return <View style={{ flex: 1 }}>
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Login</Text>
      <View style={{ height: 30 }} />
      <TextInput style={style.textInput} onChangeText={setUserName} placeholder={"User Name"} />
      <View style={{ height: 10 }} />
      <TextInput style={style.textInput} onChangeText={setPassword} placeholder={"Password"} />
      <View style={{ height: 10 }} /></View>
    <Button title={"Login"} onPress={validate} />
  </View>
}
const DashBoard = (props) => {
  let users = useSelector(state => state).userReducer.users;
  userArray = users.map(u => [u.id, u.name, u.age, u.gender, u.email, u.phoneNo])
  return <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <Text style={{ textAlign: 'center', paddingTop: 20, fontWeight: 'bold', fontSize: 18 }}>DashBoard of Employees.</Text>
    <ScrollView><View style={style.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={["Id", "Name", "Age", "Gender", "Email", "Phone No."]} style={style.head} textStyle={style.text} />
        <Rows data={userArray} textStyle={style.text} />
      </Table>
    </View>
    </ScrollView>
    <Button title={"Logout"} onPress={() => props.validated(false)} />
  </View>
}
const style = StyleSheet.create({
  textInput: { height: 40, width: 200, borderWidth: 1, borderRadius: 10 },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

export default App;
