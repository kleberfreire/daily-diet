import {ButtonBack} from '@components/ButtonBack';
import {ButtonBackIconColors} from '@components/ButtonBack/styles';
import {Container, Title} from './styles';

type Props = {
  handleGoToHome: () => void;
  type?: ButtonBackIconColors;
  title?: string;
};

export function HeaderWithButtonBack({handleGoToHome, type, title}: Props) {
  return (
    <Container>
      <ButtonBack onPress={handleGoToHome} type={type} />
      {title && <Title>{title}</Title>}
    </Container>
  );
}
