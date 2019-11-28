import React from 'react';
import {View, Alert} from 'react-native';

import TopSection from './components/TopSection';
import ButtonsSection from './components/ButtonsSection';
import Colors from './constants/colors';
import BottomSection from './components/BottomSection';
import ToggleSection from './components/ToggleSection';
import Alphabets from './data/alphabets.json';
import Sound from 'react-native-sound';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabets: Alphabets,
      currentPosition: 2,
      loading: true,
      letterSoundPlaying: false,
      wordSoundPlaying: false,
      letterSoundError: false,
      wordSoundError: false,
      soundSwitchValue: true,
      randomLettersSwitchValue: false,
    };

    this._onNext = this._onNext.bind(this);
    this._onPrevious = this._onPrevious.bind(this);
    this._onLoadEnd = this._onLoadEnd.bind(this);
    this._onPlayLetterSound = this._onPlayLetterSound.bind(this);
    this._onPlayWordSound = this._onPlayWordSound.bind(this);
    this.soundToggleSwitch = this.soundToggleSwitch.bind(this);
    this.randomLettersToggleSwitch = this.randomLettersToggleSwitch.bind(this);
  }

  _onNext = () => {
    if (this.state.currentPosition < 25) {
      if (!this.state.randomLettersSwitchValue) {
        this.setState(
          {
            currentPosition: this.state.currentPosition + 1,
            loading: true,
          },
          () => {
            this._onPlayLetterSound(true);
          },
        );
      } else {
        this.setState(
          {
            currentPosition: this.randomNumber(2, 25),
            loading: true,
          },
          () => {
            this._onPlayLetterSound(true);
          },
        );
      }
    } else {
      this.setState(
        {
          currentPosition: 0,
          loading: true,
        },
        () => {
          this._onPlayLetterSound(true);
        },
      );
    }

  };

  toast() {
    console.log(this.state.currentPosition);
  }

  _onPrevious = () => {
    if (this.state.currentPosition !== 0) {
      if (!this.state.randomLettersSwitchValue) {
        this.setState(
          {
            currentPosition: this.state.currentPosition - 1,
            loading: true,
          },
          () => {
            this._onPlayLetterSound(true);
          },
        );
      } else {
        this.setState(
          {
            currentPosition: this.randomNumber(2, 25),
            loading: true,
          },
          () => {
            this._onPlayLetterSound(true);
          },
        );
      }
    } else {
      Alert.alert(
        'Warning!',
        'You are at the first letter. Please click Next!',
      );
    }
  };

  _onLoadEnd = () => {
    this.setState({
      loading: false,
    });
  };

  _onPlayLetterSound = (both) => {
    if (this.state.soundSwitchValue) {
      const sound = new Sound(
        this.state.alphabets[this.state.currentPosition].letterSound,
        undefined,
        error => {
          if (error) {
            console.log('cansu2');
            this.setState({
              letterSoundPlaying: false,
              wordSoundPlaying: false,
            });

            Alert.alert('Error', 'Audio cannot be played!');
          } else {
            sound.play(() => {
              sound.release();

              if (both) {
                this._onPlayWordSound();
              }
              this.setState({
                letterSoundPlaying: false,
              });
            });
          }
        },
      );

      if (sound.isPlaying) {
        this.setState({
          letterSoundPlaying: true,
        });
      }
    }
  };

  _onPlayWordSound() {
    if (this.state.soundSwitchValue) {
      const sound2 = new Sound(
        this.state.alphabets[this.state.currentPosition].wordSound,
        undefined,
        error => {
          if (error) {
            console.log('cansu2');
          } else {
            sound2.play(() => {
              sound2.release();
              this.setState({
                wordSoundPlaying: false,
              });
            });
          }
        },
      );

      if (sound2.isPlaying) {
        this.setState({
          wordSoundPlaying: true,
        });
      }
    }
  }

  componentDidMount() {
    this._onPlayLetterSound(true);
  }

  soundToggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({soundSwitchValue: value});
    //state changes according to switch
    //which will result in re-render the text
  };

  randomLettersToggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({randomLettersSwitchValue: value});
    //state changes according to switch
    //which will result in re-render the text

    if (value) {
      console.log('random letters on');
    } else {
      console.log('random letters off');
    }
  };

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.appBg, margin: 20}}>
        <ToggleSection
          soundSwitchMethod={this.soundToggleSwitch}
          soundSwValue={this.state.soundSwitchValue}
          disabledSoundSwitch={
            this.state.letterSoundPlaying || this.state.wordSoundPlaying
          }
          randomLettersSwitchMethod={this.randomLettersToggleSwitch}
          randomLettersSwValue={
            this.state.randomLettersSwitchValue
          }></ToggleSection>
        <TopSection
          letter={this.state.alphabets[this.state.currentPosition].letter}
          onLetterClick={() =>
            this._onPlayLetterSound(false)
          }
          disabled={
            this.state.letterSoundPlaying || this.state.wordSoundPlaying
          }></TopSection>
        <ButtonsSection
          onNext={this._onNext}
          onPrevious={this._onPrevious}
          onPlayAgain={() =>
            this._onPlayLetterSound(true)
          }
          disabledPrevious={
            this.state.letterSoundPlaying || this.state.wordSoundPlaying
          }
          disabledPlayAgain={
            this.state.letterSoundPlaying || this.state.wordSoundPlaying
          }
          disabledNext={
            this.state.letterSoundPlaying || this.state.wordSoundPlaying
          }></ButtonsSection>
        <BottomSection
          imageLoadEnd={this._onLoadEnd}
          animatingIndicator={this.state.loading}
          image={this.state.alphabets[this.state.currentPosition].image}
          word={this.state.alphabets[this.state.currentPosition].word}
          disabledWordName={
            this.state.letterSoundPlaying || this.state.wordSoundPlaying
          }
          onWordClick={this._onPlayWordSound}></BottomSection>
      </View>
    );
  }
}
