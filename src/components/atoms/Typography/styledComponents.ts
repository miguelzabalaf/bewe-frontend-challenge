import styled from "styled-components";
import { TypographyAlign, TypographyProps, TypographySize, TypographyWeight } from "./types";
import { colors } from "../../../common/colors";

export const StyledTypographyWrapper = styled.span<TypographyProps>`
    display: inline-block;
    font-size: ${ ({ size }) => size ?? TypographySize.NORMAL };
    color: ${ ({ color }) => color ?? colors.text };
    font-weight: ${ ({ weight }) => weight ?? TypographyWeight.NORMAL };
    text-align: ${ ({ align }) => align ?? TypographyAlign.LEFT };
`;