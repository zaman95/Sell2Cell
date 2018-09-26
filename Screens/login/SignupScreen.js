
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text, Image,
  ImageBackground,
  Dimensions, ScrollView,
  LayoutAnimation, CheckBox,
  UIManager, TouchableOpacity, Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { Input, Button } from 'react-native-elements'
import {color, font, apiURLs} from '../../components/Constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions'; //Import your actions


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../../asset/images/bg3.png');

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);

// const TabSelector = ({ selected }) => {
//   return (
//     <View style={styles.selectorContainer}>
//       <View style={selected && styles.selected}/>
//     </View>
//   );
// };

// TabSelector.propTypes = {
//   selected: PropTypes.bool.isRequired,
// };

class SignupScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmationPassword: '',
      loginEmail: '',
      loginPassword: '',
      emailValid: true,
      passwordValid: true,
      usernameValid: true,
      confirmationPasswordValid: true,
      loginEmailValid: true,
      loginPasswordValid: true,
      selectedCategory: 0,
      isLoading: false,
      checkedBox: true
    };

    this.selectCategory = this.selectCategory.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  async componentDidMount() {
    // this.setState({ fontLoaded: true });
  }

  selectCategory(selectedCategory) {
    // LayoutAnimation.easeInEaseOut();
    this.setState({
      selectedCategory,
      isLoading: false,
    });
  }

  validateLoginEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return re.test(email);
  }

  login() {
    const {
      loginEmail,
      loginPassword,
    } = this.state;
    LayoutAnimation.easeInEaseOut()
    const emailValid = this.validateLoginEmail(loginEmail) ? true : this.loginEmailInput.shake();
    const passwordValid = loginPassword.length >= 8 ? true : this.loginPasswordInput.shake();
    this.setState({
          loginEmailValid: emailValid,
          loginPasswordValid: passwordValid,
    });
    if (
      emailValid &&
      passwordValid
    ) {
      this.setState({ isLoginLoading: true })
      // setTimeout(() => {
      //   LayoutAnimation.easeInEaseOut()
      //   this.setState({ isLoginLoading: false })
      //   // Alert.alert('🎸', 'You rock')
      //   this.props.navigation.navigate('App');
      // }, 1500)
        LayoutAnimation.easeInEaseOut()
        this.setState({ isLoginLoading: false })
        var user = {
          token:'12345',
          user:{
            name:'John Micheal',
            email:loginEmail
          }
        }
        this.props.setUser(user);
        this.props.navigation.navigate('App');
    }
  }

  signup() {
    LayoutAnimation.easeInEaseOut()
    const usernameValid = this.validateUsername()
    const emailValid = this.validateEmail()
    const passwordValid = this.validatePassword()
    const confirmationPasswordValid = this.validateConfirmationPassword()
    if (
      emailValid &&
      passwordValid &&
      confirmationPasswordValid &&
      usernameValid
    ) {
      this.setState({ isLoading: true })
      // setTimeout(() => {
      //   LayoutAnimation.easeInEaseOut()
      //   this.setState({ isLoading: false })
      //   // Alert.alert('🎸', 'You rock')
      //   this.props.navigation.navigate('welcomeScreen');
      // }, 1500)
        LayoutAnimation.easeInEaseOut()
        this.setState({ isLoading: false })
        var user = {
          token:'12345',
          user:{
            name:this.state.username,
            email:this.state.email
          }
        }
        this.props.setUser(user);
        this.props.navigation.navigate('App');
    }
  }

  validateUsername() {
    const { username } = this.state
    const usernameValid = username.length > 0
    LayoutAnimation.easeInEaseOut()
    this.setState({ usernameValid })
    usernameValid || this.usernameInput.shake()
    return usernameValid
  }

  validateEmail() {
    const { email } = this.state
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailValid = re.test(email)
    LayoutAnimation.easeInEaseOut()
    this.setState({ emailValid })
    emailValid || this.emailInput.shake()
    return emailValid
  }

  validatePassword() {
    const { password } = this.state
    const passwordValid = password.length >= 8
    LayoutAnimation.easeInEaseOut()
    this.setState({ passwordValid })
    passwordValid || this.passwordInput.shake()
    return passwordValid
  }

  validateConfirmationPassword() {
    const { password, confirmationPassword } = this.state
    const confirmationPasswordValid = password === confirmationPassword
    LayoutAnimation.easeInEaseOut()
    this.setState({ confirmationPasswordValid })
    confirmationPasswordValid || this.confirmationPasswordInput.shake()
    return confirmationPasswordValid
  }


  render() {
    const {
      selectedCategory,
      confirmationPassword,
      email,
      emailValid,
      password,
      passwordValid,
      confirmationPasswordValid,
      username,
      usernameValid,
      loginEmail,
      loginEmailValid,
      loginPassword,
      loginPasswordValid,
    } = this.state;
    const isLoginPage = selectedCategory === 0;
    const isSignUpPage = selectedCategory === 1;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BG_IMAGE}
          style={styles.bgImage}
        >
            <View style={{ flex:1, justifyContent:'flex-end', alignItems:'center'}} >
              <KeyboardAvoidingView contentContainerStyle={styles.loginContainer} behavior='padding'>
                <View style={styles.titleContainer}>
                  <Text style={{ fontFamily:'QuicksandBold', fontSize: 30, color: color.white, textAlign: 'center', }}>
                      Sell2Cell</Text>
                </View>
                <View style={{flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() => this.selectCategory(0)}
                    style={{ backgroundColor: color.transparent, justifyContent:'center', height: 50, width: SCREEN_WIDTH/2, borderBottomWidth:2, 
                            borderBottomColor: this.state.selectedCategory ? color.transparent : color.primary }} >
                      <Text style={{ fontFamily:'QuicksandRegular', fontSize: 20, color: this.state.selectedCategory ? color.white : color.primary, textAlign: 'center', }}>
                        LOGIN </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.selectCategory(1)}
                    style={{ backgroundColor: color.transparent, justifyContent:'center', height: 50, width: SCREEN_WIDTH/2, borderBottomWidth:2, 
                          borderBottomColor: this.state.selectedCategory ? color.primary : color.transparent  }} >
                      <Text style={{ fontFamily:'QuicksandRegular', fontSize: 20, color: this.state.selectedCategory ? color.primary : color.white, textAlign: 'center', }}>
                        SIGN UP </Text>
                  </TouchableOpacity>
                </View>
                {/* <View style={styles.rowSelector}>
                  <TabSelector selected={isLoginPage}/>
                  <TabSelector selected={isSignUpPage}/>
                </View> */}
    
                {isSignUpPage ?
                <View style={[styles.formContainer]}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{ flexDirection: 'column', padding:0, margin:0, width:SCREEN_WIDTH, }}
                  contentContainerStyle={{ alignItems:'center' }}>

                  <View style={{width: '85%', alignItems: 'center',}}>
                    <FormInput
                      refInput={input => (this.usernameInput = input)}
                      value={username}
                      onChangeText={username => this.setState({ username })}
                      placeholder="Username"
                      returnKeyType="next"
                      errorMessage={usernameValid ? null : 'Your username can\'t be blank'}
                      onSubmitEditing={() => {
                        this.validateUsername()
                        this.emailInput.focus()
                      }}
                    />
                    <FormInput
                      refInput={input => (this.emailInput = input)}
                      value={email}
                      onChangeText={email => this.setState({ email })}
                      placeholder="Email"
                      keyboardType="email-address"
                      returnKeyType="next"
                      errorMessage={emailValid ? null : 'Please enter a valid email address'}
                      onSubmitEditing={() => {
                        this.validateEmail()
                        this.passwordInput.focus()
                      }}
                    />
                    <FormInput
                      refInput={input => (this.passwordInput = input)}
                      value={password}
                      onChangeText={password => this.setState({ password })}
                      placeholder="Password"
                      secureTextEntry
                      returnKeyType="next"
                      errorMessage={passwordValid ? null : 'Please enter at least 8 characters'}
                      onSubmitEditing={() => {
                        this.validatePassword()
                        this.confirmationPasswordInput.focus()
                      }}
                    />
                    <FormInput
                      refInput={input => (this.confirmationPasswordInput = input)}
                      value={confirmationPassword}
                      onChangeText={confirmationPassword =>
                        this.setState({ confirmationPassword })}
                      placeholder="Confirm Password"
                      secureTextEntry
                      errorMessage={confirmationPasswordValid ? null : 'The password fields are not identics'}
                      returnKeyType="go"
                      onSubmitEditing={() => {
                        this.validateConfirmationPassword()
                        this.signup()
                      }}
                    />

                    <TouchableOpacity
                      onPress={()=> this.signup() }
                      style={{ backgroundColor: color.primary, justifyContent:'center', height: 50, width:'90%', borderRadius:30, marginVertical:20 }} >
                        <Text style={{ fontFamily:'QuicksandRegular', fontSize: 15, color: color.white, textAlign: 'center', }}>
                          SIGN UP </Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize:12, fontFamily:'QuicksandRegular', color: color.black }}>
                      by signing up. you agree to the terms of Use
                    </Text>

                    </View>
                  
                  </ScrollView>
                </View>
                :

                <View style={[styles.formContainer]}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{ flexDirection: 'column', padding:0, margin:0, width:SCREEN_WIDTH, }}
                  contentContainerStyle={{ alignItems:'center' }}>

                <View style={{width: '85%', alignItems: 'center',}}>
                  <FormInput
                    refInput={input => (this.loginEmailInput = input)}
                    value={loginEmail}
                    onChangeText={email => this.setState({ loginEmail:email })}
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="next"
                    errorMessage={loginEmailValid ? null : 'Please enter a valid email address'}
                    onSubmitEditing={() => {
                      this.validateLoginEmail()
                      this.loginPasswordInput.focus()
                    }}
                  />
                  <FormInput
                    refInput={input => (this.loginPasswordInput = input)}
                    value={loginPassword}
                    onChangeText={password => this.setState({ loginPassword:password })}
                    placeholder="Password"
                    secureTextEntry
                    returnKeyType="go"
                    errorMessage={loginPasswordValid ? null : 'Please enter at least 8 characters'}
                    onSubmitEditing={() => {
                      this.login()
                    }}
                  />
                  </View>

                  {/* <View style={{ width: '85%', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:10}} >
                    <View style={{ flexDirection: 'row', alignItems:'center' }}>
                      <CheckBox
                        value={this.state.checked}
                        onValueChange={() => this.setState({ checked: !this.state.checked })}
                      />
                      <Text style={{ fontFamily:'QuicksandRegular', fontSize: 12, color: color.placeholderColor, textAlign: 'center', }}>
                        Remember me </Text>
                    </View>
                    
                    <Text style={{ fontFamily:'QuicksandRegular', fontSize: 12, color: color.placeholderColor, textAlign: 'center', }}
                    onPress={()=> {this.props.navigation.navigate('forgetPasswordScreen')} } 
                    >
                        Forgot your password? </Text>    
                  </View> */}

                  <TouchableOpacity
                    onPress={()=> this.login() }
                    style={{ backgroundColor: color.primary, justifyContent:'center', height: 50, width:'70%', borderRadius:30, marginVertical:20 }} >
                      <Text style={{ fontFamily:'QuicksandRegular', fontSize: 15, color: color.white, textAlign: 'center', }}>
                        LOGIN </Text>
                  </TouchableOpacity>

                  </ScrollView>
                </View>
                }
                
              </KeyboardAvoidingView>
            </View>

        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        userDetail: state.user.userDetail,
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);

