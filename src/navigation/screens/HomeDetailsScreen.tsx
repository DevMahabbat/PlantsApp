import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Slider from '../components/Slider/Slider';
import SvgLikeIcon from '../../assets/LikeIcon';
import SvgRatingFilled from '../../assets/SvgRatingFilled';
import SvgRating from '../../assets/Star';
import SvgBack from '../../assets/BackIcon';

const comments = [
  {
    id: 1,
    author: 'User1',
    text: 'This plant is awesome and gives special atmosphere!',
  },
  {
    id: 2,
    author: 'User2',
    text: 'I would not recommend this plant because of specific smell!',
  },
];

const HomeDetailsScreen = ({navigation, route}: any) => {
  const {plant} = route.params;
  return (
    <View style={styles.mainCont}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}>
        <SvgBack />
      </TouchableOpacity>
      <ScrollView style={styles.maincontwrapper}>
        <Slider />
        <View style={styles.toptext}>
          <Text style={styles.label}>{plant.name}</Text>
          <View style={styles.favWrapper}>
            <SvgLikeIcon />
          </View>
        </View>

        <View style={{marginHorizontal: 25}}>
          <Text style={styles.descText}>{plant.description}</Text>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            {plant.rating !== undefined &&
              Array.from({length: plant.rating}).map((_, index) => (
                <SvgRatingFilled key={index} />
              ))}
            {Array.from({length: 5 - (plant.rating || 0)}).map((_, index) => (
              <SvgRating key={index} />
            ))}
          </View>
        </View>
        <View style={styles.commentsSection}>
          <Text style={styles.commentsHeader}>Comments</Text>
          {/* Render comments here */}
          {comments.map(comment => (
            <View key={comment.id} style={styles.commentContainer}>
              <Text style={styles.commentAuthor}>{comment.author}</Text>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeDetailsScreen;

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
    paddingHorizontal: 25,
    paddingTop: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 26,
    fontWeight: '400',
    color: '#4C864A',
  },
  descText: {
    fontSize: 16,
    lineHeight: 22,
    marginTop: 10,
  },
  favWrapper: {
    borderWidth: 1,
    borderRadius: 22,
    padding: 5,
    borderColor: '#E7E8E3',
    backgroundColor: '#E7E8E3',
  },
  commentsSection: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  commentsHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  commentContainer: {
    marginBottom: 10,
  },
  commentAuthor: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  commentText: {
    fontSize: 14,
  },
  backBtn: {
    position: 'absolute',
    top: 95,
    left: 20,
    padding: 5,
    borderRadius: 30,
    backgroundColor: '#D4E4D2',
    borderColor: '#D4E4D2',
    borderWidth: 1,
    zIndex: 9999,
  },
});
