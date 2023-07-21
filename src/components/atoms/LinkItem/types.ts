import { Link } from "../../../domain/entities/link";

export interface LinkItemProps extends Link {
    onDelete: () => void;
}

export interface LinkItemControllerOutputProps extends LinkItemProps {

}