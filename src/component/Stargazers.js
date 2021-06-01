import React from 'react';
import {View, Image, Text} from 'react-native';

export default function Stargazers({data = {avatar_url: '', name: ''}}) {
  return (
    <View
      style={{flexDirection: 'row', marginVertical: 10, alignItems: 'center'}}>
      <Image
        source={{uri: data.avatar_url}}
        style={{height: 80, width: 80, borderRadius: 20}}
      />
      <Text style={{fontWeight: 'bold', marginLeft: 10}}>{data.login}</Text>
    </View>
  );
}
