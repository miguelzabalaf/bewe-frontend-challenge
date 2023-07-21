export enum WhiteSpaceVariant {
    VERTICAL = 'vertical',
    HORIZONTAL = 'horizontal'
}

export interface WhiteSpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: WhiteSpaceVariant;
    space?: number;
}

export interface WhiteSpaceControllerOutputProps extends WhiteSpaceProps {

}