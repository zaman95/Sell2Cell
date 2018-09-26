import React, { Component } from 'react';
import {
  View, ActivityIndicator, StatusBar, AsyncStorage,
} from 'react-native';
import {color, font, apiURLs} from '../components/Constant';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

class MainApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userDetail : this.props.userDetail,
      };
    this._bootstrapAsync();  
  }
  
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      // SplashScreen.hide();
  }
  
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userLogin');
    console.log('tokennnn: ',userToken);
    
    this.props.navigation.navigate(userToken == 'isLoggedIn' ? 'App' : 'Auth');
    
  };

  render() {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }

}

function mapStateToProps(state, props) {
  // console.log('map start proos',state,props);
  return {
    userDetail: state.user.userDetail,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
