import styled from "styled-components";

export const CardItem = styled.div`
  padding: 30px;
  width: 20%;
  max-width: 200px;
  min-width: 130px;
  max-height: 250px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #d0d2d6;
  border-radius: 10px;

  &:hover {
    background: rgba(207, 209, 204, 0.27);
    cursor: pointer;
  }
`

export const CityName = styled.div`
  font-size: 15px;
  padding: 10px;
  font-family: "Lucida Sans Unicode";
  font-weight: bold;
  font-size: 16px;
  color: rgba(18,59,72,0.69);
`

export const Temp = styled.div`
  padding: 5px;
  align-self: center;
  font-size: 25px;
  font-family: "Lucida Sans Unicode";

`

export const Humidity = styled.div`
  font-size: 15px;
  font-family: "Lucida Sans Unicode";

`
export const Pressure = styled.div`
  font-size: 15px;
  font-family: "Lucida Sans Unicode";

`

export const Weather = styled.div`
  align-self: flex-start;
  font-size: 15px;
  font-family: "Lucida Sans Unicode";
`
export const WeatherDescription = styled.div`
  padding:0 10px 10px;
  `

export const WeatherImg = styled.img`
    max-width: 100px`