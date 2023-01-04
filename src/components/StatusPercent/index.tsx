import {Highlight} from '@components/HighLight';
import {TouchableOpacityProps} from 'react-native';
import {ArrowTop, Container} from './styles';

type Props = TouchableOpacityProps & {
  onPress: () => void;
};

export function StatusPercent({...rest}: Props) {
  return (
    <Container {...rest}>
      <ArrowTop name="call-made" />
      {/* <Title>90,86%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle> */}
      <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
    </Container>
  );
}
