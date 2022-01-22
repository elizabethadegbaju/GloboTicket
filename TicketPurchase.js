import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, TextInput } from "react-native";
import globoTickets from './TicketsDB';

const TicketPurchase = ({ route, navigation }) => {
    const [ticketQuantity, setTicketQuantity] = useState('1');
    const { ticketId } = route.params;
    const selectedEvent = globoTickets.find(ticket => ticket.eventId === ticketId);

    const purchase = () => {
        var price = selectedEvent.price * ticketQuantity;
        Alert.alert(`Total price of cart is $${price}`);
        navigation.navigate('Home');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedEvent.event}</Text>
            <Image
                style={styles.ticketImage}
                source={selectedEvent.image}
            />
            <Text style={styles.shortDescription}>
                {selectedEvent.shortDescription}
            </Text>
            <Text style={styles.description}>
                {selectedEvent.description}
            </Text>
            <View style={styles.purchaseRow}>
                <Text style={styles.shortDescription}>
                    Quantity:
                </Text>
                <TextInput
                    style={styles.quantityInput}
                    onChangeText={quantity => setTicketQuantity(quantity)}
                    value={ticketQuantity}
                    selectTextOnFocus={true}
                    keyboardType="numeric"
                />
            </View>
            <Text style={styles.price}>
                Total Price: ${selectedEvent.price * ticketQuantity}
            </Text>
            <TouchableOpacity
                onPress={purchase}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Confirm Purchase</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10
    },
    title: {
        fontFamily: "Ubuntu-Regular",
        paddingBottom: 10
    },
    ticketImage: {
        width: "100%",
        height: 180
    },
    shortDescription: {
        fontFamily: "Ubuntu-Regular",
        paddingTop: 5,
        textAlignVertical: "center"
    },
    description: {
        textAlign: "left",
        fontFamily: "Ubuntu-Light",
        fontWeight: "600",
        padding: 10
    },
    purchaseRow: {
        flexDirection: "row"
    },
    quantityInput: {
        borderWidth: 1,
        fontFamily: "Ubuntu-Regular",
        height: 38,
        width: 40,
        marginLeft: 25
    },
    price: {
        fontFamily: "Ubuntu-Regular",
        paddingBottom: 10,
        paddingTop: 5
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: "60%"
    },
    buttonText: {
        fontFamily: "Ubuntu-Regular",
        padding: 5,
        textAlign: "center"
    }
});

export default TicketPurchase;

