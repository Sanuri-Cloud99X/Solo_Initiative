import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Download = () => {
    const navigation = useNavigation();

    const [activeTab, setActiveTab] = React.useState(1);
  
    const changeTab = tab => {
        setActiveTab(tab);
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Download</Text>
        <View style={{ width: 24, height: 24 }} />
      </View>

      <View style={styles.cardContainer}>
        {/* First Card */}
        <TouchableOpacity onPress={() => navigation.navigate('DownloadBlank')}>
          <View style={styles.card}>
            <View style={styles.cardImageContainer}>
                <Image source={require("../assets/downloadImage1.png")} style={styles.cardImage} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.textStyle1}>Action</Text>
              <Text style={styles.textStyle2}>Spider-Man No Way</Text>
              <Text style={styles.textStyle2}>Home</Text>
                
              <View style={{flexDirection: 'row', gap: 8}}>
                <Image source={require("../assets/downloadIcon2.png")} />
                <Text style={styles.textStyle4}>1.25 of 1.78GB</Text>
                <Image source={require("../assets/vector.png")} />
                <Text style={styles.textStyle4}>75%</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Second Card */}
        <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <View style={styles.card}>
            <View style={styles.cardImageContainer}>
              <Image source={require("../assets/downloadImage2.png")} style={styles.cardImage} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.textStyle1}>Action</Text>
              <Text style={styles.textStyle2}>Spider-Man No Way</Text>
              <Text style={styles.textStyle2}>Home</Text>
                
              <View style={{flexDirection: 'row', gap: 8}}>
                <Text style={styles.textStyle4}>Movie</Text>
                <Image source={require("../assets/vector.png")} />
                <Text style={styles.textStyle4}>1.78GB</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
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
        <View style={styles.navTab}>
          <Image source={require("../assets/search.png")} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Download')}>
        <View style={styles.activeNavTab}>
          <Image source={require("../assets/Download.png")} />
          <Text style={styles.textStyle3}>Download</Text>
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
  bottomNavigation: {
    flexDirection: 'row',
    gap: 17,
    height: 72,
    marginLeft: 39,
    marginRight: 39,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  navTab: {
    width: 48,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavTab: {
    width: 140,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#252836',
    borderRadius: 16,
  },
});

export default Download;
