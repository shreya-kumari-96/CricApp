// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

// import { FavouriteComponent } from './favourite.component';

// //import { FavoriteComponent } from './favorite.component';
// import { ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// //import { MatIconModule } from '@angular/material/icon';
// //import { MatTooltipModule } from '@angular/material/tooltip';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// //import { MatButtonModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
// //import { MatPaginatorModule } from '@angular/material/paginator';
// //import { MatCardModule } from '@angular/material/card';
// //import { MatButtonToggleModule } from '@angular/material/button-toggle';
// //import { MatDialogModule } from '@angular/material';
// import { By } from '@angular/platform-browser';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AuthenticationService } from '../authentication.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { Observable } from 'rxjs';
// import { RouterService } from '../router.service';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { CplayerService } from '../cplayer.service';
// import { element } from 'protractor';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// // / import { async, ComponentFixture, TestBed } from '@angular/core/testing';


// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatTooltipModule } from '@angular/material/tooltip';

// import { MatButtonModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatDialogModule } from '@angular/material';
// import {from} from 'rxjs';
// import {ViewdetailsComponent} from '../viewdetails/viewdetails.component';


// describe('FavoriteComponent', () => {
//   let component: FavouriteComponent;
//   let fixture: ComponentFixture<FavouriteComponent>;
//   let cplayerservice: CplayerService;
//   let authService: AuthenticationService;
//   let routerService: RouterService;
//   let mySpy: any;
//   let obj: FormGroupDirective;
//   beforeEach(async(() => {
//       TestBed.configureTestingModule({
//         declarations: [ FavouriteComponent ],
//           imports: [
//               FormsModule,
//               BrowserAnimationsModule,
//               MatInputModule,
//               RouterTestingModule,
//               MatSlideToggleModule,
//               HttpClientTestingModule,
//               MatFormFieldModule,
//               MatInputModule,
//               HttpClientModule,
//               ReactiveFormsModule,
//               NgxPaginationModule
//           ],
//           providers: [authService, routerService, cplayerservice]
//       })
//           .compileComponents();
//   }));


//   beforeEach(() => {
//     fixture = TestBed.createComponent(FavouriteComponent);
//     fixture.detectChanges();
//     component = fixture.componentInstance;
//     authService = TestBed.get(AuthenticationService);
//     routerService = TestBed.get(RouterService);
//     cplayerservice = TestBed.get(CplayerService);
//     let mySpy: any;
    
// });
// // it('should create', async() => {
// //   expect(component).toBeTruthy();
// // });
// // it('should contain div tag', async() => {
// //   let element = fixture.debugElement.query(By.css('div'));
// //   expect(element).toBeTruthy();
// // });

// // it('should set submitted to true', () => {
// //     component.favdata;
// //     expect(component.favdata).toBeTruthy();
// // });
// // it('should contain nav tag', () => {
// //     let element = fixture.debugElement.query(By.css('nav'));
// //     expect(element).toBeTruthy();
// // });
// // it('form should be invalid when the fields are left empty', async(() => {
// //     expect(component.details).toBeTruthy();
// // }));


// });



import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FavouriteComponent } from './favourite.component';
import { ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatIconModule } from '@angular/material/icon';
//import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { MatButtonModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
//import { MatPaginatorModule } from '@angular/material/paginator';
//import { MatCardModule } from '@angular/material/card';
//import { MatButtonToggleModule } from '@angular/material/button-toggle';
//import { MatDialogModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { RouterService } from '../router.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {CplayerService} from '../cplayer.service';

describe('FavoriteComponent', () => {
   
    let component: FavouriteComponent;
    let fixture: ComponentFixture<FavouriteComponent>;
    let cplayerservice: CplayerService;
    let mySpy: any;
    let obj: FormGroupDirective;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FavouriteComponent],
            imports: [
                FormsModule,
                BrowserAnimationsModule,
                MatInputModule,
                RouterTestingModule,
                MatSlideToggleModule,
                HttpClientTestingModule,
                MatFormFieldModule,
                MatInputModule,
                HttpClientModule,
                ReactiveFormsModule,
                NgxPaginationModule
            ],
            providers: [AuthenticationService, RouterService, CplayerService]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FavouriteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
    // it('should set submitted to true', async(() => {
    //     component.favdata;
    //     expect(component.favdata).toBeTruthy();
    // }));
  //   it('should set submitted to true', async(() => {
  //     component.storedata;
  //     expect(component.storedata).toBeTruthy();
  // }));
    
  //   it('should contain footer tag', () => {
  //       let element = fixture.debugElement.query(By.css('footer'));
  //       expect(element).toBeTruthy();
  //   });
    
});