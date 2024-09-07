import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import normalize from '../../../utils/normalize';
import {Colors, Fonts, Icons} from '../../../themes/Themes';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {
  getOrderListRequest,
  removeOrderlistRequest,
} from '../../../redux/reducer/ProductReducer';
import {FlatList} from 'react-native-gesture-handler';
import constants from '../../../utils/constants';
import Footer from '../../../components/Footer';
import showMessage from '../../../utils/showMessage';
import LinearGradient from 'react-native-linear-gradient';
const MyOrders = ({navigation}) => {
  const dispatch = useDispatch();
  const productReducer = useSelector(state => state.ProductReducer);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(getOrderListRequest());
    }
  }, [isFocused]);

  useEffect(() => {
    if (productReducer.type === 'product/removeOrderlistSuccess') {
      dispatch(getOrderListRequest());
    }
  }, [productReducer]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
        }}>
        <View
          style={{
            flexDirection: 'row',

            marginTop: normalize(15),
            flexDirection: 'row',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Image
              source={Icons.sidebar}
              style={{
                height: normalize(30),
                width: normalize(30),
                resizeMode: 'contain',
                marginLeft: normalize(15),
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Regular,
              fontSize: normalize(20),
              marginLeft: normalize(10),
            }}>
            MY
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_Bold,
              fontSize: normalize(20),
              marginLeft: normalize(5),
              color: Colors.black,
            }}>
            ORDERS
          </Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(removeOrderlistRequest());
            }}
            style={{
              height: normalize(27),
              width: normalize(80),
              backgroundColor: Colors.mediumState_blue,
              borderRadius: normalize(5),
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: normalize(45),
            }}>
            <LinearGradient
              style={{
                height: '100%',
                width: '100%',
                borderRadius: normalize(5),
                justifyContent: 'center',
              }}
              colors={[Colors.mediumState_blue, Colors.moonstone_blue]}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}>
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(8),
                  textAlign: 'center',
                }}>
                DELETE HISTORY
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <FlatList
          data={productReducer.orderList}
          keyExtractor={(item, index) => index.toString()}
          style={{
            flex: 1,
            marginTop: normalize(5),
            marginBottom: normalize(35),
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '85%',
                  alignSelf: 'center',
                  marginVertical: normalize(6),
                  height: normalize(80),
                  alignItems: 'center',
                  borderRadius: normalize(9),
                  borderWidth: 0.6,
                  borderColor: Colors.moonstone_blue,
                  marginHorizontal: normalize(8),
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    height: normalize(60),
                    width: normalize(60),
                    // backgroundColor: Colors.lavender_light,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: normalize(10),
                    borderWidth: 0.6,
                    borderColor: Colors.lavender,
                    borderRadius: normalize(5),
                  }}>
                  <Image
                    source={{
                      uri:
                        item?.image !== ''
                          ? constants.PRODUCT_IMG_URI.concat(
                              item?.product_image,
                            )
                          : 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
                    }}
                    style={{
                      height: normalize(45),
                      width: normalize(45),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View
                  style={{
                    height: normalize(60),
                    width: '65%',
                    // backgroundColor: 'orange',
                    marginLeft: normalize(15),
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_SemiBold,
                      color: Colors.black,
                      fontSize: normalize(7),
                    }}>
                    {item?.product_title}
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Regular,
                      color: Colors.black,
                      fontSize: normalize(7),
                    }}>
                    ORDER ID : #12545879
                  </Text>
                  <Text
                    style={{
                      fontFamily: Fonts.Poppins_Italic,
                      color: 'green',
                      fontSize: normalize(9),
                      marginTop: normalize(7),
                    }}>
                    In Transit
                  </Text>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(20),
                textAlign: 'center',
                marginTop: normalize(30),
                marginBottom: normalize(20),
              }}>
              Empty cart
            </Text>
          }
        />
        {productReducer.orderList.length !== 0 && <Footer />}
      </ScrollView>
    </View>
  );
};

export default MyOrders;
