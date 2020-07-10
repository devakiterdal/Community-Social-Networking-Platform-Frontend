import { async, TestBed } from '@angular/core/testing';
import { ContentfeedComponent } from './contentfeed.component';
describe('ContentfeedComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContentfeedComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ContentfeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contentfeed.component.spec.js.map