import {observable, action, computed} from 'mobx';
import User from '../models/User';
import AsyncStorage from '@react-native-community/async-storage';

export class ProfileStore {
  @observable user: User;
  @observable fullNameValid: boolean;
  @observable emailValid: boolean;
  @observable passwordValid: boolean;

  constructor() {
    this.user = new User('', '', '');
    this.fullNameValid = false;
    this.emailValid = false;
    this.passwordValid = false;
  }

  @action async fetchUserDetails() {
    const userJSON = await AsyncStorage.getItem('@user');
    const userObject = userJSON ? JSON.parse(userJSON) : null;
    if (userObject)
      this.user = new User(
        userObject['fullName'],
        userObject['email'],
        userObject['password'],
      );
  }

  @action
  fullNameOnChange(fullName: string) {
    this.user.fullName = fullName;
    this.validateFullName();
  }

  @action
  validateFullName() {
    this.fullNameValid = this.user.fullName.trim().length > 0;
  }

  @action
  emailOnChange(email: string) {
    this.user.email = email;
    this.validateEmail();
  }

  @action
  validateEmail() {
    const emailPatter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    this.emailValid =
      this.user.email.trim().length > 0 &&
      emailPatter.test(this.user.email.trim());
  }

  @action
  passwordOnChange(pwd: string) {
    this.user.password = pwd;
    this.validatePassword();
  }

  @action
  validatePassword() {
    this.passwordValid = this.user.password.trim().length > 3;
  }

  @computed
  get isFormValid() {
    return this.fullNameValid && this.emailValid && this.passwordValid;
  }

  @action async settleUserDetails() {
    this.user.fullName = this.user.fullName.trim();
    this.user.email = this.user.email.trim().toLowerCase();
    this.user.password = this.user.password.trim();

    await AsyncStorage.setItem(
        '@user',
        JSON.stringify(this.user),
      );
  }

  @action
  refreshStore() {    
    this.fullNameValid = false;
    this.emailValid = false;
    this.passwordValid = false;
  }
}

const profileStore = new ProfileStore();
export default profileStore;
