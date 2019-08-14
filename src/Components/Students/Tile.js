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
        <Text style={styles.label}>Name : {item.Name}</Text>
        <Text style={styles.label} numberOfLines={1} ellipsizeMode="tail" >Specialization : {item.Specialization}</Text>
        <Text style={styles.label}>Education : {item.Education}</Text>
      </TouchableOpacity>
    );
  }
}

