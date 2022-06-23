import { Directive, Input, Output, HostBinding, HostListener, EventEmitter } from '@angular/core';
import { isNil } from 'lodash';
import * as i0 from "@angular/core";
export class DropdownDirective {
    constructor() {
        this.internalOpen = false;
        this.openChange = new EventEmitter();
    }
    get isOpen() {
        return this.internalOpen;
    }
    onKeyupEsc() {
        this.close();
    }
    onDocumentClick(event) {
        if (event.button !== 2 && !this.isEventFromToggle(event)) {
            this.close();
        }
    }
    open() {
        if (!this.internalOpen) {
            this.internalOpen = true;
            this.openChange.emit(true);
        }
    }
    close() {
        if (this.internalOpen) {
            this.internalOpen = false;
            this.openChange.emit(false);
        }
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    isEventFromToggle(event) {
        return !isNil(this.toggleElement) && this.toggleElement.contains(event.target);
    }
}
DropdownDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropdownDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DropdownDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DropdownDirective, selector: "[ngxDropdown]", inputs: { internalOpen: ["open", "internalOpen"] }, outputs: { openChange: "openChange" }, host: { listeners: { "keyup.esc": "onKeyupEsc()", "document:click": "onDocumentClick($event)" }, properties: { "class.show": "this.isOpen" } }, exportAs: ["ngxDropdown"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropdownDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxDropdown]',
                    exportAs: 'ngxDropdown'
                }]
        }], propDecorators: { internalOpen: [{
                type: Input,
                args: ['open']
            }], openChange: [{
                type: Output
            }], isOpen: [{
                type: HostBinding,
                args: ['class.show']
            }], onKeyupEsc: [{
                type: HostListener,
                args: ['keyup.esc']
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvZGlyZWN0aXZlcy9kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBTS9CLE1BQU0sT0FBTyxpQkFBaUI7SUFKOUI7UUFNaUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7S0EyQ3BEO0lBekNDLElBQStCLE1BQU07UUFDbkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFHRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUdELGVBQWUsQ0FBQyxLQUFpQjtRQUMvQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRU8saUJBQWlCLENBQUMsS0FBaUI7UUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7OzhHQTdDVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUo3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsYUFBYTtpQkFDeEI7OEJBR2dCLFlBQVk7c0JBQTFCLEtBQUs7dUJBQUMsTUFBTTtnQkFDSCxVQUFVO3NCQUFuQixNQUFNO2dCQUV3QixNQUFNO3NCQUFwQyxXQUFXO3VCQUFDLFlBQVk7Z0JBS3pCLFVBQVU7c0JBRFQsWUFBWTt1QkFBQyxXQUFXO2dCQU16QixlQUFlO3NCQURkLFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc05pbCB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3hEcm9wZG93bl0nLFxyXG4gIGV4cG9ydEFzOiAnbmd4RHJvcGRvd24nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkRpcmVjdGl2ZSB7XHJcbiAgdG9nZ2xlRWxlbWVudDogYW55O1xyXG4gIEBJbnB1dCgnb3BlbicpIGludGVybmFsT3BlbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKSBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxPcGVuO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAuZXNjJylcclxuICBvbktleXVwRXNjKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uRG9jdW1lbnRDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMiAmJiAhdGhpcy5pc0V2ZW50RnJvbVRvZ2dsZShldmVudCkpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pbnRlcm5hbE9wZW4pIHtcclxuICAgICAgdGhpcy5pbnRlcm5hbE9wZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW50ZXJuYWxPcGVuKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxPcGVuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNFdmVudEZyb21Ub2dnbGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhaXNOaWwodGhpcy50b2dnbGVFbGVtZW50KSAmJiB0aGlzLnRvZ2dsZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcclxuICB9XHJcbn1cclxuIl19