import 'react-native-gesture-handler';
import * as React from 'react';
import SignUp from './src/screen/auth/SignUp';
import Login from './src/screen/auth/Login';
import StackNavigation from './src/navigation/StackNavigation';
import Profile from './src/screen/main/myaccount/Profile';
import ChangePassword from './src/screen/main/myaccount/ChangePassword';
import Address from './src/screen/main/myaccount/Address';
import PaymentOptions from './src/screen/main/myaccount/PaymentOptions';
import ForgotPassword from './src/screen/auth/ForgotPassword';
import VerificationOTP from './src/screen/auth/VerificationOTP';
import OtpComponent from './src/components/OtpComponent';
import ResetPassword from './src/screen/auth/ResetPassword';
import Footer from './src/components/Footer';
import FooterSecond from './src/components/FooterSecond';
import About from './src/screen/main/myaccount/About';
import Contact from './src/screen/main/myaccount/Contact';
import CreateProduct from './src/screen/main/CreateProduct';
import Splash from './src/screen/auth/Splash';
import PaymentsPage from './src/screen/main/PaymentsPage';
import PaymentOtp from './src/screen/main/PaymentOtp';
import {TextInput} from 'react-native';

function App() {
  return <StackNavigation />;
}
export default App;
