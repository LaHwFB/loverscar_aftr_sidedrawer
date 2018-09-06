import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from '../../components/stylecomp/DefaultInput/DefaultInput';
import ButtonBackground from '../../components/stylecomp/ButtonBackground/ButtonBackground';
import HeadingText from '../../components/stylecomp/HeadingText/HeadingText';

class Forgetpass extends Component{

  mdp = () =>{
    console.log('yeahhhh');
  }

  GoToHome = () => {
    startMainTabs();
  };

  render(){
    return(
      <View style={{backgroundColor: 'white', flex: 1}}>
        <HeadingText>Entrez votre Email pour recuperer votre mot de passe</HeadingText>
        <DefaultInput placeholder='Email'/>
        <ButtonBackground color='#3862a5' onPress={this.GoToHome}>
        Recuperer mdp
        </ButtonBackground>
      </View>

    )
  }
};

export default Forgetpass;
