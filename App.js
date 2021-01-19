import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Vibration,
  Text,
  Alert,
} from "react-native";
import * as Location from "expo-location";

export default class Acceuil extends Component {
  constructor(props) {
    super(props);
  }

  _getPermissions = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Error", "Location is not granted");
      return;
    }
  };

  _getLocation = async () => {
    try {
      const userLocation = await Location.getCurrentPositionAsync({});
      console.log(userLocation.coords.speed);
    } catch (e) {
      console.log({ error: e });
    }
  };

  render() {
    this._getPermissions();
    this._getLocation();
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
