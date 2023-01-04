import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  padding: 24px;
`;

export const Title = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;
  color: ${({theme}) => theme.COLORS.GRAY_1};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;
