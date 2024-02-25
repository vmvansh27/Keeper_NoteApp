import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Header';
import Note from './Note';
import CreateArea from './CreateArea';
import SearchBar from './SearchBar'; // Import the SearchBar component


function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <SearchBar onChangeText={setSearchText} />
      <CreateArea onAdd={addNote} />
      <ScrollView>
        {notes
          .filter(noteItem => noteItem.title.toLowerCase().includes(searchText.toLowerCase()))
          .map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          ))}
      </ScrollView>
    </View>
  );
}

export default App;

