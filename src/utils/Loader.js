import React from 'react';
import {ActivityIndicator, SafeAreaView, Dimensions, View} from 'react-native';
import PropTypes from 'prop-types';
import normalize from './normalize';

export default function Loader(props) {
  return props.visible ? (
    <SafeAreaView
      style={{
        flex: 1,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 10,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: Dimensions.get('window').height,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          height: normalize(40),
          width: normalize(40),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: normalize(8),
        }}>
        <ActivityIndicator size="small" color={'black'} />
      </View>
    </SafeAreaView>
  ) : null;
}

Loader.propTypes = {
  visible: PropTypes.bool,
};

Loader.defaultProps = {
  visible: false,
};
