import { ComponentTypes } from "../Themes/Theme";

export interface FontWeight {
    fontWeight?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "bold" | "normal" | (number & {}) | "bolder" | "lighter" | undefined;
}

export interface ComponentType {
    type?: ComponentTypes;
}