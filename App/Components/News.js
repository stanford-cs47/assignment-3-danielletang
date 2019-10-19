import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  Linking,
  Dimensions
} from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

function Article({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    //I would make sure text parts of articles are different
    //sizes
  );
}

export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  render () {
    const {articles} = this.props;

    return (
      <View style={styles.flatlist}>
        <FlatList
            //taken from FlatList React Native documentation
            data={articles}
            renderItem={({ item }) => (
              <Article
                id={item.id}
                title={item.title}
                selected={!!selected.get(item.id)}
                onSelect={onSelect}
              />
            )}
            keyExtractor={item => item.id}
          />
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  flatlist: {
    width: '97%',
    backgroundColor: 'blue'
  },
});
