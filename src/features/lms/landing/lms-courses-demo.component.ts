import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { BackToTopComponent } from './common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-lms-courses-demo',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, BackToTopComponent],
    templateUrl: './lms-courses-demo.component.html',
    styleUrl: './lms-courses-demo.component.scss'
})
export class LmsCoursesDemoComponent {}