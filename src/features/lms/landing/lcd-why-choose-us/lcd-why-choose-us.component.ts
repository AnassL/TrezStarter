import { Component } from '@angular/core';
import { PageBannerComponent } from '../common/page-banner/page-banner.component';
import { LearnersOrganizationsComponent } from '../common/learners-organizations/learners-organizations.component';
import { WhyChooseUsComponent } from '../common/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from '../common/testimonials/testimonials.component';
import { FaqComponent } from '../common/faq/faq.component';

@Component({
    selector: 'app-lcd-why-choose-us',
    imports: [PageBannerComponent, LearnersOrganizationsComponent, WhyChooseUsComponent, TestimonialsComponent, FaqComponent],
    templateUrl: './lcd-why-choose-us.component.html',
    styleUrl: './lcd-why-choose-us.component.scss'
})
export class LcdWhyChooseUsComponent {}