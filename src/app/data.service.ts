import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // baseurl = 'http://localhost/harman/GForce/UpdatedGforce/';
  // frontendurl = 'http://localhost:4200';

  baseurl = 'https://gforce.techiespreview.website/admin/';
  frontendurl = 'https://gforce.techiespreview.website';

  signup(data: any) {
    return this.http.post(this.baseurl + 'api/signup', data);
  }

  signin(data: any) {
    return this.http.post(this.baseurl + 'api/signin', data);
  }

  getBranch() {
    return this.http.get(this.baseurl + 'api/getBranch');
  }

  getClasses() {
    return this.http.get(this.baseurl + 'api/getClasses');
  }

  getWorkShopByBranch(data: any) {
    return this.http.post(this.baseurl + 'api/getWorkShopByBranch', data);
  }
  getBlogs() {
    return this.http.get(this.baseurl + 'api/getBlogs');
  }

  getBlogsCat() {
    return this.http.get(this.baseurl + 'api/getBlogsCat');
  }

  getWorkShop() {
    return this.http.get(this.baseurl + 'api/getWorkshops');
  }

  getProfile(data: any) {
    return this.http.post(this.baseurl + 'api/getProfile', data);
  }

  handlePayment(data: any) {
    return this.http.post(this.baseurl + 'paymenttest/axios.php', data);
  }
  savePaymentId(data: any) {
    return this.http.post(this.baseurl + 'api/savePayment', data);
  }

  getWorkShopSingle(data: any) {
    return this.http.post(this.baseurl + 'api/getWorkShopSingle', data);
  }

  getBlogbyId(id: any) {
    return this.http.get(this.baseurl + 'api/getSingleBlogs/' + id);
  }

  getAllBookings(id: any) {
    return this.http.get(this.baseurl + `api/getAllBookings/${id}`);
  }

  markAttendance(data: any) {
    return this.http.post(this.baseurl + 'api/markAttendance', data);
  }

  getAttendance(id: any) {
    return this.http.get(this.baseurl + 'api/getAttendanceSingle/' + id);
  }

  getOpenClasses() {
    return this.http.get(this.baseurl + 'api/getOpenClasses');
  }

  getClassesByBranch(data: any) {
    return this.http.post(this.baseurl + 'api/getClassByBranch', data);
  }

  getClassesByBranchByDate(data: any) {
    return this.http.post(this.baseurl + 'api/getClassesByBranchByDate', data);
  }

  getOpenClassSingle(data: any) {
    return this.http.post(this.baseurl + 'api/getOpenClassSingle', data);
  }

  getProjectClassSingle(data: any) {
    return this.http.post(this.baseurl + 'api/getProjectClassSingle', data);
  }

  getJobCategory() {
    return this.http.get(this.baseurl + 'api/getJobCategory');
  }

  getJobs() {
    return this.http.get(this.baseurl + 'api/getJobs');
  }

  submitCareerForm(data: any) {
    return this.http.post(this.baseurl + 'api/sendcareermail', data);
  }

  submitContactForm(data: any) {
    return this.http.post(this.baseurl + 'api/sendcontactmail', data);
  }

  getEnrolledClasses(data: any) {
    return this.http.post(this.baseurl + 'api/getEnrolledClasses', data);
  }

  getSettingData() {
    return this.http.get(this.baseurl + 'api/getSettingData');
  }

  getEnrolledWorkshop(data: any) {
    return this.http.post(this.baseurl + 'api/getEnrolledWorkshop', data);
  }

  updateUser(data: any) {
    return this.http.post(this.baseurl + 'api/updateUser', data);
  }

  getOtherData() {
    return this.http.get(this.baseurl + 'api/getOtherData');
  }

  handleEmailSubmit(data: any) {
    return this.http.post(this.baseurl + 'api/handleEmailSubmit', data);
  }

  handleOtpSubmit(data: any) {
    return this.http.post(this.baseurl + 'api/handleOtpSubmit', data);
  }

  handleNewPSubmit(data: any) {
    return this.http.post(this.baseurl + 'api/handleNewPSubmit', data);
  }

  submitnewsletter(data: any) {
    return this.http.post(this.baseurl + 'api/submitNewsletterEmail', data);
  }

  getAchievement() {
    return this.http.get(this.baseurl + 'api/getAchievement');
  }

  getPopData(data: any) {
    return this.http.post(this.baseurl + 'api/getPopData', data);
  }
  getOnlineSchoolVideos() {
    return this.http.get(this.baseurl + 'api/getOnlineSchoolData');
  }
  getOnlineSchool() {
    return this.http.get(this.baseurl + 'api/getOnlineSchool');
  }

  getFounderData() {
    return this.http.get(this.baseurl + 'api/getFounderData');
  }
  getArtistData() {
    return this.http.get(this.baseurl + 'api/getArtistData');
  }
  getRunnerData() {
    return this.http.get(this.baseurl + 'api/getRunnerData');
  }
  getChoreographersData() {
    return this.http.get(this.baseurl + 'api/getChoreographersData');
  }
  getSingleVideoData(data: any) {
    return this.http.post(this.baseurl + 'api/getSingleVideoData', data);
  }
  getPayments(data: any) {
    return this.http.post(this.baseurl + 'api/getpayments', data);
  }
  signInWithGoogle(data: any) {
    return this.http.post(this.baseurl + 'api/signInWithGoogle', data);
  }
}
