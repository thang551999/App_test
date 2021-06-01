import React, {useRef, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
const windownsize = Dimensions.get('screen');
export default function SearchBar({onChangeText}) {
  const [textsearch, setTextSearch] = useState('');
  const textput = useRef();
  const onSubmit = text => {
    setTextSearch(text);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageclose}
        source={require('../asset/search.png')}
      />
      <TextInput
        value={textsearch}
        ref={textput}
        style={styles.searchbar}
        onSubmitEditing={() => {
          onChangeText(textsearch);
        }}
        onChangeText={text => {
          setTextSearch(text);
        }}
      />
      {textsearch !== '' && (
        <TouchableOpacity onPress={() => textput.current.clear()}>
          <Image
            style={styles.imageclose}
            source={require('../asset/close.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: 10,
  },
  searchbar: {
    flex: 1,
  },
  imageclose: {
    padding: 15,
    marginRight: 10,
  },
});
