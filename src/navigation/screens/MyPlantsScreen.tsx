import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyPlantsScreen = () => {
  return (
    <View style={styles.mainCont}>
      <ScrollView style={styles.maincontwrapper}>
        <View style={styles.toptext}>
          <Text style={styles.label}>My Plants</Text>
          <Text style={styles.label}>🪴</Text>
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
});
