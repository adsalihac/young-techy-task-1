import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
      }}
    >
      <View
        style={{
          flex: 1,
          // backgroundColor: "blue",
          justifyContent: "center",
          // alignItems: "center",
          marginLeft: 46,
        }}
      >
        <View
          style={{
            width: 75,
            height: 75,
            borderRadius: 75 / 2,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/hat.png")}
            style={{
              width: 60,
              height: 60,
            }}
          />
        </View>

        <Text
          style={{
            color: "white",
            fontSize: 50,
            fontWeight: "900",
            marginTop: 16,
            lineHeight: 60,
          }}
        >
          Food for{"\n"}Everyone
        </Text>
      </View>

      <View
        style={{
          flex: 2,
        }}
      >
        <Image
          source={require("./assets/people.png")}
          style={{
            width: "100%",
            height: 500,
          }}
        />

        <BlurView
          intensity={4}
          style={{
            height: 180,
            width: "100%",
            position: "absolute",
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: "80%",
              height: 70,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 16,
            }}
          >
            <Text
              style={{
                color: "#EC5A46",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
