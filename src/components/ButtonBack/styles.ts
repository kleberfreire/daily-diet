import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
`;

export const BackButton = styled(TouchableOpacity)`
  width: 40px;
  height: 24px;
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
  size: 24,
  name: 'arrow-back',
  color: theme.COLORS.GREEN_DARK,
}))``;
