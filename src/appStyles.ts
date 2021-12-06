import styled from "styled-components";
import BgImg from "./assets/img/fundo.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BgImg});
  background-size: cover;
`;

export const ContainerBrightnes = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 980px;
  height: 720px;
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 35px;
`;

export const Title = styled.h1`
  font-size: 96px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 121px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 73px;
`;

export const ContainerLeft = styled.div`
  width: 20%;

  img {
    height: 267px;
    border-radius: 20px;
  }
`;

export const ContainerRight = styled.div`
  width: 80%;
`;

export const Text = styled.div`
  color: #fff;
  font-size: 20px;
  line-height: 36px;
  margin-bottom: 42px;
`;

export const Details = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  p {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
  }

  div {
    display: flex;
    gap: 15px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 21px;
`;

export const PlayButton = styled.button`
  width: 184px;
  height: 52px;
  background-color: #0072d2;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

export const TrailerButton = styled.button`
  width: 115px;
  height: 52px;
  background-color: #131318;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1.5px;
  border: 1px solid #fff;
`;
