import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-testimonials',
    imports: [NgIf],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

    // Video Popup
	isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}