export enum SideBarTabs {
    ADD_USER = "adduser",
    ADD_MENU = "addmenu",
    ORDERS = "orders",
}

export class SideTabModel{
    label: string; 
    tab: string; 
    icon: string; 
    title: string; 
    description: string;

}

export const tabs: SideTabModel[]  = [
    {label: "Add User", tab: SideBarTabs.ADD_USER, icon: "group_add", title: "Add User", description: "Add user to the restaurant"},
    {label: "Add Menu", tab: SideBarTabs.ADD_MENU, icon: "note_add", title: "Add Menu", description: "Add food menu"}
]
