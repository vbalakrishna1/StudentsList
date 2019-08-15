import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default class Tile extends Component {
  onPress = () => {
    const {index,item} = this.props;
      this.props.assignIndex(index, item)
  }
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={{ flex: 1, backgroundColor: "white", margin: 5, padding: 7 }}
      >
        <Text style={styles.label}>
          Name : <Text style={{ fontWeight: "normal" }}>{item.Name}</Text>
        </Text>
        <Text style={styles.label} numberOfLines={1} ellipsizeMode="tail">
          Specialization :{" "}
          <Text style={{ fontWeight: "normal" }}>
            {item.Specialization}
          </Text>
        </Text>
        <Text style={styles.label}>
          Education :{" "}
          <Text style={{ fontWeight: "normal" }}>{item.Education}</Text>
        </Text>
      </TouchableOpacity>
    );
  }
}

