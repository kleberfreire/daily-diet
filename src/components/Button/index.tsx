import {TouchableOpacityProps} from 'react-native';
import {Container, Icon, Title} from './styles';
import {MaterialIconsIconsTypes} from './types/materialIconsIconsList';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: MaterialIconsIconsTypes;
};

export function ButtonIcon({icon, title, ...rest}: Props) {
  return (
    <Container {...rest}>
      {icon && <Icon name={icon} />}
      <Title>{title}</Title>
    </Container>
  );
}
