import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Genre = () => {
  const navigation = useNavigation();

  const genreData = [
    { name: 'Action', image: require("../assets/genreImage1.png") },
    { name: 'Horror', image: require("../assets/genreImage2.png") },
    { name: 'Fantasy', image: require("../assets/genreImage3.png") },
    { name: 'Anime', image: require("../assets/genreImage4.png") },
    { name: 'Romance', image: require("../assets/genreImage5.png") },
    { name: 'Sci-fi', image: require("../assets/genreImage6.png") },
    { name: 'Comedy', image: require("../assets/genreImage7.png") },
    { name: 'Adventures', image: require("../assets/genreImage8.png") },
  ];

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const groupedGenreData = chunkArray(genreData, 2);

  const [selectedGenre, setSelectedGenre] = React.useState('Action');

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
            <Image source={require("../assets/back.png")} />
          </TouchableOpacity>
          <Text style={styles.title}>Genre</Text>
          <View style={{ width: 24, height: 24 }} />
        </View>

        {groupedGenreData.map((row, index) => (
          <View key={index} style={styles.row}>
            {row.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.card,
                  { backgroundColor: selectedGenre === item.name ? '#2C2B38' : 'transparent' },
                ]}
                onPress={() => handleGenreSelect(item.name)}
              >
                <Image source={item.image} style={styles.image} />
                <View style={styles.overlay}>
                  <View style={styles.radioButton}>
                    {selectedGenre === item.name ? (
                      <Image source={require("../assets/radioChecked.png")} />
                    ) : (
                      <Image source={require("../assets/radioEmpty.png")} />
                    )}
                  </View>
                  <Text style={styles.textStyle1}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  header: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 16,
  },
  card: {
    width: '48%',
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle1: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  radioButton: {
    marginRight: 5,
  },
});

export default Genre;

