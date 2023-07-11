import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SvgLikeIcon from '../../assets/LikeIcon';
import SvgRating from '../../assets/Star';
import SvgRatingFilled from '../../assets/SvgRatingFilled';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.mainCont}>
      <ScrollView style={styles.maincontwrapper}>
        <View style={styles.toptext}>
          <Text style={styles.label}>Discover</Text>
          <Text style={{fontSize: 22}}>🌱</Text>
          {/* <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/images/plant3.png')}
          /> */}
        </View>
        {/* wrapper for rendering items */}
        <View style={styles.itemsWrapper}>
          <TouchableOpacity
            style={styles.itemswrapper}
            onPress={() => navigation.navigate('HomeDetails')}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.image}
                source={require('../../assets/images/plantonb.png')}
              />
              <View style={styles.favWrapper}>
                <SvgLikeIcon />
              </View>
            </View>
            <View>
              <View style={{rowGap: 5, flexDirection: 'row'}}>
                <View>
                  <Text style={styles.headtext}>La dandroria</Text>
                  <Text style={styles.desctext}>Cute plant with mememe</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                {Array.from({length: 4}).map((_, index) => (
                  <SvgRatingFilled key={index} />
                ))}
                <SvgRating />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemswrapper}
            onPress={() => navigation.navigate('HomeDetails')}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.image}
                source={require('../../assets/images/plantonb.png')}
              />
              <View style={styles.favWrapper}>
                <SvgLikeIcon />
              </View>
            </View>
            <View>
              <View>
                <Text style={styles.headtext}>La dandroria</Text>
                <Text style={styles.desctext}>Cute plant with mememe</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                {Array.from({length: 4}).map((_, index) => (
                  <SvgRatingFilled key={index} />
                ))}
                <SvgRating />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: '#4C864A',
  },
  maincontwrapper: {
    marginTop: 80,
    borderWidth: 1,
    borderColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  toptext: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 32,
    fontWeight: '600',
    color: '#4C864A',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    marginRight: 5,
  },
  itemsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  itemswrapper: {
    backgroundColor: '#E7E8E3',
    borderRadius: 20,
    marginBottom: 20,
    width: '48%',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  favWrapper: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 22,
    padding: 5,
    borderColor: '#E7E8E3',
    backgroundColor: '#fff',
  },
  headtext: {fontSize: 20, fontWeight: '500', marginVertical: 5},
  desctext: {fontSize: 14, width: '95%', marginBottom: 5},
});
