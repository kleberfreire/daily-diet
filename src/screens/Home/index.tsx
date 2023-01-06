import {ButtonIcon} from '@components/Button';
import {Header} from '@components/Header';
import {DayList} from '@components/DayList';
import {StatusPercent} from '@components/StatusPercent';
import {FlatList} from 'react-native';
import {Container, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();
  function handleRedirectPercentPage() {
    navigation.navigate('percentPage');
  }

  function handleRedirectCreateMeal() {
    navigation.navigate('createMeal');
  }

  return (
    <Container>
      <Header />
      <StatusPercent onPress={handleRedirectPercentPage} />
      <Title>Refeições</Title>
      <ButtonIcon
        icon="add"
        title="Nova refeição"
        onPress={handleRedirectCreateMeal}
      />
      <FlatList
        keyExtractor={item => item}
        data={['12.02.22']}
        renderItem={item => <DayList />}
      />
    </Container>
  );
}
