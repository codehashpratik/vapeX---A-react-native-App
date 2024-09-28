import {
  View,
  Text,
  Image,
  StatusBar,
  ActivityIndicator,
  Animated,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Colors, Icons} from '../../themes/Themes';
import normalize from '../../utils/normalize';
import {useDispatch} from 'react-redux';
import {getTokenRequest} from '../../redux/reducer/AuthReducer';
import LottieView from 'lottie-react-native';

const Splash = () => {
  const dispatch = useDispatch();
  const isAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(isAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished == true) {
        // console.log('Completed Animation', finished);
        setTimeout(() => {
          dispatch(getTokenRequest(null));
        }, 1000);
      }
    });
  }, [isAnimation]);

  // const colorInterpolate = isAnimation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['#BDDDED', '#1982B4'],
  // });

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black,
      }}>
      <StatusBar backgroundColor={Colors.black} barStyle={'light-content'} />
      <View
        style={{
          height: normalize(170),
          width: '100%',
          // backgroundColor: 'maroon',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Image
          source={Icons.brandLogo}
          style={{
            height: normalize(100),
            width: normalize(100),
            resizeMode: 'contain',
            opacity: isAnimation,
            tintColor: Colors.lavender,
            transform: [
              {
                translateX: isAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-100, 0],
                }),
              },
            ],
          }}
        />
        <Animated.Text
          style={{
            color: Colors.lavender_deep,
            fontSize: normalize(24),
            letterSpacing: normalize(20),
            position: 'absolute',
            bottom: normalize(1),
            opacity: isAnimation,
          }}>
          VAPEX
        </Animated.Text>
      </View>

      {/* <ActivityIndicator
        color={Colors.half_baked}
        style={{
          position: 'absolute',
          bottom: normalize(20),
        }}
      /> */}

      <LottieView
        style={{
          height: normalize(30),
          width: normalize(30),
          position: 'absolute',
          bottom: normalize(40),
        }}
        source={Icons.loadingsplash}
        autoPlay
        loop
      />
    </Animated.View>
  );
};

export default Splash;
