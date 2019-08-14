import { StyleSheet, Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        // borderWidth: 1,
        marginTop: 4,
        marginRight: 4,
        fontSize: 32,
        color: '#eee',
    },
    inputContainer: {
        flexDirection: 'row',
        // borderWidth: 1, 
        marginBottom: 8,
    },
    textInput: {
        width: 250,
        padding: 10,
        paddingTop: 5,
        borderBottomWidth: 1,
    },
    mobileIcon: {
        alignSelf: 'center',
        fontSize: 32,
        color: '#888',
        padding: 10,
        marginLeft: 10,
    },
    phoneNumberInput: {
        fontSize: 18,
        width: Platform.OS === 'ios' ? 220 : 200,
        paddingLeft: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#aaa'
    },
})

export default styles;
