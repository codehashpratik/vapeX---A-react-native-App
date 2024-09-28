import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import normalize from '../utils/normalize';
import {Colors, Fonts, Icons} from '../themes/Themes';
import FilterCheckbox from './FilterCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {addFilter} from '../redux/reducer/FilterReducer';
import LinearGradient from 'react-native-linear-gradient';

const FilterDrawer = props => {
  const [vapechecked, setVapeChecked] = useState(false);
  const [CiggeretteChecked, setCiggeretteChecked] = useState(false);
  const [BlueChecked, setBlueChecked] = useState(false);
  const [RedChecked, setRedChecked] = useState(false);
  const [BlackChecked, setBlackChecked] = useState(false);
  const [OrangeChecked, setOrangeChecked] = useState(false);
  const [MulticolorChecked, setMulticolorChecked] = useState(false);
  const [GradientChecked, setGradientChecked] = useState(false);
  const dispatch = useDispatch();
  // const FilterReducer = useSelector(state => state.FilterReducer);

  function applyFilters() {
    const filters = {
      vape: vapechecked,
      ELECTRIC: CiggeretteChecked,
      blue: BlueChecked,
      red: RedChecked,
      black: BlackChecked,
      orange: OrangeChecked,
      multicolor: MulticolorChecked,
      gradient: GradientChecked,
    };

    dispatch(addFilter(filters));
    props.navigation.closeDrawer();
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: normalize(15),
            flexDirection: 'row',
            width: '100%',
          }}>
          <Image
            source={Icons.filter}
            style={{
              height: normalize(25),
              width: normalize(25),
              resizeMode: 'contain',
              marginLeft: normalize(15),
            }}
          />

          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              color: Colors.black,
              fontSize: normalize(20),
              marginLeft: normalize(10),
            }}>
            FILTER
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Poppins_SemiBold,
              fontSize: normalize(20),
              marginLeft: normalize(5),
              color: Colors.black,
            }}>
            BY
          </Text>
        </View>
        <View
          style={{
            height: 1,
            width: '85%',
            backgroundColor: 'grey',
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setVapeChecked(false);
            setCiggeretteChecked(false);
            setBlueChecked(false);
            setBlackChecked(false);
            setRedChecked(false);
            setOrangeChecked(false);
            setMulticolorChecked(false);
            setGradientChecked(false);
          }}
          style={{
            height: normalize(40),
            width: '80%',
            alignSelf: 'center',
            backgroundColor: 'blue',
            marginVertical: normalize(20),
            borderRadius: normalize(9),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LinearGradient
            style={{
              height: '100%',
              width: '100%',
              borderRadius: normalize(5),
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            colors={[Colors.mediumState_blue, Colors.moonstone_blue]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}>
            <Image
              source={Icons.bin}
              style={{
                height: normalize(12),
                width: normalize(12),
                tintColor: Colors.white,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                fontSize: normalize(12),
                color: Colors.white,
                fontFamily: Fonts.Poppins_Regular,
                marginLeft: normalize(2),
                marginTop: normalize(5),
              }}>
              CLEAR ALL
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: Fonts.Poppins_SemiBold,
            color: Colors.black,
            fontSize: normalize(12),
            marginLeft: normalize(15),
          }}>
          CATEGORY
        </Text>
        <View
          style={{
            height: 1,
            width: '85%',
            backgroundColor: 'grey',
            alignSelf: 'center',
          }}
        />
        <FilterCheckbox
          title={'Vape'}
          status={vapechecked}
          onPress={() => {
            setVapeChecked(vapechecked == true ? false : true);
          }}
        />
        <FilterCheckbox
          title={'Electric Ciggerette'}
          status={CiggeretteChecked}
          onPress={() => {
            setCiggeretteChecked(CiggeretteChecked == true ? false : true);
          }}
        />
        <Text
          style={{
            fontFamily: Fonts.Poppins_SemiBold,
            color: Colors.black,
            fontSize: normalize(12),
            marginLeft: normalize(15),
            marginTop: normalize(15),
          }}>
          COLOR
        </Text>
        <View
          style={{
            height: 1,
            width: '85%',
            backgroundColor: 'grey',
            alignSelf: 'center',
          }}
        />
        <FilterCheckbox
          title={'BLUE'}
          status={BlueChecked}
          onPress={() => {
            setBlueChecked(BlueChecked == true ? false : true);
          }}
        />
        <FilterCheckbox
          title={'RED'}
          status={RedChecked}
          onPress={() => {
            setRedChecked(RedChecked == true ? false : true);
          }}
        />
        <FilterCheckbox
          title={'BLACK'}
          status={BlackChecked}
          onPress={() => {
            setBlackChecked(BlackChecked == true ? false : true);
          }}
        />
        <FilterCheckbox
          title={'ORANGE'}
          status={OrangeChecked}
          onPress={() => {
            setOrangeChecked(OrangeChecked == true ? false : true);
          }}
        />
        <FilterCheckbox
          title={'MULTICOLOR'}
          status={MulticolorChecked}
          onPress={() => {
            setMulticolorChecked(MulticolorChecked == true ? false : true);
          }}
        />
        <FilterCheckbox
          title={'GRADIENT'}
          status={GradientChecked}
          onPress={() => {
            setGradientChecked(GradientChecked == true ? false : true);
          }}
        />
        {/* <Text
          style={{
            fontFamily: Fonts.Poppins_SemiBold,
            color: Colors.black,
            fontSize: normalize(12),
            marginLeft: normalize(15),
            marginTop: normalize(15),
          }}>
          DISCOUNT
        </Text>
        <View
          style={{
            height: 1,
            width: '85%',
            backgroundColor: 'grey',
            alignSelf: 'center',
          }}
        />
        <FilterCheckbox title={'10%'} />
        <FilterCheckbox title={'25%'} />
        <FilterCheckbox title={'30%'} />
        <FilterCheckbox title={'50%'} /> */}
        <View
          style={{
            height: normalize(50),
            width: '100%',
            marginVertical: normalize(25),
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              // props.navigation.navigate('Products', {
              //   vape: vapechecked,
              //   ciggerette: CiggeretteChecked,
              //   blue: BlueChecked,
              //   red: RedChecked,
              //   black: BlackChecked,
              //   orange: OrangeChecked,
              //   multicolor: MulticolorChecked,
              //   gradient: GradientChecked,
              // });
              applyFilters();
            }}
            style={{
              height: normalize(30),
              width: normalize(70),
              justifyContent: 'center',
              position: 'absolute',
              borderRadius: normalize(7),
              borderWidth: 1,
              borderColor: Colors.moonstone_blue,
              right: 40,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Fonts.Poppins_Regular,
                fontSize: normalize(11),
                color: Colors.moonstone_blue,
              }}>
              APPLY
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default FilterDrawer;
