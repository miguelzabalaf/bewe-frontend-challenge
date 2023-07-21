import { Icon } from "../../../assets/icons";
import Avatar from "../../atoms/Avatar";
import TouchableIcon from "../../atoms/TouchableIcon";
import Typography from "../../atoms/Typography";
import { TypographySize, TypographyWeight } from "../../atoms/Typography/types";
import WhiteSpace from "../../atoms/WhiteSpace";
import {
    StyledProfileInfoActionEdit,
    StyledProfileInfoWrapper,
} from "./styledComponents";
import { ProfileInfoControllerOutputProps } from "./types";

function View(props: ProfileInfoControllerOutputProps): JSX.Element {
    const { name, email, image, hideEditAction, handleEdit } = props;
    return (
        <StyledProfileInfoWrapper>
            {!hideEditAction && (
                <StyledProfileInfoActionEdit>
                    <TouchableIcon onClick={handleEdit}>
                        <Icon.IconEdit />
                    </TouchableIcon>
                </StyledProfileInfoActionEdit>
            )}
            <Avatar src={image} />
            <WhiteSpace space={12} />
            <Typography
                size={TypographySize.H2}
                weight={TypographyWeight.MEDIUM}
            >
                {name}
            </Typography>
            <WhiteSpace space={8} />
            <Typography
                size={TypographySize.NORMAL}
                weight={TypographyWeight.NORMAL}
            >
                {email}
            </Typography>
        </StyledProfileInfoWrapper>
    );
}

export default View;
