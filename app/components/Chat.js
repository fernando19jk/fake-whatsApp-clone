import React, {Component} from "react";
import {View, Text, FlatList, ActivityIndicator} from "react-native";
import axios from 'axios';
import { FAKE_CHATS } from '../data/data.js'

export default class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chatList : [],
            loaded: false
        }
    }

    componentDidMount() {
        axios.get(FAKE_CHATS)
        .then((response) => {
         this.setState({
             chatList: response.data,
             loaded: true
         })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        if(this.state.loaded) {
            return(
                <FlatList
                    data={this.state.chatList}
                    renderItem={({item}) => <Text>{item.first_name} </Text>}
                    keyExtractor={item => item.id}
                />
            )
          } else {
            return(
                <ActivityIndicator size='large' />
            )
          }       
        }
}

