import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Wishlist = () => {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Download')}>
          <Image
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Wishlist</Text>
        <View style={{ width: 24, height: 24 }} />
      </View>

      <View style={styles.cardContainer}>
        {/* First Card */}
        <TouchableOpacity onPress={() => navigation.navigate('WishlistBlank')}>
          <View style={styles.card}>
            <View style={styles.cardImageContainer}>
                <Image source={require("../assets/wishlistImage.png")} style={styles.cardImage} />
                {/* Pause icon overlay */}
                <Image source={require("../assets/pause.png")} style={styles.pauseIcon} />
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.textStyle1}>Action</Text>
                <Text style={styles.textStyle2}>Spider-Man No Way</Text>
                <Text style={styles.textStyle2}>Home</Text>
                <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                    <View style={styles.container3} >
                        <Text style={styles.textStyle4}>Movie</Text>
                        <Image source={require("../assets/rate2.png")} />
                    </View>
                    <Image source={require("../assets/heart.png")} />
                </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Second Card */}
        <TouchableOpacity onPress={() => navigation.navigate('Genre')}>
          <View style={styles.card}>
            <View style={styles.cardImageContainer}>
                <Image source={require("../assets/wishlistImage.png")} style={styles.cardImage} />
                {/* Pause icon overlay */}
                <Image source={require("../assets/pause.png")} style={styles.pauseIcon} />
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.textStyle1}>Action</Text>
                <Text style={styles.textStyle2}>Spider-Man No Way</Text>
                <Text style={styles.textStyle2}>Home</Text>
                <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                    <View style={styles.container3} >
                        <Text style={styles.textStyle4}>Movie</Text>
                        <Image source={require("../assets/rate2.png")} />
                    </View>
                    <Image source={require("../assets/heart.png")} />
                </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Third Card */}
        <TouchableOpacity>
          <View style={styles.card}>
            <View style={styles.cardImageContainer}>
                <Image source={require("../assets/wishlistImage.png")} style={styles.cardImage} />
                {/* Pause icon overlay */}
                <Image source={require("../assets/pause.png")} style={styles.pauseIcon} />
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.textStyle1}>Action</Text>
                <Text style={styles.textStyle2}>Spider-Man No Way</Text>
                <Text style={styles.textStyle2}>Home</Text>
                <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                    <View style={styles.container3} >
                        <Text style={styles.textStyle4}>Movie</Text>
                        <Image source={require("../assets/rate2.png")} />
                    </View>
                    <Image source={require("../assets/heart.png")} />
                </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1d2b',
  },
  header: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#252836',
    borderRadius: 20,
    width: '90%',
    marginBottom: 20,
    alignItems: 'center',
  },
  cardImageContainer: {
    padding: 10, // Add padding here
  },
  cardImage: {
    width: 150, // Adjust the size as needed
    height: 90, // Adjust the size as needed
    borderRadius: 10,
  },
  cardContent: {
    padding: 20,
  },  
  cardText: {
    color: 'white',
    fontSize: 18,
  },
  textStyle1: {
    color: '#92929D',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
  textStyle2: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  textStyle4: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#92929D',
  }, 
  textStyle3: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },  
   
  action: {
    backgroundColor: '#FF8700',
    color: '#fff',
    borderRadius: 6,
    width: 65,
    height: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  container3: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  pauseIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }], // Adjust positioning
    width: 50,
    height: 50,
    zIndex: 1, // Ensure the pause icon is above the card image
  },
  
});

export default Wishlist;
