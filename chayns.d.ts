declare interface Group {
    id: number,
    isActive: boolean,
    isSystemGroup: boolean,
    name: string
}

declare interface Tapp {
    customUrl: string,
    id: number,
    internalName: string,
    isExclusiveView: boolean,
    isHiddenFromMenu: boolean,
    isSubTapp: boolean,
    showName: string,
    sortId: number,
    userGroupIds: number[]
}

declare interface Button {
    text: string,
    buttonType: number
}

declare interface DatePickerConfig {
    dateType: number,
    preselect?: Date,
    minDate?: Date,
    maxDate?: Date,
    minuteInterval?: number
}

declare interface SelectConfig {
    title: string,
    message?: string,
    quickfind?: boolean,
    multiselect?: boolean,
    buttons?: Button[],
    list: SelectListItem[]
}

declare interface SelectListItem {
    name: string,
    value: any,
    image: string,
    isSelected: boolean
}

declare interface SelectResultSelectionItem {
    name: string,
    value: any
}

declare interface InputConfig {
    title: string,
    message?: string,
    placeholderText?: string,
    text?: string,
    buttons: Button[]
}

declare interface JwtPayload {
    FirstName: string,
    LastName: string,
    IsAdmin: boolean,
    LocationID: number,
    PersonID: string,
    SiteID: string,
    TobitUserID: number,
    exp: string,
    iat: string,
    jti: string,
    sub: string,
    type: number
}

declare interface Chayns {
    env: {
        language: string,
        site: {
            color: string,
            colorMode: number,
            colorScheme: number,
            domain: string,
            facebookAppId: string,
            facebookPageId: string,
            font: number,
            id: string,
            locationId: number,
            locationPersonId: string,
            tapp: Tapp,
            tapps: Tapp[],
            title: string,
            url: string,
            version: string
        },
        user: {
            name: string,
            id: number,
            personId: string,
            isAdmin: boolean,
            isAuthenticated: boolean,
            tobitAccessToken: string,
            adminMode: boolean,
            groups: Group[]
        }
    },
    dialog: {
        alert: (title: string, message?: string) => Promise<number>,
        confirm: (title: string, message?: string, buttons?: Button[]) => Promise<number>,
        date: (config: DatePickerConfig) => Promise<number>,
        select: (config: SelectConfig) => Promise<{
            buttonType: number,
            selection: SelectResultSelectionItem[]
        }>,
        input: (config: InputConfig) => Promise<Button>
    },
    showWaitCursor: (text?: string, timeout?: number) => Promise<void>,
    hideWaitCursor: () => Promise<void>,
    utils: {
        getJwtPayload: (tobitAccessToken: string) => JwtPayload
    }
}


declare interface Window {
    chayns: Chayns
}

var chayns = window.chayns;