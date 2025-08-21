import { Component, Input } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { sidebarSections, SidebarSection } from './sidebar-data';
import { simplifiedSidebarSections } from './sidebar-selected-data';

@Component({
  selector: 'app-sidebar',
  imports: [NgScrollbarModule, RouterLinkActive, RouterLink, NgClass],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  // Input to determine which data source to use
  @Input() useSimplifiedData: boolean = false;

  // Accordion state management
  openSectionIndex: number = -1;
  openSectionIndex2: number = -1;
  openSectionIndex3: number = -1;

  // Get the appropriate sidebar sections based on the input
  get sidebarSections(): SidebarSection[] {
    return this.useSimplifiedData ? simplifiedSidebarSections : sidebarSections;
  }

  // Toggle accordion section
  toggleSection(index: number): void {
    if (this.openSectionIndex === index) {
      this.openSectionIndex = -1;
    } else {
      this.openSectionIndex = index;
    }
  }

  // Check if section is open
  isSectionOpen(index: number): boolean {
    return this.openSectionIndex === index;
  }

  // Toggle second level accordion section
  toggleSection2(index: number): void {
    if (this.openSectionIndex2 === index) {
      this.openSectionIndex2 = -1;
    } else {
      this.openSectionIndex2 = index;
    }
  }

  // Check if second level section is open
  isSectionOpen2(index: number): boolean {
    return this.openSectionIndex2 === index;
  }

  // Toggle third level accordion section
  toggleSection3(index: number): void {
    if (this.openSectionIndex3 === index) {
      this.openSectionIndex3 = -1;
    } else {
      this.openSectionIndex3 = index;
    }
  }

  // Check if third level section is open
  isSectionOpen3(index: number): boolean {
    return this.openSectionIndex3 === index;
  }
}
