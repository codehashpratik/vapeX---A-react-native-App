import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import ImageCropPicker from 'react-native-image-crop-picker';

const ImagePicker = ({
  isVisible = false,
  onBackdropPress = () => {},
  onSelectImage = () => {},
}) => {
  function getImageFromGallery(callback = () => {}) {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
      cropperRotateButtonsHidden: true,
      loadingLabelText: 'Processing assets...',
      useFrontCamera: true,
      waitAnimationEnd: true,
      cropperToolbarTitle: 'Profile Picture',
      avoidEmptySpaceAroundImage: true,
      includeExif: true,
      mediaType: 'photo',
    })
      .then(image => {
        const imageUri = image.path;

        let arr = image.path.split('/');
        let getOriginalname = arr[arr.length - 1];
        let imageObj = {
          name: getOriginalname,
          type: image.mime,
          uri:
            Platform.OS === 'android'
              ? image.path
              : image.path.replace('file://', ''),
        };

        callback({
          uri: imageUri,
          path: imageObj,
        });
      })
      .catch(err => {
        callback(false);
        console.log(err);
      });
  }

  function getImageFromCamera(callback = () => {}, size) {
    ImageCropPicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
      cropperRotateButtonsHidden: true,
      loadingLabelText: 'Processing assets...',
      useFrontCamera: true,
      waitAnimationEnd: true,
      cropperToolbarTitle: 'Profile Picture',
      avoidEmptySpaceAroundImage: true,
      includeExif: true,
      mediaType: 'photo',
    })
      .then(image => {
        const imageUri = image.path;

        let arr = image.path.split('/');
        let getOriginalname = arr[arr.length - 1];
        let imageObj = {
          name: getOriginalname,
          type: image.mime,
          uri:
            Platform.OS === 'android'
              ? image.path
              : image.path.replace('file://', ''),
        };

        callback({
          uri: imageUri,
          path: imageObj,
        });
      })
      .catch(err => {
        callback(false);
        console.log(err);
      });
  }

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      // backdropColor="green"
      animationIn={'zoomIn'}
      animationOut={'slideOutDown'}
      animationInTiming={700}
      animationOutTiming={800}
      onBackButtonPress={() => onBackdropPress()}
      onBackdropPress={() => onBackdropPress()}
      style={{
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        margin: 0,
        padding: 0,
      }}>
      <View
        style={{
          width: '90%',
          height: '30%',
          backgroundColor: 'white',
          position: 'absolute',
          alignSelf: 'center',
          // bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 30,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
            color: 'black',
          }}>
          Choose Option
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginVertical: 30,
            justifyContent: 'space-between',
          }}>
          {['Camera', 'gallery'].map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                if (index == 0) {
                  getImageFromCamera(res => {
                    if (res !== false) {
                      onSelectImage(res);
                    }
                    onBackdropPress();
                  });
                } else {
                  getImageFromGallery(res => {
                    if (res !== false) {
                      onSelectImage(res);
                    }
                    onBackdropPress();
                  });
                }
              }}
              style={{
                width: '49%',
                height: 45,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          onPress={() => onBackdropPress()}
          style={{
            width: '100%',
            height: 45,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            marginBottom: 30,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '500',
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ImagePicker;
