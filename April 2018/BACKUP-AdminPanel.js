import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
    AdminDashboard, 
    AdminUser, 
    AdminUserCreate,
    AdminUserSettings,
    AdminVendor,
    AdminVendorCreate,
    AdminMember,
    AdminCard,
    AdminCardCreate,
    AdminAccess,
    AdminAccessCreate,
    AdminStore,
    AdminStoreCreate,
    AdminReport,
    AdminLogout,
    AdminSetting,
    AdminStoreCashierTopUp,
    AdminStoreCashierNewCard,
    AdminStoreCashierRefund,
    AdminStoreCashierReport,
    AdminStoresMenu,
    AdminStoresMenuCreate,
    AdminStoresEmployee,
    AdminStoresEmployeeCreate,
    AdminStoresReport,
    AdminTransaction
} from '../../Admin';

import NoMatch from '../NoMatch';
import { AdminPanelView } from '../AdminPanel';

class AdminPanel extends Component {    
    constructor(props) {

        super(props);
        this.state = {
            routes: {},
            menus: {}
        }

        this.renderMenu = this.renderMenu.bind(this);
    }

    componentWillMount = () => {
        this.renderMenu();
    }

    renderMenu = () => {
        const {routes, menus} = this.state;
        
        let menu = JSON.parse(localStorage.getItem('userData')).module;
        let mainRoute = {};

        if(menu[0].group === 'admin') {
            let routePage = [
                { name: 'dashboard', path: `${this.props.match.url}`, component: AdminDashboard },
                { name: 'user', path: `${this.props.match.url}/user`, component: AdminUser },
                { name: 'create-user', path: `${this.props.match.url}/user/create-new-user`, component: AdminUserCreate },
                { name: 'user-settings', path: `${this.props.match.url}/user/settings`, component: AdminUserSettings },
                { name: 'vendor', path: `${this.props.match.url}/vendor`, component: AdminVendor },           
                { name: 'create-new-vendor', path: `${this.props.match.url}/vendor/create-new-vendor`, component: AdminVendorCreate },
                { name: 'member', path: `${this.props.match.url}/member`, component: AdminMember },
                { name: 'card', path: `${this.props.match.url}/card`, component: AdminCard },
                { name: 'create-new-card', path: `${this.props.match.url}/card/create-new-card`, component: AdminCardCreate },
                { name: 'access', path: `${this.props.match.url}/access`, component: AdminAccess },
                { name: 'create-new-access', path: `${this.props.match.url}/access/create-new-access`, component: AdminAccessCreate },
                { name: 'store', path: `${this.props.match.url}/store`, component: AdminStore },
                { name: 'create-new-store', path: `${this.props.match.url}/store/create-new-store`, component: AdminStoreCreate },
                { name: 'report', path: `${this.props.match.url}/report`, component: AdminReport },
                { name: 'logout', path: `${this.props.match.url}/logout`, component: AdminLogout },
                { name: 'setting', path: `${this.props.match.url}/setting`, component: AdminSetting },
                { component: NoMatch }
            ];
            mainRoute = routePage;

        } else if (menu[0].group === 'kasir') {
            let routePage = [
                { name: 'topup', path: `${this.props.match.url}/topup`, component: AdminStoreCashierTopUp },
                { name: 'new-card', path: `${this.props.match.url}/new-card`, component: AdminStoreCashierNewCard },
                { name: 'refund', path: `${this.props.match.url}/refund`, component: AdminStoreCashierRefund },
                { name: 'logout', path: `${this.props.match.url}/logout`, component: AdminLogout },
                { name: 'setting', path: `${this.props.match.url}/setting`, component: AdminSetting },
                { name: 'report', path: `${this.props.match.url}/report`, component: AdminStoreCashierReport },
                { component: NoMatch }
            ];
            mainRoute = routePage;

        } else if (menu[0].group === 'store') {
            let routePage = [
                { name: 'product', path: `${this.props.match.url}/product`, component: AdminStoresMenu },
                { name: 'create-new-product', path: `${this.props.match.url}/product/create-new-product`, component: AdminStoresMenuCreate },
                { name: 'staff', path: `${this.props.match.url}/staff`, component: AdminStoresEmployee },
                { name: 'create-new-staff', path: `${this.props.match.url}/staff/create-new-staff`, component: AdminStoresEmployeeCreate },
                { name: 'logout', path: `${this.props.match.url}/logout`, component: AdminLogout },
                { name: 'transaction', path: `${this.props.match.url}/transaction`, component: AdminTransaction },
                { name: 'report', path: `${this.props.match.url}/report`, component: AdminStoresReport },
                { component: NoMatch }
            ];
            mainRoute = routePage;
        } else {
            mainRoute = [];
        }

        /* Create Menu Nav */
        let newMenu = [];
        
        for (let i=0; i<menu.length; i++) {

            // console.log(menu);

            let dataMenu = {};
            let split = menu[i].name.split(" ");

            let nameCategory = menu[0].group !== 'kasir' ? `${menu[i].name}` : `${menu[i].name}`;
            let nameRoute = menu[0].group === 'kasir' ? `${menu[i].name}` : `Daftar ${split[1]}`;

            let nameRouteReport = `${menu[i].name}`

            //#REPORT LAPORAN
            if(split.length === 1 && split[0] === "Laporan"){
                console.log(split[0]);

                dataMenu = {
                    category : nameCategory,
                    items: [
                        { name: nameRouteReport, path: `${this.props.match.url}${menu[i].path ? '/' + menu[i].path : 'null'}` }
                    ]
                }
                console.log(dataMenu);

                let itemSeparateReport = {
                    name: `${split[0]} Penjualan`, 
                    path: `${this.props.match.url}${menu[i].path ? `/${menu[i].path}` : 'null'}`
                }
                
                console.log(itemSeparateReport);

                if(menu[i].group === "all" && menu[i].path === "report"){
                    dataMenu.items.push(itemSeparateReport);
                }
            }
            //********************************************************************************/

            if(split.length > 1) {
                dataMenu = {
                    category : nameCategory,
                    items: [
                        { name: nameRoute, path: `${this.props.match.url}${menu[i].path ? '/' + menu[i].path : ''}` }
                    ]
                }

                let itemSeperate = { 
                    name: `Buat ${split[1]} Baru`, 
                    path: `${this.props.match.url}${menu[i].path ? `/${menu[i].path}/create-new-` + menu[i].path : ''}` 
                }

                if (menu[i].group === "admin" && menu[i].path !== "member") {
                    dataMenu.items.push(itemSeperate);
               
                }

                if(menu[i].group === "store") {
                    dataMenu.items.push(itemSeperate);
                }

                

            } else {
                dataMenu = {
                    category : menu[i].name,
                    items: [
                        { name: `${split[0]}`, path: `${this.props.match.url}${menu[i].path ? '/' + menu[i].path : ''}` }
                    ]
                }
            }

            newMenu.push(dataMenu);
        }



        this.setState({
            menus: newMenu,
            routes: mainRoute
        })
    }
    
    render() {
        const user = JSON.parse(localStorage.getItem('userData'));
        return (
            <AdminPanelView
                {...this.state} 
                {...this.props} 
                user={user}
            />
        )
    }
}

export default AdminPanel;