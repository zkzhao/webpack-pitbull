import { IRootMenu } from '../root-menu'
import { FileTextOutlined } from '@ant-design/icons'
import { PURCHASE_ORDER_LIST, SALES_ORDER_LIST, SALES_ORDER_DETAIL } from '@/router/config/order-manage/path'
export const OrderManageRouteMenuMap: IRootMenu = {
  menuProps: {
    menuCode: '101',
    menuIcon: FileTextOutlined,
    menuName: '订单管理',
    needShow: true,
    componentPath: ''
  },
  menuChildren: [
    {
      menuProps: {
        menuCode: '1011',
        menuIcon: '',
        menuName: '采购订单',
        needShow: false,
        componentPath: PURCHASE_ORDER_LIST
      },
      menuChildren: [
        {
          menuProps: {
            menuCode: '10110',
            menuIcon: '',
            menuName: '采购订单详情',
            needShow: false,
            componentPath: PURCHASE_ORDER_LIST
          },
          menuChildren: []
        }
      ]
    },
    {
      menuProps: {
        menuCode: '1012',
        menuIcon: '',
        menuName: '销售订单',
        needShow: false,
        componentPath: SALES_ORDER_LIST
      },
      menuChildren: [
        {
          menuProps: {
            menuCode: '10110',
            menuIcon: '',
            menuName: '销售订单详情',
            needShow: false,
            componentPath: SALES_ORDER_DETAIL
          },
          menuChildren: []
        }
      ]
    }
  ]
}
