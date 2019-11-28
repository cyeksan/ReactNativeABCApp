import React from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import Colors from '../constants/colors';

export default class BottomSection extends React.Component {
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
        <View style={{flexDirection: 'row', flex: 1}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}>
            <Image
              source={{uri: this.props.image}}
              onLoad={this.props.imageLoadEnd}
              style={{
                alignSelf: 'center',
                resizeMode: 'center',
                width: '90%',
                position: 'absolute',
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
              }}></Image>

            <ActivityIndicator
              size={50}
              color="purple"
              style={{
                position: 'absolute',
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                color: 'purple',
                alignSelf: 'center',
              }}
              animating={this.props.animatingIndicator}
            />
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            disabled={this.props.disabledWordName}
            onPress={this.props.onWordClick}>
            <Text
              style={{
                color: 'white',
                fontSize: 26,

                flex: 1,
                textAlign: 'center',
              }}>
              {this.props.word}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
