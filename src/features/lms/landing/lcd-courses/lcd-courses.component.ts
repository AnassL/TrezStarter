import { Component } from '@angular/core';
import { PageBannerComponent } from '../common/page-banner/page-banner.component';
import { HowItWorksComponent } from '../common/how-it-works/how-it-works.component';
import { CtaComponent } from '../common/cta/cta.component';
import { PricingComponent } from '../common/pricing/pricing.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-lcd-courses',
    imports: [RouterLink, PageBannerComponent, HowItWorksComponent, CtaComponent, PricingComponent],
    templateUrl: './lcd-courses.component.html',
    styleUrl: './lcd-courses.component.scss'
})
export class LcdCoursesComponent {}