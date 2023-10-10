import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UpcomingMovie = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Upcoming Movies </Text>
          <View style={{ width: 24, height: 24 }} />
        </View>
      
        {/* Nav Bar */}
        <View style={styles.navbar}>
          <ScrollView
            horizontal
            contentContainerStyle={{ flexDirection: 'row' }}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => setActiveTab(1)}>

              <Text
                style={
                  activeTab === 1
                    ? [styles.activeTab, { width: 80 }]
                    : [styles.tab, { width: 80 }]
                }>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab(2)}>
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

        <View style={styles.cardContainer}>
          {/* First Image */}
          <TouchableOpacity onPress={() => navigation.navigate('Trailer')} >
            <View style={styles.ImageContainer}>
              <Image source={require("../assets/upcomingMovieImage1.png")} style={styles.image} />
              {/* Pause icon overlay */}
              <Image source={require("../assets/pause.png")} style={styles.pauseIcon} />
                <View style={styles.imageContent}>
                  <Text style={styles.textStyle2}>The Batman</Text>
                  <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center',  marginTop: 5 }}>
                    <Image source={require("../assets/calendar.png")} />
                    <Text style={styles.textStyle4}>Realease Date: March 2 , 2022</Text>
                    <Image source={require("../assets/vector.png")} />
                    <Image source={require("../assets/film.png")} />
                    <Text style={styles.textStyle4}>Actio n</Text>
                  </View>
                </View>
            </View>
          </TouchableOpacity>

          {/* Second Image */}
          <TouchableOpacity >
            <View style={styles.ImageContainer}>
              <Image source={require("../assets/upcomingMovieImage2.png")} style={styles.image} />
              {/* Pause icon overlay */}
              <Image source={require("../assets/pause.png")} style={styles.pauseIcon} />
                <View style={styles.imageContent}>
                  <Text style={styles.textStyle2}>Black Panther: Wakanda Forever</Text>
                  <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center',  marginTop: 5 }}>
                    <Image source={require("../assets/calendar.png")} />
                    <Text style={styles.textStyle4}>November 11, 2022</Text>
                    <Image source={require("../assets/vector.png")} />
                    <Image source={require("../assets/film.png")} />
                    <Text style={styles.textStyle4}>Action</Text>
                  </View>
                </View>
            </View>
          </TouchableOpacity>

          {/*Third Image*/}
          <TouchableOpacity >
            <View style={styles.ImageContainer}>
              <Image source={require("../assets/upcomingMovieImage3.png")} style={styles.image} />
              {/* Pause icon overlay */}
              <Image source={require("../assets/pause.png")} style={styles.pauseIcon} />
                <View style={styles.imageContent}>
                  <Text style={styles.textStyle2}>The Batman</Text>
                  <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center',  marginTop: 5 }}>
                    <Image source={require("../assets/calendar.png")} />
                    <Text style={styles.textStyle4}>Realease Date: March 2 , 2022</Text>
                    <Image source={require("../assets/vector.png")} />
                    <Image source={require("../assets/film.png")} />
                    <Text style={styles.textStyle4}>Action</Text>
                  </View>
                </View>
            </View>
          </TouchableOpacity>
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
      <View style={styles.navTab}>
        <Image source={require("../assets/Account.png")} />
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
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  /* Nav Bar css */
  navbar: {
    height: 74,
    justifyContent: 'space-between',
    marginLeft: 24,
    marginTop: 5,
    marginBottom: 2,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
  },
  tab: {
    height: 31,
    color: '#EBEBEF',
    borderRadius: 8,
    textAlign: 'center',
    paddingTop: 8,
    fontFamily: 'Montserrat-Medium',
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
  textStyle3: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },

   /*Bottom Nav Bar css */
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
  textStyle3: {
    color: '#12CDD9',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },

  /* body css */
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  ImageContainer: {
    padding: 10, // Add padding here
  },
  image: {
    width: 350, // Adjust the size as needed
    height: 180, // Adjust the size as needed
    borderRadius: 10,
    marginTop: 5,
  },
  imageContent: {
    padding: 20,

  },  
  textStyle2: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  pauseIcon: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }], // Adjust positioning
    width: 60,
    height: 60,
    zIndex: 1, // Ensure the pause icon is above the card image
  },
  textStyle4: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#92929D',
  },
    
  
  
});

export default UpcomingMovie;
