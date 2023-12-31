import styled from "styled-components";
import { WhiteSpaceProps, WhiteSpaceVariant } from "./types";

export const StyledWhiteSpace = styled.div<WhiteSpaceProps>`
    width: ${ ({ variant, space }) => (variant === WhiteSpaceVariant.HORIZONTAL ? `${ space }px` : 'auto') };
    height: ${ ({ variant, space }) => (variant === WhiteSpaceVariant.HORIZONTAL ? 'auto' : `${ space }px`) };
    display: ${ ({ variant }) => (variant === WhiteSpaceVariant.HORIZONTAL ? 'flex' : 'block') };
`;