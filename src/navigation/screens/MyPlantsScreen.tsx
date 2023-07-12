import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SvgAddPlant from '../../assets/AddPlantIcon';

// for image picker
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const MyPlantsScreen = () => {
  const [selectImage, setSelectImage] = useState('');
  let options = {
    storageOptions: {
      path: 'image',
    },
  };

  const ImagePicker = () => {
    launchImageLibrary(options, response => {
      setSelectImage(response.assets[0].uri);
      console.log(response.assets[0].uri);
    }).catch(error => {
      console.log('Image picker error:', error);
    });
  };

  return (
    <View style={styles.mainCont}>
      <ScrollView style={styles.maincontwrapper}>
        <View style={styles.toptext}>
          <Text style={styles.label}>My Plants</Text>
          <Text style={styles.label}>🪴</Text>
        </View>

        <View style={styles.addplantwrapper}>
          <Text style={{fontSize: 18}}>Add new plant</Text>
          <TouchableOpacity
            style={styles.plantBtn}
            onPress={() => ImagePicker()}>
            <SvgAddPlant />
          </TouchableOpacity>
        </View>
        {/* Here will be the preview */}
        <View>
          <View></View>
        </View>
        {/* Here the plants will be addded */}
        <View>
          <Text style={{marginTop: 20, fontSize: 18}}>Added plants</Text>
          <View style={styles.itemswrapper}>
            <Image
              style={styles.image}
              source={require('../../assets/images/plantonb.png')}
            />
            <View style={{marginTop: 15}}>
              <Text style={styles.headtext}>La dandroria</Text>
              <Text style={styles.desctext}>Cute plant with mememe</Text>
              <TouchableOpacity style={styles.deletebtnText}>
                <Text style={{color: '#fff'}}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyPlantsScreen;

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
    paddingHorizontal: 20,
  },
  toptext: {
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
  plantBtn: {
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#4C864A',
    borderColor: '#4C864A',
    paddingHorizontal: 5,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addplantwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E7E8E3',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  itemswrapper: {
    backgroundColor: '#E7E8E3',
    borderRadius: 8,
    marginVertical: 10,
    padding: 20,
    flexDirection: 'row',
    columnGap: 10,
  },
  image: {
    width: 160,
    height: 160,
  },
  headtext: {fontSize: 20, fontWeight: '500', marginVertical: 5},
  desctext: {fontSize: 14, width: '95%', marginBottom: 5},
  deletebtnText: {
    backgroundColor: 'tomato',
    width: 100,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 20,
  },
});
