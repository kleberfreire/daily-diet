import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_1};
  margin-bottom: 8px;
  margin-top: 30px;
`;
