import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLienzoComponent } from './view-lienzo.component';

describe('ViewLienzoComponent', () => {
  let component: ViewLienzoComponent;
  let fixture: ComponentFixture<ViewLienzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLienzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLienzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
