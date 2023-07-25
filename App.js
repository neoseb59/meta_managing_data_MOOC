import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';

const Item = ({ title, price }) => {
  return (
    <View style={ menuStyles.containerHorizontal }>
      <Text style={ menuStyles.regularText }>{ title }</Text>
      <Text style={ menuStyles.regularText }>${ price }</Text>
    </View>
  )
}

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  React.useEffect(() => {
    loadValues()
  }, [])

  const renderItem = ({ item }) => <Item title={ item.title } price={ item.price } />

  const loadValues = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json'
      );
      const json = await response.json();
      setData(json.menu);
      console.log(json.menu);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={ menuStyles.container }>
      <Text style={ menuStyles.headerText }>Little Lemon Menu</Text>
      { isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={ data }
          keyExtractor={ ({ id }) => id }
          renderItem={ renderItem }
        />
      ) }
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
    padding: 10
  }
});
