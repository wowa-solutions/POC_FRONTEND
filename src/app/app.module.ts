// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderingComponent } from './ordering/ordering.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuItemComponent } from './Item-Modals/menu-item/menu-item.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CartComponent } from './cart/cart.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { PastaItemModalComponent } from './Item-Modals/pasta-item-modal/pasta-item-modal.component';
import { BurgerItemModalComponent } from './Item-Modals/burger-item-modal/burger-item-modal.component';
import { DesertItemModalComponent } from './Item-Modals/desert-item-modal/desert-item-modal.component';
import { SaladItemModalComponent } from './Item-Modals/salad-item-modal/salad-item-modal.component';
import { ItemModalsComponent } from './Item-Modals/item-modals.component';
import { PizzaItemModalComponent } from './Item-Modals/pizza-item-modal/pizza-item-modal.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserNavigationComponent } from './user-profile/user-navigation/user-navigation.component';
import { UserAddressComponent } from './user-profile/user-address/user-address.component';
import { UserPaymentMethodsComponent } from './user-profile/user-payment-methods/user-payment-methods.component';
import { UserSettingsComponent } from './user-profile/user-settings/user-settings.component';
import { UserActivityLogComponent } from './user-profile/user-activity-log/user-activity-log.component';
import { CmsDashboardComponent } from './cms-menu/cms-dashboard/cms-dashboard.component';
import { CmsNavigationComponent } from './cms-menu/cms-navigation/cms-navigation.component';
import { CmsMenuComponent } from './cms-menu/cms-menu.component';


// Services
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { UserService } from 'src/services/user.service';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { CmsUsersComponent } from './cms-menu/cms-users/cms-users.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';






ToastrModule.forRoot();

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    PaymentComponent,
    MenuItemComponent,
    OrderingComponent,
    MenuComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundPageComponent,
    LandingPageComponent,
    NotFoundPageComponent,
    CartComponent,
    MainpageComponent,
    SignupComponent,
    CartModalComponent,
    QrScannerComponent,
    PastaItemModalComponent,
    BurgerItemModalComponent,
    DesertItemModalComponent,
    SaladItemModalComponent,
    ItemModalsComponent,
    PizzaItemModalComponent,
    MenuPageComponent,
    UserModalComponent,
    LayoutComponent,
    NavbarComponent,
    UserProfileComponent,
    UserNavigationComponent,
    UserAddressComponent,
    UserPaymentMethodsComponent,
    UserSettingsComponent,
    UserActivityLogComponent,
    CmsDashboardComponent,
    CmsNavigationComponent,
    CmsMenuComponent,
    CmsUsersComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      progressBar: true,
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    DataViewModule,
    TableModule,
    PanelMenuModule,
    CardModule,
    PanelModule,
    DropdownModule,
    CheckboxModule,
    InputTextareaModule,
  ],
  providers: [CartService, ProductService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
