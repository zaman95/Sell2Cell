
import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Dimensions, ScrollView, TextInput, TouchableOpacity, Picker, Alert
} from 'react-native';
import {color, font, apiURLs} from '../../components/Constant';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions'; //Import your actions
import ModalSelector from 'react-native-modal-selector'

class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentType:null,
            userName: null,
            desc: null
        };
    }

    componentDidMount() {
    }
    
    submitFeedback() {
        if (
          this.state.userName &&
          this.state.desc &&
          this.state.commentType
        ) {
          this.setState({ isLoading: true })
          // setTimeout(() => {
          //   LayoutAnimation.easeInEaseOut()
          //   this.setState({ isLoading: false })
          //   // Alert.alert('🎸', 'You rock')
          //   this.props.navigation.navigate('welcomeScreen');
          // }, 1500)
          this.setState({
            commentType:null,
            userName: null,
            desc: null
          });
          Alert.alert('Success', `${this.state.commentType} submitted`)
        } else {
            Alert.alert('Error', `some Fields missing`)
        }
      }
    
  render() {
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const feedbackType = [
        { key: 0, section: true, label: 'Select Type' },
        { key: 'feedback', label: 'feedback' },
        { key: 'complaint', label: 'complaint' },
    ];
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:color.white, paddingTop:30}}>
            <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{ flexDirection: 'column', padding:0, margin:0, width:SCREEN_WIDTH, }}
                  contentContainerStyle={{ alignItems:'center' }}>

                    <View style={{width: '85%', alignItems: 'center',}}>

                        <View style={[styles.inputContainer]}>

                        <TextInput style = {styles.input} 
                        autoCapitalize="none"
                        value= {this.state.userName} 
                        onChangeText={(value) => this.setState({userName: value})}
                        autoCorrect={false} 
                        underlineColorAndroid='transparent' 
                        returnKeyType="next" 
                        placeholder='User Name'
                        placeholderTextColor={color.placeholderColor}
                        selectionColor={color.primary}
                        onSubmitEditing={(event) => { this.refs.desc.focus() }}
                        />
                        </View>    

                        <View style={[styles.inputContainer, {borderRadius: 10,}]}>

                        <TextInput style = {{ flex:1, height:200, textAlignVertical: "top", padding:10, fontSize: 16, fontFamily:'QuicksandRegular', }}
                            value = {this.state.desc}
                            ref="desc"
                            autoCapitalize="none" 
                            onChangeText={(value) => this.setState({desc: value, bioCount: --this.state.bioCount})}
                            autoCorrect={false} 
                            underlineColorAndroid='transparent' 
                            returnKeyType="next" 
                            placeholder='Comments'
                            placeholderTextColor={color.placeholderColor}
                            selectionColor={color.primary}
                            multiline={true}
                            numberOfLines={10}
                            maxLength={207}
                            // onSubmitEditing={(event) => { this.refs.search.focus() }}
                        />
                        </View>

                        <View style={[styles.inputContainer, {height:50, width:'100%', } ]}>
                            {/* <Picker
                                selectedValue={this.state.commentType}
                                mode="dropdown"
                                style={{ flex: 1,
                                    height:50,
                                    marginLeft: 10,
                                    }}
                                onValueChange={(itemValue, itemIndex) => this.setState({commentType: itemValue})}>
                                <Picker.Item label="feedback" value="feedback" />
                                <Picker.Item label="complaint" value="complaint" />
                            </Picker> */}
                            <ModalSelector
                                data={feedbackType}
                                cancelButtonAccessibilityLabel={'Cancel Button'}
                                style={{ height:50, width:'100%', }}
                                onChange={(option)=>{ this.setState({commentType:option.label})}}>

                                <TextInput
                                    style={{marginHorizontal:10, height:50, textAlignVertical:'center', fontSize:16, fontFamily:'QuicksandRegular' }}
                                    editable={false}
                                    placeholder="Select Comment Type"
                                    value={this.state.commentType} />

                            </ModalSelector>

                        </View>

                    <TouchableOpacity
                      onPress={()=> this.submitFeedback() }
                      style={{ backgroundColor: color.primary, justifyContent:'center', height: 50, width:'100%', borderRadius:30, marginVertical:20 }} >
                        <Text style={{ fontFamily:'QuicksandRegular', fontSize: 15, color: color.white, textAlign: 'center', }}>
                          SUBMIT</Text>
                    </TouchableOpacity>

                    </View>
                  
                  </ScrollView>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen);

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
    