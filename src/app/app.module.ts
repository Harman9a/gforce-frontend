import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeBannerComponent } from './component/home/home-banner/home-banner.component';
import { HomeActiveClassesComponent } from './component/home/home-active-classes/home-active-classes.component';
import { HomeUpcomingClassesComponent } from './component/home/home-upcoming-classes/home-upcoming-classes.component';
import { HomeWorkshopComponent } from './component/home/home-workshop/home-workshop.component';
import { HomeAboutComponent } from './component/home/home-about/home-about.component';
import { HomedetailCardsComponent } from './component/home/homedetail-cards/homedetail-cards.component';
import { HomeSocialComponent } from './component/home/home-social/home-social.component';
import { FounderComponent } from './pages/founder/founder.component';
import { PerformingComponent } from './pages/performing/performing.component';
import { WorkshopComponent } from './pages/workshop/workshop.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentRegisterComponent } from './pages/student-register/student-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { InnerPageComponent } from './pages/inner-page/inner-page.component';
import { CartComponent } from './pages/cart/cart.component';
import { WorkshopViewComponent } from './pages/workshop-view/workshop-view.component';
import { SchoolComponent } from './pages/school/school.component';
import { SchoolInnerComponent } from './pages/school-inner/school-inner.component';
import { CareerComponent } from './pages/career/career.component';
import { BlogComponent } from './pages/blog/blog.component';
import { InnerBlogComponent } from './pages/inner-blog/inner-blog.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SClaessesComponent } from './pages/s-claesses/s-claesses.component';
import { SWorkshopComponent } from './pages/s-workshop/s-workshop.component';
import { SPaymentsComponent } from './pages/s-payments/s-payments.component';
import { BookComponent } from './pages/book/book.component';
import { PaymentGComponent } from './pages/payment-g/payment-g.component';
import { PaymentDoneComponent } from './pages/payment-done/payment-done.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContactComponent } from './pages/contact/contact.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { AttendanceDoneComponent } from './pages/attendance-done/attendance-done.component';
import { ViewAttendanceComponent } from './pages/view-attendance/view-attendance.component';
import { HomeDetailModelComponent } from './component/home/home-detail-model/home-detail-model.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OnlineSchoolComponent } from './component/home/online-school/online-school.component';
import { TheForceComponent } from './pages/the-force/the-force.component';
import { ShowRunnerComponent } from './pages/show-runner/show-runner.component';
import { ShowRunnerInnerComponent } from './pages/show-runner-inner/show-runner-inner.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { PrivacyPoliciesComponent } from './pages/privacy-policies/privacy-policies.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ShopComponent } from './pages/shop/shop.component';
import { Performance101Component } from './pages/performance101/performance101.component';
import { GforceProjectComponent } from './pages/gforce-project/gforce-project.component';
import { VideoPlayPopupComponent } from './component/home/video-play-popup/video-play-popup.component';

@NgModule({
  declarations: [
    PrivacyPoliciesComponent,
    TermsConditionsComponent,
    AboutUsComponent,
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    HomeBannerComponent,
    HomeActiveClassesComponent,
    HomeUpcomingClassesComponent,
    HomeWorkshopComponent,
    HomeAboutComponent,
    HomedetailCardsComponent,
    HomeSocialComponent,
    FounderComponent,
    PerformingComponent,
    WorkshopComponent,
    LoginComponent,
    StudentRegisterComponent,
    ProfileComponent,
    InnerPageComponent,
    CartComponent,
    WorkshopViewComponent,
    SchoolComponent,
    SchoolInnerComponent,
    CareerComponent,
    BlogComponent,
    InnerBlogComponent,
    SClaessesComponent,
    SWorkshopComponent,
    SPaymentsComponent,
    BookComponent,
    PaymentGComponent,
    PaymentDoneComponent,
    ContactComponent,
    AttendanceComponent,
    AttendanceDoneComponent,
    ViewAttendanceComponent,
    HomeDetailModelComponent,
    OnlineSchoolComponent,
    TheForceComponent,
    ShowRunnerComponent,
    ShowRunnerInnerComponent,
    ForgotPasswordComponent,
    ShopComponent,
    Performance101Component,
    GforceProjectComponent,
    VideoPlayPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
