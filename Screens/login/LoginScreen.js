import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, ImageBackground, Image, Dimensions, StyleSheet
} from 'react-native';
import {color, font, apiURLs} from '../../components/Constant';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions'; //Import your actions
import { Button } from 'react-native-elements'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    componentDidMount() {
    }
    
  render() {
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    return (
        // <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        //     <Text>WelcomeScreen</Text>
        //     <TouchableOpacity 
        //       style={{ backgroundColor:'grey', marginVertical:10, borderRadius:5 }}
        //       onPress={()=> this.props.navigation.navigate('loginScreen') }
        //     >
        //       <Text style={{ paddingHorizontal:30, paddingVertical:10, color:'white' }}>Login</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity 
        //       style={{ backgroundColor:'grey', marginVertical:10, borderRadius:5 }}
        //       onPress={()=> this.props.navigation.navigate('signupScreen') }
        //     >
        //       <Text style={{ paddingHorizontal:30, paddingVertical:10, color:'white' }}>Signup</Text>
        //     </TouchableOpacity>
        // </View>
        <ImageBackground 
          source={require('../../asset/images/welcomebg.png')} 
          style={{width: '100%', height: '100%',}}
        >
          <View style={{ flex:1, flexDirection:'column' }}>
            <View style={{ flex:3, justifyContent:'center', alignItems:'center' }} >
              <Image 
                source={require('../../asset/icons/appLogo.png')}
                resizeMode="center"
                // style={{ width:25, height:25 }}
                />
                {/* <Text style={{ fontSize, color}}></Text> */}
            </View>

            <View style={{ flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
              <View style={{ flex:0.6, flexDirection:'row', justifyContent:'center', alignItems:'flex-end' }}>
                <TouchableOpacity
                  onPress={()=> this.props.navigation.navigate('signupScreen',{ category:1 }) }
                  style={{ backgroundColor: color.white, justifyContent:'center', height: 50, width: SCREEN_WIDTH/2 - 40, borderRadius:30, marginRight:10 }} >
                    <Text style={{ fontFamily: 'QuicksandRegular', fontSize: 15, color: color.black, textAlign: 'center', }}>
                      Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=> this.props.navigation.navigate('signupScreen', { category:0 }) }
                  style={{ backgroundColor: color.transparent, justifyContent:'center', height: 50, width: SCREEN_WIDTH/2 - 40, borderRadius:30, borderWidth:1, borderColor: color.white }} >
                    <Text style={{ fontFamily: 'QuicksandRegular', fontSize: 15, color: color.white, textAlign: 'center', }}>
                      Login
                    </Text>
                </TouchableOpacity>

              </View>
              <View style={{ flex:0.3, justifyContent:'center', alignItems:'center' }}>
                <Text style={{ fontSize:12, fontFamily: 'QuicksandRegular', color: color.white }}>
                  by signing up. you agree to the terms of Use
                </Text>
              </View>
              <View style={{ flex:0.1}} ></View>
            </View>

          </View>
        </ImageBackground>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems: 'flex-start',
  },
  // signup : {
  //   backgroundColor: 'black', 
  //   justifyContent:'center', 
  //   height: 50, width: SCREEN_WIDTH/2 - 40, 
  //   borderRadius:30, 
  //   marginRight:10
  // },
  // login : {
  //   backgroundColor: 'black', 
  //   justifyContent:'center', 
  //   height: 50, width: SCREEN_WIDTH/2 - 40, 
  //   borderRadius:30,
  // }
});