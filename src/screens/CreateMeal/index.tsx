import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {HeaderWithButtonBack} from '@components/HeaderWithButtonBack';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ContainerInput_50,
  ContainerMultiplesInput,
  InputDescription,
  Content,
  Label,
  Input,
} from './styles';
import {formatDatePT_BR, formatTimePT_BR_24hr} from '@utils/formatDateTime';

export function CreateMeal() {
  const navigation = useNavigation();
  const [dateValue, setDateValue] = useState<Date>(new Date());
  const [timeValue, setTimeValue] = useState<Date>(new Date());
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [openData, setOpenData] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  function handleGoToHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <HeaderWithButtonBack
        handleGoToHome={handleGoToHome}
        title="Nova refeição"
      />
      <Content>
        <Label>Nome</Label>
        <Input />
        <Label>Descrição</Label>
        <InputDescription />
        <ContainerMultiplesInput>
          <ContainerInput_50 isLeft>
            <Label>Data</Label>
            <Input
              keyboardType="numeric"
              showSoftInputOnFocus={false}
              onPressIn={() => {
                setOpenData(true);
              }}
              onChangeText={() => {}}
              value={formatDatePT_BR(dateValue)}
            />
            <DatePicker
              modal
              mode="date"
              open={openData}
              date={date}
              locale="pt-BR"
              onConfirm={d => {
                console.log(d);
                setOpenData(false);
                setDateValue(d);
                setDate(d);
              }}
              onCancel={() => {
                setOpenData(false);
              }}
            />
          </ContainerInput_50>
          <ContainerInput_50>
            <Label>Hora</Label>
            <Input
              keyboardType="numeric"
              showSoftInputOnFocus={false}
              onPressIn={() => {
                setOpenTime(true);
              }}
              onChangeText={() => {}}
              value={formatTimePT_BR_24hr(timeValue)}
            />
            <DatePicker
              modal
              mode="time"
              open={openTime}
              date={time}
              locale="pt-BR"
              is24hourSource={'locale'}
              onConfirm={t => {
                setOpenTime(false);
                setTime(t);
                setTimeValue(t);
              }}
              onCancel={() => {
                setOpenTime(false);
              }}
            />
          </ContainerInput_50>
        </ContainerMultiplesInput>
      </Content>
    </Container>
  );
}
