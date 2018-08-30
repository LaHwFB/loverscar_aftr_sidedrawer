import React, {Component} from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

class Voitures extends Component {
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

    render () {
        return (
           <TouchableOpacity>
              <Text>Voitures</Text>
           </TouchableOpacity>
        );
    }
}

export default Voitures;
