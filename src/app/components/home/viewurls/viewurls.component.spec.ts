import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewurlsComponent } from './viewurls.component';

describe('ViewurlsComponent', () => {
  let component: ViewurlsComponent;
  let fixture: ComponentFixture<ViewurlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewurlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewurlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
