import * as React from 'react';
import {View, Image} from 'react-native';
import {StyleService, useStyleSheet, Button, Icon} from '@ui-kitten/components';

import {
  Container,
  Content,
  Text,
  NavigationAction,
  IDivider,
  HStack,
} from 'components';
import ListRecipes from '../Health07/ListRecipes';
import Images from 'assets/images';
import List from './List';

const Health09 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <HStack itemsCenter>
        <NavigationAction status="primary" />

        <NavigationAction status="primary" icon="setting" />
      </HStack>
      <Content>
        <Image
          source={Images.avatar.avatar11}
          /* @ts-ignore */
          style={styles.image}
        />
        <Text category="h3" center marginBottom={8}>
          Mathieu JOUSLIN
        </Text>
        <Text category="subhead" opacity={0.5} center>
          Il faut ce qu'il faut 
        </Text>
        <View style={styles.statusView}>
          {Data_Status.map((item, index) => {
            return (
              <View key={index}>
                <Icon pack="assets" name="check" style={styles.checked} />
                <Text category="subhead" marginTop={8}>
                  {item.title}
                </Text>
              </View>
            );
          })}
        </View>
        <IDivider marginHorizontal={24} />
        <List title={'Products'} dataList={Data_Recipes} />
      </Content>
      <Button children="Let's buy it !" style={styles.btnBottom} />
    </Container>
  );
});

export default Health09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  checked: {
    tintColor: 'color-primary-100',
  },
  btnBottom: {
    marginTop: 8,
    marginHorizontal: 24,
    marginBottom: 8,
  },
  statusView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 34,
    marginTop: 32,
    marginBottom: 24,
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 400/ 2,
  },
});
const Data_Status = [
  {id: 0, title: '10 000\nvendu'},
  {id: 1, title: 'Muscle Gain'},
  {id: 2, title: 'Less Snack'},
];
export const Data_Recipes = [
  {
    id: 0,
    name: 'Miel THYM',
    image: Images.autres.miel3,
    price: 12.5,
  },
  {
    id: 1,
    name: 'Miel ACACIA',
    image: Images.autres.miel2,
    price: 17.7,
  },
  {
    id: 2,
    name: 'Miel LAVANDE',
    image: Images.autres.miel4,
    price: 10000,
  },
];
