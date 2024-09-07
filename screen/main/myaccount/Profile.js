import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import {Colors, Fonts, Icons} from '../../../themes/Themes';
import normalize from '../../../utils/normalize';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import _ from 'lodash';
import ImagePicker from '../../../components/ImagePicker';
import Loader from '../../../utils/Loader';
import connectionrequest from '../../../utils/NetInfo';
import {getUserInfoRequest} from '../../../redux/reducer/UserReducer';
import ModalDelete from '../../../components/ModalDelete';
import Footer from '../../../components/Footer';
import FooterSecond from '../../../components/FooterSecond';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const UserReducer = useSelector(state => state.UserReducer);
  const isFocused = useIsFocused();
  const [userDetails, setuserDetails] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [profileUri, setProfileUri] = useState(null);

  useEffect(() => {
    if (isFocused) {
      connectionrequest()
        .then(state => {
          if (state) {
            dispatch(getUserInfoRequest());
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

  // useEffect(() => {
  //   if (isFocused) {
  //     setTimeout(() => {
  //       setProfileUri(
  //         userDetails?.profile_pic ? userDetails?.profile_pic : null,
  //       );
  //     }, 1000);
  //   }
  // }, [isFocused]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Loader visible={UserReducer.type == 'User/getUserInfoRequest'} />
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
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(20),
              marginLeft: normalize(5),
              color: Colors.black,
            }}>
            PROFILE
          </Text>
          <TouchableOpacity
            style={{
              height: normalize(35),
              width: normalize(75),
              backgroundColor: Colors.lavender,
              borderRadius: normalize(7),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: normalize(57),
            }}>
            <Image
              source={Icons.edit}
              style={{
                height: normalize(12),
                width: normalize(12),
                resizeMode: 'center',
                tintColor: Colors.mediumState_blue,
              }}
            />
            <Text
              style={{
                fontSize: normalize(10),
                marginLeft: normalize(4),
                color: Colors.mediumState_blue,
                fontFamily: Fonts.Poppins_Bold,
              }}>
              UPDATE
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={{
            height: normalize(125),
            width: normalize(125),
            alignSelf: 'center',
            marginTop: normalize(25),
            borderRadius: normalize(100),
            // borderWidth: 2,
            borderColor: Colors.mediumState_blue,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri:
                profileUri == null
                  ? 'https://cdn-icons-png.flaticon.com/128/14025/14025774.png'
                  : profileUri,
            }}
            style={{
              height: normalize(120),
              width: normalize(120),
              borderRadius: normalize(100),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            height: normalize(25),
            width: normalize(25),
            borderRadius: normalize(100),
            backgroundColor: Colors.white,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: normalize(30),
            right: normalize(-35),
            shadowColor: Colors.black,
            elevation: normalize(8),
          }}>
          <Image
            source={Icons.edit}
            style={{
              height: normalize(15),
              width: normalize(15),
              resizeMode: 'contain',
              tintColor: Colors.mediumState_blue,
            }}
          />
        </View>
        <Text
          style={{
            color: Colors.black,
            textAlign: 'center',
            fontSize: normalize(17),
            fontFamily: Fonts.Poppins_Bold,
          }}>
          {userDetails?.first_name + ' ' + userDetails?.last_name}
        </Text>
        <View
          style={{
            height: normalize(40),
            width: '85%',
            // backgroundColor: 'red',
            marginTop: normalize(30),
            borderBottomWidth: 0.8,
            borderBottomColor: '#C8C8C8',
            alignItems: 'center',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(12),
            }}>
            Full Name
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(12),
              marginLeft: normalize(35),
              color: Colors.black,
            }}>
            {userDetails?.first_name + ' ' + userDetails?.last_name}
          </Text>

          {/* <TouchableOpacity
            style={{
              height: normalize(21),
              width: normalize(51),
              backgroundColor: Colors.lavender,
              borderRadius: normalize(20),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: normalize(57),
            }}>
            <Image
              source={Icons.edit}
              style={{
                height: normalize(10),
                width: normalize(10),
                resizeMode: 'center',
                tintColor: Colors.mediumState_blue,
              }}
            />
            <Text
              style={{
                fontSize: normalize(9),
                marginLeft: normalize(5),
                color: Colors.mediumState_blue,
                fontFamily: Fonts.Poppins_Bold,
              }}>
              EDIT
            </Text>
          </TouchableOpacity> */}
        </View>

        <View
          style={{
            height: normalize(40),
            width: '85%',
            // backgroundColor: 'red',
            marginTop: normalize(10),
            borderBottomWidth: 0.8,
            borderBottomColor: '#C8C8C8',
            alignItems: 'center',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(12),
            }}>
            Email Address
          </Text>
          <Text
            style={{
              fontSize: normalize(10),
              fontFamily: Fonts.Poppins_Bold,
              marginLeft: normalize(20),
              color: Colors.half_baked,
            }}>
            {userDetails?.email}
          </Text>
        </View>
        <View
          style={{
            height: normalize(120),
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: normalize(30),
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}
            style={{
              height: normalize(40),
              width: normalize(130),
              backgroundColor: 'blue',
              borderRadius: normalize(7),
              justifyContent: 'center',
            }}>
            <LinearGradient
              style={{
                flex: 1,
                borderRadius: normalize(7),
                justifyContent: 'center',
              }}
              colors={[Colors.mediumState_blue, Colors.moonstone_blue]}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}>
              <Text
                style={{
                  fontFamily: Fonts.Poppins_Regular,
                  fontSize: normalize(10),
                  color: Colors.white,
                  textAlign: 'center',
                }}>
                CHANGE PASSWORD
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsDeleteVisible(true)}
            style={{
              height: normalize(40),
              width: normalize(130),
              backgroundColor: Colors.white,
              borderRadius: normalize(7),
              justifyContent: 'center',
              borderWidth: normalize(1),
              borderColor: 'blue',
            }}>
            <Text
              style={{
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(10),
                color: 'blue',
                textAlign: 'center',
              }}>
              DELETE ACCOUNT
            </Text>
          </TouchableOpacity>
        </View>
        <FooterSecond
          onPress={() => {
            navigation.navigate('Products');
          }}
        />
        <Footer />
        <ImagePicker
          isVisible={isVisible}
          onBackdropPress={() => setIsVisible(false)}
          onSelectImage={res => {
            setProfileUri(res?.uri);
            setProfileImagePath(res?.path);
          }}
        />

        <ModalDelete
          isVisible={isDeleteVisible}
          onBackdropPress={() => setIsDeleteVisible(false)}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;
