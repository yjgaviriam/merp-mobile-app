import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadProjectPage } from './download-project.page';

describe('DownloadProjectPage', () => {
  let component: DownloadProjectPage;
  let fixture: ComponentFixture<DownloadProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadProjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
