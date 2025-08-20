import { Component } from '@angular/core';
import { PageBannerComponent } from '../common/page-banner/page-banner.component';
import { CtaComponent } from '../common/cta/cta.component';
import { PricingComponent } from '../common/pricing/pricing.component';
import { LearnersOrganizationsComponent } from '../common/learners-organizations/learners-organizations.component';
import { FaqComponent } from '../common/faq/faq.component';

@Component({
    selector: 'app-lcd-pricing',
    imports: [PageBannerComponent, CtaComponent, PricingComponent, LearnersOrganizationsComponent, FaqComponent],
    templateUrl: './lcd-pricing.component.html',
    styleUrl: './lcd-pricing.component.scss'
})
export class LcdPricingComponent {}