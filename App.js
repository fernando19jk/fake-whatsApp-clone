import React,{ Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ScrollableTabView from "react-native-scrollable-tab-view";
import Chats from "./app/components/Chat";
import States from "./app/components/State";
import Calls from "./app/components/Call";
import ActionButton from 'react-native-action-button';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications
export default class App extends Component{
  constructor()
  {
    super()
    this.state = {

      index : 0

    }
  }

  changeState = (i,ref) => {
    this.setState({index : i})
  }
    
  render() {
    let secondaryButton
    if(this.state.index === 1)
    {
      secondaryButton = <ActionButton offsetY={100} buttonColor='#E0D3D3'
      icon={<Icon color="white" name='pencil'></Icon>}>
    </ActionButton>
    }
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
       onChangeTab={({i,ref}) => this.changeState(i,ref)}
       
     >
       <Chats tabLabel="CHATS" />
       <States tabLabel="ESTADOS" />
       <Calls tabLabel="LLAMADAS" />   
     </ScrollableTabView>
     </View>
     
     <ActionButton buttonColor="#075e54"
       icon={<Icon color="white" size={23} name={this.state.index === 1 ? 'photo-camera' : this.state.index === 2 ? 'call' : 'chat'}></Icon>}>
     </ActionButton>
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

