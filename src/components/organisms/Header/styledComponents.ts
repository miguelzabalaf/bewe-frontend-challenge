import styled from "styled-components";
import { HeaderProps } from "./types";

export const StyledHeaderWrapper = styled.header<HeaderProps>`
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledHeaderLogoWrapper = styled.div`
    min-width: 100px;
`;

export const StyledHeaderActionWrapper = styled.div`
    width: 100px;
`;