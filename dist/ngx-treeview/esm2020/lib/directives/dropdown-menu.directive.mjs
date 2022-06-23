import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./dropdown.directive";
export class DropdownMenuDirective {
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
}
DropdownMenuDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropdownMenuDirective, deps: [{ token: i1.DropdownDirective }], target: i0.ɵɵFactoryTarget.Directive });
DropdownMenuDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: DropdownMenuDirective, selector: "[ngxDropdownMenu]", host: { properties: { "class.dropdown-menu": "true", "class.show": "dropdown.isOpen" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropdownMenuDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxDropdownMenu]',
                    host: {
                        '[class.dropdown-menu]': 'true',
                        '[class.show]': 'dropdown.isOpen'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i1.DropdownDirective }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsTUFBTSxlQUFlLENBQUM7OztBQVV2RCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQ1MsUUFBMkI7UUFBM0IsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7SUFDaEMsQ0FBQzs7a0hBSE0scUJBQXFCO3NHQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFQakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixJQUFJLEVBQUU7d0JBQ0osdUJBQXVCLEVBQUUsTUFBTTt3QkFDL0IsY0FBYyxFQUFFLGlCQUFpQjtxQkFDbEM7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmd4RHJvcGRvd25NZW51XScsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5kcm9wZG93bi1tZW51XSc6ICd0cnVlJyxcclxuICAgICdbY2xhc3Muc2hvd10nOiAnZHJvcGRvd24uaXNPcGVuJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTWVudURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZHJvcGRvd246IERyb3Bkb3duRGlyZWN0aXZlXHJcbiAgKSB7IH1cclxufVxyXG4iXX0=