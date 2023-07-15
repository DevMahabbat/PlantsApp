import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import SvgLikeIcon from '../../assets/LikeIcon';
import SvgRating from '../../assets/Star';
import SvgRatingFilled from '../../assets/SvgRatingFilled';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux';
import {AppDispatch} from '../../redux';
import {getAllPlants} from '../../redux/slices/plantslice';
import {Plant} from '../../redux/types/Plant';
import {ActivityIndicator} from 'react-native-paper';

import LottieView from 'lottie-react-native';
const HomeScreen = ({navigation}: any) => {
  let plantData = useSelector((state: RootState) => state.plantSlice);
  const dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  //   console.log("axios req");
  //   axios.get('http://10.0.2.2:3000/plants').then(res => {
  //     console.log('unnecessary testind place data::', res.data);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }, [])

  useEffect(() => {
    dispatch(getAllPlants());
  }, [dispatch]);

  // console.log(plantData.plants[0].photos[0].imageUrl);

  console.log('====================================');
  console.log(plantData.plants);
  console.log('====================================');

  return (
    <View style={styles.mainCont}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView style={styles.maincontwrapper}>
        <View style={styles.toptext}>
          <Text style={styles.label}>Discover</Text>
          <Text style={{fontSize: 22}}>🌱</Text>
        </View>
        {/* wrapper for rendering items */}

        {plantData.loading == 'fullfilled' ? (
          <View style={styles.itemsWrapper}>
            {plantData?.plants?.length > 0 &&
              plantData.plants.map((plant: Plant) => (
                <TouchableOpacity
                  key={plant._id}
                  style={styles.itemswrapper}
                  onPress={() =>
                    navigation.navigate('HomeDetails', {plant: plant})
                  }>
                  <View style={{flexDirection: 'row'}}>
                    {plant?.photos.length > 0 && (
                      <Image
                        style={styles.image}
                        source={{
                          uri: `https://plantsapp-s6m7.onrender.com/uploads/${plant?.photos[0].imageUrl}`,
                        }}
                      />
                    )}
                    <View style={styles.favWrapper}>
                      <SvgLikeIcon />
                    </View>
                  </View>
                  <View>
                    <View style={{rowGap: 5, flexDirection: 'row'}}>
                      <View>
                        <Text style={styles.headtext}>{plant.name}</Text>
                        <Text style={styles.desctext}>{plant.description}</Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      {plant.rating &&
                        Array.from({length: plant.rating}).map((_, index) => (
                          <SvgRatingFilled key={index} />
                        ))}
                      {Array.from({length: 5 - (plant.rating || 0)}).map(
                        (_, index) => (
                          <SvgRating key={index} />
                        ),
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        ) : (
          <>
            <LottieView
              style={styles.lottie}
              autoPlay={true}
              loop
              source={require('../../assets/animation/walkingman.json')}
              colorFilters={[{keypath: 'Plane', color: 'rgb(255, 100, 0)'}]}
            />
          </>
        )}
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
    // right: 2,
    borderWidth: 1,
    borderRadius: 22,
    padding: 5,
    borderColor: '#E7E8E3',
    backgroundColor: '#fff',
  },
  lottie: {
    width: 100,
    marginLeft: '30%',
    height: 100,
    marginTop: '30%',
  },
  headtext: {fontSize: 20, fontWeight: '500', marginVertical: 5},
  desctext: {fontSize: 14, marginBottom: 5},
});
