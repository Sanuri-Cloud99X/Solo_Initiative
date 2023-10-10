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

const Search = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = React.useState(1);
  
  const changeTab = tab => {
    setActiveTab(tab);
  };
  return (
    <View style={styles.Container}>
      <ScrollView>
        
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Image
            style={styles.searchIcon}
            source={require("../assets/search.png")} // Replace with your search icon image
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Type title, categories, years, etc"
            placeholderTextColor="#92929d"
          />
        </View>

        {/* navbar */}
        <View style={styles.navbar}>
          <ScrollView
            horizontal
            contentContainerStyle={{flexDirection: 'row', gap: 8}}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.tabs}>
              <TouchableOpacity onPress={() => changeTab(1)}>
                <Text
                  style={
                    activeTab === 1
                      ? [styles.activeTab, {width: 80}]
                      : [styles.tab, {width: 80}]
                  }>
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeTab(2)}>
                <Text
                  style={
                    activeTab === 2
                      ? [styles.activeTab, {width: 76}]
                      : [styles.tab, {width: 76}]
                  }>
                  Comedy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeTab(3)}>
                <Text
                  style={
                    activeTab === 3
                      ? [styles.activeTab, {width: 90}]
                      : [styles.tab, {width: 90}]
                  }>
                  Animation
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeTab(4)}>
                <Text
                  style={
                    activeTab === 4
                      ? [styles.activeTab, {width: 111}]
                      : [styles.tab, {width: 111}]
                  }>
                  Documentary
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Today Section */}
        <View style={styles.todaySection}>
          <Text style={styles.textStyle1}>Today</Text>
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
        <View style={styles.popularSection}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 24,
              marginRight: 24,
            }}>
            <Text style={styles.textStyle1}>Recommend for you</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchResult')}>
              <Text style={styles.textStyle3}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.movieCards}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{gap: 12}}>
              <Image source={require("../assets/Card4.png")} />
              <Image source={require("../assets/Card5.png")} />
              <Image source={require("../assets/Card6.png")} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const BottomNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.navTab}>
          <Image source={require("../assets/Home.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.activeNavTab}>
          <Image source={require("../assets/search.png")} />
          <Text style={styles.textStyle3}>Search</Text>
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
  Container: {
    flex: 1,
    backgroundColor: '#1F1D2B',
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
    gap: 5,
    backgroundColor: '#252836',
    borderRadius: 16,
  },
  textStyle3: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,

  },
  textStyle2: {
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
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
  navbar: {
    justifyContent: 'space-between',
    marginLeft: 24,
    marginTop: 15,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  tab: {
    height: 31,
    color: '#EBEBEF',
    borderRadius: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  activeTab: {
    height: 31,
    color: '#12CDD9',
    backgroundColor: '#252836',
    borderRadius: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: -5, // Adjust the margin as needed
    marginRight: -3,
    marginBottom: -8,
    tintColor: '#92929d', // Change the color of the search icon
  },
  popularSection: {
    marginTop: 95,
    marginBottom: 15,
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
  todaySection: {
    height: 183,
    justifyContent: 'space-between',
    marginLeft: 24,
    marginTop: 24,
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
export default Search;
