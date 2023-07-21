import { colors } from "../../common/colors";
import Typography from "../../components/atoms/Typography";
import {
    TypographyAlign,
    TypographySize,
    TypographyWeight,
} from "../../components/atoms/Typography/types";
import WhiteSpace from "../../components/atoms/WhiteSpace";
import { WhiteSpaceVariant } from "../../components/atoms/WhiteSpace/types";
import Screen from "../../components/organisms/Screen";

export function ExampleScreen() {
    return (
        <Screen>
            <Typography
                size={TypographySize.H1}
                weight={TypographyWeight.BOLD}
                color={colors.title}
            >
                Sing up
            </Typography>
            <br />
            <Typography
                size={TypographySize.SMALL}
                weight={TypographyWeight.NORMAL}
                color={colors.text}
                align={TypographyAlign.LEFT}
            >
                By Creating account You agree to the{" "}
                <Typography
                    size={TypographySize.SMALL}
                    weight={TypographyWeight.NORMAL}
                    color={colors.primary}
                >
                    Terms of use
                </Typography>{" "}
                and{" "}
                <Typography
                    size={TypographySize.SMALL}
                    weight={TypographyWeight.NORMAL}
                    color={colors.primary}
                >
                    Privacy Polycy
                </Typography>
            </Typography>
            <br />
            <Typography
                size={TypographySize.H2}
                weight={TypographyWeight.MEDIUM}
            >
                Jeff Brown
            </Typography>
            <br />
            <Typography size={TypographySize.NORMAL}>
                jeff.brown@example.com
            </Typography>
            <br />
            <Typography
                size={TypographySize.NORMAL}
                weight={TypographyWeight.BOLD}
                color={colors.primary}
            >
                www.url.com
            </Typography>
            <WhiteSpace space={100} variant={WhiteSpaceVariant.VERTICAL} />
            <Typography
                size={TypographySize.NORMAL}
                weight={TypographyWeight.BOLD}
                color={colors.primary}
            >
                www.url.com
            </Typography>
        </Screen>
    );
}
