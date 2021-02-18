import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    flexDirection: 'column'
  },
  mapView: {
    flex: 6,
    backgroundColor: 'red',
    // justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  mapLive: {
    flex: 5,
    backgroundColor: '#ddd',
  },
  logView: {
    flex: 1.5,
    backgroundColor: 'violet',
  },
  itemView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

const mainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapView}>
        <View style={styles.mapLive}>
          <Text> fdfdsaf</Text>
        </View>
        <View style={styles.logView}>
          <Text> fdfdsaf</Text>
        </View>
      </View>


      <Text style={styles.itemView}> item log </Text>

    </View>
  )
}

export default mainScreen;