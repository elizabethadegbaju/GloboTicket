import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet, Alert } from "react-native";

const Contact = ({ navigation }) => {
    const [formFirstName, setFormFirstName] = useState('Enter First Name');
    const [formLastName, setFormLastName] = useState('Enter Last Name');
    const [formEmail, setFormEmail] = useState('Enter Email Address');
    const [formPhoneNumber, setFormPhoneNumber] = useState('Enter Phone Number');
    const [formMessage, setFormMessage] = useState('Let us know what is on your mind.');

    const submit = () => {
        if (!formFirstName || !formLastName || !formEmail || !formMessage) {
            Alert.alert('Please enter info in all required fields');
        } else {
            Alert.alert(`Thank you, ${formFirstName}`);
            navigation.navigate('Home')
        }
    }

    return (
        <View style={styles.form}>
            <Text style={styles.labels}>
                First Name: *required
            </Text>
            <TextInput
                styles={styles.txtInput}
                onChangeText={firstName => setFormFirstName(firstName)}
                value={formFirstName}
                autoCapitalize="words"
                selectTextOnFocus={true}
            />
            <Text style={styles.labels}>
                Last Name: *required
            </Text>
            <TextInput
                styles={styles.txtInput}
                onChangeText={lastName => setFormLastName(lastName)}
                value={formLastName}
                autoCapitalize="words"
                selectTextOnFocus={true}
            />
            <Text style={styles.labels}>
                Email: *required
            </Text>
            <TextInput
                styles={styles.txtInput}
                onChangeText={email => setFormEmail(email)}
                value={formEmail}
                selectTextOnFocus={true}
            />
            <Text style={styles.labels}>
                Phone Number:
            </Text>
            <TextInput
                styles={styles.txtInput}
                onChangeText={phoneNumber => setFormPhoneNumber(phoneNumber)}
                value={formPhoneNumber}
                selectTextOnFocus={true}
            />
            <Text style={styles.labels}>
                Message: *required
            </Text>
            <TextInput
                styles={styles.multiTxtInput}
                onChangeText={message => setFormMessage(message)}
                value={formMessage}
                autoCapitalize="sentences"
                multiline={true}
                numberOfLines={4}
                selectTextOnFocus={true}
            />

            <Button
                title="Send Message"
                color='#708090'
                onPress={submit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    labels: {},
    form: {
        alignItems: "center",
        flexDirection: "column",
        padding: 18
    },
    txtInput: {
        borderWidth: 1,
        fontFamily: "Ubuntu-Regular",
        width: "80%",
        paddingBottom: 15
    },
    multiTxtInput: {
        borderWidth: 1,
        fontFamily: "Ubuntu-Regular",
        width: '80%',
        height: 120,
        marginBottom: 50
    },
    labels: {
        fontFamily: "Ubuntu-Regular"
    }
});

export default Contact;
