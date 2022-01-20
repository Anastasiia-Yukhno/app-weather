import styled from "styled-components";

export const Wrapper = styled.div`
  background: url("https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") no-repeat center center fixed;
  background-size: cover;
  min-height: 800px;
  padding-top: 150px;
`
export const Card = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: rgb(207, 209, 204);
  opacity: 0.8;
  max-width: 600px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`
export const CityName = styled.div`
  font-size: 23px;
  align-self: flex-start;
  font-family: "Lucida Sans Unicode";
  color: rgb(37, 29, 29);
  padding: 20px;
  
`
export const Temp = styled.div`
  font-size: 15px;
  padding: 5px 20px;

`
export const Humidity = styled.div`
  padding: 5px 20px;

`