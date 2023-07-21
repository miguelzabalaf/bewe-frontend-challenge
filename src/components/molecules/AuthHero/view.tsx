import { Image } from "../../../assets/images";
import Typography from "../../atoms/Typography";
import { TypographySize, TypographyWeight } from "../../atoms/Typography/types";
import WhiteSpace from "../../atoms/WhiteSpace";
import {
    StyledAuthHeroLogoWrapper,
    StyledAuthHeroWrapper,
} from "./styledComponents";
import { AuthHeroProps } from "./types";

function View(props: AuthHeroProps): JSX.Element {
    const { title } = props;
    return (
        <StyledAuthHeroWrapper>
            <WhiteSpace space={50} />
            <StyledAuthHeroLogoWrapper>
                <Image.LogoMain />
            </StyledAuthHeroLogoWrapper>
            <WhiteSpace space={50} />
            <Typography size={TypographySize.H1} weight={TypographyWeight.BOLD}>
                {title}
            </Typography>
        </StyledAuthHeroWrapper>
    );
}

export default View;
