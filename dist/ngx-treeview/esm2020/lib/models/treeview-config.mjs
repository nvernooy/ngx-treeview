import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TreeviewConfig {
    constructor() {
        this.hasAllCheckBox = true;
        this.hasFilter = false;
        this.hasCollapseExpand = false;
        this.decoupleChildFromParent = false;
        this.maxHeight = 500;
    }
    get hasDivider() {
        return this.hasFilter || this.hasAllCheckBox || this.hasCollapseExpand;
    }
    static create(fields) {
        const config = new TreeviewConfig();
        Object.assign(config, fields);
        return config;
    }
}
TreeviewConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TreeviewConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewConfig });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewConfig, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvbW9kZWxzL3RyZWV2aWV3LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNLE9BQU8sY0FBYztJQUQzQjtRQUVFLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLDRCQUF1QixHQUFHLEtBQUssQ0FBQztRQUNoQyxjQUFTLEdBQUcsR0FBRyxDQUFDO0tBaUJqQjtJQWZDLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUN6RSxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQU1wQjtRQUNDLE1BQU0sTUFBTSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7MkdBckJVLGNBQWM7K0dBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJlZXZpZXdDb25maWcge1xyXG4gIGhhc0FsbENoZWNrQm94ID0gdHJ1ZTtcclxuICBoYXNGaWx0ZXIgPSBmYWxzZTtcclxuICBoYXNDb2xsYXBzZUV4cGFuZCA9IGZhbHNlO1xyXG4gIGRlY291cGxlQ2hpbGRGcm9tUGFyZW50ID0gZmFsc2U7XHJcbiAgbWF4SGVpZ2h0ID0gNTAwO1xyXG5cclxuICBnZXQgaGFzRGl2aWRlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmhhc0ZpbHRlciB8fCB0aGlzLmhhc0FsbENoZWNrQm94IHx8IHRoaXMuaGFzQ29sbGFwc2VFeHBhbmQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZShmaWVsZHM/OiB7XHJcbiAgICBoYXNBbGxDaGVja0JveD86IGJvb2xlYW4sXHJcbiAgICBoYXNGaWx0ZXI/OiBib29sZWFuLFxyXG4gICAgaGFzQ29sbGFwc2VFeHBhbmQ/OiBib29sZWFuLFxyXG4gICAgZGVjb3VwbGVDaGlsZEZyb21QYXJlbnQ/OiBib29sZWFuXHJcbiAgICBtYXhIZWlnaHQ/OiBudW1iZXIsXHJcbiAgfSk6IFRyZWV2aWV3Q29uZmlnIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBUcmVldmlld0NvbmZpZygpO1xyXG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGZpZWxkcyk7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxufVxyXG4iXX0=