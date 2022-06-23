import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directives/dropdown.directive';
import { DropdownMenuDirective } from './directives/dropdown-menu.directive';
import { DropdownToggleDirective } from './directives/dropdown-toggle.directive';
import { DropdownTreeviewComponent } from './components/dropdown-treeview/dropdown-treeview.component';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { TreeviewItemComponent } from './components/treeview-item/treeview-item.component';
import { TreeviewPipe } from './pipes/treeview.pipe';
import { TreeviewI18n, DefaultTreeviewI18n } from './models/treeview-i18n';
import { TreeviewConfig } from './models/treeview-config';
import { TreeviewEventParser, DefaultTreeviewEventParser } from './helpers/treeview-event-parser';
import * as i0 from "@angular/core";
export class TreeviewModule {
    static forRoot() {
        return {
            ngModule: TreeviewModule,
            providers: [
                TreeviewConfig,
                { provide: TreeviewI18n, useClass: DefaultTreeviewI18n },
                { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }
            ]
        };
    }
}
TreeviewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeviewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewModule, declarations: [TreeviewComponent,
        TreeviewItemComponent,
        TreeviewPipe,
        DropdownDirective,
        DropdownMenuDirective,
        DropdownToggleDirective,
        DropdownTreeviewComponent], imports: [FormsModule,
        CommonModule], exports: [TreeviewComponent,
        TreeviewPipe,
        DropdownTreeviewComponent] });
TreeviewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewModule, imports: [[
            FormsModule,
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                        CommonModule
                    ],
                    declarations: [
                        TreeviewComponent,
                        TreeviewItemComponent,
                        TreeviewPipe,
                        DropdownDirective,
                        DropdownMenuDirective,
                        DropdownToggleDirective,
                        DropdownTreeviewComponent
                    ], exports: [
                        TreeviewComponent,
                        TreeviewPipe,
                        DropdownTreeviewComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvdHJlZXZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBcUJsRyxNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsY0FBYztnQkFDZCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO2dCQUN4RCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUU7YUFDdkU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7MkdBVlUsY0FBYzs0R0FBZCxjQUFjLGlCQWJ2QixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2Qix5QkFBeUIsYUFWekIsV0FBVztRQUNYLFlBQVksYUFXWixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLHlCQUF5Qjs0R0FHaEIsY0FBYyxZQWxCaEI7WUFDUCxXQUFXO1lBQ1gsWUFBWTtTQUNiOzJGQWVVLGNBQWM7a0JBbkIxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLHlCQUF5QjtxQkFDMUIsRUFBRSxPQUFPLEVBQUU7d0JBQ1YsaUJBQWlCO3dCQUNqQixZQUFZO3dCQUNaLHlCQUF5QjtxQkFDMUI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJvcGRvd24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJvcGRvd25NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duVHJlZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24tdHJlZXZpZXcvZHJvcGRvd24tdHJlZXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZXZpZXcvdHJlZXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJlZXZpZXdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWV2aWV3LWl0ZW0vdHJlZXZpZXctaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVldmlld1BpcGUgfSBmcm9tICcuL3BpcGVzL3RyZWV2aWV3LnBpcGUnO1xyXG5pbXBvcnQgeyBUcmVldmlld0kxOG4sIERlZmF1bHRUcmVldmlld0kxOG4gfSBmcm9tICcuL21vZGVscy90cmVldmlldy1pMThuJztcclxuaW1wb3J0IHsgVHJlZXZpZXdDb25maWcgfSBmcm9tICcuL21vZGVscy90cmVldmlldy1jb25maWcnO1xyXG5pbXBvcnQgeyBUcmVldmlld0V2ZW50UGFyc2VyLCBEZWZhdWx0VHJlZXZpZXdFdmVudFBhcnNlciB9IGZyb20gJy4vaGVscGVycy90cmVldmlldy1ldmVudC1wYXJzZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBUcmVldmlld0NvbXBvbmVudCxcclxuICAgIFRyZWV2aWV3SXRlbUNvbXBvbmVudCxcclxuICAgIFRyZWV2aWV3UGlwZSxcclxuICAgIERyb3Bkb3duRGlyZWN0aXZlLFxyXG4gICAgRHJvcGRvd25NZW51RGlyZWN0aXZlLFxyXG4gICAgRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXHJcbiAgICBEcm9wZG93blRyZWV2aWV3Q29tcG9uZW50XHJcbiAgXSwgZXhwb3J0czogW1xyXG4gICAgVHJlZXZpZXdDb21wb25lbnQsXHJcbiAgICBUcmVldmlld1BpcGUsXHJcbiAgICBEcm9wZG93blRyZWV2aWV3Q29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZXZpZXdNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VHJlZXZpZXdNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUcmVldmlld01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgVHJlZXZpZXdDb25maWcsXHJcbiAgICAgICAgeyBwcm92aWRlOiBUcmVldmlld0kxOG4sIHVzZUNsYXNzOiBEZWZhdWx0VHJlZXZpZXdJMThuIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBUcmVldmlld0V2ZW50UGFyc2VyLCB1c2VDbGFzczogRGVmYXVsdFRyZWV2aWV3RXZlbnRQYXJzZXIgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=