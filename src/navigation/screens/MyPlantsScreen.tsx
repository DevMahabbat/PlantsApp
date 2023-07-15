import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import SvgAddPlant from '../../assets/AddPlantIcon';

// for image picker
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {deletePlant} from '../../redux/slices/plantslice';
import {AppDispatch, RootState} from '../../redux';

const MyPlantsScreen = () => {
  const [selectImage, setSelectImage] = useState<any>('');
  const [plantName, setPlantName] = useState('');
  const [plantDescription, setPlantDescription] = useState('');

  const launchImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel) {
        setSelectImage(response);
      }
    });
  };

  const launchCameraPicker = async () => {
    await launchCamera({mediaType: 'photo'}, response => {
      if (!response.didCancel) {
        console.log('res', response);
        setSelectImage(response);
      }
    });
  };

  const handleAddButtonPress = () => {
    Alert.alert(
      'Add Plant',
      'Choose an option',
      [
        {text: 'Camera', onPress: launchCameraPicker.bind(this)},
        {text: 'Image Library', onPress: launchImagePicker.bind(this)},
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.mainCont}>
      <ScrollView style={styles.maincontwrapper}>
        <View style={styles.toptext}>
          <Text style={styles.label}>My Plants</Text>
          <Text style={styles.label}>🪴</Text>
        </View>

        <View style={styles.addplantwrapper}>
          <Text style={{fontSize: 16}}>Add new plant</Text>
          <TouchableOpacity
            style={styles.plantBtn}
            onPress={() => handleAddButtonPress()}>
            <SvgAddPlant />
          </TouchableOpacity>
        </View>
        {/* Here will be the preview */}
        {selectImage && (
          <View>
            <Text style={{marginTop: 20, marginBottom: 10, fontSize: 18}}>
              Preview
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Plant Name"
              value={plantName}
              onChangeText={text => setPlantName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Plant Description"
              value={plantDescription}
              onChangeText={text => setPlantDescription(text)}
            />
          </View>
        )}
        {selectImage ? (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={{uri: selectImage.assets[0].uri}}
              style={{width: 80, height: 80, borderRadius: 8}}
            />
            <TouchableOpacity style={styles.submitBtn}>
              <Text style={{color: '#fff'}}>Add </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {/* Here the plants will be addded */}
        <View>
          <Text style={{marginTop: 60, fontSize: 18}}>Added plants</Text>

          <View style={styles.itemswrapper}>
            <Image
              style={styles.image}
              source={require('../../assets/images/plantonb.png')}
            />
            <View style={{marginTop: 15, width: 150}}>
              <Text style={styles.headtext}>Name</Text>
              <Text style={styles.desctext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur at magni obcaecati accusamus officiis quos debitis
                quo animi nam deleniti.
              </Text>
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
  headtext: {fontSize: 20, width: '80%', fontWeight: '500', marginVertical: 5},
  desctext: {fontSize: 14},
  deletebtnText: {
    backgroundColor: 'tomato',
    width: 100,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  submitBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#4C864A',
    width: 100,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 8,
  },
});
