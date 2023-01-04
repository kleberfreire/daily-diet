import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Logo = styled.Image`
  max-height: 37px;
`;

export const AccountImage = styled(MaterialIcons).attrs(({theme}) => ({
  size: 40,
  color: theme.COLORS.GRAY_2,
}))``;
