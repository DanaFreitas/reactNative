
import * as React from "react";
import {
 // Alert,
  StyleSheet,
  Text,
  //View,
 // Button,
 // TextInput,
  Image,
  ScrollView,
//  Navigation,
} from "react-native";


const Stack = createNativeStackNavigator();

export default function Rides({ navigation, route }) {
    return (
      <ScrollView>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>What we have to offer</Text>
  
          <Text style={styles.paragraph}>
            We have a wide variety of wonderous rides and activities for you to
            enjoy. Is includes, but is not limited to:
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/images/rollerCoaster.jpg")}
          />
          <Text style={styles.title}>The Twister</Text>
  
          <Image
            style={styles.image}
            source={require("../assets/images/bumpercars.jpg")}
          />
          <Text style={styles.title}>Bumper Cars</Text>
  
          <Image
            style={styles.image}
            source={require("../assets/images/arcade.jpg")}
          />
          <Text style={styles.title}>The In-Cave Arcade</Text>
  
          <Image
            style={styles.image}
            source={require("../assets/images/spinnyride.jpg")}
          />
          <Text style={styles.title}>The Throw Up Machine</Text>
  
          <Image
            style={styles.image}
            source={require("../assets/images/rollerCoaster2.jpg")}
          />
          <Text style={styles.title}>Finality</Text>
  
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