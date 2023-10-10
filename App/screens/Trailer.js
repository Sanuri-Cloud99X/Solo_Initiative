import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Trailer = () => {
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
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>
          <Text style={styles.title}> Trailer </Text>
          <View style={{ width: 24, height: 24 }} />
          <Image source={require("../assets/heart.png")} />
        </View>

        <View style={styles.cardContainer}>
            {/* First Image */}
          <TouchableOpacity onPress={() => navigation.navigate('Trailer')} >
            <View style={styles.ImageContainer}>
              <Image source={require("../assets/trailerImage2.png")} style={styles.image} />
              {/* Pause icon overlay */}
              <Image source={require("../assets/trailerImage1.png")} style={styles.tabIcon} />
                <View style={styles.imageContent}>
                  <Text style={styles.textStyle2}>The Batman</Text>
                  <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center',  marginTop: 5, marginLeft: -20, }}>
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

        {/* Add text here */}
        <Text style={styles.headerText}>Synopsis</Text>
        <Text style={styles.subHeaderText}>
            THE BATMAN is an edgy, action-packed thriller that depicts Batman in his early years, 
        struggling to balance rage with righteousness as he investigates a disturbing mystery 
        that has terrorized Gotham. Robert Pattinson delivers a raw, intense portrayal of 
        Batman as a disillusioned, desperate vigilante awakened by the realization.. 
        <Text style={{ color: '#12CDD9' }}>More</Text>
        </Text>
    
        {/* cast and crew*/}
        <Text style={styles.headerText}>Cast and Crew</Text>
        
        {/* Avatar in a row */}
        <View style={styles.cardsRow}>
          {/* Avatar 1 */}
          <View style={styles.card}>
            <Image source={require("../assets/trailerImage3.png")} style={styles.avatar} />
            <Text style={styles.cardText1}>Matt Reeves{'\n'}</Text>
            <Text style={styles.cardText2}>Director</Text>
          </View>
          {/* Avatar 2 */}
          <View style={styles.card}>
            <Image source={require("../assets/trailerImage4.png")} style={styles.avatar} />
            <Text style={styles.cardText1}>Matt Reeves{'\n'}</Text>
            <Text style={styles.cardText2}>Writer</Text>
          </View>
          {/* Avatar 3 */}
          <View style={styles.card}>
            <Image source={require("../assets/trailerImage5.png")} style={styles.avatar} />
    
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
  
  
 /* bottom nav bar */ 

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
    width: 370, // Adjust the size as needed
    height: 180, // Adjust the size as needed
    borderRadius: 10,
    marginTop: 5,
    marginBottom: -8,
  },
  imageContent: {
    padding: 20,
  },  
  textStyle2: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginLeft: -20,
  },
  tabIcon: {
    position: 'absolute',
    top: '60%',
    left: '10%',
    transform: [{ translateX: -12 }, { translateY: -12 }], // Adjust positioning
    zIndex: 1, // Ensure the pause icon is above the card image
  },
  textStyle4: {
    fontFamily: 'Montserra-Medium',
    fontSize: 12,
    color: '#92929D',
  },

  headerText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'left',
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 32,
  },
  subHeaderText: {
    color: '#EBEBEF',
    fontFamily: 'Montserrat-Medium',
    textAlign: 'left',
    fontSize: 14,
    marginBottom: 20,
    marginLeft: 32,
  },

  /* cast and crew */
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    width: '120%',
    marginTop: 20,
    marginLeft: 45,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: -35,
  },
  cardText1: {
    flex: 1,
    color: '#EBEBEF',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginLeft: 10,

  },
  cardText2: {
    flex: 1,
    color: '#92929D',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginLeft: 10,
  },

  /* image cards */
  
});

export default Trailer;
