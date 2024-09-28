import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {Colors, Fonts, Icons} from '../themes/Themes';
import normalize from '../utils/normalize';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import constants from '../utils/constants';
import {updateProductRequest} from '../redux/reducer/ProductReducer';
import connectionrequest from '../utils/NetInfo';
import showMessage from '../utils/showMessage';
import Loader from '../utils/Loader';

const ModalReview = ({isVisible = false, onBackdropPress = () => {}}) => {
  const productDetails = useSelector(state => state.ProductReducer);
  const isFocused = useIsFocused();
  const [title, setTitle] = useState('');
  const [productImage, setProductImage] = useState('');
  const [review, setReview] = useState('');
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  const [discount, setDiscount] = useState('');
  const [price, setPrice] = useState('');
  const [id, setId] = useState('');
  const [info, setInfo] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) {
      setTitle(productDetails.selectedProductDetails.product_title);
      setProductImage(productDetails.selectedProductDetails.product_image);
      setCategory(productDetails.selectedProductDetails.product_category);
      setPrice(productDetails.selectedProductDetails.product_price);
      setColor(productDetails.selectedProductDetails.product_color);
      setDiscount(productDetails.selectedProductDetails.product_discount);
      setId(productDetails.selectedProductDetails.product_id);
      setInfo(productDetails.selectedProductDetails.product_description);
    }
  }, [isFocused]);

  function updateReview() {
    if (review == '') {
      showMessage('Please write your review to continue');
    } else {
      const reviewList = [];
      reviewList.push(review);

      const parsedDescription = JSON.parse(
        productDetails.selectedProductDetails.productDetails,
      );

      if (Array.isArray(parsedDescription.product_review)) {
        parsedDescription.product_review.push(review);

        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', title);
        formData.append(
          'description',
          JSON.stringify({
            product_price: price,
            product_category: category,
            product_color: color,
            product_discount: discount,
            product_description: info,
            product_review: parsedDescription.product_review,
          }),
        );

        if (productImage !== null) {
          formData.append('image', productImage);
        }

        connectionrequest()
          .then(state => {
            if (state) {
              dispatch(updateProductRequest(formData));
            }
          })
          .catch(error => {
            console.log('error -- ', error);
          });
      } else {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', title);
        formData.append(
          'description',
          JSON.stringify({
            product_price: price,
            product_category: category,
            product_color: color,
            product_discount: discount,
            product_description: info,
            product_review: reviewList,
          }),
        );

        if (productImage !== null) {
          formData.append('image', productImage);
        }

        connectionrequest()
          .then(state => {
            if (state) {
              dispatch(updateProductRequest(formData));
            }
          })
          .catch(error => {
            console.log('error -- ', error);
          });
      }
    }
  }

  useEffect(() => {
    if (productDetails.type == 'product/updateProductSuccess') {
      setTimeout(() => {
        setReview('');
        onBackdropPress();
      }, 1000);
    }
  }, [productDetails]);

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
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
      <Loader visible={productDetails.type == 'product/updateProductRequest'} />
      <View
        style={{
          height: '100%',
          width: '100%',
        }}>
        <ScrollView
          style={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: '90%',
              height: normalize(290),
              backgroundColor: 'white',
              marginTop: normalize(190),
              alignSelf: 'center',
              borderTopLeftRadius: normalize(15),
              borderTopRightRadius: normalize(15),
              paddingHorizontal: normalize(15),
              paddingVertical: normalize(30),
              borderBottomLeftRadius: normalize(15),
              borderBottomRightRadius: normalize(15),
            }}>
            <View
              style={{
                width: '95%',
                alignSelf: 'center',
                borderRadius: normalize(6),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(13),
                  marginRight: normalize(4),
                }}>
                WRITE
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_SemiBold,
                  fontSize: normalize(13),
                  color: Colors.black,
                }}>
                REVIEW
              </Text>
            </View>

            <View
              style={{
                height: normalize(50),
                width: '100%',
                alignSelf: 'center',
                borderRadius: normalize(3),
                flexDirection: 'row',

                alignItems: 'center',
                marginTop: normalize(10),
                borderWidth: 0.2,
                borderColor: 'grey',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  // backgroundColor: 'red',
                  height: normalize(40),
                  width: normalize(40),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: normalize(4),
                  borderRadius: normalize(5),
                  borderWidth: 0.3,
                  borderColor: 'grey',
                }}>
                <Image
                  source={{
                    uri: constants.PRODUCT_IMG_URI.concat(productImage),
                  }}
                  style={{
                    height: normalize(30),
                    width: normalize(30),
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View
                style={{
                  marginLeft: normalize(10),
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins_Bold,
                    color: Colors.black,
                    fontSize: normalize(7),
                  }}>
                  {title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(7),
                    }}>
                    Order ID :
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_SemiBold,
                      color: Colors.black,
                      fontSize: normalize(7),
                      marginLeft: normalize(3),
                    }}>
                    #12545879
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                height: normalize(90),
                width: '100%',
                // backgroundColor: 'grey',
                borderRadius: normalize(6),
                borderColor: Colors.black,
                borderWidth: 0.5,
                marginTop: normalize(8),
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(7),
                  color: Colors.black,
                  marginTop: normalize(6),
                  marginLeft: normalize(8),
                }}>
                Write Your Review
              </Text>

              <TextInput
                style={{
                  height: normalize(60),
                  width: '100%',
                  paddingHorizontal: normalize(8),
                }}
                placeholder="Type here..."
                multiline={true}
                textAlignVertical="top"
                value={review}
                onChangeText={e => {
                  setReview(e);
                }}
              />
            </View>

            <TouchableOpacity
              onPress={() => updateReview()}
              style={{
                height: normalize(30),
                width: normalize(100),
                backgroundColor: Colors.mediumState_blue,
                alignSelf: 'center',
                marginTop: normalize(15),
                borderRadius: normalize(4),
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(9),
                  color: Colors.white,
                  textAlign: 'center',
                }}>
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => onBackdropPress()}
            style={{
              height: normalize(22),
              width: normalize(22),
              backgroundColor: '#c3c5d3',
              borderRadius: normalize(100),
              position: 'absolute',
              top: normalize(152),
              right: normalize(20),
              shadowColor: Colors.black,
              elevation: normalize(20),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Icons.close}
              style={{
                height: normalize(12),
                width: normalize(12),
                tintColor: Colors.white,
              }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalReview;
