import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgLikeIcon from '../../assets/LikeIcon';
import SvgRating from '../../assets/Star';
import SvgRatingFilled from '../../assets/SvgRatingFilled';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.mainCont}>
      <View style={styles.maincontwrapper}>
        <View style={styles.toptext}>
          <Text style={styles.label}>Discover</Text>
          <Image
            style={{width: 60, height: 60}}
            source={require('../../assets/images/plant3.png')}
          />
        </View>
        {/* wrapper for rendering items */}
        <View style={{rowGap: 20}}>
          <TouchableOpacity
            style={styles.itemswrapper}
            onPress={() => navigation.navigate('HomeDetails')}>
            <Image
              style={styles.image}
              source={require('../../assets/images/plantonb.png')}
            />
            <View>
              <View style={styles.favWrapper}>
                <SvgLikeIcon />
              </View>
              <View style={{marginTop: 20, rowGap: 5}}>
                <Text style={styles.headtext}>La dandroria</Text>
                <Text style={styles.desctext}>Cute plant with mememe</Text>
                <View style={{flexDirection: 'row', marginTop: 5}}></View>
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
      </View>
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
  },
  label: {
    fontSize: 32,
    fontWeight: '600',
    color: '#4C864A',
  },
  image: {
    width: 160,
    height: 160,
  },
  itemswrapper: {
    backgroundColor: '#E7E8E3',
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 20,
    flexDirection: 'row',
    columnGap: 20,
  },
  favWrapper: {
    alignSelf: 'flex-end',
    marginRight: 50,
    borderWidth: 1,
    borderRadius: 22,
    padding: 5,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  headtext: {fontSize: 18, fontWeight: '500'},
  desctext: {fontSize: 16, width: '95%'},
});
