import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-simplified-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgScrollbarModule],
  templateUrl: './simplified-sidebar.component.html',
  styleUrls: ['./simplified-sidebar.component.scss']
})
export class SimplifiedSidebarComponent {
  sectionStates = new Map<number, boolean>([
    [0, true], // LMS section
    [1, true], // Marketing section
    [2, true]  // Authentication section
  ]);

  isSectionOpen(index: number): boolean {
    return this.sectionStates.get(index) ?? false;
  }

  toggleSection(index: number): void {
    this.sectionStates.set(index, !this.isSectionOpen(index));
  }
}
