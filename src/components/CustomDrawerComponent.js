import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from './ImagePicker';
import {useDispatch} from 'react-redux';
import {Colors, Fonts, Icons} from '../themes/Themes';
import normalize from '../utils/normalize';
import {logoutRequest} from '../redux/reducer/AuthReducer';
import ModalLogout from './ModalLogout';

const CustomDrawerComponent = props => {
  const {state, descriptors, navigation} = props;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.lavender,
      }}>
      <ScrollView>
        {state.routes.map((item, index) => {
          const {options} = descriptors[item.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : item.name;

          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: item.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(item.name, item.params);
            }
          };
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onPress()}
              style={{
                height: normalize(50),
                width: '90%',
                backgroundColor: isFocused ? Colors.navy_blue : Colors.lavender,
                marginTop: normalize(15),
                flexDirection: 'row',
                alignSelf: 'center',
                borderRadius: normalize(11),
                alignItems: 'center',
              }}>
              <Image
                source={
                  index == 0
                    ? Icons.user
                    : index == 1
                    ? Icons.myOrders
                    : index == 2
                    ? Icons.address
                    : index == 3
                    ? Icons.payment
                    : Icons.about
                }
                style={{
                  resizeMode: 'contain',
                  height: normalize(18),
                  width: normalize(18),
                  marginRight: normalize(10),
                  marginLeft: normalize(25),
                  tintColor: isFocused ? Colors.white : Colors.navy_blue,
                }}
              />
              <Text
                style={{
                  color: isFocused ? Colors.white : null,
                  fontSize: normalize(13),
                  fontFamily: Fonts.Poppins_Regular,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={{
            height: normalize(50),
            width: '90%',
            backgroundColor: Colors.lavender,
            marginTop: normalize(15),
            flexDirection: 'row',
            alignSelf: 'center',
            borderRadius: normalize(11),
            alignItems: 'center',
          }}>
          <Image
            source={Icons.logout}
            style={{
              resizeMode: 'contain',
              height: normalize(18),
              width: normalize(18),
              marginRight: normalize(10),
              marginLeft: normalize(25),
              tintColor: Colors.navy_blue,
            }}
          />
          <Text
            style={{
              fontSize: normalize(13),
              fontFamily: Fonts.Poppins_Regular,
            }}>
            Log out
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <ImagePicker
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        onSelectImage={img => {
          if (img) {
            setProfileImg(img.path);
          }
        }}
      />

      <ModalLogout
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
      />
    </View>
  );
};

export default CustomDrawerComponent;
