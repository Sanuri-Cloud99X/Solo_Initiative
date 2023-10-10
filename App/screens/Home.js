import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = React.useState(1);

  const changeTab = (tab) => {
        setActiveTab(tab);
        // Navigate to the "Movie" page when "All" is clicked
        if (tab === 1) {
            navigation.navigate('UpcomingMovie');
        }
    };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={{ width: 254, height: 40, flexDirection: 'row', gap: 15 }}>
            <Image source={require("../assets/Avatar.png")} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Hello, Smith</Text>
              <Text style={styles.subtitle}>Let's stream your favorite movie</Text>
            </View>
          </View>
          <Image source={require("../assets/heart.png")} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Image
            style={styles.searchIcon}
            source={require("../assets/search.png")} // Replace with your search icon image
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search a title ..."
            placeholderTextColor="#92929d"
          />
          <Image source={require("../assets/vector.png")} />
          <Image source={require("../assets/filter.png")} style={styles.filterIcon}/>
        </View>

        {/* Movie Slider */}
          <View style={styles.movieSlider}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                height: 166,
                gap: 12,
                marginLeft: 24,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require("../assets/SliderImage2.png")} />
              <Image source={require("../assets/SliderImage1.png")} />
              <Image source={require("../assets/SliderImage3.png")} />
            </ScrollView>
          </View>
        <Image source={require("../assets/Slider.png")} style={{ alignSelf: 'center' }} />

        {/* Categories - Nav Bar */}
        <View style={styles.categories}>
          <Text style={styles.textStyle1}>Categories</Text>
          <ScrollView
            horizontal
            contentContainerStyle={{ flexDirection: 'row' }}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() =>changeTab(1)}>

              <Text
                style={
                  activeTab === 1
                    ? [styles.activeTab, { width: 80 }]
                    : [styles.tab, { width: 80 }]
                }>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab(2)} >
              <Text
                style={
                  activeTab === 2
                    ? [styles.activeTab, { width: 76 }]
                    : [styles.tab, { width: 76 }]
                }>
                Comedy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab(3)}>
              <Text
                style={
                  activeTab === 3
                    ? [styles.activeTab, { width: 90 }]
                    : [styles.tab, { width: 90 }]
                }>
                Animation
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab(4)}>
              <Text
                style={
                  activeTab === 4
                    ? [styles.activeTab, { width: 111 }]
                    : [styles.tab, { width: 111 }]
                }>
                Documentary
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Most Popular Section */}
        <View style={styles.popularSection}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 24, marginRight: 24 }}>
            <Text style={styles.textStyle1}>Most Popular</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MostPopular')}>
              <Text style={styles.textStyle3}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.movieCards}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
              <Image source={require("../assets/Card1.png")} />
              <Image source={require("../assets/Card2.png")} />
              <Image source={require("../assets/Card3.png")} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
        {/* Bottom Navigation */}
        <BottomNavigation />
      
    </View>
  );
};

const BottomNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.activeNavTab}>
          <Image source={require("../assets/Home.png")} />
          <Text style={styles.textStyle3}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.navTab}>
          <Image source={require("../assets/search.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Download')}>
        <View style={styles.navTab}>
          <Image source={require("../assets/Download.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.navTab}>
          <Image source={require("../assets/Account.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1d2b',
  }, 
  titleContainer: {
    alignItems: 'flex-start', // Align text to the left
  },
  title: {
    fontSize: 21,
    color: 'white',
    marginBottom: 5, // Adjust the margin between the sentences
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'left', // Align text to the left
  },
  subtitle: {
    color: '#92929d',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'left', // Align text to the left
    fontSize: 12,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 45,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 35,
    marginBottom: 45,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#252836',
    borderRadius: 24,
    height: 41,
    width: '90%',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 15,
    marginTop: -5,
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
    fontFamily: 'Montserrat-SemiBold'
  },
  filterIcon: {
    width: 24,
    height: 24,
    marginLeft: 10, // Adjust the margin as needed
    marginRight: 10,
    tintColor: '#92929d', // Change the color of the search icon
  },
  movieSlider: {
    marginTop: 32,
    marginBottom: 12,
  },
  categories: {
    height: 74,
    justifyContent: 'space-between',
    marginLeft: 24,
    marginTop: 24,
    fontFamily: 'Montserrat-SemiBold'
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginBottom: 10,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    marginTop: 15,
  },
  tab: {
    height: 31,
    color: '#EBEBEF',
    borderRadius: 8,
    textAlign: 'center',
    paddingTop: 8,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
  activeTab: {
    height: 31,
    color: '#12CDD9',
    backgroundColor: '#252836',
    borderRadius: 8,
    textAlign: 'center',
    paddingTop: 8,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  popularSection: {
    marginTop: 21,
  },
  textStyle3: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  movieCards: {
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 24,
  },
  bottomNavigation: {
    flexDirection: 'row',
    gap: 17,
    height: 72,
    marginLeft: 39,
    marginRight: 39,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  navTab: {
    width: 48,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavTab: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 7,
    backgroundColor: '#252836',
    borderRadius: 16,
  },
});

export default Home;
