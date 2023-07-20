import Button from "../../components/atoms/Button";
import { ButtonSize, ButtonVariant } from "../../components/atoms/Button/types";

export function ExampleScreen() {
    return (
        <>
            <h1>Example Screen</h1>
            <Button>ADD</Button>
            <Button variant={ButtonVariant.OUTLINE} size={ButtonSize.SMALL}>
                Logout
            </Button>
            <Button disabled>ADD</Button>
            <Button
                disabled
                variant={ButtonVariant.OUTLINE}
                size={ButtonSize.SMALL}
            >
                Logout
            </Button>
        </>
    );
}
