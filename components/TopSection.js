import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Colors from '../constants/colors';

export default class TopSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 0.4,
          backgroundColor: Colors.optionBg,
          margin: 20,
          justifyContent: 'center',
        }}>
        <TouchableOpacity disabled={this.props.disabled} onPress={this.props.onLetterClick}>
          <Text style={{alignSelf: 'center', color: 'white', fontSize: 120}}>
            {this.props.letter}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
