import React from 'react';
import { View, Text, StyleSheet, Image, Modal, Button } from "react-native";

const CarDetail= props => {

  let ModalContent=null;

  if(props.selectedCar){
    ModalContent=(
      <View>
      <Text style={styles.carName}>{props.selectedCar.name}</Text>
      <Image resizeMode='cover' source={props.selectedCar.image} style={styles.img}/>
      </View>
    );
  }

  return(
    <View>
    <Modal visible={props.selectedCar !== null} animationType='fade'
    onRequestClose={props.onModalClosed}>
      <View>
        {ModalContent}
        <View>
          <Button title='Take it' onPress={()=>console.log('pressed')}/>
        </View>
      </View>
    </Modal>
    </View>
  )
}

const styles=StyleSheet.create({
  img: {
    width:'100%',
    height: 200
  },
  carName:{
    fontSize: 20,
    fontWeight:'bold',
    color:'black',
    marginLeft:10,
    marginBottom:5
  },
});

export default CarDetail;
