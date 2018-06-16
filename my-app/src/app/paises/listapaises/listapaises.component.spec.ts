import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapaisesComponent } from './listapaises.component';

describe('ListapaisesComponent', () => {
  let component: ListapaisesComponent;
  let fixture: ComponentFixture<ListapaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
