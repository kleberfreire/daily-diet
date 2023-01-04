import {Text, TouchableOpacityProps} from 'react-native';

import {BackButton, Container, Icon} from './styles';

type Props = TouchableOpacityProps & {};

export function ButtonBack({...rest}: Props) {
  return (
    <Container>
      <BackButton {...rest}>
        <Text>
          <Icon />
        </Text>
      </BackButton>
    </Container>
  );
}
