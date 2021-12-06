import {
  Container,
  Content,
  SubTitle,
  Title,
  Section,
  ContainerLeft,
  ContainerRight,
  Text,
  Details,
  Buttons,
  PlayButton,
  TrailerButton,
  ContainerBrightnes,
} from "./appStyles";
import CapaImg from "./assets/img/capa.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";

export function App() {
  return (
    <Container>
      <ContainerBrightnes>
        <Content>
          <SubTitle>ESTÁ DISPONÍVEL AGORA!</SubTitle>
          <Title>LOKI</Title>
          <Section>
            <ContainerLeft>
              <img src={CapaImg} alt="capa" />
            </ContainerLeft>
            <ContainerRight>
              <Text>
                Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom
                Hiddleston) retoma seu papel como o Deus do Mal em uma nova
                série que ocorre após os eventos de “Vingadores: Endgame”.{" "}
              </Text>
              <Details>
                <p>
                  <MdAccessTime /> 51min
                </p>
                <div>
                  <AiFillStar size={33} color="#FFA800" />
                  <AiFillStar size={33} color="#FFA800" />
                  <AiFillStar size={33} color="#FFA800" />
                  <AiFillStar size={33} color="#FFA800" />
                  <AiOutlineStar size={33} color="#fff" />
                </div>
                <p>2021</p>
              </Details>
              <Buttons>
                <PlayButton>ASSISTIR AGORA</PlayButton>
                <TrailerButton>TRAILER</TrailerButton>
              </Buttons>
            </ContainerRight>
          </Section>
        </Content>
      </ContainerBrightnes>
    </Container>
  );
}
