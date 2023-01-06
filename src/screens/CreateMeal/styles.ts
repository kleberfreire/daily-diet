import {TextInput} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type ContainerTextInput_50Props = {
  isLeft?: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: 24px;
  background-color: ${({theme}) => theme.COLORS.GRAY_5};
`;

export const Content = styled.View`
  padding: 24px;
  margin-top: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  flex: 1;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_2};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  margin-bottom: 4px;
`;

const TextInputBase = styled(TextInput)`
  padding: 13px;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};

  width: 100%;

  color: ${({theme}) => theme.COLORS.GRAY_1};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;

  margin-bottom: 24px;
`;

export const Input = styled(TextInputBase)``;

export const InputDescription = styled(TextInputBase).attrs(() => ({
  textAlignVertical: 'top',
}))`
  height: 120px;
`;

export const ContainerMultiplesInput = styled.View`
  flex-direction: row;
`;
export const ContainerInput_50 = styled.View<ContainerTextInput_50Props>`
  flex: 1;
  margin-right: ${({isLeft}) => (isLeft ? 20 : 0)}px;
`;

export const DataInput = styled(DatePicker)`
  padding: 13px;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};

  width: 100%;

  color: ${({theme}) => theme.COLORS.GRAY_1};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;

  margin-bottom: 24px;
`;
