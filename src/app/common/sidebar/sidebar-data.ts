export interface SidebarItem {
  label: string;
  routerLink?: string;
  href?: string;
  target?: string;
  badge?: {
    text: string;
    color: string;
    bgColor: string;
  };
}

export interface SidebarSection {
  id: string;
  title: string;
  icon: string;
  category?: string;
  routerLink?: string;
  badge?: {
    text: string;
    color: string;
    bgColor: string;
  };
  items: SidebarItem[];
  isAccordion: boolean;
}

export const sidebarSections: SidebarSection[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: 'dashboard',
    badge: { text: '30', color: 'text-orange-500', bgColor: 'bg-orange-50 dark:bg-[#ffffff14]' },
    items: [
      { label: 'eCommerce', routerLink: '/dashboard' },
      { label: 'CRM', routerLink: '/dashboard/crm' },
      { label: 'Project Management', routerLink: '/dashboard/project-management' },
      { label: 'LMS', routerLink: '/dashboard/lms' },
      { label: 'HelpDesk', routerLink: '/dashboard/helpdesk', badge: { text: 'Hot', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'Analytics', routerLink: '/dashboard/analytics' },
      { label: 'Crypto', routerLink: '/dashboard/crypto' },
      { label: 'Sales', routerLink: '/dashboard/sales' },
      { label: 'Hospital', routerLink: '/dashboard/hospital' },
      { label: 'HRM', routerLink: '/dashboard/hrm' },
      { label: 'School', routerLink: '/dashboard/school' },
      { label: 'Call Center', routerLink: '/dashboard/call-center', badge: { text: 'Popular', color: 'text-success-600', bgColor: 'bg-success-100 dark:bg-[#ffffff14]' } },
      { label: 'Marketing', routerLink: '/dashboard/marketing' },
      { label: 'NFT', routerLink: '/dashboard/nft' },
      { label: 'SaaS', routerLink: '/dashboard/saas' },
      { label: 'Real Estate', routerLink: '/dashboard/real-estate', badge: { text: 'Top', color: 'text-purple-500', bgColor: 'bg-purple-100 dark:bg-[#ffffff14]' } },
      { label: 'Shipment', routerLink: '/dashboard/shipment' },
      { label: 'Finance', routerLink: '/dashboard/finance' },
      { label: 'POS System', routerLink: '/dashboard/pos-system', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'Podcast', routerLink: '/dashboard/podcast', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'Social Media', routerLink: '/dashboard/social-media', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'Doctor', routerLink: '/dashboard/doctor', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'Beauty Salon', routerLink: '/dashboard/beauty-salon', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'Store Analysis', routerLink: '/dashboard/store-analysis', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'Restaurant', routerLink: '/dashboard/restaurant', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'Hotel', routerLink: '/dashboard/hotel', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'RE Agent', routerLink: '/dashboard/real-estate-agent', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'Credit Card', routerLink: '/dashboard/credit-card', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'Crypto Trader', routerLink: '/dashboard/crypto-trader', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } },
      { label: 'Crypto Perf.', routerLink: '/dashboard/crypto-performance', badge: { text: 'New', color: 'text-orange-500', bgColor: 'bg-orange-100 dark:bg-[#ffffff14]' } }
    ],
    isAccordion: true
  },
  {
    id: 'layout',
    title: 'Layout',
    icon: 'dock_to_right',
    items: [
      { label: 'Dark Mode', href: 'https://trezo-twcss-dark.envytheme.com/index.html', target: '_blank' },
      { label: 'Sidebar Dark', href: 'https://trezo-dls.envytheme.com/index.html', target: '_blank' },
      { label: 'RTL Light', href: 'https://trezo-twcss-rtl.envytheme.com/index.html', target: '_blank' },
      { label: 'RTL Dark', href: 'https://trezo-twcss-dark-rtl.envytheme.com/index.html', target: '_blank' }
    ],
    isAccordion: true
  },
  {
    id: 'front-pages',
    title: 'Front Pages',
    icon: 'note_stack',
    items: [
      { label: 'Home', routerLink: '/' },
      { label: 'Features', routerLink: '/features' },
      { label: 'Our Team', routerLink: '/team' },
      { label: 'FAQ\'s', routerLink: '/faq' },
      { label: 'Contact', routerLink: '/contact' }
    ],
    isAccordion: true
  },
  {
    id: 'todo-list',
    title: 'To Do List',
    icon: 'format_list_bulleted',
    routerLink: '/dashboard/apps/todo',
    items: [],
    isAccordion: false
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: 'date_range',
    routerLink: '/dashboard/apps/calendar',
    items: [],
    isAccordion: false
  },
  {
    id: 'contacts',
    title: 'Contacts',
    icon: 'contact_page',
    items: [],
    isAccordion: false
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: 'chat',
    items: [],
    isAccordion: false
  },
  {
    id: 'email',
    title: 'Email',
    icon: 'mail',
    badge: { text: '3', color: 'text-success-600', bgColor: 'bg-success-50 dark:bg-[#ffffff14]' },
    items: [
      { label: 'Inbox', routerLink: '/dashboard/apps/email' },
      { label: 'Compose', routerLink: '/dashboard/apps/email/compose' },
      { label: 'Read', routerLink: '/dashboard/apps/email/read' }
    ],
    isAccordion: true
  },
  {
    id: 'kanban-board',
    title: 'Kanban Board',
    icon: 'team_dashboard',
    items: [],
    isAccordion: false
  },
  {
    id: 'file-manager',
    title: 'File Manager',
    icon: 'folder_open',
    badge: { text: '7', color: 'text-danger-500', bgColor: 'bg-danger-50 dark:bg-[#ffffff14]' },
    items: [
      { label: 'My Drive', routerLink: '/dashboard/apps/file-manager' },
      { label: 'Assets', routerLink: '/dashboard/apps/file-manager/assets' },
      { label: 'Projects', routerLink: '/dashboard/apps/file-manager/projects' },
      { label: 'Personal', routerLink: '/dashboard/apps/file-manager/personal' },
      { label: 'Applications', routerLink: '/dashboard/apps/file-manager/applications' },
      { label: 'Documents', routerLink: '/dashboard/apps/file-manager/documents' },
      { label: 'Media', routerLink: '/dashboard/apps/file-manager/media' }
    ],
    isAccordion: true
  },
  {
    id: 'ecommerce',
    title: 'eCommerce',
    icon: 'shopping_cart',
    items: [
      { label: 'Products Grid', routerLink: '/dashboard/ecommerce-page' },
      { label: 'Products List', routerLink: '/dashboard/ecommerce-page/products-list' },
      { label: 'Product Details', routerLink: '/dashboard/ecommerce-page/product-details' },
      { label: 'Create Product', routerLink: '/dashboard/ecommerce-page/create-product' },
      { label: 'Edit Product', routerLink: '/dashboard/ecommerce-page/edit-product' },
      { label: 'Cart', routerLink: '/dashboard/ecommerce-page/cart' },
      { label: 'Checkout', routerLink: '/dashboard/ecommerce-page/checkout' },
      { label: 'Orders', routerLink: '/dashboard/ecommerce-page/orders' },
      { label: 'Order Details', routerLink: '/dashboard/ecommerce-page/order-details' },
      { label: 'Create Order', routerLink: '/dashboard/ecommerce-page/create-order' },
      { label: 'Order Tracking', routerLink: '/dashboard/ecommerce-page/order-tracking' },
      { label: 'Customers', routerLink: '/dashboard/ecommerce-page/customers' },
      { label: 'Customer Details', routerLink: '/dashboard/ecommerce-page/customer-details' },
      { label: 'Categories', routerLink: '/dashboard/ecommerce-page/categories' },
      { label: 'Sellers', routerLink: '/dashboard/ecommerce-page/sellers' },
      { label: 'Seller Details', routerLink: '/dashboard/ecommerce-page/seller-details' },
      { label: 'Create Seller', routerLink: '/dashboard/ecommerce-page/create-seller' },
      { label: 'Reviews', routerLink: '/dashboard/ecommerce-page/reviews' },
      { label: 'Refunds', routerLink: '/dashboard/ecommerce-page/refunds' }
    ],
    isAccordion: true
  },
  {
    id: 'crm',
    title: 'CRM',
    icon: 'handshake',
    items: [
      { label: 'Contacts', routerLink: '/dashboard/crm-page' },
      { label: 'Customers', routerLink: '/dashboard/crm-page/customers' },
      { label: 'Leads', routerLink: '/dashboard/crm-page/leads' },
      { label: 'Deals', routerLink: '/dashboard/crm-page/deals' }
    ],
    isAccordion: true
  },
  {
    id: 'project-management',
    title: 'Project Management',
    icon: 'description',
    items: [
      { label: 'Project Overview', routerLink: '/dashboard/project-management-page' },
      { label: 'Projects List', routerLink: '/dashboard/project-management-page/projects-list' },
      { label: 'Create Project', routerLink: '/dashboard/project-management-page/create-project' },
      { label: 'Clients', routerLink: '/dashboard/project-management-page/clients' },
      { label: 'Teams', routerLink: '/dashboard/project-management-page/teams' },
      { label: 'Kanban Board', routerLink: '/dashboard/project-management-page/kanban-board' },
      { label: 'Users', routerLink: '/dashboard/project-management-page/users' }
    ],
    isAccordion: true
  },
  {
    id: 'lms',
    title: 'LMS',
    icon: 'auto_stories',
    items: [
      { label: 'Courses List', routerLink: '/dashboard/lms-page' },
      { label: 'Course Details', routerLink: '/dashboard/lms-page/course-details' },
      { label: 'Lesson Preview', routerLink: '/dashboard/lms-page/lesson-preview' },
      { label: 'Create Course', routerLink: '/dashboard/lms-page/create-course' },
      { label: 'Edit Course', routerLink: '/dashboard/lms-page/edit-course' },
      { label: 'Instructors', routerLink: '/dashboard/lms-page/instructors' }
    ],
    isAccordion: true
  },
  {
    id: 'helpdesk',
    title: 'HelpDesk',
    icon: 'support',
    items: [
      { label: 'Tickets', routerLink: '/dashboard/helpdesk-page' },
      { label: 'Ticket Details', routerLink: '/dashboard/helpdesk-page/ticket-details' },
      { label: 'Agents', routerLink: '/dashboard/helpdesk-page/agents' },
      { label: 'Reports', routerLink: '/dashboard/helpdesk-page/reports' }
    ],
    isAccordion: true
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    icon: 'store',
    items: [
      { label: 'Marketplace', routerLink: '/dashboard/nft-marketplace-page' },
      { label: 'Explore All', routerLink: '/dashboard/nft-marketplace-page/explore-all' },
      { label: 'Live Auction', routerLink: '/dashboard/nft-marketplace-page/live-auction' },
      { label: 'NFT Details', routerLink: '/dashboard/nft-marketplace-page/nft-details' },
      { label: 'Creators', routerLink: '/dashboard/nft-marketplace-page/creators' },
      { label: 'Creator Details', routerLink: '/dashboard/nft-marketplace-page/creator-details' },
      { label: 'Wallet Connect', routerLink: '/dashboard/nft-marketplace-page/wallet-connect' },
      { label: 'Create NFT', routerLink: '/dashboard/nft-marketplace-page/create-nft' }
    ],
    isAccordion: true
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    icon: 'real_estate_agent',
    items: [
      { label: 'Property List', routerLink: '/dashboard/real-estate-page' },
      { label: 'Property Details', routerLink: '/dashboard/real-estate-page/property-details' },
      { label: 'Add Property', routerLink: '/dashboard/real-estate-page/add-property' },
      { label: 'Agents', routerLink: '/dashboard/real-estate-page/agents' },
      { label: 'Agent Details', routerLink: '/dashboard/real-estate-page/agent-details' },
      { label: 'Add Agent', routerLink: '/dashboard/real-estate-page/add-agent' },
      { label: 'Customers', routerLink: '/dashboard/real-estate-page/customers' }
    ],
    isAccordion: true
  },
  {
    id: 'finance',
    title: 'Finance',
    icon: 'calculate',
    items: [
      { label: 'Wallet', routerLink: '/dashboard/finance-page' },
      { label: 'Transactions', routerLink: '/dashboard/finance-page/transactions' }
    ],
    isAccordion: true
  },
  {
    id: 'doctor',
    title: 'Doctor',
    icon: 'badge',
    items: [
      { label: 'Patients List', routerLink: '/dashboard/doctor-page' },
      { label: 'Add Patient', routerLink: '/dashboard/doctor-page/add-patient' },
      { label: 'Patient Details', routerLink: '/dashboard/doctor-page/patient-details' },
      { label: 'Appointments', routerLink: '/dashboard/doctor-page/appointments' },
      { label: 'Prescriptions', routerLink: '/dashboard/doctor-page/prescriptions' },
      { label: 'Write a Prescription', routerLink: '/dashboard/doctor-page/write-prescription' }
    ],
    isAccordion: true
  },
  {
    id: 'restaurant',
    title: 'Restaurant',
    icon: 'lunch_dining',
    items: [
      { label: 'Menus', routerLink: '/dashboard/restaurant-page' },
      { label: 'Dish Details', routerLink: '/dashboard/restaurant-page/dish-details' }
    ],
    isAccordion: true
  },
  {
    id: 'hotel',
    title: 'Hotel',
    icon: 'hotel',
    items: [
      { label: 'Rooms', routerLink: '/dashboard/hotel-page' },
      { label: 'Room Details', routerLink: '/dashboard/hotel-page/room-details' },
      { label: 'Bookings', routerLink: '/dashboard/hotel-page/bookings' },
      { label: 'Booking Details', routerLink: '/dashboard/hotel-page/booking-details' },
      { label: 'Guests', routerLink: '/dashboard/hotel-page/guests' }
    ],
    isAccordion: true
  },
  {
    id: 'events',
    title: 'Events',
    icon: 'event',
    items: [
      { label: 'Events List', routerLink: '/dashboard/events-page' },
      { label: 'Event Details', routerLink: '/dashboard/events-page/event-details' },
      { label: 'Create Event', routerLink: '/dashboard/events-page/create-event' },
      { label: 'Calendar View', routerLink: '/dashboard/events-page/calendar-view' }
    ],
    isAccordion: true
  },
  {
    id: 'social',
    title: 'Social',
    icon: 'groups',
    items: [
      { label: 'Feed', routerLink: '/dashboard/social-page' },
      { label: 'Profile', routerLink: '/dashboard/social-page/profile' },
      { label: 'Friends', routerLink: '/dashboard/social-page/friends' },
      { label: 'Messages', routerLink: '/dashboard/social-page/messages' },
      { label: 'Groups', routerLink: '/dashboard/social-page/groups' },
      { label: 'Events', routerLink: '/dashboard/social-page/events' }
    ],
    isAccordion: true
  },
  {
    id: 'invoices',
    title: 'Invoices',
    icon: 'receipt',
    items: [
      { label: 'Invoice List', routerLink: '/dashboard/invoices-page' },
      { label: 'Invoice Details', routerLink: '/dashboard/invoices-page/invoice-details' },
      { label: 'Create Invoice', routerLink: '/dashboard/invoices-page/create-invoice' }
    ],
    isAccordion: true
  },
  {
    id: 'users',
    title: 'Users',
    icon: 'people',
    items: [
      { label: 'All Users', routerLink: '/dashboard/users-page' },
      { label: 'User Profile', routerLink: '/dashboard/users-page/user-profile' },
      { label: 'Add User', routerLink: '/dashboard/users-page/add-user' },
      { label: 'Edit User', routerLink: '/dashboard/users-page/edit-user' }
    ],
    isAccordion: true
  },
  {
    id: 'profile',
    title: 'Profile',
    icon: 'person',
    items: [
      { label: 'My Profile', routerLink: '/dashboard/profile' },
      { label: 'Edit Profile', routerLink: '/dashboard/profile/edit' },
      { label: 'Settings', routerLink: '/dashboard/profile/settings' }
    ],
    isAccordion: true
  },
  {
    id: 'starter',
    title: 'Starter',
    icon: 'rocket_launch',
    items: [
      { label: 'Blank Page', routerLink: '/dashboard/starter/blank' },
      { label: 'Sample Page', routerLink: '/dashboard/starter/sample' }
    ],
    isAccordion: true
  },
  {
    id: 'icons',
    title: 'Icons',
    icon: 'emoji_objects',
    items: [
      { label: 'Material Icons', routerLink: '/dashboard/icons/material' },
      { label: 'Font Awesome', routerLink: '/dashboard/icons/font-awesome' },
      { label: 'Feather Icons', routerLink: '/dashboard/icons/feather' }
    ],
    isAccordion: true
  },
  {
    id: 'ui-elements',
    title: 'UI Elements',
    icon: 'dashboard_customize',
    items: [
      { label: 'Buttons', routerLink: '/dashboard/ui-elements/buttons' },
      { label: 'Cards', routerLink: '/dashboard/ui-elements/cards' },
      { label: 'Forms', routerLink: '/dashboard/ui-elements/forms' },
      { label: 'Tables', routerLink: '/dashboard/ui-elements/tables' },
      { label: 'Charts', routerLink: '/dashboard/ui-elements/charts' },
      { label: 'Modals', routerLink: '/dashboard/ui-elements/modals' }
    ],
    isAccordion: true
  },
  {
    id: 'tables',
    title: 'Tables',
    icon: 'table_chart',
    items: [
      { label: 'Basic Tables', routerLink: '/dashboard/tables/basic' },
      { label: 'Data Tables', routerLink: '/dashboard/tables/data' },
      { label: 'Responsive Tables', routerLink: '/dashboard/tables/responsive' }
    ],
    isAccordion: true
  },
  {
    id: 'forms',
    title: 'Forms',
    icon: 'description',
    items: [
      { label: 'Basic Forms', routerLink: '/dashboard/forms/basic' },
      { label: 'Advanced Forms', routerLink: '/dashboard/forms/advanced' },
      { label: 'Form Validation', routerLink: '/dashboard/forms/validation' },
      { label: 'Form Wizard', routerLink: '/dashboard/forms/wizard' }
    ],
    isAccordion: true
  },
  {
    id: 'charts',
    title: 'Charts',
    icon: 'bar_chart',
    items: [
      { label: 'Line Charts', routerLink: '/dashboard/charts/line' },
      { label: 'Bar Charts', routerLink: '/dashboard/charts/bar' },
      { label: 'Pie Charts', routerLink: '/dashboard/charts/pie' },
      { label: 'Area Charts', routerLink: '/dashboard/charts/area' }
    ],
    isAccordion: true
  },
  {
    id: 'authentication',
    title: 'Authentication',
    icon: 'lock',
    items: [
      { label: 'Login', routerLink: '/auth/login' },
      { label: 'Register', routerLink: '/auth/register' },
      { label: 'Forgot Password', routerLink: '/auth/forgot-password' },
      { label: 'Reset Password', routerLink: '/auth/reset-password' },
      { label: 'Lock Screen', routerLink: '/auth/lock-screen' }
    ],
    isAccordion: true
  },
  {
    id: 'extra-pages',
    title: 'Extra Pages',
    icon: 'note_add',
    items: [
      { label: 'Pricing', routerLink: '/extra-pages/pricing' },
      { label: 'Timeline', routerLink: '/extra-pages/timeline' },
      { label: 'Gallery', routerLink: '/extra-pages/gallery' },
      { label: 'Maintenance', routerLink: '/extra-pages/maintenance' },
      { label: 'Coming Soon', routerLink: '/extra-pages/coming-soon' }
    ],
    isAccordion: true
  },
  {
    id: 'errors',
    title: 'Errors',
    icon: 'error',
    items: [
      { label: '404 Error', routerLink: '/error/404' },
      { label: '500 Error', routerLink: '/error/500' },
      { label: '403 Error', routerLink: '/error/403' }
    ],
    isAccordion: true
  },
  {
    id: 'widgets',
    title: 'Widgets',
    icon: 'widgets',
    items: [
      { label: 'Statistics', routerLink: '/dashboard/widgets/statistics' },
      { label: 'Charts', routerLink: '/dashboard/widgets/charts' },
      { label: 'Lists', routerLink: '/dashboard/widgets/lists' }
    ],
    isAccordion: true
  },
  {
    id: 'maps',
    title: 'Maps',
    icon: 'map',
    items: [
      { label: 'Google Maps', routerLink: '/dashboard/maps/google' },
      { label: 'Vector Maps', routerLink: '/dashboard/maps/vector' }
    ],
    isAccordion: true
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: 'notifications',
    items: [
      { label: 'Alerts', routerLink: '/dashboard/notifications/alerts' },
      { label: 'Toasts', routerLink: '/dashboard/notifications/toasts' },
      { label: 'Badges', routerLink: '/dashboard/notifications/badges' }
    ],
    isAccordion: true
  },
  {
    id: 'members',
    title: 'Members',
    icon: 'group',
    items: [
      { label: 'All Members', routerLink: '/dashboard/members' },
      { label: 'Member Profile', routerLink: '/dashboard/members/profile' },
      { label: 'Add Member', routerLink: '/dashboard/members/add' }
    ],
    isAccordion: true
  },
  {
    id: 'my-profile',
    title: 'My Profile',
    icon: 'account_circle',
    items: [
      { label: 'Profile', routerLink: '/dashboard/my-profile' },
      { label: 'Edit Profile', routerLink: '/dashboard/my-profile/edit' },
      { label: 'Change Password', routerLink: '/dashboard/my-profile/change-password' }
    ],
    isAccordion: true
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: 'settings',
    items: [
      { label: 'General Settings', routerLink: '/dashboard/settings/general' },
      { label: 'Privacy Settings', routerLink: '/dashboard/settings/privacy' },
      { label: 'Notification Settings', routerLink: '/dashboard/settings/notifications' }
    ],
    isAccordion: true
  },
  {
    id: 'multi-level-menu',
    title: 'Multi Level Menu',
    icon: 'menu',
    items: [
      { label: 'Level 1', routerLink: '/dashboard/multi-level/level1' },
      { label: 'Level 2', routerLink: '/dashboard/multi-level/level2' },
      { label: 'Level 3', routerLink: '/dashboard/multi-level/level3' }
    ],
    isAccordion: true
  },
  {
    id: 'logout',
    title: 'Logout',
    icon: 'logout',
    items: [
      { label: 'Sign Out', routerLink: '/auth/logout' }
    ],
    isAccordion: false
  }
];
