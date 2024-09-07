import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {Colors, Fonts} from '../themes/Themes';
import normalize from '../utils/normalize';

const FilterCheckbox = props => {
  function onPressFuc() {
    if (props?.onPress) {
      props?.onPress();
    }
  }

  return (
    <View
      style={{
        width: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        height: normalize(40),
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => onPressFuc()}
        style={{
          width: props?.size,
          height: props?.size,
          justifyContent: 'center',
          alignItems: 'center',
          margin: props?.margin,
          backgroundColor: props?.status ? Colors.moonstone_blue : Colors.white,
          borderWidth: 1,
          borderColor: props?.status ? Colors.white : 'grey',
          borderRadius: 4,
          marginHorizontal: normalize(10),
        }}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3388/3388530.png',
          }}
          style={{
            height: 17,
            width: 17,
            resizeMode: 'contain',
            tintColor: props?.status
              ? props?.activeColor
              : /* props?.deactiveColor*/ Colors.white,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: Fonts.Poppins_Regular,
          color: Colors.moonstone_blue,
          fontSize: normalize(12),
        }}>
        {props?.title}
      </Text>
    </View>
  );
};
FilterCheckbox.propTypes = {
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  margin: PropTypes.any,
  activeColor: PropTypes.string,
  deactiveColor: PropTypes.string,
  status: PropTypes.bool,
  onPress: PropTypes.func,
  padding: PropTypes.any,
  title: PropTypes.string,
};

FilterCheckbox.defaultProps = {
  size: 30,
  margin: 1,
  activeColor: Colors.white,
  deactiveColor: 'black',
  status: false,
};

export default FilterCheckbox;
