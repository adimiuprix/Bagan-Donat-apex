import config from './config';

//session storage
export function getSessionStorage(key: string) {
    const sessionData = sessionStorage.getItem(`${config.nameSpaceKey}-${key}`);
    if (sessionData === null) {
        return false;
    }
    try {
        return JSON.parse(sessionData);
    } catch (error) {
        return false;
    }
}

export function setSessionStorage(key: string, value: any) {
    sessionStorage.setItem(`${config.nameSpaceKey}-${key}`, JSON.stringify(value));
}

export function removeSessionStorage(key: string) {
    sessionStorage.removeItem(key);
}