import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsoftUi } from './bsoft-ui';

describe('BsoftUi', () => {
  let component: BsoftUi;
  let fixture: ComponentFixture<BsoftUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsoftUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsoftUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
