export interface Theme {
    readonly Primary_1: ThemeColor;
    readonly Text_Primary_1: ThemeColor;
    readonly Primary_1_Event: ThemeColor;
    readonly Text_Primary_1_Event: ThemeColor;
    readonly Option_Background_Primary_1: ThemeColor;
    readonly Option_Text_Primary_1: ThemeColor;

    readonly Primary_2: ThemeColor;
    readonly Text_Primary_2: ThemeColor;
    readonly Primary_2_Event: ThemeColor;
    readonly Text_Primary_2_Event: ThemeColor;
    readonly Option_Background_Primary_2: ThemeColor;
    readonly Option_Text_Primary_2: ThemeColor;

    readonly Primary_3: ThemeColor;
    readonly Text_Primary_3: ThemeColor;
    readonly Primary_3_Event: ThemeColor;
    readonly Text_Primary_3_Event: ThemeColor;
    readonly Option_Background_Primary_3: ThemeColor;
    readonly Option_Text_Primary_3: ThemeColor;

    readonly Primary_4: ThemeColor;
    readonly Text_Primary_4: ThemeColor;
    readonly Primary_4_Event: ThemeColor;
    readonly Text_Primary_4_Event: ThemeColor;
    readonly Option_Background_Primary_4: ThemeColor;
    readonly Option_Text_Primary_4: ThemeColor;

    readonly Primary_5: ThemeColor;
    readonly Text_Primary_5: ThemeColor;
    readonly Primary_5_Event: ThemeColor;
    readonly Text_Primary_5_Event: ThemeColor;
    readonly Option_Background_Primary_5: ThemeColor;
    readonly Option_Text_Primary_5: ThemeColor;

    readonly Focus_Shadow_Color: ThemeColor;
}

export interface ThemeColor {
    readonly cssPropertyName: string;
    readonly color: string;
}

export enum ComponentTypes {
    Primary_1 = 1,
    Primary_2 = 2,
    Primary_3 = 3,
    Primary_4 = 4,
    Primary_5 = 5
}