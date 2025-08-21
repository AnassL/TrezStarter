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
  exact?: boolean;
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
  isOpen?: boolean;
}

export const simplifiedSidebarSections: SidebarSection[] = [
  {
    id: 'lms',
    title: 'LMS',
    icon: 'auto_stories',
    isAccordion: true,
    isOpen: true,
    items: [
      { label: 'Courses List', routerLink: '/dashboard/lms-page', exact: true },
      { label: 'Course Details', routerLink: '/dashboard/lms-page/course-details', exact: true },
      { label: 'Lesson Preview', routerLink: '/dashboard/lms-page/lesson-preview', exact: true },
      { label: 'Create Course', routerLink: '/dashboard/lms-page/create-course', exact: true },
      { label: 'Edit Course', routerLink: '/dashboard/lms-page/edit-course', exact: true },
      { label: 'Instructors', routerLink: '/dashboard/lms-page/instructors', exact: true }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: 'store',
    isAccordion: true,
    isOpen: true,
    items: [
      { label: 'Campaigns', routerLink: '/dashboard/marketing', exact: true },
      { label: 'Analytics', routerLink: '/dashboard/marketing/analytics', exact: true }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    icon: 'lock_open',
    isAccordion: true,
    isOpen: true,
    items: [
      { label: 'Sign In', routerLink: '/authentication', exact: true },
      { label: 'Sign Up', routerLink: '/authentication/sign-up', exact: true },
      { label: 'Forgot Password', routerLink: '/authentication/forgot-password', exact: true }
    ]
  }
];
