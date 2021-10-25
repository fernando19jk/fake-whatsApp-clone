import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class ListCall extends Component {

    render() {
        const video_call = this.props.video_call
        const missed  = this.props.missed
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
               {missed ? <Icon name="call-missed" color="#C11111" size={15}/> : <Icon name="call-received" color="#075e54" size={15}/>}  
                {this.props.date} {this.props.time}</Text>
              </View>
              
              <View style = {styles.iconContainer}> 
              {video_call ? <Icon name="video-call" color="#075e54" size={23}/> : <Icon name="call" color="#075e54" size={23}/>}
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

