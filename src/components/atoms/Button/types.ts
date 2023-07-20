export enum ButtonVariant {
    SOLID = 'solid',
    OUTLINE = 'outline'
}

export enum ButtonSize {
    NORMAL = 'normal',
    SMALL = 'small'
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
}

export interface ButtonControllerOutputProps extends ButtonProps {

}