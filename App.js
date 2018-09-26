import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import SwitchNavigator from './navigation/AppNavigator';
import { color, font } from './components/Constant';
import { Provider } from 'react-redux';
import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react'
const { store, persistor } = configureStore();

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
    };
    
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      // 'any_name' : require('path_to_your_font_file')
        'QuicksandLight': require('./asset/fonts/Quicksand.light-regular.otf'),
        'QuicksandRegular': require('./asset/fonts/Quicksand.book-regular.otf'),
        'QuicksandBold': require('./asset/fonts/Quicksand.bold-regular.otf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    return (
       this.state.isReady?
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
              <SwitchNavigator />
            </SafeAreaView>  
          </PersistGate>
        </Provider>
      :
        <View style={{backgroundColor:'transparent', justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size="large" color={color.primary} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
