import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {
  Platform,
  Dimensions,
  Image
} from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'
import { FontAwesome } from '@expo/vector-icons';

import News from './App/Components/News'
import Search from './App/Components/Search'

export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }

  componentDidMount() {

    //uncomment this to run an API query!
    //this.loadArticles();
  }

  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    this.setState({loading: false, articles: resultArticles})
  }

  render() {
    const {articles, loading} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Image
            style={styles.logo}
            source={Images.logo}
            resizeMode='contain'
        />
        <Search style={{flexDirection: 'row'}}/>
        <News style={{flexDirection: 'column'}}/>

        {/*If you want to return custom stuff from the NYT API, checkout the APIRequest file!*/}

      </SafeAreaView>
    );
  }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 90,
    width: '94%'
  },
});
