import { Component } from '@angular/core';
import { PricingComponent } from '../common/pricing/pricing.component';
import { DashboardShowcaseComponent } from '../common/dashboard-showcase/dashboard-showcase.component';
import { FaqComponent } from '../common/faq/faq.component';

@Component({
    selector: 'app-md-pricing',
    imports: [PricingComponent, DashboardShowcaseComponent, FaqComponent],
    templateUrl: './md-pricing.component.html',
    styleUrl: './md-pricing.component.scss'
})
export class MdPricingComponent {}