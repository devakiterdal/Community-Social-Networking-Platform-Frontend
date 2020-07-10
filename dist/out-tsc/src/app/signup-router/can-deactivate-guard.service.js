import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let canDeactivateGuard = class canDeactivateGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.canDeactivate();
    }
};
canDeactivateGuard = __decorate([
    Injectable({ providedIn: 'root' })
], canDeactivateGuard);
export { canDeactivateGuard };
//# sourceMappingURL=can-deactivate-guard.service.js.map