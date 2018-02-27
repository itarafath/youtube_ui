import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  descContainer: {
    flexDirection: 'row',
    paddingTop: 15
  },
  videoDetails: {
    paddingHorizontal: 15,
    flex: 1
  },
  videoTitle: {
    fontSize: 16,
    color: '#3c3c3c'
  },
  videoStates: {}
});

export default class VideoItem extends Component {
  render() {
    const obj = {};
    obj.video = this.props.video;
    return (
      <View style={styles.container}>
        <Image source={{ uri: obj.video.snippet.thumbnails.medium.url }} style={{ height: 200 }} />
        <View style={styles.descContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/5.jpg' }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View style={styles.videoDetails}>
            <Text style={styles.videoTitle}>{obj.video.snippet.title}</Text>
            <Text style={styles.videoStates}>
              {`${obj.video.snippet.channelTitle} · ${obj.video.statistics.viewCount}`}
            </Text>
          </View>
          <Icon name="more-vert" size={20} />
        </View>
      </View>
    );
  }
}
