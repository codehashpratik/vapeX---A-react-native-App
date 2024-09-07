import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@candlefinance/blur-view';
import Splash from '../screen/auth/Splash';
import Login from '../screen/auth/Login';
import SignUp from '../screen/auth/SignUp';
import Home from '../screen/main/Home';
import CreateProduct from '../screen/main/CreateProduct';
import Product from '../screen/main/Product';
import Profile from '../screen/main/myaccount/Profile';
import {Colors, Fonts, Icons} from '../themes/Themes';
import normalize from '../utils/normalize';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductEdit from '../screen/main/ProductEdit';
import CustomDrawerComponent from '../components/CustomDrawerComponent';
import MyOrders from '../screen/main/myaccount/MyOrders';
import Address from '../screen/main/myaccount/Address';
import PaymentOptions from '../screen/main/myaccount/PaymentOptions';
import ChangePassword from '../screen/main/myaccount/ChangePassword';
import ForgotPassword from '../screen/auth/ForgotPassword';
import VerificationOTP from '../screen/auth/VerificationOTP';
import ResetPassword from '../screen/auth/ResetPassword';
import About from '../screen/main/myaccount/About';
import Contact from '../screen/main/myaccount/Contact';
import FilterDrawer from '../components/FilterDrawer';
import Cart from '../screen/main/Cart';
import CustomerDetails from '../screen/main/CustomerDetails';
import PaymentsPage from '../screen/main/PaymentsPage';
import PaymentOtp from '../screen/main/PaymentOtp';
import ClearanceStore from '../screen/main/ClearanceStore';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

let TabIcons = [
  {
    title: 'Home',
    icon: Icons.home,
  },
  {
    title: 'Sell Product',
    icon: Icons.create,
  },
  {
    title: 'Products',
    icon: Icons.menu,
  },
  {
    title: 'My Account',
    icon: Icons.user,
  },
];

const StackNavigation = () => {
  const AuthReducer = useSelector(state => state.AuthReducer);

  function AuthSction() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerificationOTP" component={VerificationOTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    );
  }
  function tabBarBackground() {
    return (
      // <BlurView
      //   blurType="regular"
      //   blurAmount={55}
      //   style={{
      //     ...StyleSheet.absoluteFillObject,
      //     borderTopLeftRadius: 18,
      //     borderTopRightRadius: 18,
      //     backgroundColor: 'transparent',
      //     overflow: 'hidden',
      //   }}
      // />
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
        }}></View>
    );
  }

  function TabSection() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarStyle: {
            height: normalize(60),
            // borderTopLeftRadius: normalize(30),
            // borderTopRightRadius: normalize(30),
            backgroundColor: 'white',
            // position: 'absolute',
          },
          // tabBarBackground: tabBarBackground,
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: normalize(10),
            fontFamily: Fonts.Poppins_Regular,
          },
          headerShown: false,
          tabBarActiveTintColor: Colors.mediumState_blue,
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({focused, color, size}) => {
            const _icon = TabIcons.filter(item => item.title === route.name);
            return (
              <Image
                source={_icon[0]?.icon}
                style={{
                  height: size,
                  width: size,
                  tintColor: color,
                }}
              />
            );
          },
        })}>
        <Tab.Screen name="Home" component={HomeSection} />
        <Tab.Screen name="Sell Product" component={CreateProduct} />
        <Tab.Screen name="Products" component={DrawerSection2} />
        <Tab.Screen name="My Account" component={DrawerSection} />
      </Tab.Navigator>
    );
  }

  function HomeSection() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Home} />
        <Stack.Screen name="AboutSection" component={AboutSection} />
        <Stack.Screen name="DrawerSection2" component={DrawerSection2} />
        <Stack.Screen name="ProductEdit" component={ProductEdit} />
      </Stack.Navigator>
    );
  }

  function DrawerSection() {
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerComponent {...props} />}
        screenOptions={{headerShown: false}}
        initialRouteName="Profile">
        <Drawer.Screen name="Profile" component={ProfileSection} />
        <Drawer.Screen name="MyOrders" component={MyOrders} />
        <Drawer.Screen name="Address" component={Address} />
        <Drawer.Screen name="Payment Option" component={PaymentOptions} />
        <Drawer.Screen name="About" component={AboutSection} />
      </Drawer.Navigator>
    );
  }

  function DrawerSection2() {
    return (
      <Drawer.Navigator
        drawerContent={props => <FilterDrawer {...props} />}
        screenOptions={{headerShown: false}}
        initialRouteName="Products">
        <Drawer.Screen name="Products" component={Products} />
      </Drawer.Navigator>
    );
  }

  function AboutSection() {
    return (
      <Stack.Navigator
        initialRouteName="About"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  }

  function Products() {
    return (
      <Stack.Navigator
        initialRouteName="Product"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="ProductEdit" component={ProductEdit} />
        <Stack.Screen name="CartSection" component={CartSection} />
      </Stack.Navigator>
    );
  }

  // function ClearanceStoreSection() {
  //   return (
  //     <Stack.Navigator
  //       initialRouteName="Product"
  //       screenOptions={{headerShown: false}}>
  //       <Stack.Screen name="ClearanceStore" component={ClearanceStore} />
  //       <Stack.Screen name="ProductEdit" component={ProductEdit} />
  //       <Stack.Screen name="CartSection" component={CartSection} />
  //     </Stack.Navigator>
  //   );
  // }
  function ProfileSection() {
    return (
      <Stack.Navigator
        initialRouteName="Profilepage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Profilepage" component={Profile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    );
  }

  function CartSection() {
    return (
      <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="CustomerDetails" component={CustomerDetails} />
        <Stack.Screen name="PaymentsPage" component={PaymentsPage} />
        <Stack.Screen name="PaymentOtp" component={PaymentOtp} />
      </Stack.Navigator>
    );
  }

  return AuthReducer?.isLoading ? (
    <Splash />
  ) : (
    <NavigationContainer>
      {AuthReducer?.isToken == null ? <AuthSction /> : <TabSection />}
    </NavigationContainer>
  );
};

export default StackNavigation;
