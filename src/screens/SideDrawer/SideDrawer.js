import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import AuthScreen from '../AuthScreen/AuthScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import Voitures from '../Voitures/Voitures';

class SideDrawer extends Component {

    constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    // GoToLogScreen = () => {
    //   //HomeScreen();
    //   //this.toggleDrawer();
    //   // this.props.navigator.popToRoot({
    //   //   title: 'Auth',
    //   //   link: 'loverscar.HomeScreen'
    //   // });
    //   this.props.navigator.showModal({
    //     screen: "loverscar.HomeScreen", // unique ID registered with Navigation.registerScreen
    //     title: "AuthScreen", // title of the screen as appears in the nav bar (optional)
    //     passProps: {}, // simple serializable object that will pass as props to the modal (optional)
    //     navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    //     animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    //   });
    // }
    onContactSelected = contactID => {
  //     this.props.navigator.handleDeepLink({
  //   link: 'chats/' + contactID,
  //   payload: '' // (optional) Extra payload with deep link
  // });
  console.log(contactID);
}
    onNavigatorEvent = event => {
      if (event.type == 'DeepLink') {
        console.log('DeepLink');
      }
    };

    // toggleDrawer(){
    //   this.props.navigator.toggleDrawer({
		// 	to: 'closed',
		// 	side: 'left',
		// 	animated: true
    // });
    // };

    render () {
        return (
           <ScrollView style={[
             styles.container,
             { width: Dimensions.get("window").width * 0.8 }
           ]}>

              <View style={styles.drawerHeader}>
              <ImageBackground
              source={require('../../assets/images/images.jpg')}
              style={styles.img} >
                <View style={styles.drawerHeaderTextContainer}>
                  <Text style={[styles.drawerHeaderText ,  {textDecorationLine: 'none',fontWeight: '700'}]}>/</Text>
                </View>
              </ImageBackground>
              </View>

              <TouchableOpacity style={styles.menuItem} onPress={this.GoToLogScreen}>
              <Icon size={30} name='md-log-in' color='black' />
              <Text style={styles.textSide}>Log in / Sign in</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
              <Icon size={30} name='ios-help-circle-outline' color='black' />
              <Text style={styles.textSide}>About Us</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
              <Icon size={30} name='ios-people' color='black' />
              <Text style={styles.textSide}>Contact Us</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
              <Icon size={30} name='md-share' color='black' />
              <Text style={styles.textSide}>Invite Friends</Text>
              </TouchableOpacity>

           </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: "white",
     flex: 1
  },
  drawerHeader: {
    width: Dimensions.get("window").width * 0.8,
    height: 200
  },
  menuItem: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 30
  },
  textSide: {
    fontSize: 20,
    fontWeight: '200',
    marginLeft: 30
  },
  img: {
     width: '100%',
     height: '100%'
  },
  drawerHeaderTextContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    paddingLeft: 25
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    paddingTop: 155,
    paddingLeft: 20,
    textDecorationLine: 'underline'
  }
});

export default SideDrawer;
