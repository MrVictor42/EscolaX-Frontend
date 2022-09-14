import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGangComponent } from './new-gang.component';

describe('NewGangComponent', () => {
  let component: NewGangComponent;
  let fixture: ComponentFixture<NewGangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