export const FormInput = props => {
  const { icon, refInput, ...otherProps } = props
  return (
    <Input
      {...otherProps}
      ref={refInput}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.inputStyle}
      autoFocus={false}
      autoCapitalize="none"
      keyboardAppearance="dark"
      errorStyle={styles.errorInputStyle}
      autoCorrect={false}
      blurOnSubmit={false}
      placeholderTextColor={color.placeholderColor}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: color.placeholderColor,
    height: 45,
    marginVertical: 10,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    color: color.black,
    fontFamily:'QuicksandRegular',
    fontSize: 16,
  },
  errorInputStyle: {
    marginTop: 0,
    textAlign: 'center',
    color: '#F44336',
  },
  rowSelector: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectorContainer: {
    flex: 1,
    alignItems: 'center',
  },
  selected: {
    position: 'absolute',
    borderRadius: 50,
    height: 0,
    width: 0,
    top: -5,
    borderRightWidth: 70,
    borderBottomWidth: 70,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTextButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'rgba(232, 147, 142, 1)',
    borderRadius: 10,
    height: 50,
    width: 200,
  },
  titleContainer: {
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  formContainer: {
    paddingVertical:20,
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    alignItems:'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily:'QuicksandLight',
    backgroundColor: 'transparent',
    opacity: 0.54,
  },
  selectedCategoryText: {
    opacity: 1,
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontFamily:'QuicksandRegular',
  },
  helpContainer: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});