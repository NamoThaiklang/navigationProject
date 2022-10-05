import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import react from "react";

const DetailScreen = ({ navigation, route }) => {
  const { id, title } = route.params;

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState([]);

  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      console.log(res.data.data);
      setDetail(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  react.useLayoutEffect(() => {
    navigation.setOption(
      {
        title: title,
      },
      [navigation, title]
    );
  });

  if (error) {
    return (
      <View styles={styles.container}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="#f4511e" size="large" />
      </View>
    );
  }

  const _onRefresh = () => {
    getData();
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <View style={styles.dataContent}></View>
        <View style={styles.dataContainer}>
          <View style={styles.dataContent}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.detail}>{item.detail}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={(item, index) => item.ch_id.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_renderItem}
        refreshing={loading}
        // onRefresh = {_onRefresh}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
