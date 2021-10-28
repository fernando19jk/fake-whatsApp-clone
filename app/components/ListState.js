import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MyState from "./MyState";

export default class ListState extends Component {

    render() {
        return (
            
            <View style = {styles.listItemContainer}>
             <View style = {styles.avatarContainer}>
                <Image style={styles.avatar}
                source={{uri:this.props.image}}
                />
             </View>
             <View style = {styles.chatDetailsContainer}>
               <View style = {styles.chatDetailsContainerWrap}>
                <View style = {styles.nameContainer}>
                 <Text style = {styles.nameText}>{this.props.first_name}</Text>
               </View>
             </View>
             <View style = {styles.chatDetailsContainerWrap}>
              <View style = {styles.msgContainer}>
              
               <Text style={styles.msgText}>
                
                    {this.props.date} {this.props.time}</Text>
              </View>
              
              <View style = {styles.iconContainer}>
               
                
              </View>
            </View>
          </View>   
        </View>
        );
    }
}


const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 10
    },
    avatarContainer: {
        flex: 1,
        alignItems: "flex-start"
    },
    chatDetailsContainer: {
        flex: 4,
        borderBottomColor: "rgba(92,94,94,0.5)",
        borderBottomWidth: 0.25
    },
    chatDetailsContainerWrap: {
        flex: 1,
        flexDirection: "row",
        padding: 5
    },
    msgContainer: {
        flex: 1
    },
    nameText: {
        fontWeight: "bold",
        color: "#000"
    },
    dateText: {
        fontSize: 12
    },
    iconContainer: {
        
        alignItems: "flex-end",
    },
    avatar: {
        borderRadius: 30,
        width: 60,
        height: 60
    }
});

