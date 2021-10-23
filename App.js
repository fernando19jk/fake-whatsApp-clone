import React,{ Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ScrollableTabView from "react-native-scrollable-tab-view";
import Chats from "./app/components/Chat";
import States from "./app/components/State";
import Calls from "./app/components/Call";

export default class App extends Component{
  render() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View styles={styles.leftHeaderContainer}>
            <Text style={styles.logo}>WhatsApp</Text>
          </View>
          <View style={styles.rightHeaderContainer}>
            <Icon name="search" color="#fff" size={23} style={styles.icon} />
            <Icon name="more-vert" color="#fff" size={23} style={styles.icon} />
          </View>
        </View>
      <View style={styles.contentContainer}>
      <ScrollableTabView
        tabBarUnderlineIcon="#fff"
        tabBarUnderlineStyle={{backgroundColor: "#fff"}}
        tabBarActiveTextColor="#fff"
        tabBarInactiveTextColor="#ddd"
        tabBarBackgroundColor="#075e54"
      >
        <Chats tabLabel="CHATS" />
        <States tabLabel="ESTADOS" />
        <Calls tabLabel="LLAMADAS" />
      </ScrollableTabView>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    alignItems: "center"
  },
  contentContainer: {
    flex: 8
  },
  rightHeaderContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  leftHeaderContainer: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  logo: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold"
  },
  icon: {
    padding: 5,
  }
});