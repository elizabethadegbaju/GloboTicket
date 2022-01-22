import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import globoTickets from "./TicketsDB";

const Tickets = () => {
    const ticketItem = ({ item }) => {
        return (
            <View style={styles.tickets}>
                <View>
                    <Image
                        style={styles.img}
                        source={item.image}
                    />
                </View>
                <View>
                    <Text
                        style={styles.ticketTitle}
                    >
                        {item.event}
                    </Text>
                    <Text
                        style={styles.ticketShortDescription}
                    >
                        {item.shortDescription}
                    </Text>
                    <Text
                        style={styles.ticketDescription}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {item.description}
                    </Text>
                    <Text
                        style={styles.ticketShortDescription}
                    >
                        Price: ${item.price}
                    </Text>
                    <Text
                        style={styles.ticketButton}
                    >
                        GET TICKETS
                    </Text>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={globoTickets}
                renderItem={ticketItem}
                keyExtractor={(item) => item.eventId}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15
    },
    tickets: {
        flexDirection: "column"
    },
    img: {
        height: 180,
        width: "100%"
    },
    ticketTitle: {
        fontFamily: "Ubuntu-Regular",
        fontWeight: "bold",
        textAlign: "center"
    },
    ticketShortDescription: {
        fontFamily: "Ubuntu-Light",
        fontWeight: "600",
        textAlign: "center",
        paddingTop: 5
    },
    ticketDescription: {
        fontFamily: "Ubuntu-Light",
        fontWeight: "600",
        padding: 15
    },
    ticketButton: {
        fontFamily: "Ubuntu-Regular",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 5,
        paddingBottom: 15
    }
});

export default Tickets;

