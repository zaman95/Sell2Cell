
import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Dimensions, ScrollView, TextInput, TouchableOpacity, Picker, AsyncStorage
} from 'react-native';
import {color, font, apiURLs} from '../../components/Constant';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions'; //Import your actions
// import ModalSelector from 'react-native-modal-selector'

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentType:null
        };
    }

    componentDidMount() {
    }
    
    async clearStorage() {
        try {
            await AsyncStorage.clear();
            this.props.navigation.navigate('Auth');
        } catch (error) {
            console.log('error clear store: ',error);
        }
    }

  render() {
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    
    return (
        <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:color.white, paddingTop:30}}>
           <Text>Welcome :  { this.props.userDetail.name}</Text>
           <Text>email :  { this.props.userDetail.email}</Text>
           <TouchableOpacity
                onPress={()=> this.clearStorage() }
                style={{ backgroundColor: color.primary, justifyContent:'center', height: 50, width:'50%', borderRadius:30, marginVertical:20 }} >
                <Text style={{ fontFamily:'QuicksandRegular', fontSize: 15, color: color.white, textAlign: 'center', }}>
                    LOGOUT</Text>
            </TouchableOpacity>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({

    // inputContainer: {
    //   flexDirection: 'row',
    //   marginVertical:10,
    //   borderRadius:50,
    //   alignItems:'center',
    //   borderWidth: 1,
    //   borderColor: color.primary
    // },
    // input:{
    //   flex:1,
    //   height:50,
    //   backgroundColor: 'transparent',
    //   paddingHorizontal:20,
    //   fontSize:15,
    // },
    inputContainer: {
        flexDirection: 'row',
        paddingLeft: 8,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: color.placeholderColor,
        marginVertical: 10,
      },
    input: {
        flex: 1,
        height:50,
        marginLeft: 10,
        color: color.black,
        fontFamily:'QuicksandRegular',
        fontSize: 16,
    },
})
    