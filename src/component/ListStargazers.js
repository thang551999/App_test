import React, {useState, useEffect} from 'react';
import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
import Stargazers from './Stargazers';
import {getstargazers} from '../callapi';
import SimpleButton from './SimpleButton';
export default function ListStargazers({data, repo}) {
  const [listStargazers, setListStargazers] = useState(data);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    setListStargazers(data);
  }, [data]);
  const getstar = async () => {
    console.log(repo.full_name);
    let res = await getstargazers(
      repo.full_name,
      listStargazers.length / 30 + 1,
    );
    let a = [...listStargazers];
    setListStargazers(a.concat(res));
    if (res.length < 30) {
      setDisable(true);
    }
  };
  return (
    <View>
      <FlatList
        data={listStargazers}
        renderItem={e => <Stargazers data={e.item} />}
        ListFooterComponent={
          data.length > 29 &&
          !disable && (
            <View style={styles.viewbutton}>
              <SimpleButton onPress={getstar} titile="Load more stargazers" />
            </View>
          )
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  viewbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
