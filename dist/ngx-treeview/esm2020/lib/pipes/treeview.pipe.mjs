import { Pipe } from '@angular/core';
import { isNil } from 'lodash';
import { TreeviewItem } from '../models/treeview-item';
import * as i0 from "@angular/core";
export class TreeviewPipe {
    transform(objects, textField) {
        if (isNil(objects)) {
            return undefined;
        }
        return objects.map(object => new TreeviewItem({ text: object[textField], value: object }));
    }
}
TreeviewPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TreeviewPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewPipe, name: "ngxTreeview" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'ngxTreeview'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXcucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10cmVldmlldy9zcmMvbGliL3BpcGVzL3RyZWV2aWV3LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBS3ZELE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFNBQVMsQ0FBQyxPQUFjLEVBQUUsU0FBaUI7UUFDekMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDOzt5R0FQVSxZQUFZO3VHQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFIeEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsYUFBYTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTmlsIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgVHJlZXZpZXdJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWV2aWV3LWl0ZW0nO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICduZ3hUcmVldmlldydcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWV2aWV3UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShvYmplY3RzOiBhbnlbXSwgdGV4dEZpZWxkOiBzdHJpbmcpOiBUcmVldmlld0l0ZW1bXSB7XHJcbiAgICBpZiAoaXNOaWwob2JqZWN0cykpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqZWN0cy5tYXAob2JqZWN0ID0+IG5ldyBUcmVldmlld0l0ZW0oeyB0ZXh0OiBvYmplY3RbdGV4dEZpZWxkXSwgdmFsdWU6IG9iamVjdCB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==