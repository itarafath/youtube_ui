import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import VideoItem from './components/VideoItem';
import data from './assets/data.json';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    flexDirection: 'row',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25
  },
  tabBar: {
    backgroundColor: 'white',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#E5E5E5',
    alignItems: 'center',
    borderTopWidth: 0.5
  },
  body: {
    flex: 1
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4
  }
});

const logo = require('./assets/images/logo.png');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={logo} />
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={data.items}
            renderItem={(video) => <VideoItem video={video.item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25} />
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25} />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25} />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={25} />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
