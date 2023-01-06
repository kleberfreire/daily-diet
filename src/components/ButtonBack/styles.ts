import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export type ButtonBackIconColors = 'SUCCESS' | 'DANGER';

type IconProps = {
  type?: ButtonBackIconColors;
};

export const Container = styled.View`
  /* padding: 0 24px; */
`;

export const BackButton = styled(TouchableOpacity)`
  width: 40px;
  height: 24px;
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(({theme, type}) => ({
  size: 24,
  // color: type === 'SUCCESS' ? theme.COLORS.GREEN_DARK :  theme.COLORS.RED_DARK,
  color: (function colorType() {
    switch (type) {
      case 'SUCCESS':
        return theme.COLORS.GREEN_DARK;
      case 'DANGER':
        return theme.COLORS.RED_DARK;
      default:
        return theme.COLORS.GRAY_2;
    }
  })(),
}))<IconProps>``;
