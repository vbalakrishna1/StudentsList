import {
    StyleSheet,
    Dimensions,
    Platform
  } from 'react-native';
  
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  const window = Dimensions.get('window');
  
  export const IMAGE_HEIGHT = window.width / 2;
  export const IMAGE_HEIGHT_SMALL = window.width / 7;
  export const INPUT_WIDTH = window.width;
  
  const styles = StyleSheet.create({
    buttonRender: {
      paddingTop: 20,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      flex: 5
    },
    buttonRenderIcon: {
      color: 'white',
      fontSize: 25
    },
    backButton: {
      fontSize: 25,
      color: 'white'
    },
    addContainer: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 50
    },
    productContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between",
      paddingHorizontal: 10,
      backgroundColor:'#fff',
      margin:5
    },
    plusIcon: {
      fontSize: 16,
      color: '#fff',
      marginRight: 5
    },
    addButton: {
      color: '#fff'
    },
    productTailcontainer: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      flex: 1
    },
    productName: {
      fontSize: 13,
    },
    italicType: {
      color: 'grey',
      fontStyle: 'italic',
      fontSize: 13
    },
    activityHeaderText: {
      color: '#777',
      fontSize: 16,
      paddingVertical: 10,
      borderColor: '#DDDADA',
      fontWeight: '400',
    },
    addressHead: {
      alignItems: 'center', flexDirection: 'row', padding: 13,
    },
    saveText: {
      color: "#fff",
      fontSize: 16,
    },
    addproductcontainer: {
      flex: 1,
      backgroundColor: "#eee"
    },
    productCategory: {
      flexDirection: 'row'
    },
    totalcost: {
      fontSize: 13
    },
    detailStyle: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    calendarIcon: {
      fontSize: 20,
      color: '#ddd',
      paddingHorizontal: 8,
      paddingVertical: 8,
    },
    deleteContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: "space-between",
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#EEE',
      padding: 10,
      height: 56
    },
    bidButton: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    bidHeader: {
      color: '#fff',
      fontSize: 15
    },
    attachmentIcon: {
      fontSize: 25,
      transform: [{ rotate: '45deg' }]
    },
    productAttachmentContainer: {
      flex: 1,
      backgroundColor: '#000'
    },
    imageContainer: {
      height: (deviceHeight - 65),
      width: deviceWidth
    },
    attachments: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    activityIndicatorstyle: {
      marginLeft: 'auto'
    },
    attachmentStyle: {
      flexDirection: 'row',
      marginBottom: 5,
      alignItems: 'center',
      borderRadius: 2,
    },
    noteHeading: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderBottomColor:'#eee',
      borderBottomWidth:1,
    },
    modalContainerView: {
      flex: 1
    },
    contentContainer: {
      paddingHorizontal: 10,
      borderRadius: 2
    },
    attachmentContainer: {
      backgroundColor: '#8F8C8C',
      marginHorizontal: 5,
      marginTop: 10
    },
    numberingView: {
      borderRadius: 15,
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 4,
      marginRight: 8
    },
    Bodycard: {
      backgroundColor: '#fff',
      margin: 5,
      marginVertical: 2,
      marginTop: 5,
      elevation: 1,
    },
    label: {
      paddingHorizontal: 8,
      fontSize:16,
    },
    input: {
      marginLeft:8,
      flex:1,
      fontSize: 13,
      borderBottomWidth: 1,
      borderBottomColor: '#aaa'
    },
    modalHeaderTitle:{
      fontSize:16,
      flex:1,
      color:'#fff',
      marginLeft:5
    },
    fixedPosition:{
      bottom:0,
      position:'absolute',
      right:0
    },
    todosToggleIcon: {
      fontSize: 30,
      paddingHorizontal: 5,
      color: '#777'
  },
  todosToggleText: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth:1,
      borderColor: '#eee',
  },
  addProductHeaders:{
    color: '#777',
  },
  importantFields:{
    color:'red'
  },
  radioGroup:{
    flexDirection: 'row',
    marginLeft:8 
  },
  moreDetails:{
      paddingHorizontal: 8,
      paddingVertical: 10,
      borderBottomColor:'#eee',
      borderBottomWidth:1,
      marginBottom: 4,
      flex:1
  },
  picker:{
    height:10,
    marginBottom:6
  }
  })
  
  export default styles;