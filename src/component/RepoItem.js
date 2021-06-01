import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {getstargazers} from '../callapi';
import ListStargazers from './ListStargazers';
import SimpleButton from './SimpleButton';
export default function RepoItem({data}) {
  const [stargazers, setStargazers] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.textname}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.view1}>
        <View style={styles.viewimage}>
          <Image
            style={styles.imageclose}
            source={require('../asset/star.png')}
          />
          <Text style={{marginLeft: 10}}>{data.stargazers_count}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <SimpleButton
            onPress={async () => {
              let res = await getstargazers(data.full_name);
              setStargazers(res);
            }}
            titile="Load Stargazers"
          />
        </View>
      </View>
      {stargazers[0] && <ListStargazers data={stargazers} repo={data} />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    paddingLeft: 20,
  },
  textname: {fontWeight: 'bold', fontSize: 17},
  description: {color: 'gray', marginVertical: 5},
  view1: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  viewimage: {flexDirection: 'row', flex: 1, alignItems: 'center'},
});
