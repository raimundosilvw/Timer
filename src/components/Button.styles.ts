import styled, { css } from 'styled-components';
 
export type ButtonVarient = 'primary' | 'secondary' |   'danger' | 'success';

interface ButtonContainerProps{
    varient: ButtonVarient ;
}

const buttonVarient = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success:'green'
};

export const ButtonContainer = styled.button <ButtonContainerProps>`

    width:100px;
    height:40px;

    background-color: ${props => props.theme.primary}
    /*
    ${props => {
        return css`background-color: ${buttonVarient[props.varient]}`
    }}
        */
`