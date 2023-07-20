import styled from "styled-components";
import { ButtonControllerOutputProps, ButtonSize, ButtonVariant } from "./types";
import { colors } from "../../../common/colors";

export const ButtonWrapper = styled.button<ButtonControllerOutputProps>`
    border: ${ ({ variant }) => variant === ButtonVariant.OUTLINE ? `1px solid ${ colors.primary }` : 'none' };
    background-color: ${ ({ variant }) => variant === ButtonVariant.OUTLINE ? 'transparent' : colors.primary };
    width: 100%;
    padding: ${ ({ size }) => size === ButtonSize.SMALL ? '10px' : '15px' };
    border-radius: ${ ({ size }) => size === ButtonSize.SMALL ? '4px' : '7px' };
    color: ${ ({ variant }) => variant === ButtonVariant.OUTLINE ? colors.primary : colors.white };
    font-size: ${ ({ size }) => size === ButtonSize.SMALL ? '10px' : '18px' };
    font-weight: ${ ({ size }) => size === ButtonSize.SMALL ? '600' : '500' };
    text-transform: uppercase;
    user-select: none;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
    &:active {
        opacity: 0.8;
    }
    &:disabled {
        opacity: 0.5;
    }
    & * {
        user-select: none;
    }
`;