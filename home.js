import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";



const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.globologo}
                source={require('.images/logo_large.png')}
            />
            <Text style={styles.title}>Welcome to GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
        </View>
    );
}

const introText = `Happy New Year To All of us and Welcome to 2022.
We hope you all had time to unwind during the break and hopefully it was 
worth it. The EID group is slightly over a year now, and it’s great to see 
how we slowly have been able to meet other eagles and share with one 
another through various meetings over time. It is also great to see that 
last year some members of the group were able to meet up one way or the 
other which is great!!

Hopefully this year we are able to have more regionally meetings outside of 
our virtual meetups, and perhaps find even more useful information and 
people amongst ourselves that add to one or two important areas of our 
lives here.`

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        padding: 20
    },
    globologo: {
        height: 100,
        width: 150
    },
    title: {
        fontFamily: "Ubuntu-Regular"
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: "Ubuntu-Regular"
    },
    textcontainer: {
        textAlign: "center",
        paddingTop: 10
    },
    content: {
        fontFamily: "Ubuntu-Light",
        fontWeight: 300
    }
})

export default Home;