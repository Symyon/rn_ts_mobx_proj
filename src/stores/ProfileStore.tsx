import { observable } from 'mobx';
import User from '../models/User';

export default class ProfileStore {
    @observable user: User | null = null
}