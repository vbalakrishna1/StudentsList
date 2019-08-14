import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import styles from './styles';

const ModalHeader = props => {
    return (
      <View style={[styles.addressHead, { backgroundColor: props.color }]}>
        <View>
          <TouchableOpacity onPress={props.onClose}>
            <Icon name="arrow-left" style={styles.backButton} />
          </TouchableOpacity>
        </View>
        <Text style={styles.modalHeaderTitle}>{props.title}</Text>
        {props.editmode ? (
          <View style={{ marginRight: 5 }}>
            <Icon
              name="delete"
              color="white"
              size={20}
              onPress={() => props.onDelete()}
            />
          </View>
        ) : null}
        <TouchableOpacity onPress={props.onSave}>
          <Text style={styles.saveText}> Save</Text>
        </TouchableOpacity>
      </View>
    );
}

export default ModalHeader;