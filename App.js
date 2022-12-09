import React, {useState} from 'react';
import {View, Text, Image, StatusBar, Platform} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS, SIZES} from './src/constants/theme';

const slides = [
  {
    id: 1,
    image: require('./src/assets/onboarding1.png'),
  },
  {
    id: 2,
    title: 'Find Blood Donors',
    description:
      '"Lorem ipsum dolor sit amt, consectur adipiscing elit. Arcu tristique tritique quam in"',
    image: require('./src/assets/onboardScreen2.png'),
  },
  {
    id: 3,
    title: 'Post A Blood Request',
    description:
      '"Lorem ipsum dolor sit amt, consectur adipiscing elit. Arcu tristique tritique quam in"',
    image: require('./src/assets/onboardScreen3.png'),
  },
];
export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = label => {
    return (
      <View
        style={{
          padding: 20,
        }}>
        <Text
          style={{
            color: COLORS.title,
            fontWeight: '600',
            fontSize: SIZES.h4,
          }}>
          {label}
        </Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <AppIntroSlider
          style={{backgroundColor: 'white'}}
          data={slides}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  padding: 15,
                  paddingTop: 100,
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: SIZES.width - 80,
                    height: Platform.OS === 'ios' ? 400 : 300,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: COLORS.titel,
                    paddingTop: 30,
                    fontSize: SIZES.h2,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingTop: 30,
                    fontWeight: '400',
                    color: COLORS.titel,
                  }}>
                  {item.description}
                </Text>
              </View>
            );
          }}
          activeDotStyle={{
            backgroundColor: COLORS.primary,
            width: 30,
          }}
          showSkipButton
          renderNextButton={() => buttonLabel('Next')}
          renderSkipButton={() => buttonLabel('Skip')}
          renderDoneButton={() => buttonLabel('Done')}
          onDone={() => {
            setShowHomePage(true);
          }}
        />
      </>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home Screen</Text>
    </View>
  );
}
