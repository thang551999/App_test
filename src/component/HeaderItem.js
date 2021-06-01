import React, {useContext} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {AppStateContext} from '../../App';
export default function HeaderItem({
  data = {avatar_url: '', name: '', login: '', public_repos: ''},
}) {
  const {count} = useContext(AppStateContext);
  console.log(count, 11111);
  return (
    <View style={styles.container}>
      <Image style={{height: 75, width: 75}} source={{uri: data.avatar_url}} />
      <View style={{marginLeft: 15, flex: 1}}>
        <Text style={styles.textstyle}>{data.name}</Text>
        <Text>{data.login}</Text>
      </View>

      <Text style={{marginRight: 30}}>
        {data.public_repos == '' ? '' : `${count}/${data.public_repos}`}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textstyle: {fontSize: 20, fontWeight: 'bold', marginVertical: 5},
});
