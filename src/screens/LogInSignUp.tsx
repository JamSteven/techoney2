import * as React from 'react';
import {FlatList} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StyleService, useStyleSheet, Button} from '@ui-kitten/components';
import {Container, Text} from 'components';
import {RootStackParamList} from 'navigation/navigation-types';

interface SplashButtonProps {
  name: string;
  navigate?: keyof RootStackParamList;
}

const LogInSignUp = React.memo(() => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const styles = useStyleSheet(themedStyles);

  const data: SplashButtonProps[] = [

    {name: 'Home', navigate: 'Health'},

  ];

  return (
    <Container style={styles.container}>
      <Text category="h1" center marginBottom={32}>
        {`\n🍯 non pas là`}
      </Text>
      <FlatList
        data={data}
        contentContainerStyle={styles.content}
        renderItem={({item}) => {
          return (
            <Button
              disabled={!item.navigate}
              children={item.name}
              style={styles.button}
              onPress={() => {
                item.navigate && navigate(item.navigate);
              }}
            />
          );
        }}
      />

      
    </Container>
  );
});

export default LogInSignUp;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  button: {
    marginBottom: 24,
  },
  content: {
    paddingHorizontal: 24,
  },
});
