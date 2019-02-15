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
    parent: Tapp,
    userGroupIds: number[]
}

declare interface User {
    name: string,
    id: number,
    personId: string,
    isAdmin: boolean,
    isAuthenticated: boolean,
    tobitAccessToken: string,
    adminMode: boolean,
    groups: Group[]
}

declare interface Site {
    color: string,
    colorMode: number,
    colorScheme: number,
    domain: string,
    facebookAppId: string,
    facebookPageId: string,
    font: number,
    id: string,
    isAdEnabled: boolean,
    isArEnabled: boolean,
    locationId: number,
    locationPersonId: string,
    tapp: Tapp,
    tapps: Tapp[],
    title: string,
    url: string,
    version: string
}

declare interface App {
    flavor: string,
    fontScale: number,
    languageId: number,
    model: string,
    name: string,
    version: string,
    uid: string
}

declare interface Device {
    languageId: number,
    imei: string,
    systemName: string,
    model: string,
    uid: string,
    minLogLevel: number,
    dFaceVersion: number
}

declare interface Browser {
    name: string,
    version: string,
    supportsWebP: boolean
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

declare interface FinderResultStatus {
    Exception: any,
    ResultCode: number,
    ResultText: string
}

declare interface Chayns {
    env: {
        app: App,
        apiVersion: number,
        appVersion: number,
        browser: Browser,
        device: Device,
        isAndroid: boolean,
        isApp: boolean,
        isBrowswer: boolean,
        isChaynsParent: boolean,
        isChaynsWeb: boolean,
        isChaynsWebDesktop: boolean,
        isChaynsWebMobile: boolean,
        isChaynsnetRuntime: boolean,
        isDesktop: boolean,
        isIOS: boolean,
        isInFacebookFrame: boolean,
        isInFrame: boolean,
        isMobile: boolean,
        isMyChaynsApp: boolean,
        isTablet: boolean,
        isWP: boolean,
        isWidget: boolean,
        language: string,
        os: string,
        parameters: object,
        site: Site,
        user: User
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
    utils: {
        getJwtPayload: (tobitAccessToken: string) => JwtPayload,
        colors: {
            get: (saturation: number, color: string) => string,
            mix: (color1: string, color2: string, saturation: number) => string
        },
        getScaledImageUrl: (url: string, height?: number, width?: number, preventWebP?: boolean) => string
    },
    ready: Promise<{
        user: User,
        site: Site,
        isInFacebokkFrame: boolean,
        device: Device,
        app: App
    }>,
    showWaitCursor: (text?: string, timeout?: number) => Promise<void>,
    hideWaitCursor: () => Promise<void>,
    getGeoLocation: () => Promise<{
        longitude: number,
        latitude: number
    }>,
    login: (parameters: string[]) => Promise<{
        loginState: number
    }>,
    logout: (logoutType: number) => Promise<void>,
    addAccessTokenChangeListener: (callback: Function) => boolean,
    removeAccessTokenChangeListener: (callback: Function) => boolean,
    activateAdminMode: () => void,
    deactivateAdminMode: () => void,
    addAdminSwitchListener: (callback: Function) => boolean,
    removeAdminSwitchListener: (callback: Function) => boolean,
    allowRefreshScroll: () => void,
    disallowRefreshScroll: () => void,
    scanQRCode: (cameraType: number, timeout: number) => Promise<string>,
    cancelScanQRCode: () => void,
    createQRCode: (text: string) => Promise<string>,
    navigateBack: () => void,
    intercom: {
        sendMessageToUser: (userId: string, config: { text: string }) => Promise<Response>,
        sendMessageToGroup: (groupId: string, config: { text: string }) => Promise<Response>,
        sendMessageToPage: (config: { text: string }) => Promise<Response>,
    },
    findSite: (name: string, skip?: number, take?: number) => Promise<{
        Status: FinderResultStatus,
        Value: [{
            appstoreName: string,
            facebookId: string,
            locationId: number,
            siteId: string
        }]
    }>,
    findPerson: (name: string, skip?: number, take?: number) => Promise<{
        Status: FinderResultStatus,
        Value: [{
            name: string,
            facebookId: string,
            currentLocationId: number,
            lastLoginTime: string,
            personId: string,
            userId: number
        }]
    }>
}

interface  Window {
    chayns: Chayns
}

var chayns = window.chayns;