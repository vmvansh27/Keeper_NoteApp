import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AES } from 'crypto-js';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    function handleChange(name, value) {
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote() {
        const encryptedContent = AES.encrypt(note.content, 'secretKey').toString();
        props.onAdd({
            title: note.title,
            content: encryptedContent
        });
        setNote({
            title: '',
            content: ''
        });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                name="title"
                value={note.title}
                placeholder="Title"
                onChangeText={value => handleChange('title', value)}
            />
            <TextInput
                style={[styles.input, styles.textArea]}
                name="content"
                value={note.content}
                placeholder="Take a note..."
                onChangeText={value => handleChange('content', value)}
                multiline
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={submitNote}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 5,
        marginTop: 20,
        marginHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    textArea: {
        height: 100,
    },
    addButton: {
        width: 50,
        backgroundColor: '#C8A2C8',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginLeft: 305,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CreateArea;
