import {HeaderWithButtonBack} from '@components/HeaderWithButtonBack';
import {Highlight} from '@components/HighLight';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  TitleContent,
  Content,
  DataItem_100,
  TitleData,
  SubtitleData,
  ContainerDataMultipleItensRow,
  DataItem_50,
} from './styles';

export function PercentPage() {
  const navigation = useNavigation();

  function handleGoToHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <HeaderWithButtonBack handleGoToHome={handleGoToHome} type="SUCCESS" />
      <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      <Content>
        <TitleContent>Estatísticas gerais</TitleContent>
        <DataItem_100>
          <TitleData>4</TitleData>
          <SubtitleData>
            melhor sequência de pratos dentro da dieta
          </SubtitleData>
        </DataItem_100>
        <DataItem_100>
          <TitleData>109</TitleData>
          <SubtitleData>refeições registradas</SubtitleData>
        </DataItem_100>
        <ContainerDataMultipleItensRow>
          <DataItem_50 type="SUCCESS" positionIsLeft>
            <TitleData>32</TitleData>
            <SubtitleData>refeições dentro da dieta</SubtitleData>
          </DataItem_50>
          <DataItem_50 type="DANGER">
            <TitleData>1</TitleData>
            <SubtitleData>refeições fora da dieta</SubtitleData>
          </DataItem_50>
        </ContainerDataMultipleItensRow>
      </Content>
    </Container>
  );
}
