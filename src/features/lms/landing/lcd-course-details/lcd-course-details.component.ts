import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursesYouMayLikeComponent } from './courses-you-may-like/courses-you-may-like.component';

@Component({
    selector: 'app-lcd-course-details',
    imports: [RouterLink, NgClass, NgIf, CoursesYouMayLikeComponent],
    templateUrl: './lcd-course-details.component.html',
    styleUrl: './lcd-course-details.component.scss'
})
export class LcdCourseDetailsComponent {

    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

    // Course Preview Popup
	isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}