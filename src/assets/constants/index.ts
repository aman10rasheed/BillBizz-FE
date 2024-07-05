import {
  HomeIcon,
  CubeIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const navlist = [
  {
    nav: "Dashboard",
    sub: null,
    icon: HomeIcon,
    route: "/dashboard",
  },
  {
    nav: "Inventory",
    sub: ["item"],
    icon: CubeIcon,
    route: "/inventory",
  },
  {
    nav: "Customer",
    sub: null,
    icon: UserIcon,
    route: "/home",
  },
  {
    nav: "Sales",
    sub: ["Sales Order", "POS"],
    icon: ShoppingCartIcon,
    route: "/sales",
  },
  {
    nav: "Accountant",
    sub: [
      "Chart of Account",
      "Manual Journals",
      "Bank",
      "Cash",
      "Currency Adjustment",
    ],
    icon: "",
    route: "/home",
  },
  {
    nav: "Supplier",
    sub: null,
    icon: "",
    route: "/home",
  },
  {
    nav: "Expense",
    sub: null,
    icon: "",
    route: "/home",
  },
  {
    nav: "Staff",
    sub: null,
    icon: "",
    route: "/home",
  },
  {
    nav: "Purchase",
    sub: null,
    icon: "",
    route: "/home",
  },
  {
    nav: "Payroll",
    sub: null,
    icon: "",
    route: "/home",
  },
  {
    nav: "Reports",
    sub: null,
    icon: "",
    route: "/home",
  },
];


export const paymentTermsList = [
  {
    title: "Net 30",
    text: "Payment is due within 30 days from the invoice date",
  },
  {
    title: "2/10 Net 30",
    text: "A 2% discount is available if payment is made within 10 days; otherwise, the full amount is due within 30 days.",
  },
  {
    title: "Due on Receipt",
    text: ": Payment is due immediately upon receiving the invoice",
  },
  {
    title: "EOM",
    text: "Payment is due by the end of the month in which the invoice is dated",
  },
  {
    title: "Net 15",
    text: "Payment is due within 15 days from the invoice date",
  },
  { title: "COD", text: "Payment is due at the time of delivery" },
  {
    title: "Net 60",
    text: "Payment is due within 60 days from the invoice date",
  },
  {
    title: "15 MFI: ",
    text: ": Payment is due on the 15th day of the month following the invoice date",
  },
];

export  const organizationList = [
  { title: "Profile" },
  { title: "Branding" },
  { title: "Custom Domain" },
  { title: "Branches" },
  { title: "Currencies" },
  { title: "Approvals" },
  { title: "Opening Balance" },
  { title: "Manage Subscription" },
];

export   const taxList = [{ title: "Tax" }, { title: "MSME Settings" }];

export  const usersAndRoleList = [
  { title: "Users" },
  { title: "Roles" },
  { title: "User Preferences" },
];

export const preferencesList = [
  { title: "General" },
  { title: "Customet & Vendor" },
  { title: "AccountantProjects" },
  { title: "TimeSheets" },
  { title: "Customer Portal" },
  { title: "Vendor Portal" },
];
export const   SalesList = [
  { title: "Quotes" },
  { title: "Sales Order" },
  { title: "Delivery Challans" },
  { title: "Invoices" },
  { title: "Recurring Invoices" },
  { title: "Payment Recieved" },
  { title: "Credit Notes" },
  { title: "Delivery Notes" },
  { title: "Packing Slips" },
];

export  const purchasesList = [
  { title: "Expenses" },
  { title: "Recurring Expensess" },
  { title: "Bills" },
  { title: "Recurring Bills" },
  { title: "Payment Mode" },
  { title: "Purchase Orders" },
  { title: "Vendor Credit" },
];

export   const itemsList = [{ title: "Item" }, { title: "Inventory Adjustment" }];

export   const onlinePaymentList = [
  { title: "Customer Payments" },
  { title: "vendor Payments" },
];

export   const customizationList = [
  { title: "Reporting Tags" },
  { title: "Web Tabs" },
  { title: "Digital Signature" },
  { title: "Transaction Number Series" },
  { title: "PDF Templates" },
];

export   const ReminderList = [
  { title: "Reminders" },
  { title: "Email Notification" },
  { title: "SMS Notification" },
];


export default navlist;
