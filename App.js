import { Navigation } from 'react-native-navigation';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';
import Localisation from './src/screens/Localisation/Localisation';
import Voitures from './src/screens/Voitures/Voitures';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import Aboutus from './src/screens/Aboutus/Aboutus';

Navigation.registerComponent('loverscar.HomeScreen', () => HomeScreen );
Navigation.registerComponent('loverscar.Localisation', () => Localisation );
Navigation.registerComponent('loverscar.SideDrawer', () => SideDrawer );
Navigation.registerComponent('loverscar.Voitures', () => Voitures );
Navigation.registerComponent('loverscar.AuthScreen', () => AuthScreen );
Navigation.registerComponent('loverscar.RegisterScreen', () => RegisterScreen );
Navigation.registerComponent('loverscar.Aboutus', () => Aboutus );

Navigation.startSingleScreenApp({
  screen: {
    screen: 'loverscar.HomeScreen',
    title: 'Home'
  },
  // drawer: {
  //   left: {
  //     screen: 'loverscar.SideDrawer',
  //     passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  //     disableOpenGesture: false, // can the drawer be opened with a swipe instead of button (optional, Android only)
  //     fixedWidth: 500 // a fixed width you want your left drawer to have (optional)
  //   }
  // },
});
// import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
//
// import CarList from './src/components/CarList/CarList';
// import CarDetail from './src/components/CarDetail/CarDetail';
//
// export default class App extends Component {
//   state = {
//     cars : [
//       {
//         key : Math.random(),
//         name : 'RENAULT 404',
//         image : {
//           uri : "https://st.lowrider.com/uploads/sites/7/2010/10/lrmp_1012_37_o-oldies_car_club_show-chevy_belair.jpg"
//         },
//         portes : 'portes: 4',
//         sieges:  'sieges: 4'
//       },
//       {
//         key : Math.random(),
//         name : 'clio 206',
//         image : {
//           uri : "https://catalogue.automobile.tn/big/2013/03/30709.jpg"
//         },
//         portes : 'portes: 4',
//         sieges:  'sieges: 4'
//       },
//       {
//         key : Math.random(),
//         name : 'clio 206',
//         image : {
//           uri : "https://media.peugeot.co.uk/image/25/7/208_allure_premium_exterior-coulour_twilight_blue.100257.19.jpg?autocrop=1"
//         },
//         portes : 'portes: 4',
//         sieges:  'sieges: 4'
//       },
//       {
//         key : Math.random(),
//         name : 'Dacia Duster',
//         image : {
//           uri : "https://static.latribune.fr/full_width/1006769/dacia-duster.jpg"
//         },
//         portes : 'portes: 4',
//         sieges:  'sieges: 4'
//       },
//       {
//         key : Math.random(),
//         name : 'clio 206',
//         image : {
//           uri : "https://www.cdn.daciagroup.com/content/dam/Dacia/ma/vehicles/logan/l52-logan/l52-logan-ph1/more-dacia/ambiance-logan.jpg.ximg.l_full_m.smart.jpg"
//         },
//         portes : 'portes: 4',
//         sieges:  'sieges: 4'
//       }
//     ],
//     selectedCar: null
//   };
//
//
//   CarSelectedHandler = key => {
//     this.setState(prevState => {
//       return{
//         selectedCar: prevState.cars.find(car =>{
//           return car.key === key;
//         })
//       }
//     })
//   };
//
//   ModalClosedHandler= () => {
//     this.setState(prevState => {
//       return{
//         selectedCar : null
//       }
//     })
//   };
//
//   render() {
//     return (
//       <View style={styles.container}>
//       <CarDetail selectedCar={this.state.selectedCar} onModalClosed={this.ModalClosedHandler}/>
//       <CarList
//         cars={this.state.cars}
//         onItemPressed={this.CarSelectedHandler}
//       />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     backgroundColor:'grey'
//   },
// });
