import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const SearchBlank = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Image
            style={styles.searchIcon}
            source={require("../assets/search.png")} // Replace with your search icon image
          />
          <TextInput
            style={styles.searchInput}
            placeholder="John"
            placeholderTextColor="#92929d"
          />
        </View>

        {/* Display the image in the center */}
        <View style={styles.imageContainer}>
          <Image source={require("../assets/blankImage.png")} />
          <Text style={styles.headerText}>We Are Sorry, We Can </Text>
          <Text style={styles.headerText1}>Not Find he Movie :(</Text>
          <Text style={styles.subHeaderText}>Find your movie by Type title, </Text>
          <Text style={styles.subHeaderText}>Categories, years, etc </Text>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#252836',
    borderRadius: 24,
    height: 41,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 35,
    marginBottom: 45,
    alignSelf: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    tintColor: '#92929d',
  },
  searchInput: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 10,
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
    marginBottom: 5,
    marginTop: 10,
  },
  headerText1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
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
export default SearchBlank;
