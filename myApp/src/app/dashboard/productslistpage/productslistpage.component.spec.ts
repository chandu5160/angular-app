import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductslistpageComponent } from './productslistpage.component';

describe('ProductslistpageComponent', () => {
  let component: ProductslistpageComponent;
  let fixture: ComponentFixture<ProductslistpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductslistpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductslistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
