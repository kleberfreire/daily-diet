import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
`;

export const Title = styled.Text`
  flex: 1;
  margin-right: 40px;
  text-align: center;

  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.GRAY_1};
`;
