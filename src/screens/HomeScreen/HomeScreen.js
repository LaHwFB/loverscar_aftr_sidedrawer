import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, StyleSheet} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/stylecomp/DefaultInput/DefaultInput';
import ButtonBackground from '../../components/stylecomp/ButtonBackground/ButtonBackground';
import HeadingText from '../../components/stylecomp/HeadingText/HeadingText';

class HomeScreen extends Component {
  state = {
    showInput: false
  };

  constructor(props) {
  super(props);
  this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
}

onNavigatorEvent = event => {
  if (event.type === "NavBarButtonPress") {
    if (event.id === "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left"
      });
    }
  }
};

    GoToHome = () => {
      startMainTabs();
    };

    Createaccount = () => {
      this.setState({
        showInput: true
      })
    };

    render () {
        let LogSign= this.state.showInput===true ? styles.signin : styles.login;

        return (
              <View>
                <HeadingText>Veuillez vous connecter </HeadingText>
                <DefaultInput placeholder='Email'/>
                <DefaultInput placeholder='Password' />
                <DefaultInput placeholder='ConfirmPassword' style={LogSign}/>
                <ButtonBackground color='#3862a5' onPress={this.GoToHome}>
                Connexion
                </ButtonBackground>
                <View>
                  <TouchableOpacity style={styles.touch} onPress={()=>alert('forgot pass')}>
                    <Text style={styles.forgot}>Forgot password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.touch} onPress={this.Createaccount}>
                    <Text style={styles.forgot}>Creer votre compte</Text>
                  </TouchableOpacity>
                </View>
              </View>
        );
    }
}

const styles = StyleSheet.create({
  forgot: {
    marginTop: 15,
    marginLeft: 15,
    textDecorationLine: 'underline',
    color: '#0d3a82'
  },
  testinput: {
    width: '95%',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    margin: 10
  },
  touch:{
    alignSelf: 'flex-start'
  },
  login:{
    display: 'none'
  },
  signin: {
    width: '95%',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    margin: 10
  }
});

export default HomeScreen;
