import React, {useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

export default function SimpleButton({onPress, titile}) {
  const [loading, setLoading] = useState(false);
  return (
    <TouchableOpacity
      onPress={async () => {
        if (loading === false) {
          setLoading(true);
          await onPress();
          setLoading(false);
        }
      }}
      style={{
        backgroundColor: '#4682B4',
        marginRight: 10,
        borderRadius: 10,
        flexDirection: 'row',
      }}>
      {loading && (
        <ActivityIndicator
          style={{marginHorizontal: 10}}
          size="small"
          color="white"
        />
      )}

      <Text style={{color: 'white', padding: 10}}>{titile} </Text>
    </TouchableOpacity>
  );
}
