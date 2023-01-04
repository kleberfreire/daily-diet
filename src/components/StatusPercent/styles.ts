import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`;

export const ArrowTop = styled(MaterialIcons).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`;
