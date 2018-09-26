import React, { Component } from 'react';
import {
  Text, View
} from 'react-native';
import {color, font, apiURLs} from '../../components/Constant';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions'; //Import your actions

class PhoneConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    componentDidMount() {
    }
    
  render() {
    
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Contact Us</Text>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(PhoneConfirmation);
