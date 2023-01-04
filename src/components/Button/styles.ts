import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  max-height: 50px;
  min-height: 50px;

  border-radius: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_2};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 12px;
`;
