import { Image, SafeAreaView, StyleSheet, Text, View ,Pressable} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ marginTop: 0 }}>
      <Image
        style={{ height: 395, width: "100%", resizeMode: "contain" }}
        source={{
          uri: "https://img.freepik.com/premium-vector/quiz-time-neon-signs-style-text_118419-3043.jpg?w=740",
        }}
      />

      <View style={{ padding: 10, marginTop: 10 }}>
        <Text
          style={{
            textAlign: "center",
            color: "blue",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          QUIZ RULE
        </Text>
      </View>

      <View
        style={{
          padding: 10,
          margin: 15,
          backgroundColor: "skyblue",
          borderRadius: 6,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            For Each Correct Option you get 10 points
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            There is no negative marking for wrong answer
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Each question has a time limit of 15 sec
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white" }}>•</Text>
          <Text
            style={{
              marginLeft: 4,
              color: "#722F37",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
           You should answer all the questions compulsarily
          </Text>
        </View>
      </View>
      
      <Pressable
      onPress={() => navigation.navigate("Quiz")}
        style={{
          backgroundColor: "blue",
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text style={{color:"white",fontWeight:"600",textAlign:"center",fontSize:20}}>Start Quiz</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
