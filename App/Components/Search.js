import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Metrics, Colors, Images } from '../Themes'
import App from '../../App';


export default class Search extends Component {

  state = {
    text: ""
  };

  onChangeText = text => {
    this.setState({text});
  };

  handleOnPress = () => {
    //this would be where article search is initiated
    //but I don't know how to use loadArticles function
    App.loadArticles(text, '');
    //then update the flatList!
    this.setState({text: ""});
    Keyboard.dismiss();
  };
  
  render () {
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.textinput}
          placeholder='Search for News'
          onChangeText={text => this.onChangeText(text)}
          onSubmitEditing={this.handleOnPress}
        />
        <TouchableOpacity onPress={this.handleOnPress} style={styles.searchButton}>
          <Image
            style={styles.searchIcon}
            source={Images.search}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  searchBar: {
    height: 45,
    width: '90%',
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderRadius: 15,
    marginTop: 17
  },
  textinput: {
    height: 45,
    width: '83%',
    marginLeft: 18
  },
  searchButton: {
    justifyContent: "center",
    alignContent: "center",
    marginRight: 13
  },
  searchIcon: {
    height: 20,
    width: 20
  }
});
