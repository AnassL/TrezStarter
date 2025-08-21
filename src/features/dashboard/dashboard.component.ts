import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../app/common/footer/footer.component';
import { HeaderComponent } from '../../app/common/header/header.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SidebarComponent } from '../../app/common/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        RouterOutlet, 
        HeaderComponent, 
        SidebarComponent, 
        FooterComponent,
        NgScrollbarModule,
        FormsModule
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  sidebarMode: 'selected' | 'complete' = 'selected';
}
