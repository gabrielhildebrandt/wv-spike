import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        userAgent="Custom User Agent"
        startInLoadingState={true}
        style={{
          marginTop: 20,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        source={{ uri: "https://google.com/" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
