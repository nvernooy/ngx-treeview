import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TreeviewI18n {
}
TreeviewI18n.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewI18n, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TreeviewI18n.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewI18n });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewI18n, decorators: [{
            type: Injectable
        }] });
export class DefaultTreeviewI18n extends TreeviewI18n {
    getText(selection) {
        if (selection.uncheckedItems.length === 0) {
            if (selection.checkedItems.length > 0) {
                return this.getAllCheckboxText();
            }
            else {
                return '';
            }
        }
        switch (selection.checkedItems.length) {
            case 0:
                return 'Select options';
            case 1:
                return selection.checkedItems[0].text;
            default:
                return `${selection.checkedItems.length} options selected`;
        }
    }
    getAllCheckboxText() {
        return 'All';
    }
    getFilterPlaceholder() {
        return 'Filter';
    }
    getFilterNoItemsFoundText() {
        return 'No items found';
    }
    getTooltipCollapseExpandText(isCollapse) {
        return isCollapse ? 'Expand' : 'Collapse';
    }
}
DefaultTreeviewI18n.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefaultTreeviewI18n, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
DefaultTreeviewI18n.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefaultTreeviewI18n });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefaultTreeviewI18n, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmVldmlldy9zcmMvbGliL21vZGVscy90cmVldmlldy1pMThuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDLE1BQU0sT0FBZ0IsWUFBWTs7eUdBQVosWUFBWTs2R0FBWixZQUFZOzJGQUFaLFlBQVk7a0JBRGpDLFVBQVU7O0FBVVgsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFlBQVk7SUFDbkQsT0FBTyxDQUFDLFNBQTRCO1FBQ2xDLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pDLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRjtRQUVELFFBQVEsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDckMsS0FBSyxDQUFDO2dCQUNKLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSyxDQUFDO2dCQUNKLE9BQU8sU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEM7Z0JBQ0UsT0FBTyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxtQkFBbUIsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCx5QkFBeUI7UUFDdkIsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRUQsNEJBQTRCLENBQUMsVUFBbUI7UUFDOUMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzVDLENBQUM7O2dIQWxDVSxtQkFBbUI7b0hBQW5CLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVldmlld1NlbGVjdGlvbiB9IGZyb20gJy4vdHJlZXZpZXctaXRlbSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmVldmlld0kxOG4ge1xyXG4gIGFic3RyYWN0IGdldFRleHQoc2VsZWN0aW9uOiBUcmVldmlld1NlbGVjdGlvbik6IHN0cmluZztcclxuICBhYnN0cmFjdCBnZXRBbGxDaGVja2JveFRleHQoKTogc3RyaW5nO1xyXG4gIGFic3RyYWN0IGdldEZpbHRlclBsYWNlaG9sZGVyKCk6IHN0cmluZztcclxuICBhYnN0cmFjdCBnZXRGaWx0ZXJOb0l0ZW1zRm91bmRUZXh0KCk6IHN0cmluZztcclxuICBhYnN0cmFjdCBnZXRUb29sdGlwQ29sbGFwc2VFeHBhbmRUZXh0KGlzQ29sbGFwc2U6IGJvb2xlYW4pOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRUcmVldmlld0kxOG4gZXh0ZW5kcyBUcmVldmlld0kxOG4ge1xyXG4gIGdldFRleHQoc2VsZWN0aW9uOiBUcmVldmlld1NlbGVjdGlvbik6IHN0cmluZyB7XHJcbiAgICBpZiAoc2VsZWN0aW9uLnVuY2hlY2tlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBpZiAoc2VsZWN0aW9uLmNoZWNrZWRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsQ2hlY2tib3hUZXh0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChzZWxlY3Rpb24uY2hlY2tlZEl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuICdTZWxlY3Qgb3B0aW9ucyc7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gc2VsZWN0aW9uLmNoZWNrZWRJdGVtc1swXS50ZXh0O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBgJHtzZWxlY3Rpb24uY2hlY2tlZEl0ZW1zLmxlbmd0aH0gb3B0aW9ucyBzZWxlY3RlZGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRBbGxDaGVja2JveFRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnQWxsJztcclxuICB9XHJcblxyXG4gIGdldEZpbHRlclBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0ZpbHRlcic7XHJcbiAgfVxyXG5cclxuICBnZXRGaWx0ZXJOb0l0ZW1zRm91bmRUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ05vIGl0ZW1zIGZvdW5kJztcclxuICB9XHJcblxyXG4gIGdldFRvb2x0aXBDb2xsYXBzZUV4cGFuZFRleHQoaXNDb2xsYXBzZTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gaXNDb2xsYXBzZSA/ICdFeHBhbmQnIDogJ0NvbGxhcHNlJztcclxuICB9XHJcbn1cclxuIl19