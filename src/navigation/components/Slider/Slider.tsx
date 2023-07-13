import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const data = [
  {id: 1, source: require('../../../assets/images/plantonb2.png')},
  {id: 2, source: require('../../../assets/images/plant2.png')},
  {id: 3, source: require('../../../assets/images/plantonb.png')},
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({item}: any) => {
    return <Image source={item.source} style={styles.slideImage} />;
  };

  const handlePaginationPress = (index: number) => {
    setActiveIndex(index);
    const offset = index * Dimensions.get('window').width;
    flatListRef.current?.scrollToOffset({offset, animated: true});
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     handleNext();
  //   }, 3000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          const slideWidth = Dimensions.get('window').width;
          const slideIndex = Math.round(
            event.nativeEvent.contentOffset.x / slideWidth,
          );
          setActiveIndex(slideIndex);
        }}
      />
      <View style={styles.paginationContainer}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.paginationDot,
              index === activeIndex ? styles.activePaginationDot : null,
            ]}
            onPress={() => handlePaginationPress(index)}
          />
        ))}
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  slideImage: {
    width: width - 40,
    height: 200,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    resizeMode: 'contain',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -30,
    left: 0,
    right: 0,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E7E8E3',
    marginHorizontal: 4,
  },
  activePaginationDot: {
    backgroundColor: '#37623DD6',
    width: 24,
  },
});

export default Slider;
