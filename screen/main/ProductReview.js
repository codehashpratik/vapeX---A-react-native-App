import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import normalize from '../../utils/normalize';
import ModalReview from '../../components/ModalReview';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import connectionrequest from '../../utils/NetInfo';
import {getUserInfoRequest} from '../../redux/reducer/UserReducer';
import _ from 'lodash';
import Loader from '../../utils/Loader';

const ProductReview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isFocused = useIsFocused();
  const selectedProduct = useSelector(
    state => state.ProductReducer.selectedProductDetails.productDetails,
  );

  const productReducer = useSelector(state => state.ProductReducer);
  const UserReducer = useSelector(state => state.UserReducer);
  const [userDetails, setuserDetails] = useState({});
  const productDetails = JSON.parse(selectedProduct);
  const productReviews = productDetails.product_review;
  const [profileUri, setProfileUri] = useState(null);

  useEffect(() => {
    if (productReducer.type == 'product/getProductSuccess') {
      console.log(productReducer.productDetailRes);
    }

    // {
    //   setTimeout(() => {
    //     navigation.goBack();
    //   }, 1000);
    // }
  }, [productReducer]);

  useEffect(() => {
    if (isFocused) {
      connectionrequest()
        .then(state => {
          if (state) {
            dispatch(getUserInfoRequest());

            console.log('hellow');
          }
        })
        .catch(error => {
          // console.log('error -- ', error);
        });
    }
  }, [isFocused]);

  useEffect(() => {
    if (!_.isEmpty(UserReducer?.userInfo)) {
      setuserDetails(UserReducer?.userInfo);
      setTimeout(() => {
        setProfileUri(
          userDetails?.profile_pic ? userDetails?.profile_pic : null,
        );
      }, 1000);
    }
  }, [UserReducer?.userInfo]);

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        flex: 1,
      }}>
      <Loader visible={UserReducer.type == 'User/getUserInfoRequest'} />
      <ScrollView
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            fontFamily: Fonts.Poppins_Bold,
            fontSize: normalize(12),
            color: Colors.black,
            marginTop: normalize(20),
            marginLeft: normalize(20),
          }}>
          REVIEWS
        </Text>
        <Text
          style={{
            fontFamily: Fonts.Poppins_Regular,
            fontSize: normalize(9),
            color: Colors.black,
            marginTop: normalize(5),
            marginLeft: normalize(20),
            paddingRight: normalize(5),
          }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          optio vitae libero doloremque, sapiente enim in consequatur porro
          expedita,
        </Text>

        <FlatList
          style={{
            flex: 1,
            marginTop: normalize(5),
          }}
          data={productReviews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: normalize(40),
                  width: '85%',
                  // backgroundColor: 'grey',
                  borderBottomWidth: 0.5,
                  borderBlockColor: 'grey',
                  alignSelf: 'center',
                  marginBottom: normalize(5),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: normalize(40),
                    width: normalize(40),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: normalize(100),
                  }}>
                  <Image
                    source={{
                      uri:
                        profileUri == null
                          ? 'https://cdn-icons-png.flaticon.com/128/13403/13403524.png'
                          : profileUri,
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
                    marginLeft: normalize(15),
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_SemiBold,
                      fontSize: normalize(10),
                      color: Colors.black,
                    }}>
                    {userDetails?.first_name + ' ' + userDetails?.last_name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      fontSize: normalize(9),
                      color: Colors.black,
                    }}>
                    {item}
                  </Text>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(15),
                marginTop: normalize(20),
                marginBottom: normalize(20),
                textAlign: 'center',
              }}>
              No Reviews Yet ...
            </Text>
          }
        />

        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={{
            height: normalize(40),
            width: '80%',
            backgroundColor: Colors.black,
            marginVertical: normalize(20),
            alignSelf: 'center',
            borderRadius: normalize(10),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(12),
              color: Colors.white,
              textAlign: 'center',
            }}>
            SHARE YOUR FEEDBACK
          </Text>
        </TouchableOpacity>
        <ModalReview
          isVisible={isVisible}
          onBackdropPress={() => setIsVisible(false)}
        />
      </ScrollView>
    </View>
  );
};

export default ProductReview;
