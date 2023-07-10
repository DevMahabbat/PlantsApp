import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface OnboardingItemProps {
  data: {
    title: string;
    description: string;
    image: any; // Replace with the appropriate image type
  };
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
}

const OnboardingItem: React.FC<OnboardingItemProps> = ({
  data,
  titleStyle,
  descriptionStyle,
  containerStyle,
  imageStyle,
}) => {
  return (
    <View style={[styles.pageContainer, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{data.title}</Text>
      <Image source={data.image} style={[styles.image, imageStyle]} />
      <Text style={[styles.description, descriptionStyle]}>
        {data.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginBottom: 16,
    color: '#2D6936',
    width: '80%',
    textAlign: 'center',
    borderRadius: 12,
  },
  description: {
    fontSize: 24,
    color: '#2D6936',
    width: '70%',
    textAlign: 'center',
  },
});

export default OnboardingItem;
