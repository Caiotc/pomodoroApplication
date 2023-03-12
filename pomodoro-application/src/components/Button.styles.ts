import styled,{css} from "styled-components";


export type ButtonVariant = 'primary' |'secondary'|'danger' | 'success';

interface ButtonConainerProps{
    variant:ButtonVariant;
}

const ButtonVariants = {
    primary:'purple',
    secondary:'orange',
    danger:'red',
    success:'green'
}

export const ButtonContainer = styled.button<ButtonConainerProps>`
    width: 100px;
    height: 40px;
    background-color: ${({theme}) => theme.secondary};

    /* ${({variant}) => css`background-color:${ButtonVariants[variant]}`} */
`;