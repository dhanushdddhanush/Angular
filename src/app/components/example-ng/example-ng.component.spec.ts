import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgComponent } from './example-ng.component';

describe('ExampleNgComponent', () => {
  let component: ExampleNgComponent;
  let fixture: ComponentFixture<ExampleNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
