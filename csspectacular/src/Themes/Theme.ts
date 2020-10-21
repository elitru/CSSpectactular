export interface Theme {
    readonly TestColor: ThemeColor;
}

export interface ThemeColor {
    readonly cssPropertyName: string;
    readonly color: string;
}