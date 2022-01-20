import styled from 'styled-components'

export const CardContainer = styled.div`
    padding: 0 25px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
`
export const Wrapper = styled.div`
    background: #e8e8e8;
    min-height: 100vh;
`
export const AddNewCity = styled.div`
    display: flex;
    padding: 20px;
`
export const InputCityName = styled.input``
export const AddButton = styled.button`
    max-width: 15px;
    max-height: 15px;

    padding: 10px;
    margin-left: 10px;

    border-radius: 15px;
    border: 1px solid #939393;

    background: #424242;
    color: aliceblue;
    font-size: 20px;

    &:hover {
        background: #a09f9f;
    }
`
