import { Component } from '@angular/core';
import { PageBannerComponent } from '../common/page-banner/page-banner.component';
import { CtaComponent } from '../common/cta/cta.component';
import { HowItWorksComponent } from '../common/how-it-works/how-it-works.component';

@Component({
    selector: 'app-lcd-how-it-works',
    imports: [PageBannerComponent, CtaComponent, HowItWorksComponent],
    templateUrl: './lcd-how-it-works.component.html',
    styleUrl: './lcd-how-it-works.component.scss'
})
export class LcdHowItWorksComponent {}