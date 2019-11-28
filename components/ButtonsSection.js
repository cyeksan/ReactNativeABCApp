import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Colors from '../constants/colors';

export default class ButtonsSection extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 0.1,
          backgroundColor: 'transparent',
          margin: 20,
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity disabled={this.props.disabledPrevious} style={{flex: 1.5, marginHorizontal: 5}}  onPress={this.props.onPrevious}>
            <View
              style={{
                backgroundColor: '#10B308',
                height: 40,
                borderRadius: 8,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, color: 'white', alignSelf: 'center'}}>
                Previous
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity disabled={this.props.disabledPlayAgain} style={{flex: 2, marginHorizontal: 5}} onPress={this.props.onPlayAgain}>
          <View
              style={{
                backgroundColor: '#22D7A0',
                height: 40,
                borderRadius: 8,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, color: 'white', alignSelf: 'center'}}>
                Play Again
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity disabled={this.props.disabledNext} style={{flex: 1.5, marginHorizontal: 5}} onPress={this.props.onNext}>
          <View
              style={{
                backgroundColor: '#2261D7',
                height: 40,
                borderRadius: 8,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, color: 'white', alignSelf: 'center'}}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
