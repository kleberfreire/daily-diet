import {TouchableOpacityProps} from 'react-native';
import {
  Container,
  Divider,
  Hours,
  Status,
  StatusTypeProps,
  Title,
} from './styles';

type Props = TouchableOpacityProps & {
  type?: StatusTypeProps;
  title: string;
};

export function SnackItem({type = 'SUCCESS', title, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Hours>20:00</Hours>
      <Divider name="horizontal-rule" />
      <Title>{title}</Title>
      <Status type={type} />
    </Container>
  );
}
