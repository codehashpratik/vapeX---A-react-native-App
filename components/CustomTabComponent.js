import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Colors, Fonts, Icons} from '../themes/Themes';
import normalize from '../utils/normalize';

const CustomTabComponent = props => {
  const {state, descriptors, navigation} = props;
  const [idx, setIdx] = useState(0);
  return (
    <View
      style={{
        backgroundColor: Colors.navy_blue_deep,
        borderRadius: normalize(30),
        marginHorizontal: normalize(20),
        marginVertical: normalize(10),
        height: normalize(40),
        width: '90',
      }}>
      <View
        style={{
          height: normalize(40),
          flexDirection: 'row',
          backgroundColor: Colors.navy_blue_deep,
          // borderWidth: 1,
          borderColor: Colors.white,
          borderRadius: normalize(10),
          // marginBottom: normalize(20),
          marginHorizontal: normalize(20),
          justifyContent: 'space-around',
          alignItems: 'center',
          // marginTop: normalize(20),
        }}>
        {state.routes?.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
              setIdx(index);
            }
          };
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                onPress();
              }}
              style={{
                height: normalize(35),
                width: normalize(35),
                borderRadius: normalize(100),
                backgroundColor: isFocused
                  ? Colors.white
                  : Colors.navy_blue_deep,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri:
                    index == 0
                      ? 'https://cdn-icons-png.flaticon.com/128/9243/9243857.png'
                      : index == 1
                      ? 'https://cdn-icons-png.flaticon.com/128/3914/3914208.png'
                      : 'https://cdn-icons-png.flaticon.com/128/3916/3916603.png',
                }}
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'cover',
                  tintColor: isFocused ? Colors.navy_blue_deep : Colors.white,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabComponent;
