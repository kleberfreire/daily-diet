import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type colorTypeContainerData = 'SUCCESS' | 'DANGER';

type ContainerDataPros = {
  type: colorTypeContainerData;
  positionIsLeft?: boolean;
};

export const Container = styled(SafeAreaView)`
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
  padding-top: 24px;
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 30px;
  padding: 33px 24px 0 24px;
`;

export const TitleContent = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_1};
  margin-bottom: 23px;
`;

export const DataItem_100 = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_6};
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const ContainerDataMultipleItensRow = styled.View`
  flex-direction: row;
`;

export const DataItem_50 = styled.View<ContainerDataPros>`
  flex: 1;
  background-color: ${({theme, type}) =>
    type === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  padding: 16px;
  border-radius: 8px;
  margin-right: ${({positionIsLeft}) => (positionIsLeft ? 16 : 0)}px;
`;

export const TitleData = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.GRAY_1};
  text-align: center;
`;
export const SubtitleData = styled.Text`
  margin-top: 4px;
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_1};
  text-align: center;
`;
