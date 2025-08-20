import { Component } from '@angular/core';
import { NavbarComponent } from './common/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { BackToTopComponent } from './common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-marketing-demo',
    imports: [NavbarComponent, RouterOutlet, FooterComponent, BackToTopComponent],
    templateUrl: './marketing-demo.component.html',
    styleUrl: './marketing-demo.component.scss'
})
export class MarketingDemoComponent {}