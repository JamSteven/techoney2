import * as React from 'react';
import {View, Image} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Button,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  Text,
  NavigationAction,
  VStack,
  HStack,
} from 'components';
import Images from 'assets/images';
import FoodItem from '../Health04/Sensors';
import Nutrition from './Actuators';
import Sensors from '../Health04/Sensors';
import Actuators from './Actuators';
import ToggleReminder from '../Health03/ToggleReminder';
import Chart from '../Health01/Chart';
import { Data_Weight } from '../Health01/data';
import LigneSensors from './LigneSensors';
import CardCals from '../Health01/CardCals';


const Health05 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isChecked, setIsChecked] = React.useState(false);



  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'HIVES'}
        accessoryLeft={<NavigationAction status="primary" icon="arrow_circle_left" />}
        accessoryRight={
          <NavigationAction status="primary" icon="qr_code" />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <HStack itemsCenter justify="flex-start" mh={24}>
          <Layout style={styles.layoutImage}>
            <Image source={Images.hives.hive1} />
          </Layout>
          <VStack ml={10}>
            <Text category="h3" marginBottom={0}>
            Hive                           3                           
            </Text>
            <Text category="subhead" status="platinum">
              In good health
            </Text>
             <LigneSensors totalCals={3000} cals={999} title={'Poid Ruche'} />
          </VStack>

        </HStack>
 
        <Text category="h6" marginLeft={24} marginTop={24}>
          Sensors
        </Text>
        <LigneSensors totalCals={3000} cals={999} title={'Poid Ruche'} />
        <Sensors

          title="Temperature"
          value={20}
          icon={'coffe'}
          color={'#FF5050'}
          tintColor={theme['text-basic-color']}
          cals={'Update 1 min ago'}
        />
        <Sensors

          title="Humidity"
          value={100}
          icon="egg"
          color="#3366FF"
          tintColor={theme['text-white-color']}
          cals={'Update 2 min ago'}
        />
        <Actuators
          data={DATA_Nutrition}
          title="Actuators"
          style={styles.nutrition}
        />
      </Content>
      <ToggleReminder
        checked={isChecked}
        onChange={setIsChecked}
        icon="caret_right"
        style={styles.toggle}
        />
   
  




      <Button
        children="TEST test Test"
        style={[styles.buttonBottom, {marginBottom: bottom + 8}]}
      />
    </Container>
  );
});

export default Health05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingTop: 16,
  },
  layoutImage: {
    borderWidth: 2,
    borderColor: 'background-basic-color-3',
    padding: 5,
    borderRadius: 5,
  },
  nutrition: {
    marginTop: 32,
  },
    toggle: {
      marginTop: 42,
      marginLeft: 26,
      marginRight: 20,
  },
  buttonBottom: {
    marginHorizontal: 24,
    marginTop: 8,
  },


});
const DATA_Nutrition = {
  cals: 0,
  protein: 0,
  carb: 0,
  fat: 0,
};
