import Button from "../../components/atoms/Button";
import { ButtonSize, ButtonVariant } from "../../components/atoms/Button/types";
import Header from "../../components/organisms/Header";

export function ExampleScreen() {
    return (
        <>
            <Header />
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
