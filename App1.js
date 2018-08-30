import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends Component {
  state = {
    cars: [],
    selectedCar: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        cars: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri:
              "https://www.beamng.com/attachments/1959_peugeot_403_front_resize-jpg"
          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        cars: prevState.cars.filter(car => {
          return car.key !== prevState.selectedCar.key;
        }),
        selectedCar: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedCar: null
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedCar: prevState.cars.find(car => {
          return car.key === key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedCar}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
