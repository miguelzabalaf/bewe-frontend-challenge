import { Icon } from "../../../assets/icons";
import TouchableIcon from "../../atoms/TouchableIcon";
import Typography from "../../atoms/Typography";
import { TypographySize, TypographyWeight } from "../../atoms/Typography/types";
import {
    StyledNavTopGoBackWrapper,
    StyledNavTopTitleWrapper,
    StyledNavTopWrapper,
} from "./styledComponents";
import { NavTopProps } from "./types";

function View(props: NavTopProps): JSX.Element {
    const { title, handleGoBack } = props;
    return (
        <StyledNavTopWrapper>
            <StyledNavTopGoBackWrapper>
                <TouchableIcon onClick={handleGoBack}>
                    <Icon.IconBack />
                </TouchableIcon>
            </StyledNavTopGoBackWrapper>
            <StyledNavTopTitleWrapper>
                <Typography
                    weight={TypographyWeight.BOLD}
                    size={TypographySize.H1}
                >
                    {title}
                </Typography>
            </StyledNavTopTitleWrapper>
        </StyledNavTopWrapper>
    );
}

export default View;
