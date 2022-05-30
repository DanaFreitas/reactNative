/*import { StatusBar } from "expo-status-bar"; */
import * as React from "react";
import {
  //Alert,
  StyleSheet,
  Text,
//  View,
  Button,
 // TextInput,
  Image,
  ScrollView,
 // Navigation,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from './modules/Contact';
import Food from "./modules/Food";
import Rides from "./modules/Rides";

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <ScrollView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sunshine Park</Text>

        <Text style={styles.paragraph}>
          Welcome to the Sunshine Park, the greatest amusement park in Florida
          since 1935. With countless attractions, you will find yourself wanting
          to come back all year long.
        </Text>

        <Image
          source={require("./assets/images/spinnyride.jpg")}
          style={styles.image}
        />
        <Text style={styles.paragraph}>
          It was 1935, and our founder Rodrigo Vance, descendant of one of
          Florida's richest families, laid on his death bed. In his final act,
          he wrote to spend his fortune, on many services to assist the people
          of Florida. One of them was to create an Amusement Park that would
          give people a chance to have fun, especially during the midst of the
          Great Depression. This is how Sunshine Park was born, and since then,
          it has been standing strong as one of the greatest parks in the world.{" "}
        </Text>
        <Image
          style={styles.image}
          source={require("./assets/images/founder.jpg")}
        />

        <Text style={styles.title}>Rides</Text>

        <Image
          style={styles.image}
          source={require("./assets/images/bumpercars.jpg")}
        />
        <Text style={styles.paragraph}>
          We have a variety of rides and amusements in our park. From roller
          coasters, to video games, to bumper cars. We have everything.
        </Text>
        <Button
          onPress={() => navigation.navigate("Rides")}
          style={styles.button}
          title="Click Here"
        />

        <Text style={styles.title}>Food</Text>
        <Image
          style={styles.image}
          source={require("./assets/images/fries.jpg")}
        />
        <Text style={styles.paragraph}>
          Our food is a delicious treat to snack on as you enjoy the park. Make
          sure to grab a bite while you are here.
        </Text>
        <Button
          onPress={() => navigation.navigate("Food")}
          style={styles.button}
          title="Click Here"
        />

        <Text style={styles.title}>Contact Us</Text>
        <Image
          style={styles.image}
          source={require("./assets/images/envelope.jpg")}
        />
        <Text style={styles.title}>
          Have any questions? Whether you want to know about disability services
          or any job opportunities, don't hesitate to send us a message.
        </Text>
        <Button
          onPress={() => navigation.navigate("Contact")}
          style={styles.button}
          title="Click Here"
        />

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

  food: { fontWeight: "bold", margin: 5 },

  wrapper: { textAlign: "left" },

  smallwrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: { backgroundColor: "#0000FF" },
        headerTitleStyle: {
          color: "#ffffe0",
        },
        tabBarStyle: {
          paddingHorizontal: 5,
          paddingTop: 0,

          backgroundColor: "#0000FF",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="home" color={"#ffffe0"} size={size} />
          ),
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#ffffe0",
        }}
      />

      <Tab.Screen
        name="Rides"
        component={Rides}
        options={{
          tabBarLabel: "Rides",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="rocket"
              color={"#ffffe0"}
              size={size}
            />
          ),
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#ffffe0",
        }}
      />
      <Tab.Screen
        name="Food"
        component={Food}
        options={{
          tabBarLabel: "Food",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="pizza"
              color={"#ffffe0"}
              size={size}
            />
          ),
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#ffffe0",
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="mail" color={"#ffffe0"} size={size} />
          ),
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "#ffffe0",
        }}
      />
    </Tab.Navigator>
  );
}

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rides" component={Rides} />

        <Stack.Screen name="Food" component={Food} />

        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
