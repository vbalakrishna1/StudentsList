import { StyleSheet, View, StatusBar, Platform } from "react-native";

const STATUSBAR_HEIGHT = 25; //StatusBar.currentHeight;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});
