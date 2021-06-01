import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {getrepo, getinforuser} from './src/callapi';
import {RepoItem, SearchBar, HeaderItem} from './src/component';
import ListRepo from './src/component/ListRepo';
export const AppStateContext = React.createContext();

export default function App() {
  const [repo, setrepo] = useState([]);
  const [user, setUser] = useState();
  const [infor, setInfor] = useState();
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(false);
  const search = text => {
    Promise.all([getrepo(text), getinforuser(text)])
      .then(e => {
        if (e[0].status == 200 || e[1].status == 200) {
          console.log(e[0]);
          setrepo(e[0].data);
          setInfor(e[1].data);
          setLoading(false);
          updateValue(e[0].data.length);
        } else {
          alert('Not Found');
          setLoading(false);
        }
      })
      .catch(e => {
        alert(e);
      });
  };
  const updateValue = e => setCount(e);
  return (
    <AppStateContext.Provider
      value={{
        count: count,
        updateValue: updateValue,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <SearchBar
          onChangeText={async text => {
            setLoading(true);
            setUser(text);
            search(text);
          }}
        />
        {loading && (
          <ActivityIndicator
            style={{margin: 30}}
            size="large"
            color="#00ff00"
          />
        )}

        <HeaderItem data={infor} user={'facebook'} />
        <ListRepo repo={repo} data={infor} />
      </SafeAreaView>
    </AppStateContext.Provider>
  );
}
