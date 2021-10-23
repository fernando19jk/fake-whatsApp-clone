import React, {Component} from "react";
import {View, Text} from "react-native";
import axios from 'axios';
import { FAKE_CHATS } from '../data/data.js'

export default class Chat extends Component {
    render() {
        return (
            <View><Text>Chat</Text></View>
        );
    }
}

/*constructor(props){
super(props)
    this.state = {
        chatList : [],
        loaded: false
    }
}*/