import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Slider from '../components/Slider/Slider';
import SvgLikeIcon from '../../assets/LikeIcon';
import SvgRatingFilled from '../../assets/SvgRatingFilled';
import SvgRating from '../../assets/Star';

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

const HomeDetailsScreen = () => {
  return (
    <View style={styles.mainCont}>
      <ScrollView style={styles.maincontwrapper}>
        <Slider />
        <View style={styles.toptext}>
          <Text style={styles.label}>La dandroria</Text>
          <View style={styles.favWrapper}>
            <SvgLikeIcon />
          </View>
        </View>

        <View style={{marginHorizontal: 25}}>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            animi nobis nostrum delectus dicta inventore quibusdam quisquam
            neque sit ut!
          </Text>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            {Array.from({length: 4}).map((_, index) => (
              <SvgRatingFilled key={index} />
            ))}
            <SvgRating />
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
});
