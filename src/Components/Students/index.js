//Lib Imports
import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import { connect } from 'react-redux';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

//Local Imports
import AddStudent from './AddStudent';
import styles from './styles';
import Tile from './Tile';


class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      index: "",
      editText: [],
      editmode: false,
    }
  }
  _keyExtractor = (item, index) => index.toString();
  setModalVisibility = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      editmode: false,
      editText: []
    })
  }
  assignIndex = async (index, value) => {
    await this.setState({ index: index, modalVisible: !this.state.modalVisible, editText: value, editmode: true })
  }
  _renderItem = ({ item, index }) => {
    return (
      <View >
        <Tile item={item} index={index} assignIndex={this.assignIndex} />
      </View>
    )
  }

  render() {
    let {students}=this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#e9ebee" }}>
        <View
          style={{
            backgroundColor: "#13ca91",
            padding: 13,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white"
            }}
          >
            Students Information
          </Text>
        </View>
        <View>
          <View style={styles.productContainer}>
            <Text style={styles.activityHeaderText}>Student Details</Text>
            <View>
              <TouchableOpacity
                onPress={() => this.setModalVisibility()}
                style={[
                  styles.addContainer,
                  { backgroundColor: "#13ca91" }
                ]}
              >
                <Icon name="plus-circle" style={styles.plusIcon} />
                <Text style={styles.addButton}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
          {students.length > 0 ? (
            <ScrollView keyboardShouldPersistTaps="always">
              <FlatList
                data={students}
                extraData={this.props}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
              />
            </ScrollView>
          ) : (<View style={{justifyContent:'center',alignItems:'center'}}>
            <Text>
              No student information
            </Text>
            </View>
          )}
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={this.setModalVisibility}
          >
            <AddStudent
              index={this.state.index}
              editText={this.state.editText}
              editmode={this.state.editmode}
              setModalVisibility={this.setModalVisibility}
              studentsList={this.props.students}
            />
          </Modal>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    let students=state.StudentReducer.students.filter(student=> student.Status === 'Active')
  return {
    students,
  }
}

export default connect(mapStateToProps)(Students);
