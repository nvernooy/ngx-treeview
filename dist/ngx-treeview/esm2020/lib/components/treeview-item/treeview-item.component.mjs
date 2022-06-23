import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNil } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "../../models/treeview-config";
import * as i2 from "@angular/common";
export class TreeviewItemComponent {
    constructor(defaultConfig) {
        this.defaultConfig = defaultConfig;
        this.checkedChange = new EventEmitter();
        this.onCollapseExpand = () => {
            this.item.collapsed = !this.item.collapsed;
        };
        this.onCheckedChange = () => {
            const checked = this.item.checked;
            if (!isNil(this.item.children) && !this.config.decoupleChildFromParent) {
                this.item.children.forEach(child => child.setCheckedRecursive(checked));
            }
            this.checkedChange.emit(checked);
        };
        this.config = this.defaultConfig;
    }
    onChildCheckedChange(child, checked) {
        if (!this.config.decoupleChildFromParent) {
            let itemChecked = null;
            for (const childItem of this.item.children) {
                if (itemChecked === null) {
                    itemChecked = childItem.checked;
                }
                else if (itemChecked !== childItem.checked) {
                    itemChecked = undefined;
                    break;
                }
            }
            if (itemChecked === null) {
                itemChecked = false;
            }
            if (this.item.checked !== itemChecked) {
                this.item.checked = itemChecked;
            }
        }
        this.checkedChange.emit(checked);
    }
}
TreeviewItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewItemComponent, deps: [{ token: i1.TreeviewConfig }], target: i0.ɵɵFactoryTarget.Component });
TreeviewItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TreeviewItemComponent, selector: "ngx-treeview-item", inputs: { config: "config", template: "template", item: "item" }, outputs: { checkedChange: "checkedChange" }, ngImport: i0, template: "<div *ngIf=\"item\" class=\"treeview-item\">\r\n  <ng-template [ngTemplateOutlet]=\"template\"\r\n    [ngTemplateOutletContext]=\"{item: item, onCollapseExpand: onCollapseExpand, onCheckedChange: onCheckedChange}\">\r\n  </ng-template>\r\n  <div *ngIf=\"!item.collapsed\">\r\n    <ngx-treeview-item [config]=\"config\" *ngFor=\"let child of item.children\" [item]=\"child\" [template]=\"template\"\r\n      (checkedChange)=\"onChildCheckedChange(child, $event)\">\r\n    </ngx-treeview-item>\r\n  </div>\r\n</div>\r\n", styles: [":host{display:block}:host .treeview-item{white-space:nowrap}:host .treeview-item .treeview-item{margin-left:2rem}\n"], components: [{ type: TreeviewItemComponent, selector: "ngx-treeview-item", inputs: ["config", "template", "item"], outputs: ["checkedChange"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-treeview-item', template: "<div *ngIf=\"item\" class=\"treeview-item\">\r\n  <ng-template [ngTemplateOutlet]=\"template\"\r\n    [ngTemplateOutletContext]=\"{item: item, onCollapseExpand: onCollapseExpand, onCheckedChange: onCheckedChange}\">\r\n  </ng-template>\r\n  <div *ngIf=\"!item.collapsed\">\r\n    <ngx-treeview-item [config]=\"config\" *ngFor=\"let child of item.children\" [item]=\"child\" [template]=\"template\"\r\n      (checkedChange)=\"onChildCheckedChange(child, $event)\">\r\n    </ngx-treeview-item>\r\n  </div>\r\n</div>\r\n", styles: [":host{display:block}:host .treeview-item{white-space:nowrap}:host .treeview-item .treeview-item{margin-left:2rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TreeviewConfig }]; }, propDecorators: { config: [{
                type: Input
            }], template: [{
                type: Input
            }], item: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL3RyZWV2aWV3LWl0ZW0vdHJlZXZpZXctaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdHJlZXZpZXcvc3JjL2xpYi9jb21wb25lbnRzL3RyZWV2aWV3LWl0ZW0vdHJlZXZpZXctaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7QUFVL0IsTUFBTSxPQUFPLHFCQUFxQjtJQU1oQyxZQUNVLGFBQTZCO1FBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUg3QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFRdEQscUJBQWdCLEdBQUcsR0FBRyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDN0MsQ0FBQyxDQUFBO1FBRUQsb0JBQWUsR0FBRyxHQUFHLEVBQUU7WUFDckIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRTtnQkFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDekU7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUE7UUFiQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDbkMsQ0FBQztJQWNELG9CQUFvQixDQUFDLEtBQW1CLEVBQUUsT0FBZ0I7UUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUU7WUFDeEMsSUFBSSxXQUFXLEdBQVksSUFBSSxDQUFDO1lBQ2hDLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzFDLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtvQkFDeEIsV0FBVyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7aUJBQ2pDO3FCQUFNLElBQUksV0FBVyxLQUFLLFNBQVMsQ0FBQyxPQUFPLEVBQUU7b0JBQzVDLFdBQVcsR0FBRyxTQUFTLENBQUM7b0JBQ3hCLE1BQU07aUJBQ1A7YUFDRjtZQUVELElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtnQkFDeEIsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUNyQjtZQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7YUFDakM7U0FFRjtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2tIQS9DVSxxQkFBcUI7c0dBQXJCLHFCQUFxQix3S0NYbEMsdWdCQVVBLHdKRENhLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLG1CQUFtQjtxR0FLcEIsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNJLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNOaWwgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBUcmVldmlld0l0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaXRlbSc7XHJcbmltcG9ydCB7IFRyZWV2aWV3Q29uZmlnIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyZWV2aWV3LWNvbmZpZyc7XHJcbmltcG9ydCB7IFRyZWV2aWV3SXRlbVRlbXBsYXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pdGVtLXRlbXBsYXRlLWNvbnRleHQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtdHJlZXZpZXctaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWV2aWV3LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RyZWV2aWV3LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZXZpZXdJdGVtQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjb25maWc6IFRyZWV2aWV3Q29uZmlnO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUcmVldmlld0l0ZW1UZW1wbGF0ZUNvbnRleHQ+O1xyXG4gIEBJbnB1dCgpIGl0ZW06IFRyZWV2aWV3SXRlbTtcclxuICBAT3V0cHV0KCkgY2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGRlZmF1bHRDb25maWc6IFRyZWV2aWV3Q29uZmlnXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcclxuICB9XHJcblxyXG4gIG9uQ29sbGFwc2VFeHBhbmQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLml0ZW0uY29sbGFwc2VkID0gIXRoaXMuaXRlbS5jb2xsYXBzZWQ7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrZWRDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja2VkID0gdGhpcy5pdGVtLmNoZWNrZWQ7XHJcbiAgICBpZiAoIWlzTmlsKHRoaXMuaXRlbS5jaGlsZHJlbikgJiYgIXRoaXMuY29uZmlnLmRlY291cGxlQ2hpbGRGcm9tUGFyZW50KSB7XHJcbiAgICAgIHRoaXMuaXRlbS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnNldENoZWNrZWRSZWN1cnNpdmUoY2hlY2tlZCkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja2VkQ2hhbmdlLmVtaXQoY2hlY2tlZCk7XHJcbiAgfVxyXG5cclxuICBvbkNoaWxkQ2hlY2tlZENoYW5nZShjaGlsZDogVHJlZXZpZXdJdGVtLCBjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY29uZmlnLmRlY291cGxlQ2hpbGRGcm9tUGFyZW50KSB7XHJcbiAgICAgIGxldCBpdGVtQ2hlY2tlZDogYm9vbGVhbiA9IG51bGw7XHJcbiAgICAgIGZvciAoY29uc3QgY2hpbGRJdGVtIG9mIHRoaXMuaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgIGlmIChpdGVtQ2hlY2tlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgaXRlbUNoZWNrZWQgPSBjaGlsZEl0ZW0uY2hlY2tlZDtcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW1DaGVja2VkICE9PSBjaGlsZEl0ZW0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgaXRlbUNoZWNrZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtQ2hlY2tlZCA9PT0gbnVsbCkge1xyXG4gICAgICAgIGl0ZW1DaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLml0ZW0uY2hlY2tlZCAhPT0gaXRlbUNoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLml0ZW0uY2hlY2tlZCA9IGl0ZW1DaGVja2VkO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KGNoZWNrZWQpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiaXRlbVwiIGNsYXNzPVwidHJlZXZpZXctaXRlbVwiPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiXHJcbiAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2l0ZW06IGl0ZW0sIG9uQ29sbGFwc2VFeHBhbmQ6IG9uQ29sbGFwc2VFeHBhbmQsIG9uQ2hlY2tlZENoYW5nZTogb25DaGVja2VkQ2hhbmdlfVwiPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPGRpdiAqbmdJZj1cIiFpdGVtLmNvbGxhcHNlZFwiPlxyXG4gICAgPG5neC10cmVldmlldy1pdGVtIFtjb25maWddPVwiY29uZmlnXCIgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGl0ZW0uY2hpbGRyZW5cIiBbaXRlbV09XCJjaGlsZFwiIFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZVwiXHJcbiAgICAgIChjaGVja2VkQ2hhbmdlKT1cIm9uQ2hpbGRDaGVja2VkQ2hhbmdlKGNoaWxkLCAkZXZlbnQpXCI+XHJcbiAgICA8L25neC10cmVldmlldy1pdGVtPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19