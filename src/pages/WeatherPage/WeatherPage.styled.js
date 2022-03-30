import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const CardContainer = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`
export const Wrapper = styled.div`
    background: #e8e8e8;
    min-height: 100vh;
`
export const InputCityName = styled.input`
    padding: 5px;
    border: none;
    line-height: 20px;
    font-size: 18px;
    max-width: 180px;
    &:focus,
    &:focus-visible {
        border: #bbcaca;
        outline: none;
    }
`
export const AddNewCity = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: stretch;
`
export const AddButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;
    margin-left: 10px;

    border: 1px solid #939393;

    background: #424242;
    color: aliceblue;
    font-size: 20px;

    &:hover {
        background: #a09f9f;
    }
`
