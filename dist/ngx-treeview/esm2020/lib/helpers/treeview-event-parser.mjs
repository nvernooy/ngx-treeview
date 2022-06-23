import { Injectable } from '@angular/core';
import { isNil } from 'lodash';
import * as i0 from "@angular/core";
export class TreeviewEventParser {
}
TreeviewEventParser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewEventParser, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TreeviewEventParser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewEventParser });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeviewEventParser, decorators: [{
            type: Injectable
        }] });
export class DefaultTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const checkedItems = component.selection.checkedItems;
        if (!isNil(checkedItems)) {
            return checkedItems.map(item => item.value);
        }
        return [];
    }
}
DefaultTreeviewEventParser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefaultTreeviewEventParser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
DefaultTreeviewEventParser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefaultTreeviewEventParser });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DefaultTreeviewEventParser, decorators: [{
            type: Injectable
        }] });
export class DownlineTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const items = component.items;
        if (!isNil(items)) {
            let result = [];
            items.forEach(item => {
                const links = this.getLinks(item, null);
                if (!isNil(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        return [];
    }
    getLinks(item, parent) {
        if (!isNil(item.children)) {
            const link = {
                item,
                parent
            };
            let result = [];
            item.children.forEach(child => {
                const links = this.getLinks(child, link);
                if (!isNil(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        if (item.checked) {
            return [{
                    item,
                    parent
                }];
        }
        return null;
    }
}
DownlineTreeviewEventParser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DownlineTreeviewEventParser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
DownlineTreeviewEventParser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DownlineTreeviewEventParser });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DownlineTreeviewEventParser, decorators: [{
            type: Injectable
        }] });
export class OrderDownlineTreeviewEventParser extends TreeviewEventParser {
    constructor() {
        super(...arguments);
        this.currentDownlines = [];
        this.parser = new DownlineTreeviewEventParser();
    }
    getSelectedChange(component) {
        const newDownlines = this.parser.getSelectedChange(component);
        if (this.currentDownlines.length === 0) {
            this.currentDownlines = newDownlines;
        }
        else {
            const intersectDownlines = [];
            this.currentDownlines.forEach(downline => {
                let foundIndex = -1;
                const length = newDownlines.length;
                for (let i = 0; i < length; i++) {
                    if (downline.item.value === newDownlines[i].item.value) {
                        foundIndex = i;
                        break;
                    }
                }
                if (foundIndex !== -1) {
                    intersectDownlines.push(newDownlines[foundIndex]);
                    newDownlines.splice(foundIndex, 1);
                }
            });
            this.currentDownlines = intersectDownlines.concat(newDownlines);
        }
        return this.currentDownlines;
    }
}
OrderDownlineTreeviewEventParser.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OrderDownlineTreeviewEventParser, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
OrderDownlineTreeviewEventParser.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OrderDownlineTreeviewEventParser });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: OrderDownlineTreeviewEventParser, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctZXZlbnQtcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRyZWV2aWV3L3NyYy9saWIvaGVscGVycy90cmVldmlldy1ldmVudC1wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQUsvQixNQUFNLE9BQWdCLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtvSEFBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBRHhDLFVBQVU7O0FBTVgsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG1CQUFtQjtJQUNqRSxpQkFBaUIsQ0FBQyxTQUE0QjtRQUM1QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7dUhBUlUsMEJBQTBCOzJIQUExQiwwQkFBMEI7MkZBQTFCLDBCQUEwQjtrQkFEdEMsVUFBVTs7QUFrQlgsTUFBTSxPQUFPLDJCQUE0QixTQUFRLG1CQUFtQjtJQUNsRSxpQkFBaUIsQ0FBQyxTQUE0QjtRQUM1QyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxNQUFNLEdBQTJCLEVBQUUsQ0FBQztZQUN4QyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDakIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQy9CO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU8sUUFBUSxDQUFDLElBQWtCLEVBQUUsTUFBNEI7UUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekIsTUFBTSxJQUFJLEdBQUc7Z0JBQ1gsSUFBSTtnQkFDSixNQUFNO2FBQ1AsQ0FBQztZQUNGLElBQUksTUFBTSxHQUEyQixFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNqQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDL0I7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxDQUFDO29CQUNOLElBQUk7b0JBQ0osTUFBTTtpQkFDUCxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7d0hBM0NVLDJCQUEyQjs0SEFBM0IsMkJBQTJCOzJGQUEzQiwyQkFBMkI7a0JBRHZDLFVBQVU7O0FBZ0RYLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxtQkFBbUI7SUFEekU7O1FBRVUscUJBQWdCLEdBQTJCLEVBQUUsQ0FBQztRQUM5QyxXQUFNLEdBQUcsSUFBSSwyQkFBMkIsRUFBRSxDQUFDO0tBNkJwRDtJQTNCQyxpQkFBaUIsQ0FBQyxTQUE0QjtRQUM1QyxNQUFNLFlBQVksR0FBMkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7U0FDdEM7YUFBTTtZQUNMLE1BQU0sa0JBQWtCLEdBQTJCLEVBQUUsQ0FBQztZQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztnQkFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDL0IsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTt3QkFDdEQsVUFBVSxHQUFHLENBQUMsQ0FBQzt3QkFDZixNQUFNO3FCQUNQO2lCQUNGO2dCQUVELElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUNyQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNwQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNqRTtRQUVELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7OzZIQTlCVSxnQ0FBZ0M7aUlBQWhDLGdDQUFnQzsyRkFBaEMsZ0NBQWdDO2tCQUQ1QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc05pbCB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFRyZWV2aWV3SXRlbSB9IGZyb20gJy4uL21vZGVscy90cmVldmlldy1pdGVtJztcclxuaW1wb3J0IHsgVHJlZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RyZWV2aWV3L3RyZWV2aWV3LmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmVldmlld0V2ZW50UGFyc2VyIHtcclxuICBhYnN0cmFjdCBnZXRTZWxlY3RlZENoYW5nZShjb21wb25lbnQ6IFRyZWV2aWV3Q29tcG9uZW50KTogYW55W107XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRUcmVldmlld0V2ZW50UGFyc2VyIGV4dGVuZHMgVHJlZXZpZXdFdmVudFBhcnNlciB7XHJcbiAgZ2V0U2VsZWN0ZWRDaGFuZ2UoY29tcG9uZW50OiBUcmVldmlld0NvbXBvbmVudCk6IGFueVtdIHtcclxuICAgIGNvbnN0IGNoZWNrZWRJdGVtcyA9IGNvbXBvbmVudC5zZWxlY3Rpb24uY2hlY2tlZEl0ZW1zO1xyXG4gICAgaWYgKCFpc05pbChjaGVja2VkSXRlbXMpKSB7XHJcbiAgICAgIHJldHVybiBjaGVja2VkSXRlbXMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb3dubGluZVRyZWV2aWV3SXRlbSB7XHJcbiAgaXRlbTogVHJlZXZpZXdJdGVtO1xyXG4gIHBhcmVudDogRG93bmxpbmVUcmVldmlld0l0ZW07XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERvd25saW5lVHJlZXZpZXdFdmVudFBhcnNlciBleHRlbmRzIFRyZWV2aWV3RXZlbnRQYXJzZXIge1xyXG4gIGdldFNlbGVjdGVkQ2hhbmdlKGNvbXBvbmVudDogVHJlZXZpZXdDb21wb25lbnQpOiBhbnlbXSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGNvbXBvbmVudC5pdGVtcztcclxuICAgIGlmICghaXNOaWwoaXRlbXMpKSB7XHJcbiAgICAgIGxldCByZXN1bHQ6IERvd25saW5lVHJlZXZpZXdJdGVtW10gPSBbXTtcclxuICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBsaW5rcyA9IHRoaXMuZ2V0TGlua3MoaXRlbSwgbnVsbCk7XHJcbiAgICAgICAgaWYgKCFpc05pbChsaW5rcykpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQobGlua3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TGlua3MoaXRlbTogVHJlZXZpZXdJdGVtLCBwYXJlbnQ6IERvd25saW5lVHJlZXZpZXdJdGVtKTogRG93bmxpbmVUcmVldmlld0l0ZW1bXSB7XHJcbiAgICBpZiAoIWlzTmlsKGl0ZW0uY2hpbGRyZW4pKSB7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSB7XHJcbiAgICAgICAgaXRlbSxcclxuICAgICAgICBwYXJlbnRcclxuICAgICAgfTtcclxuICAgICAgbGV0IHJlc3VsdDogRG93bmxpbmVUcmVldmlld0l0ZW1bXSA9IFtdO1xyXG4gICAgICBpdGVtLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5nZXRMaW5rcyhjaGlsZCwgbGluayk7XHJcbiAgICAgICAgaWYgKCFpc05pbChsaW5rcykpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQobGlua3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgaXRlbSxcclxuICAgICAgICBwYXJlbnRcclxuICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBPcmRlckRvd25saW5lVHJlZXZpZXdFdmVudFBhcnNlciBleHRlbmRzIFRyZWV2aWV3RXZlbnRQYXJzZXIge1xyXG4gIHByaXZhdGUgY3VycmVudERvd25saW5lczogRG93bmxpbmVUcmVldmlld0l0ZW1bXSA9IFtdO1xyXG4gIHByaXZhdGUgcGFyc2VyID0gbmV3IERvd25saW5lVHJlZXZpZXdFdmVudFBhcnNlcigpO1xyXG5cclxuICBnZXRTZWxlY3RlZENoYW5nZShjb21wb25lbnQ6IFRyZWV2aWV3Q29tcG9uZW50KTogYW55W10ge1xyXG4gICAgY29uc3QgbmV3RG93bmxpbmVzOiBEb3dubGluZVRyZWV2aWV3SXRlbVtdID0gdGhpcy5wYXJzZXIuZ2V0U2VsZWN0ZWRDaGFuZ2UoY29tcG9uZW50KTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnREb3dubGluZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudERvd25saW5lcyA9IG5ld0Rvd25saW5lcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGludGVyc2VjdERvd25saW5lczogRG93bmxpbmVUcmVldmlld0l0ZW1bXSA9IFtdO1xyXG4gICAgICB0aGlzLmN1cnJlbnREb3dubGluZXMuZm9yRWFjaChkb3dubGluZSA9PiB7XHJcbiAgICAgICAgbGV0IGZvdW5kSW5kZXggPSAtMTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBuZXdEb3dubGluZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChkb3dubGluZS5pdGVtLnZhbHVlID09PSBuZXdEb3dubGluZXNbaV0uaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICBmb3VuZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgIGludGVyc2VjdERvd25saW5lcy5wdXNoKG5ld0Rvd25saW5lc1tmb3VuZEluZGV4XSk7XHJcbiAgICAgICAgICBuZXdEb3dubGluZXMuc3BsaWNlKGZvdW5kSW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnREb3dubGluZXMgPSBpbnRlcnNlY3REb3dubGluZXMuY29uY2F0KG5ld0Rvd25saW5lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudERvd25saW5lcztcclxuICB9XHJcbn1cclxuIl19