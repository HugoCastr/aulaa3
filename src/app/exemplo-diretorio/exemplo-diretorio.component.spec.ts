import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploDiretorioComponent } from './exemplo-diretorio.component';

describe('ExemploDiretorioComponent', () => {
  let component: ExemploDiretorioComponent;
  let fixture: ComponentFixture<ExemploDiretorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploDiretorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExemploDiretorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
