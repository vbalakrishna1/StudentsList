import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    marginTop: 4,
    marginRight: 4,
    fontSize: 32,
    color: "#eee"
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 8
  },
  textInput: {
    width: 250,
    padding: 10,
    paddingTop: 5,
    borderBottomWidth: 1
  },
  mobileIcon: {
    alignSelf: "center",
    fontSize: 32,
    color: "#888",
    padding: 10,
    marginLeft: 10
  },
  phoneNumberInput: {
    fontSize: 18,
    width: 200,
    paddingLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa"
  },
  loginContainer: {
    marginLeft: 40,
    justifyContent: "center",
    backgroundColor: "#13ca91",
    width: 220,
    alignItems: "center",
    marginTop: 10
  }
});

export default styles;
