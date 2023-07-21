import { colors } from "../../common/colors";

function IconTrash(): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.273"
            height="20.834"
            viewBox="0 0 19.273 20.834"
        >
            <path
                id="Trazado_2710"
                data-name="Trazado 2710"
                d="M5.364-14.923a1.268,1.268,0,0,1,1.135-.7h4.777a1.268,1.268,0,0,1,1.135.7l.286.568H16.5a1.269,1.269,0,0,1,1.27,1.27,1.269,1.269,0,0,1-1.27,1.27H1.27A1.27,1.27,0,0,1,0-13.086a1.27,1.27,0,0,1,1.27-1.27H5.078Zm10.3,16.811a1.908,1.908,0,0,1-1.9,1.821H4.011a1.909,1.909,0,0,1-1.9-1.821L1.234-11.526H16.5Z"
                transform="translate(0.75 16.375)"
                fill="none"
                stroke={colors.error}
                strokeWidth="1.5"
            />
        </svg>
    );
}

export default IconTrash;
