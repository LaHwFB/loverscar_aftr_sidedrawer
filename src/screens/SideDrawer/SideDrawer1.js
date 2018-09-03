import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

//library imports
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

//custom files
import AppStackNavigator from './AppStackNavigator'
import AuthScreen from '../AuthScreen/AuthScreen'
import HomeScreen from "../HomeScreen/HomeScreen";


class SideDrawer extends Component {

  render() {
    return (
      DrawerNavigator({

        // For each screen that you can navigate to, create a new entry like this:
        Home: {
          screen: HomeScreen,
        },
        Settings: {
          screen: AuthScreen
        }
      },
        {
          initialRouteName: 'Home',
          drawerPosition: 'left',
          contentComponent: CustomDrawerContentComponent,
          drawerOpenRoute: 'DrawerOpen',
          drawerCloseRoute: 'DrawerClose',
          drawerToggleRoute: 'DrawerToggle'
        });
    )
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('../../assets/images/images.jpg')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

// const MyApp = DrawerNavigator({
//
//   // For each screen that you can navigate to, create a new entry like this:
//   Home: {
//     screen: HomeScreen,
//   },
//   Settings: {
//     screen: AuthScreen
//   }
// },
//   {
//     initialRouteName: 'Home',
//     drawerPosition: 'left',
//     contentComponent: CustomDrawerContentComponent,
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToggleRoute: 'DrawerToggle'
//   });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})

export default SideDrawer;
