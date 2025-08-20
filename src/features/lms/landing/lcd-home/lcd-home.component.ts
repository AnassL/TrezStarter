import { Component } from '@angular/core';
import { BannerComponent } from '../common/banner/banner.component';
import { LearnersOrganizationsComponent } from '../common/learners-organizations/learners-organizations.component';
import { WhyChooseUsComponent } from '../common/why-choose-us/why-choose-us.component';
import { CoursesComponent } from '../common/courses/courses.component';
import { HowItWorksComponent } from '../common/how-it-works/how-it-works.component';
import { TestimonialsComponent } from '../common/testimonials/testimonials.component';
import { PricingComponent } from '../common/pricing/pricing.component';
import { CtaComponent } from '../common/cta/cta.component';
import { FaqComponent } from '../common/faq/faq.component';

@Component({
    selector: 'app-lcd-home',
    imports: [BannerComponent, LearnersOrganizationsComponent, WhyChooseUsComponent, CoursesComponent, HowItWorksComponent, TestimonialsComponent, PricingComponent, CtaComponent, FaqComponent],
    templateUrl: './lcd-home.component.html',
    styleUrl: './lcd-home.component.scss'
})
export class LcdHomeComponent {}