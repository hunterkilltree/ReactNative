import React, { useState } from 'react'
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    flexDirection: 'column'
  },
  mapView: {
    flex: 6,
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  mapLive: {
    flex: 5,
    backgroundColor: '#ddd',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  logView: {
    flex: 1.5,
    // backgroundColor: 'violet',
    backgroundColor: '#C8E6C9'
  },
  itemView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignContent: 'center'
  },
  largeSquare: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // smallSquare: {
  //   width: 10,
  //   height: 10,
  //   backgroundColor: 'powderblue',
  // }
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
});

const ItemNotation = (props) => {
  return (
    <View>
      <View style={{ width: 10, height: 10, backgroundColor: props.itemColor }} />
      <Text>{props.itemName}</Text>
      <Text>{props.itemQuantity}</Text>
    </View>
  );
}

const Node = (props) => {
  // let index = props.index;
  return (
    <View style={styles.largeSquare} >
      <Text style={{ fontWeight: 'bold' }} >  {props.nodeId}</Text>
    </View>
  );
}

const MainScreen = () => {

  const [count, setCount] = useState(0);


  return (
    <View style={styles.container}>
      <View style={styles.mapView}>
        <View style={styles.mapLive}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
            <Node nodeId='00' />
            <Node nodeId='01' />
            <Node nodeId='02' />
            <Node nodeId='03' />
            <Node nodeId='04' />
            <Button
              onPress={() => setCount(count + 1)}
              title="Click me!"
            />

          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
            <Node nodeId='10' />
            <Node nodeId='11' />
            <Node nodeId='12' />
            <Node nodeId='13' />
            <Node nodeId='14' />

          </View>

          <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
            <Node nodeId='20' />
            <Node nodeId='21' />
            <Node nodeId='22' />
            <Node nodeId='23' />
            <Node nodeId='24' />
          </View>

          <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
            <Node nodeId='30' />
            <Node nodeId='31' />
            <Node nodeId='32' />
            <Node nodeId='33' />
            <Node nodeId='34' />
          </View>

          <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
            <Node nodeId='40' />
            <Node nodeId='41' />
            <Node nodeId='42' />
            <Node nodeId='43' />
            <Node nodeId='44' />
          </View>
        </View>
        <View style={styles.logView}>
          <Text>Anouncemnt: </Text>
          <Text>Anouncemnt: </Text>

        </View>
      </View>

      <View style={styles.itemView}>
        <ItemNotation itemColor='red' itemName='A' itemQuantity={count} />
        <ItemNotation itemColor='blue' itemName='B' itemQuantity={0} />
        <ItemNotation itemColor='#f57c00' itemName='C' itemQuantity={0} />
        <ItemNotation itemColor='green' itemName='D' itemQuantity={0} />
        <ItemNotation itemColor='black' itemName='E' itemQuantity={0} />
      </View>
    </View>
  )
}


export default MainScreen;