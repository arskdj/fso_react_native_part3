import { AsyncStorage } from 'react-native';

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessToken() {
        const rawToken =  await AsyncStorage.getItem(`${this.namespace}:token`);
        return rawToken;
    }

    async setAccessToken(accessToken) {
        await AsyncStorage.setItem(`${this.namespace}:token`, accessToken);
    }

    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:token`);
    }
}

export default AuthStorage;
