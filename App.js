import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import menuItems from "./menuItems.json"

const Item = ({ title, price }) => {
  return (
    <View style={ menuStyles.containerHorizontal }>
      <Text style={ menuStyles.regularText }>{ title }</Text>
      <Text style={ menuStyles.regularText }>${ price }</Text>
    </View>
  )
}

export default App = () => {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    loadValues()
  }, [])

  const renderItem = ({ item }) => <Item title={ item.title } price={ item.price } />

  const loadValues = async () => {
    setData(menuItems.menu)
  }

  return (
    <SafeAreaView style={ menuStyles.container }>
      <Text style={ menuStyles.headerText }>Little Lemon Menu</Text>
      <FlatList
        style={ { backgroundColor: '#495E57', flex: 1 } }
        data={ data }
        renderItem={ renderItem }
      />
    </SafeAreaView>
  );
};

const menuStyles = StyleSheet.create({
  containerHorizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
  },
  headerText: {
    color: '#495E57',
    fontSize: 30,
    textAlign: 'center',
  },
  regularText: {
    fontSize: 25,
    padding: 10,
    color: '#F4CE14'
  }
});
