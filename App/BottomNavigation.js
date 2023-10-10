import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BottomNavBar = () => {
  // Import local images
  const shopIcon = require('./assets/images/ShopIcon.png');
  const userIcon = require('./assets/images/UserIcon.png');
  const targetIcon = require('./assets/images/TargetIcon.png');
  const carIcon = require('./assets/images/CarIcon.png');
  const receiptIcon = require('./assets/images/ReceiptIcon.png');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={targetIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={shopIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeTab}>
        <Image source={carIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Activity1')}>
        <Image source={receiptIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Image source={userIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 62,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    shadowColor: '#000',
    elevation: 2,
    // for ios
    // shadowOffset: {
    //   width: 0,
    //   height: 18,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 20.0,
  },
  activeTab: {
    width: 58,
    height: 58,
    borderRadius: 12,
    backgroundColor: 'rgba(210, 25, 19, 1)',
    marginTop: -45,
    padding: 17,
    elevation: 4,
    shadowColor: 'red',
  },
});

export default BottomNavBar;
