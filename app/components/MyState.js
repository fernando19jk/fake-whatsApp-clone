import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from "react-native";

export default class MyState extends Component {

    render() {
        let image ={uri:'https://slm-assets.secondlife.com/assets/5489200/lightbox/chucky%20resized.jpg?1335722960'};

        return (
            <View>
            <View style = {styles.listItemContainer}>
             <View style = {styles.avatarContainer}>
                <Image style={styles.avatar}
                source= {image}
                />
             </View>
             <View style = {styles.chatDetailsContainer}>
               <View style = {styles.chatDetailsContainerWrap}>
                <View style = {styles.nameContainer}>
                 <Text style = {styles.nameText}>Mi estado</Text>
                 <Text style={styles.msgText}>añade una actualización</Text>
               </View>
             </View>
          </View>  
        </View>
        <View style = {styles.recent}>
        <Text style={styles.letter}>Recientes</Text>
        </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    listItemContainer: {
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
    },
    recent: {
        padding: 7,
        backgroundColor: "#E8E5E4",
        opacity: 1
    },
    letter: {
        color: "#0E7955",
        fontWeight: "bold"
        
    }
});

