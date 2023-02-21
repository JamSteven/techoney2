import React from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import {useTheme, Layout} from '@ui-kitten/components';

interface ProgressBarProps {
  style?: StyleProp<ViewStyle>;
  progress: number;
  styleBar?: StyleProp<ViewStyle>;
  progressColor?: string;
  containColor?: string;
}

const Ligne = ({
  style,
  progress,
  styleBar,
  progressColor,
  containColor,
}: ProgressBarProps) => {
  const theme = useTheme();
  const [width, setWidth] = React.useState<number>(1);

  const progressValue = React.useMemo(() => {
    return progress * width;
  }, [width, progress]);

  const slider = useDerivedValue(() => {
    return progress * width;
  });

  const styleSlider = useAnimatedStyle(() => {
    return {
      width: withTiming(slider.value, {
        duration: 3000,
        easing: Easing.bezier(0.5, 0.1, 0.25, 1),
      }),
    };
  });

  const onLayout = React.useCallback(({nativeEvent}: LayoutChangeEvent) => {
    setWidth(prev => {
      if (prev !== nativeEvent.layout.width) {
        return nativeEvent.layout.width;
      }
      return prev;
    });
  }, []);

  return (
    <Layout
      level="2"
      style={[
        styles.container,

        style,
        {
          backgroundColor: containColor
            ? containColor
            : theme['background-basic-color-2'],
        },
      ]}
      onLayout={onLayout}>
      <Animated.View
        style={[
          {
            height: 6,
            backgroundColor: progressColor
              ? progressColor
              : theme['color-primary-100'],
            width: progressValue,
            borderRadius: 6,
          },
          styleBar,
          styleSlider,
        ]}
      />
    </Layout>
  );
};

export default Ligne;

const styles = StyleSheet.create({
  container: {
    height: 6,
    borderRadius: 50,
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
