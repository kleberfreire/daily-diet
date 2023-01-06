import {Text, TouchableOpacityProps} from 'react-native';

import {BackButton, ButtonBackIconColors, Container, Icon} from './styles';

type Props = TouchableOpacityProps & {
  type?: ButtonBackIconColors;
};

export function ButtonBack({type, ...rest}: Props) {
  return (
    <Container>
      <BackButton {...rest}>
        <Text>
          <Icon name="arrow-back" type={type} />
        </Text>
      </BackButton>
    </Container>
  );
}
