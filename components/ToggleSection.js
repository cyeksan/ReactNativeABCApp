import React from 'react';
import {View, Text, Switch} from 'react-native';

import Colors from '../constants/colors';


export default class ButtonsSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomLettersSwitchValue: false,
    };

  }

  
  

  render() {
    /*  console.log(
      this.state.randomLettersSwitchValue
        ? 'Random Letters Switch is ON'
        : 'Random Letters Switch is OFF',
      
    );  */
    return (
      <View
        style={{
          flex: 0.1,
          backgroundColor: 'transparent',
          margin: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Random Letters</Text>
          <Switch
            style={{marginRight: 10}}
            onValueChange={this.props.randomLettersSwitchMethod}
            value={this.props.randomLettersSwValue}></Switch>
          <Text style={{color: 'white', fontSize: 18}}>Sound</Text>
          <Switch
            onValueChange={this.props.soundSwitchMethod}
            value={this.props.soundSwValue}
            disabled={this.props.disabledSoundSwitch}></Switch>
        </View>
      </View>
    );
  }
}
