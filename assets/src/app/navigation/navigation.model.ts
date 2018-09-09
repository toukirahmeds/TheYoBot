import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

import {
    FrontendRoutes,
    MyBusinessFERoutes,
    MessengerConversationFERoutes,
    FbPostConversationFERoutes,
    AnalyticsFERoutes,
    ProductFERoutes,
    OrderFERoutes,
    InvoiceFERoutes,
    ServiceFERoutes,
    BookingFERoutes
} from '../app-main/configs';

export class FuseNavigationModel implements FuseNavigationModelInterface
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id' : 'businessSettings',
                'title' : 'Business',
                'type' : 'group',
                'children' : [
                    {
                        'id':'myBusiness',
                        'title' : 'My Business',
                        'type' : 'collapse',
                        'icon' : 'business',
                        'children' : [
                            {
                                'id' : 'myBusinessProfile',
                                'title' : 'Profile',
                                'type' : 'item',
                                'icon' : 'info',
                                'url' : FrontendRoutes.MyBusinessFEUrl + "/" + MyBusinessFERoutes.profile
                            },{
                                'id' : 'myBusinessFbPageSubscribers',
                                'title' : 'Facebook Subscribers',
                                'type' : 'item',
                                'icon' : 'person',
                                'url' : FrontendRoutes.MyBusinessFEUrl + "/" + MyBusinessFERoutes.fbPageSubscribers
                            },{
                                'id' : 'myBusinessCustomers',
                                'title' : 'Customers',
                                'type' : 'item',
                                'icon' : 'person',
                                'url' : FrontendRoutes.MyBusinessFEUrl + "/" + MyBusinessFERoutes.customers
                            }
                        ]
                    },/*{
                        'id' : 'analytics',
                        'title' : 'Analytics',
                        'type' : 'collapse',
                        'icon' : 'show_chart',
                        'children' : [
                            {
                                'id' : 'dailyVisitorsChart',
                                'title' : 'Daily Visitors',
                                'type' : 'item',
                                'icon' : 'transfer_within_a_station',
                                'url' : FrontendRoutes.AnalyticsFEUrl + "/" + AnalyticsFERoutes.dailyVisitors
                            },{
                                'id' : 'monthlyVisitorsChart',
                                'title' : 'Monthly Visitors',
                                'type' : 'item',
                                'icon' : 'accessibility',
                                'url' : FrontendRoutes.AnalyticsFEUrl + "/" + AnalyticsFERoutes.monthlyVisitors
                            },{
                                'id' : 'monthlySalesChart',
                                'title' : 'Monthly Sales',
                                'type' : 'item',
                                'icon' : 'shopping_cart',
                                'url' : FrontendRoutes.AnalyticsFEUrl + "/" + AnalyticsFERoutes.monthlySalesChart
                            },{
                                'id' : 'monthlyRevenueChart',
                                'title' : 'Monthly Revenue',
                                'type' : 'item',
                                'icon' : 'attach_money',
                                'url' : FrontendRoutes.AnalyticsFEUrl + "/" + AnalyticsFERoutes.monthlyRevenueChart
                            }
                        ]
                    },*/{
                        'id' : 'products',
                        'title' : 'Products',
                        'type' : 'collapse',
                        'icon' : 'shop',
                        'children' : [
                            {
                                'id' : 'productList',
                                'title' : 'Product List',
                                'type' : 'item',
                                'icon' : 'list',
                                'url' : FrontendRoutes.ProductFEUrl + "/" + ProductFERoutes.productList
                            },{
                                'id' : 'topProducts',
                                'title' : 'Top Products',
                                'type' : 'bar_chart',
                                'url' : FrontendRoutes.ProductFEUrl + "/" + ProductFERoutes.topProducts
                            }/*,{
                                'id' : 'monthlyTopProductSales',
                                'title' : 'Top Products Monthly Sales',
                                'type' : 'item',
                                'url' : '/products/top-products-monthly-sales'
                            }*/

                        ]
                    },{
                        'id' : 'services',
                        'title' : 'Services',
                        'type' : 'collapse',
                        'icon' : 'shop',
                        'children' : [
                            {
                                'id' : 'serviceList',
                                'title' : 'Service List',
                                'type' : 'item',
                                'icon' : 'list',
                                'url' : FrontendRoutes.ServiceFEUrl + "/" + ServiceFERoutes.serviceList
                            }

                        ]
                    },{
                        'id' : 'orders',
                        'title' : 'Orders',
                        'type' : 'collapse',
                        'icon' : 'shopping_basket',
                        'children' : [{
                            'id' : 'pendingOrders',
                            'title' : 'Pending Orders',
                            'type' : 'item',
                            'icon' : 'list',
                            'url' : FrontendRoutes.OrderFEUrl + "/" + OrderFERoutes.orderList
                        }/*,{
                            'id' : 'completed orders',
                            'title' : 'Completed Orders',
                            'type' : 'item',
                            'url' : '/orders/completed-orders'
                        }*/]
                    },{
                        'id' : 'booking',
                        'title' : 'Bookings',
                        'type' : 'collapse',
                        'icon' : 'shopping_basket',
                        'children' : [{
                            'id' : 'bookingList',
                            'title' : 'Booking List',
                            'type' : 'item',
                            'icon' : 'list',
                            'url' : FrontendRoutes.BookingFEUrl + "/" + BookingFERoutes.bookingList
                        }/*,{
                            'id' : 'completed orders',
                            'title' : 'Completed Orders',
                            'type' : 'item',
                            'url' : '/orders/completed-orders'
                        }*/]
                    },{
                        'id' : 'invoices',
                        'title' : 'Invoices',
                        'type' : 'item',
                        'icon' : 'attach_money',
                        'url' : FrontendRoutes.InvoiceFEUrl + "/" + InvoiceFERoutes.invoiceList
                    }
                ]
            },
            {
                'id'      : 'botSettings',
                'title'   : 'Bot Settings',
                // 'translate': 'NAV.APPLICATIONS',
                'type'    : 'group',
                'children': [
                    {
                        'id':'fbMessenger',
                        'title' : 'FB Messenger',
                        'type' : 'collapse',
                        'icon':'chat_bubble_outline',
                        'children' : [{
                            'id' : 'conversation-flow',
                            'title' : 'Conversation Flow',
                            'type' : 'item',
                            'icon' : 'message',
                            'url' : FrontendRoutes.MessengerConversationFEUrl + "/" + MessengerConversationFERoutes.messengerConversationFlow
                        }/*,{
                            'id' : 'fbMessengerPersistentMenu',
                            'title' : 'Persistent Menu',
                            'type' : 'item',
                            'icon' : 'menu',
                            'url' : FrontendRoutes.MessengerConversationFEUrl + "/" + MessengerConversationFERoutes.persistentMenu
                        }*/]
                    }/*,{
                        'id':'fbPost',
                        'title' : 'FB Post',
                        'type' : 'collapse',
                        'icon' : 'view_headline',
                        'children' : [{
                            'id' : 'conversation-flow',
                            'title' : 'Post List',
                            'type' : 'item',
                            'icon' : 'list',
                            'url' : FrontendRoutes.FBPostConversationFEUrl + "/" + FbPostConversationFERoutes.postList
                        }]
                    }*/
                ]
            }
        ];
    }
}
