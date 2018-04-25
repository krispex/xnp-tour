import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardBannerComponent } from './leaderboard-banner.component';

describe('LeaderboardBannerComponent', () => {
  let component: LeaderboardBannerComponent;
  let fixture: ComponentFixture<LeaderboardBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
