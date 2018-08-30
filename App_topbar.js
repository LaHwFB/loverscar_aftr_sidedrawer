import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import CarList from "./src/components/CarList/CarList";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import { Navigation } from 'react-native-navigation';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import Localisation from './src/screens/Localisation/Localisation';
import Voitures from './src/screens/Voitures/Voitures';

Navigation.registerComponent('loverscar.HomeScreen', () => HomeScreen );
Navigation.registerComponent('loverscar.Localisation', () => Localisation );
Navigation.registerComponent('loverscar.SideDrawer', () => SideDrawer );

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

export default class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'cars', title: 'Voitures' },
      { key: 'locate', title: 'Ma Posiotion' },
      { key: 'test', title: 'Test' },
    ],
    // cars : [
    //   {
    //     key : Math.random(),
    //     name : 'RENAULT 404',
    //     image : {
    //       uri : "https://st.lowrider.com/uploads/sites/7/2010/10/lrmp_1012_37_o-oldies_car_club_show-chevy_belair.jpg"
    //     },
    //     portes : 'portes: 4',
    //     sieges:  'sieges: 4'
    //   },
    //   {
    //     key : Math.random(),
    //     name : 'clio 206',
    //     image : {
    //       uri : "https://catalogue.automobile.tn/big/2013/03/30709.jpg"
    //     },
    //     portes : 'portes: 4',
    //     sieges:  'sieges: 4'
    //   },
    //   {
    //     key : Math.random(),
    //     name : 'clio 206',
    //     image : {
    //       uri : "https://media.peugeot.co.uk/image/25/7/208_allure_premium_exterior-coulour_twilight_blue.100257.19.jpg?autocrop=1"
    //     },
    //     portes : 'portes: 4',
    //     sieges:  'sieges: 4'
    //   },
    //   {
    //     key : Math.random(),
    //     name : 'Dacia Duster',
    //     image : {
    //       uri : "https://static.latribune.fr/full_width/1006769/dacia-duster.jpg"
    //     },
    //     portes : 'portes: 4',
    //     sieges:  'sieges: 4'
    //   },
    //   {
    //     key : Math.random(),
    //     name : 'clio 206',
    //     image : {
    //       uri : "https://www.cdn.daciagroup.com/content/dam/Dacia/ma/vehicles/logan/l52-logan/l52-logan-ph1/more-dacia/ambiance-logan.jpg.ximg.l_full_m.smart.jpg"
    //     },
    //     portes : 'portes: 4',
    //     sieges:  'sieges: 4'
    //   }
    // ],
     selectedCar: null
  };


  //CarSelectedHandler = key => alert('item pressed');

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute
          //test: ThirdRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
      // <CarList
      //   cars={this.state.cars}
      //   onItemPressed={()=> 'true'}
      // />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor:'grey'
  }
});
