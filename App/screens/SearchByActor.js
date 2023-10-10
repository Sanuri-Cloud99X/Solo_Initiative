import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SearchByActor = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = React.useState(1);
  
  const changeTab = tab => {
    setActiveTab(tab);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Image
            style={styles.searchIcon}
            source={require("../assets/search.png")} // Replace with your search icon image
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search a title"
            placeholderTextColor="#92929d"
          />
        </View>

        <Text style={styles.headerText}>Actors </Text>
        <View style={styles.imageCardContainer}>
            {/* Display person images in round circles */}
            <ImageCard 
                source={require("../assets/Actor1.png")} 
                description="John Wilson"
            />
            <ImageCard 
                source={require("../assets/Actor2.png")} 
                description="John Deere"
            />
            <ImageCard 
                source={require("../assets/Actor3.png")}
                description="John Cena"
            />
            <ImageCard 
                source={require("../assets/Actor4.png")}
                description="John Stamos"
            />
        </View>
        

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 24, marginRight: 24 }}>
            <Text style={styles.textStyle5}>Most Popular</Text>
            <TouchableOpacity>
              <Text style={styles.textStyle3}>See All</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.resultSection}>
          {/* 1st image */}
          <View style={{flexDirection: 'row', gap: 16}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MovieDetails')}>
              <Image source={require("../assets/todayImage.png")} />
              <Image source={require("../assets/Rate.png")} 
                style={styles.rateIcon}
              />
            </TouchableOpacity>
            <View style={{gap: 13}}>
              <Text style={styles.premium}>Premium</Text>
              <Text style={styles.textStyle1}>Spider-Man No Way..</Text>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={require("../assets/calendar.png")} style={styles.icon}/>
                <Text style={styles.textStyle4}>2021</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={require("../assets/clock.png")} style={styles.icon} />
                <Text style={styles.textStyle4}>148 Minutes</Text>
                <Text style={styles.pgStyle}>PG-13</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={require("../assets/film.png")} style={styles.icon}/>
                <Text style={styles.textStyle4}>Action</Text>
                <Image source={require("../assets/vector.png")} />
                <Text style={[styles.textStyle4, {color: '#fff'}]}>Movie</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.resultSection}>
          {/* 2nd image */}
          <View style={{flexDirection: 'row', gap: 16}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MovieDetails')}>
              <Image source={require("../assets/SearchImage2.png")} style={{ width: 110, height: 150}}/>
              <Image source={require("../assets/Rate.png")} 
                style={styles.rateIcon}
              />
            </TouchableOpacity>
            <View style={{gap: 13}}>
              <Text style={styles.free}>Free</Text>
              <Text style={styles.textStyle1}>Riverdale</Text>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={require("../assets/calendar.png")} style={styles.icon}/>
                <Text style={styles.textStyle4}>2021</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={require("../assets/clock.png")} style={styles.icon}/>
                <Text style={styles.textStyle4}>148 Minutes</Text>
                <Text style={styles.pgStyle}>PG-13</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={require("../assets/film.png")} style={styles.icon} />
                <Text style={styles.textStyle4}>Action</Text>
                <Image source={require("../assets/vector.png")} />
                <Text style={[styles.textStyle4, {color: '#fff'}]}>Movie</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.resultSection}>
          {/* 3rd image */}
          <View style={{flexDirection: 'row', gap: 16}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MovieDetails')}>
              <Image source={require("../assets/SearchImage3.png")} />
              <Image source={require("../assets/Rate.png")} 
                style={styles.rateIcon}
              />
            </TouchableOpacity>
            <View style={{gap: 13}}>
              <Text style={styles.premium}>Premium</Text>
              <Text style={styles.textStyle1}>Life of PI</Text>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={require("../assets/calendar.png")} style={styles.icon}/>
                <Text style={styles.textStyle4}>2021</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={require("../assets/clock.png")} style={styles.icon} />
                <Text style={styles.textStyle4}>148 Minutes</Text>
                <Text style={styles.pgStyle}>PG-13</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={require("../assets/film.png")} style={styles.icon} />
                <Text style={styles.textStyle4}>Action</Text>
                <Image source={require("../assets/vector.png")} />
                <Text style={[styles.textStyle4, {color: '#fff'}]}>Movie</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      
    </View>
  );
};

const ImageCard = ({ source , description }) => {
  return (
    <View style={styles.imageCard}>
        <Image style={styles.image} source={source} />
        <Text style={styles.description}>{description}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginBottom: -5,
  },
  textStyle2: {
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  textStyle3: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  textStyle5: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginBottom: 15,
  },
  headerText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 25,
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
    marginBottom: 20,
    alignSelf: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 10, // Adjust the margin as needed
    tintColor: '#92929d', // Change the color of the search icon
  },
  searchInput: {
    flex: 1, // Take up remaining space in the row
    color: 'white',
    paddingHorizontal: 10,
  },
  textStyle3: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  resultSection: {
    height: 183,
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: -5,
  },
  premium: {
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
  free:{
    backgroundColor: '#12CDD9',
    color: '#fff',
    borderRadius: 6,
    width: 65,
    height: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textStyle4: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#92929D',
  },
  pgStyle: {
    borderRadius: 3,
    width: 43,
    height: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#12CDD9',
    borderColor: '#12CDD9',
    borderWidth: 1,
  },
  imageCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 16,
    marginTop: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  description: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    marginTop: 5, // Adjust spacing between image and description
    textAlign: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: -5, // Adjust the margin as needed
    marginRight: -3,
    marginBottom: -8,
    tintColor: '#92929d', // Change the color of the search icon
  },
  rateIcon: {
    position: 'absolute',
    top: 10,
    marginLeft: 10,
    marginRight: 50,
    width: 50,
    height: 24,
    opacity: 0.8,
  },
});
export default SearchByActor;
