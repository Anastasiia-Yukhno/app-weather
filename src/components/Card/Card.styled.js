import styled from 'styled-components'

export const CardItem = styled.div`
    padding: 30px;
    width: 20%;
    max-width: 200px;
    min-width: 180px;
    max-height: 250px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: #d0d2d6;
    border-radius: 10px;

    &:hover {
        background: rgba(193, 193, 193, 0.27);
        cursor: pointer;
    }
`
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
export const RemoveButton = styled.button`
    font-size: 25px;
    border: none;
    background: none;
    padding: 10px;
    color: rgba(52, 59, 57, 0.65);

    &:hover {
        color: rgba(0, 0, 0, 0.65);
        cursor: pointer;
    }
`

export const CityName = styled.div`
    font-size: 15px;
    padding: 10px;
    font-family: 'Lucida Sans Unicode';
    font-weight: bold;
    font-size: 16px;
    color: rgba(18, 59, 72, 0.69);
`
export const Humidity = styled.div`
    font-size: 15px;
    font-family: 'Lucida Sans Unicode';
`

export const Pressure = styled.div`
    font-size: 15px;
    font-family: 'Lucida Sans Unicode';
`
export const Weather = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    font-family: 'Lucida Sans Unicode';
`

export const WeatherDescription = styled.div`
    padding: 0 10px 10px;
`
export const WeatherImg = styled.img`
    max-width: 100px;
`

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 5px;
`
export const UpdateButton = styled.button`
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 20px;
    background: none;

    &:hover {
        cursor: pointer;
        background: rgba(213, 213, 213, 0.17);
    }
`
export const Temp = styled.div`
    padding: 5px 25px;
    font-size: 25px;
    font-family: 'Lucida Sans Unicode';
    color: rgba(56, 59, 58, 0.65);
`
