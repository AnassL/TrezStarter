import { Component } from '@angular/core';
import { BannerComponent } from '../common/banner/banner.component';
import { PartnersComponent } from '../common/partners/partners.component';
import { AboutUsComponent } from '../common/about-us/about-us.component';
import { WhyTrezoComponent } from '../common/why-trezo/why-trezo.component';
import { DashboardShowcaseComponent } from '../common/dashboard-showcase/dashboard-showcase.component';
import { UseCasesIdealUsersComponent } from '../common/use-cases-ideal-users/use-cases-ideal-users.component';
import { TestimonialsComponent } from '../common/testimonials/testimonials.component';
import { PricingComponent } from '../common/pricing/pricing.component';
import { BlogComponent } from '../common/blog/blog.component';

@Component({
    selector: 'app-md-home',
    imports: [BannerComponent, PartnersComponent, AboutUsComponent, WhyTrezoComponent, DashboardShowcaseComponent, UseCasesIdealUsersComponent, TestimonialsComponent, PricingComponent, BlogComponent],
    templateUrl: './md-home.component.html',
    styleUrl: './md-home.component.scss'
})
export class MdHomeComponent {}