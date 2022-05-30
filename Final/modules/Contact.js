
import * as React from "react";
import {
  Alert,
  StyleSheet,
  Text,
//  View,
  Button,
  TextInput,
  Image,
  ScrollView,
//  Navigation,
} from "react-native";


//const Stack = createNativeStackNavigator();

export default function Contact() {
    return (
      <ScrollView>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Contact Us</Text>
          <Image
            style={styles.image}
            source={require("../assets/images/envelope.jpg")}
          />
  
          <Text style={styles.paragraph}>
            Please contact us in regards to any question, comments, and concerns
            you might have.
          </Text>
          <Text>Note: All employment positions are currently filled.</Text>
          <TextInput style={styles.input} placeholder="Name" />
  
          <TextInput style={styles.input} placeholder="Email Address" />
  
          <TextInput
            style={styles.input}
            placeholder="Comment"
            numberOfLines={8}
          />
          <Button
            title="submit"
            onPress={() => Alert.alert("Submission successful.")}
          >
            {" "}
          </Button>
  
          <Text style={styles.paragraph}>
            10am-10pm 7 Days a Week{"\n"}1821 Victory Road, Lakeland Florida
          </Text>
        </ScrollView>
      </ScrollView>
    );
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffe0",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  image: {
    height: 200,
    width: 200,
  },

  paragraph: {
    margin: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 5,
    color: "#0000FF",
  },

  input: {
    margin: 20,
  },

  food: { fontWeight: "bold", margin: 5, },

  wrapper: { textAlign: "left", },

  smallwrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  }
});