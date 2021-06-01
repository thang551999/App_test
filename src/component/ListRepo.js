import React, {useState, useEffect, useContext} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import RepoItem from './RepoItem';
import SimpleButton from './SimpleButton';
import {getrepo} from '../callapi';
import {AppStateContext} from '../../App';
export default function ListRepo({repo, data}) {
  const [repostate, setrepostate] = useState();
  const [disablebutton, setDisableButton] = useState(false);
  const {updateValue} = useContext(AppStateContext);
  useEffect(() => {
    setrepostate(repo);
    if (repo.length < 30) {
      setDisableButton(false);
      console.log(1);
    } else {
      setDisableButton(true);
    }
  }, [repo]);
  const clickupdate = async () => {
    let res = await getrepo(data.login, repostate.length / 30 + 1);
    let a = [...repostate];
    setrepostate(a.concat(res));
    if (res.length < 30) {
      setDisableButton(false);
    }
    updateValue(a.concat(res).length);
  };
  return (
    <FlatList
      // ListHeaderComponent={<HeaderItem data={repo} user={'facebook'} />}
      keyExtractor={item => item.id}
      data={repostate}
      renderItem={e => <RepoItem data={e.item} />}
      ListFooterComponent={
        disablebutton && (
          <View style={styles.buttonview}>
            <SimpleButton onPress={clickupdate} titile="Load more repo" />
          </View>
        )
      }
    />
  );
}
const styles = StyleSheet.create({
  buttonview: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
