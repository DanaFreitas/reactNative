import * as React from "react";
import {
 // Alert,
  StyleSheet,
  Text,
  View,
 // Button,
 // TextInput,
  Image,
  ScrollView,
 // Navigation,
} from "react-native";



const Stack = createNativeStackNavigator();

export default function Food() {
    return (
      <ScrollView>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Our Food</Text>
  
          <Text style={styles.paragraph}>
            Try some of our carnival food. It's as delicious as it looks.
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/images/fries.jpg")}
          />
          {/*<View style={styles.wrapper}> */}
            <View style={styles.smallwrapper}>
  
              <Text style={styles.food}>Slice of Pizza</Text>
              <Text style={styles.food}>.........</Text>
              <Text style={styles.food}> $2.50</Text>
            </View>
            <View style={styles.smallwrapper}>
              <Text style={styles.food}>French Fries</Text>
              <Text style={styles.food}>...........</Text>
              <Text style={styles.food}> $3.00</Text>
            </View>
            <View style={styles.smallwrapper}>
              <Text style={styles.food}>Chicken Fingers</Text>
              <Text style={styles.food}>........</Text>
              <Text style={styles.food}> $3.50</Text>
            </View>
            <View style={styles.smallwrapper}>
              <Text style={styles.food}>Cotton Candy</Text>
              <Text style={styles.food}>...........</Text>
              <Text style={styles.food}> $2.50</Text>
            </View>
            <View style={styles.smallwrapper}>
              <Text style={styles.food}>Fried Dough</Text>
              <Text style={styles.food}>............</Text>
              <Text style={styles.food}> $3.00</Text>
            </View>
            <View style={styles.smallwrapper}>
              <Text style={styles.food}>Fried Peanut Butter Cup</Text>
              <Text style={styles.food}></Text>
              <Text style={styles.food}> $5.00</Text>
            </View>
            <View style={styles.smallwrapper}>
              <Text style={styles.food}>Fried Ice Cream</Text>
              <Text style={styles.food}>........</Text>
              <Text style={styles.food}> $5.00</Text>
            </View>
            <View style={styles.smallwrapper}>
              <Text style={styles.food}>Soda</Text>
              <Text style={styles.food}>...................</Text>
              <Text style={styles.food}> $2.00</Text>
            </View>
            <View style={styles.smallwrapper}>
              <Text style={styles.food}>Fried Water</Text>
              <Text style={styles.food}>............</Text>
              <Text style={styles.food}> $3.00</Text>
            </View>
        {/*  </View> */}
  
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