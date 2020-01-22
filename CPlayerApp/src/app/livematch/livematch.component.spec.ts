import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {  By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from '../authentication.service';
import { RouterService } from '../router.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from '../login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {LivematchComponent} from './livematch.component';
import {NgxPaginationModule} from 'ngx-pagination';


describe('LivematchComponent', () => {
  let component: LivematchComponent;
  let fixture: ComponentFixture<LivematchComponent>;
  let authenticationService: AuthenticationService;
  let routerService: LivematchComponent;
  let mySpy: any;
  let obj: FormGroupDirective;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivematchComponent],
      imports: [ReactiveFormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule,
        RouterTestingModule,
        MatFormFieldModule,
        HttpClientModule,
        MatInputModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatSnackBarModule,
        HttpClientTestingModule,
        NgxPaginationModule
      ],
      providers: [AuthenticationService, RouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivematchComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.get(AuthenticationService);
    routerService = TestBed.get(RouterService);
    fixture.detectChanges();
  });
  it('should create', async() => {
    expect(component).toBeTruthy();
  });
  it('should contain span tag', () => {
    let element = fixture.debugElement.query(By.css('span'));
    expect(element).toBeTruthy();
  });
  it('should contain button tag', () => {
    let element = fixture.debugElement.query(By.css('button'));
    expect(element).toBeTruthy();
  });
  it('should contain nav tag', () => {
    let element = fixture.debugElement.query(By.css('nav'));
    expect(element).toBeTruthy();
  });
  it('should contain li tag', () => {
    let element = fixture.debugElement.query(By.css('li'));
    expect(element).toBeTruthy();
  });
  it('should contain ul tag', () => {
    let element = fixture.debugElement.query(By.css('ul'));
    expect(element).toBeTruthy();
  });
  it('should contain section tag', () => {
    let element = fixture.debugElement.query(By.css('section'));
    expect(element).toBeTruthy();
  });
  it('should contain footer tag', () => {
    let element = fixture.debugElement.query(By.css('footer'));
    expect(element).toBeTruthy();
  });
});