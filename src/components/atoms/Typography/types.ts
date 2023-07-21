export enum TypographySize {
    H1 = '25px',
    H2 = '20px',
    MEDIUM = '18px',
    NORMAL = '16px',
    SMALL = '12px',
}

export enum TypographyWeight {
    BOLD = 'bold',
    NORMAL = 'normal',
    MEDIUM = '500',
}

export enum TypographyAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}


export interface TypographyProps extends React.ButtonHTMLAttributes<HTMLSpanElement> {
    color?: string;
    size?: TypographySize;
    weight?: TypographyWeight;
    align?: TypographyAlign;
}

export interface TypographyControllerOutputProps extends TypographyProps {

}