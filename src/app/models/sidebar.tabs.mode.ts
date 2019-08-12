export enum SideBarTabs {
    ADD_USER = "adduser",
    ADD_MENU = "addmenu",
    ORDERS = "orders",
    PENDING_REQUESTS = "pandingrequests"
}

export class SideTabModel{
    label: string; 
    tab: string; 
    icon: string; 
    title: string; 
    description: string;

}

export const tabs: SideTabModel[]  = [
    {label: "Menu Items", tab: SideBarTabs.ADD_MENU, icon: "note_add", title: "Menu Items", description: "Item List"},
    {label: "Add User", tab: SideBarTabs.ADD_USER, icon: "group_add", title: "Add User", description: "Add user to the restaurant"}
]

export const adminTabs: SideTabModel[]  = [
    {label: "Pending Requests", tab: SideBarTabs.PENDING_REQUESTS, icon: "import_export", title: "Pending Requests", description: "Pending Restaurant Requests"},
]
