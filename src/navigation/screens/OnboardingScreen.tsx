import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import OnboardingItem from '../components/Onboarding/OnboardingItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface OnboardingItemData {
  id: string;
  title: string;
  description: string;
  image: any;
}

const onboardingData: OnboardingItemData[] = [
  {
    id: '1',
    title: 'Welcome!',
    description: 'we’re glad that that you are here',
    image: require('../../assets/images/plantonb.png'), // Replace with the actual image path
  },
  {
    id: '2',
    title: 'Discover Your Type Of Plant',
    description: 'Tips and Tricks to grow a healthy plant',
    image: require('../../assets/images/plant2.png'), // Replace with the actual image path
  },
  {
    id: '3',
    title: 'Connect With Other Plant Lovers',
    description: 'Join A Community',
    image: require('../../assets/images/plantonb2.png'), // Replace with the actual image path
  },
];

interface OnboardingScreenProps {
  navigation: any;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({navigation}) => {
  const flatListRef = useRef<FlatList<OnboardingItemData> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: currentIndex, animated: true});
    }
  }, [currentIndex]);

  const handleNext =async () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
     await AsyncStorage.setItem("FIRST_TIME", "false")
      navigation.replace('HomeMain');

    }
  };

  const handlePaginationPress = (index: number) => {
    setCurrentIndex(index);
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {onboardingData.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.paginationItem,
              index === currentIndex && styles.paginationItemActive,
            ]}
            onPress={() => handlePaginationPress(index)}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <OnboardingItem data={item} />}
        keyExtractor={item => item.id}
        onScrollToIndexFailed={() => {}}
        onMomentumScrollEnd={event => {
          const contentOffset = event.nativeEvent.contentOffset;
          const index = Math.round(
            contentOffset.x / Dimensions.get('window').width,
          );
          setCurrentIndex(index);
        }}
      />
      {renderPagination()}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>
          {currentIndex === onboardingData.length - 1
            ? 'Lets get started'
            : 'Continue'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E8E3',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  paginationItem: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 6,
  },
  paginationItemActive: {
    width: 26,
    backgroundColor: '#37623DD6',
  },
  nextButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#47734DD9',
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: 180,
    borderRadius: 8,
    marginBottom: 60,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
