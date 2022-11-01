import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.3;
    }

    &:not(:disabled):hover {
        opacity: 0.6;
        transition: all .3s;
    }
`