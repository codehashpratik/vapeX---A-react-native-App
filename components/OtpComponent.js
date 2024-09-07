import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Colors} from '../themes/Themes';
import normalize from '../utils/normalize';

const OtpComponent = props => {
  const [isFocus, setIsFocus] = useState(false);

  function onChange(_value) {
    if (props.onChangeText) {
      props.onChangeText(_value);
    }
  }

  function onSubmit() {
    if (props.onSubmitEditing) {
      props.onSubmitEditing();
    }
  }

  return (
    <View
      style={{
        width: normalize(45),
        alignSelf: 'center',
        height: normalize(45),
        marginHorizontal: normalize(6),
        marginBottom: normalize(5),
        marginTop: normalize(5),
        borderColor: isFocus ? props?.tintColor : props?.defaultBorderColor,
        borderWidth: 0.9,
        borderRadius: normalize(5),
        justifyContent: 'center',
      }}>
      <TextInput
        value={props.value}
        onChangeText={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        returnKeyType={props?.returnKeyType}
        onSubmitEditing={onSubmit}
        keyboardType={'numeric'}
        ref={props?.refer}
        maxLength={1}
        style={{
          //   backgroundColor: 'red',
          width: '45%',
          alignSelf: 'center',
          fontSize: normalize(15),
          textAlign: 'center',
          height: normalize(33),
          borderBottomColor: isFocus ? props?.tintColor : props?.color,
          borderBottomWidth: 0.5,
          marginBottom: normalize(8),
          color: props?.color,
        }}
      />
    </View>
  );
};

OtpComponent.propTypes = {
  height: PropTypes.any,
  width: PropTypes.any,
  value: PropTypes.string,
  tintColor: PropTypes.string,
  defaultBorderColor: PropTypes.any,
  placeholder: PropTypes.string,
  icon: PropTypes.any,
  title: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.func,
  secureTextEntry: PropTypes.string,
  returnKeyType: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  marginV: PropTypes.number,
  marginH: PropTypes.number,
  marginR: PropTypes.number,
  marginL: PropTypes.number,
  marginB: PropTypes.number,
  marginS: PropTypes.number,
  marginE: PropTypes.number,
  marginT: PropTypes.number,
  padding: PropTypes.number,
  margin: PropTypes.number,
  paddingV: PropTypes.number,
  paddingH: PropTypes.number,
  paddingR: PropTypes.number,
  paddingL: PropTypes.number,
  paddingB: PropTypes.number,
  paddingS: PropTypes.number,
  paddingE: PropTypes.number,
  paddingT: PropTypes.number,
  backgroundColor: PropTypes.string,
  textAlign: PropTypes.string,
  color: PropTypes.any,
};

OtpComponent.defaultProps = {
  keyboardType: 'default',
  tintColor: Colors.half_baked,
  defaultBorderColor: Colors.white,
  color: Colors.white,
};

export default OtpComponent;
