import React from 'react';
import {View, FlatList} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';

import Text from 'components/Text';
import keyExtractor from 'utils/keyExtractor';
import MealRecipesItem from './MealRecipesItems';
import {MealRecipesProps} from './types';

interface DataProps {
  title: string;
  dataList: MealRecipesProps[];
}

const List = ({title, dataList}: DataProps) => {
  const styles = useStyleSheet(themedStyles);
  const renderItem = React.useCallback(({item}: {item: MealRecipesProps}) => {
    return <MealRecipesItem data={item} />;
  }, []);
  return (
    <View style={styles.container}>
      <Text category="h5" status="basic" marginLeft={24} capitalize>
        {title}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        data={dataList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};

export default List;

const themedStyles = StyleService.create({
  container: {
    marginTop: 32,
  },
  content: {
    marginTop: 24,
    paddingLeft: 2,
    paddingRight: 16,
  },
});
