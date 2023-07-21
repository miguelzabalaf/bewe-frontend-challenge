import { Link } from "wouter";
import { Icon } from "../../../assets/icons";
import { colors } from "../../../common/colors";
import TouchableIcon from "../TouchableIcon";
import Typography from "../Typography";
import { TypographySize, TypographyWeight } from "../Typography/types";
import {
    StyledLinkItemContent,
    StyledLinkItemHeader,
    StyledLinkItemHeaderUrl,
    StyledLinkItemWrapper,
} from "./styledComponents";
import { LinkItemControllerOutputProps } from "./types";

function View(props: LinkItemControllerOutputProps): JSX.Element {
    const { name, url, onDelete } = props;
    return (
        <StyledLinkItemWrapper>
            <StyledLinkItemHeader>
                <StyledLinkItemHeaderUrl>
                    <Link href={url ?? ""} target="_black">
                        <Typography
                            size={TypographySize.MEDIUM}
                            weight={TypographyWeight.MEDIUM}
                            color={colors.primary}
                        >
                            {url}
                        </Typography>
                    </Link>
                </StyledLinkItemHeaderUrl>
                <TouchableIcon onClick={onDelete}>
                    <Icon.IconTrash />
                </TouchableIcon>
            </StyledLinkItemHeader>
            <StyledLinkItemContent>
                <Typography size={TypographySize.NORMAL}>{name}</Typography>
            </StyledLinkItemContent>
        </StyledLinkItemWrapper>
    );
}

export default View;
