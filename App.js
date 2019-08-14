import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './src/Login'
import { Provider} from 'react-redux';
import {AppStore} from './src/Redux/Store';

const store=AppStore()
export default function App() {
  return (
    <View style={styles.container}>
    <Provider store={store}>
    <Login {...this.props}/>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
