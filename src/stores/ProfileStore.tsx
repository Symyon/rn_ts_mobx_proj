import { observable, action } from 'mobx';
import User from '../models/User';
import AsyncStorage from '@react-native-community/async-storage';

export class ProfileStore {
    @observable user: User | null = null;
    @observable isValid = false;
    @observable emailError = "error";
    @observable passwordError = "";

    @action setInitialUser(data: User) {
        console.log(`we got here with user ${JSON.stringify(data)}`);
        this.user = data;
    }

    
}

const profileStore = new ProfileStore();
export default profileStore;