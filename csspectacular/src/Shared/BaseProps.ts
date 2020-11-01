import { ComponentTypes } from "../Themes/Theme";

export interface IWithId {
    id?: string;
}

export interface IFontWeight {
    fontWeight?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "bold" | "normal" | (number & {}) | "bolder" | "lighter" | undefined;
}

export interface IComponentType {
    type?: ComponentTypes;
}

export interface IDisabled {
    disabled?: boolean;
}