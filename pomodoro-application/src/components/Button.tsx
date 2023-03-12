import { ButtonContainer,ButtonVariant } from "./Button.styles";

interface ButtonProps{
    variant?:ButtonVariant;
}

export function Button(props:ButtonProps){

    const {variant = 'primary'} = props;
    
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}