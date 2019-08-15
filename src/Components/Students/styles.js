import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backButton: {
    fontSize: 25,
    color: "white"
  },
  addContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    margin: 5
  },
  plusIcon: {
    fontSize: 16,
    color: "#fff",
    marginRight: 5
  },
  addButton: {
    color: "#fff"
  },

  activityHeaderText: {
    color: "#777",
    fontSize: 16,
    paddingVertical: 10,
    borderColor: "#DDDADA",
    fontWeight: "400"
  },
  addressHead: {
    alignItems: "center",
    flexDirection: "row",
    padding: 13
  },
  saveText: {
    color: "#fff",
    fontSize: 16
  },
  addproductcontainer: {
    flex: 1,
    backgroundColor: "#eee"
  },
  detailStyle: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  calendarIcon: {
    fontSize: 20,
    color: "#ddd",
    paddingHorizontal: 8,
    paddingVertical: 8
  },

  modalContainerView: {
    flex: 1
  },

  Bodycard: {
    backgroundColor: "#fff",
    margin: 5,
    marginVertical: 2,
    marginTop: 5,
    elevation: 1
  },
  label: {
    paddingHorizontal: 8,
    fontSize: 16,
    fontWeight:'bold'
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa"
  },
  modalHeaderTitle: {
    fontSize: 16,
    flex: 1,
    color: "#fff",
    marginLeft: 5
  },
  importantFields: {
    color: "red"
  }
});

export default styles;
