import { Component } from '@angular/core';
import { DashboardShowcaseComponent } from '../common/dashboard-showcase/dashboard-showcase.component';
import { FaqComponent } from '../common/faq/faq.component';
import { WhyTrezoComponent } from '../common/why-trezo/why-trezo.component';

@Component({
    selector: 'app-md-features',
    imports: [WhyTrezoComponent , DashboardShowcaseComponent, FaqComponent],
    templateUrl: './md-features.component.html',
    styleUrl: './md-features.component.scss'
})
export class MdFeaturesComponent {}