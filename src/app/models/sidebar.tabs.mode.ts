export enum SideBarTabs {
    ADD_USER = "adduser",
    ADD_MENU = "addmenu",
    ORDERS = "orders",
}

export const tabs: {label: string; tab:string;}[]  = [
    {label: "Add User", tab: SideBarTabs.ADD_USER},
    {label: "Add Menu", tab: SideBarTabs.ADD_MENU}
]
