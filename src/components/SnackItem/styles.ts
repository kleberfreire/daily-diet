import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export type StatusTypeProps = 'SUCCESS' | 'DANGER';

type StatusProps = {
  type: StatusTypeProps;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 15px 10px;
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
`;

export const Hours = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_1};
`;

export const Divider = styled(MaterialIcons).attrs(({theme}) => ({
  size: 22,
  color: theme.COLORS.GRAY_4,
}))`
  transform: rotate(90deg);
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_2};
  flex: 1;
`;

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  background-color: ${({theme, type}) =>
    type === 'SUCCESS' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};

  border-radius: 7px;
`;
