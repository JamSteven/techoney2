import React from 'react';
import {View} from 'react-native';
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import Text from 'components/Text';
import { VStack } from 'components';

interface Props {
  cals: string;
  title: string;
  value: number;
  icon: string;
  color: string;
  tintColor: string;
}

const Sensors = ({cals, value, color, tintColor, icon, title}: Props) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack style={styles.bodyCard} level='2'>
      <View style={styles.leftCard}>
        <View style={[styles.icon, {backgroundColor: color}]}>
          <Icon
            pack="assets"
            name={icon}
            style={[styles.happyFace, {tintColor: tintColor}]}
          />
        </View>
        <View>
          <Text category="h6" marginBottom={4}>{title}</Text>
          <Text category="footnote" status="placeholder">
            {`${cals} `}
          </Text>
        </View>
      </View>
      <Text category="h6">{`${value}`}</Text>
    </VStack>
  );
};

export default Sensors;

const themedStyles = StyleService.create({
  bodyCard: {
    borderRadius: 16,
    flexDirection: 'row',
    marginHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
    marginBottom: 16,
  },
  leftCard: {
    flexDirection: 'row',
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 16,
  },
  happyFace: {
    width: 24,
    height: 24,
    tintColor: 'text-basic-color',
  },
});
