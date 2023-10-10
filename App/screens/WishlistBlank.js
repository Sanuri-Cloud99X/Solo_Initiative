import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WishlistBlank = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Image
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Wishlist</Text>
        <View style={{ width: 24, height: 24 }} />
      </View>

        
            {/* Display the image in the center */}
            <View style={styles.imageContainer}>
                <Image source={require("../assets/blankWishlist.png")} />
                <Text style={styles.headerText}>There Is No Movie Yet ! </Text>
                <Text style={styles.subHeaderText}>Find your movie by Type title, </Text>
                <Text style={styles.subHeaderText}>Categories, years, etc </Text>
            </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1D2B',
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:250,
  },
  headerText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
  },
  subHeaderText: {
    color: '#92929d',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 12,
    marginBottom: 5,
  },
});


export default WishlistBlank;
