import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import Text from 'components/Text';
import ToggleReminder from '../Health03/ToggleReminder';


interface Props {
  cals: number;
  protein: number;
  fat: number;
  carb: number;
}
interface DataProps {
  data: Props;
  title: string;
  style: StyleProp<ViewStyle>;
}
const Actuators = ({data, title, style}: DataProps) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.container, style]}>
      <Text category="h6">{title}</Text>
      <View style={styles.item}>
        <Text category="body" status="snow">
          Action 1
        </Text>
        <Text category="h7">{data.cals}</Text>
      </View>
      <View style={styles.item}>
        <Text category="body" status="snow">
          Action 2
        </Text>
        <Text category="h7">{data.protein}</Text>
      </View>
      <View style={styles.item}>
        <Text category="body" status="snow">
          Action 3
        </Text>
        <Text category="h7">{data.carb}</Text>
      </View>
      <View style={styles.item}>
        <Text category="body" status="snow">
          Action 4
        </Text>
        <Text category="h7">{data.fat}</Text>
      </View>
    </View>
  );
};


export default Actuators;

const themedStyles = StyleService.create({
  container: {
    paddingHorizontal: 24,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'background-basic-color-3',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingBottom: 14,
  },
});
