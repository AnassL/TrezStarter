import { Routes } from '@angular/router';
import { DashboardComponent } from '../../src/features/dashboard/dashboard.component';
import { LmsComponent } from '../features/lms/admin/lms.component';
import { MarketingComponent } from '../features/marketing/admin/marketing.component';
import { AnalyticsComponent } from '../../src/features/dashboard/analytics/analytics.component';
import { LmsPageComponent } from '../app/pages/lms-page/lms-page.component';
import { CoursesComponent } from '../features/lms/admin/courses/courses.component';
import { LCourseDetailsComponent } from './pages/lms-page/l-course-details/l-course-details.component';
import { LCreateCourseComponent } from './pages/lms-page/l-create-course/l-create-course.component';
import { LEditCourseComponent } from './pages/lms-page/l-edit-course/l-edit-course.component';
import { LInstructorsComponent } from './pages/lms-page/l-instructors/l-instructors.component';
import { LLessonPreviewComponent } from './pages/lms-page/l-lesson-preview/l-lesson-preview.component';

import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { LockScreenComponent } from './authentication/lock-screen/lock-screen.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { MarketingDemoComponent } from '../features/marketing/landing/marketing-demo.component';
import { MdHomeComponent } from '../features/marketing/landing/md-home/md-home.component';
import { MdFeaturesComponent } from '../features/marketing/landing/md-features/md-features.component';
import { MdPricingComponent } from '../features/marketing/landing/md-pricing/md-pricing.component';
import { MdBlogComponent } from '../features/marketing/landing/md-blog/md-blog.component';
import { MdBlogDetailsComponent } from '../features/marketing/landing/md-blog-details/md-blog-details.component';


// Landing page imports from TrezLand (only LMS and Marketing)
import { LmsCoursesDemoComponent } from '../features/lms/landing/lms-courses-demo.component';
import { LcdHomeComponent } from '../features/lms/landing/lcd-home/lcd-home.component';
import { LcdWhyChooseUsComponent } from '../features/lms/landing/lcd-why-choose-us/lcd-why-choose-us.component';
import { LcdCoursesComponent } from '../features/lms/landing/lcd-courses/lcd-courses.component';
import { LcdCourseDetailsComponent } from '../features/lms/landing/lcd-course-details/lcd-course-details.component';
import { LcdHowItWorksComponent } from '../features/lms/landing/lcd-how-it-works/lcd-how-it-works.component';
import { LcdPricingComponent } from '../features/lms/landing/lcd-pricing/lcd-pricing.component';
import { LcdCheckoutComponent } from '../features/lms/landing/lcd-checkout/lcd-checkout.component';
import { LCoursesComponent } from './pages/lms-page/l-courses/l-courses.component';



export const simplifiedRoutes: Routes = [
    // Admin routes
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {path: '', component: LmsComponent},
            {path: 'lms', component: LmsComponent},
            {path: 'marketing', component: MarketingComponent},
            {path: 'analytics', component: AnalyticsComponent},
            {
                path: 'lms-page',
                component: LmsPageComponent,
                children: [
                    {path: '', component: LCoursesComponent},
                    {path: 'course-details', component: LCourseDetailsComponent},
                    {path: 'create-course', component: LCreateCourseComponent},
                    {path: 'edit-course', component: LEditCourseComponent},
                    {path: 'instructors', component: LInstructorsComponent},
                    {path: 'lesson-preview', component: LLessonPreviewComponent}
                ]
            }
        ]
    },
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            {path: '', component: SignInComponent},
            {path: 'sign-up', component: SignUpComponent},
            {path: 'forgot-password', component: ForgotPasswordComponent},
            {path: 'reset-password', component: ResetPasswordComponent},
            {path: 'confirm-email', component: ConfirmEmailComponent},
            {path: 'lock-screen', component: LockScreenComponent},
            {path: 'logout', component: LogoutComponent}
        ]
    },

    // Landing page routes from TrezLand
    {
        path: 'lms-courses-demo',
        component: LmsCoursesDemoComponent,
        children: [
            {path: '', component: LcdHomeComponent},
            {path: 'why-choose-us', component: LcdWhyChooseUsComponent},
            {path: 'courses', component: LcdCoursesComponent},
            {path: 'course-details', component: LcdCourseDetailsComponent},
            {path: 'how-it-works', component: LcdHowItWorksComponent},
            {path: 'pricing', component: LcdPricingComponent},
            {path: 'checkout', component: LcdCheckoutComponent}
        ]
    },
    {
        path: 'marketing-demo',
        component: MarketingDemoComponent,
        children: [
            {path: '', component: MdHomeComponent},
            {path: 'features', component: MdFeaturesComponent},
            {path: 'pricing', component: MdPricingComponent},
            {path: 'blog', component: MdBlogComponent},
            {path: 'blog-details', component: MdBlogDetailsComponent}
        ]
    },
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];
