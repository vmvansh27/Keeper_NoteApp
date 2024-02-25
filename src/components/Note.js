import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet } from 'react-native';
import { AES, enc } from 'crypto-js';

function Note(props) {
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [decryptedContent, setDecryptedContent] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  function handleDecrypt() {
    if (password === 'password') {
      const decrypted = AES.decrypt(props.content, 'secretKey').toString(enc.Utf8);
      setDecryptedContent(decrypted);
      setIsDecrypted(true);
      setIsPasswordDialogOpen(false);
    } else {
      setIsPasswordCorrect(false);
    }
  }

  function handleChangePassword(value) {
    setPassword(value);
    setIsPasswordCorrect(true);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <View style={styles.noteContainer}>
      <Modal visible={isPasswordDialogOpen} onRequestClose={() => setIsPasswordDialogOpen(false)}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => setIsPasswordDialogOpen(false)}>
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Enter Password</Text>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={handleChangePassword}
          />
          {!isPasswordCorrect && <Text style={styles.errorText}>Incorrect password</Text>}
          <TouchableOpacity style={styles.submitButton} onPress={handleDecrypt}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Text style={styles.input}>{props.title}</Text>
      <Text style={styles.textArea}>{isDecrypted ? decryptedContent : props.content}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text style={styles.text}>Delete</Text>
        </TouchableOpacity>
        {!isDecrypted && (
          <TouchableOpacity style={styles.button} onPress={() => setIsPasswordDialogOpen(true)}>
            <Text style={styles.text}>Decrypt</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 20,
    marginHorizontal: 20
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  textArea: {
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#C8A2C8',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  backButton: {
    backgroundColor: '#C8A2C8',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 30,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    flex: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  submitButton: {
    backgroundColor: '#C8A2C8',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: '80%',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  text: {
    color: 'white'
  }
});

export default Note;
