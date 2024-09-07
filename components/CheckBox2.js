import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {Colors} from '../themes/Themes';

const CheckBox2 = props => {
  function onPressFuc() {
    if (props?.onPress) {
      props?.onPress();
    }
  }

  return (
    <TouchableOpacity
      onPress={() => onPressFuc()}
      style={{
        width: props?.size,
        height: props?.size,
        justifyContent: 'center',
        alignItems: 'center',

        margin: props?.margin,
        backgroundColor: props?.status ? props?.backgroundColor : Colors.white,
        borderWidth: 1,
        borderColor: props?.status ? Colors.white : null,
        borderRadius: 4,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
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
  );
};
CheckBox2.propTypes = {
  size: PropTypes.number,
  height: PropTypes.any,
  width: PropTypes.any,
  backgroundColor: PropTypes.string,
  margin: PropTypes.any,
  activeColor: PropTypes.string,
  deactiveColor: PropTypes.string,
  status: PropTypes.bool,
  onPress: PropTypes.func,
  padding: PropTypes.any,
};

CheckBox2.defaultProps = {
  size: 30,
  margin: 1,
  activeColor: Colors.white,
  deactiveColor: 'black',
  status: false,
  backgroundColor: 'black',
};

export default CheckBox2;
