/*! @license wilddog v3.6.3
    Build: 3.6.3-rc.6
    Terms: https://wilddog.google.com/terms/ */
declare namespace wilddog {
  interface wilddogError {
    code: string;
    message: string;
    name: string;
    stack: string;
  }

  class Promise<T> extends Promise_Instance<T> {
    static all(values: wilddog.Promise<any>[]): wilddog.Promise<any[]>;
    static reject(error: Error): wilddog.Promise<any>;
    static resolve<T>(value?: T): wilddog.Promise<T>;
  }
  class Promise_Instance<T> implements wilddog.Thenable<any> {
    constructor(
        resolver: (a: (a: T) => void, b: (a: Error) => void) => any);
    catch(onReject?: (a: Error) => any): wilddog.Thenable<any>;
    then(onResolve?: (a: T) => any, onReject?: (a: Error) => any):
        wilddog.Promise<any>;
  }

  var SDK_VERSION: string;

  interface Thenable<T> {
    catch(onReject?: (a: Error) => any): any;
    then(onResolve?: (a: T) => any, onReject?: (a: Error) => any):
        wilddog.Thenable<any>;
  }

  interface User extends UserInfo {
    displayName: string;
    email: string;
    phone: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    isAnonymous: boolean;
    photoURL: string;
    providerData: (UserInfo)[];
    providerId: string;
    uid: string;
    delete(onComplete?: (a: Error) => any): wilddog.Promise<any>;
    getToken(): string;
    link(credential: wilddog.auth.Credential, onComplete?: (a: Error) => any): wilddog.Promise<any>;
    linkWithPopup(provider: wilddog.auth.Provider, onComplete?: (a: Error) => any): wilddog.Promise<any>;
    linkWithRedirect(provider: wilddog.auth.Provider, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
    reauthenticate(credential: wilddog.auth.Credential, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
    reload(onComplete?: (a: Error) => any): wilddog.Promise<any>;
    sendEmailVerification(onComplete?: (a: Error) => any): wilddog.Promise<any>;
    sendPhoneVerification(onComplete?: (a: Error) => any): wilddog.Promise<any>;
    unlink(providerId: string, onComplete?: (a: Error) => any): wilddog.Promise<any>;
    updateEmail(newEmail: string, onComplete?: (a: Error) => any): wilddog.Promise<any>;
    updatePhone(newPhone: string, onComplete?: (a: Error) => any): wilddog.Promise<any>;
    updatePassword(newPassword: string, onComplete?: (a: Error) => any): wilddog.Promise<any>;
    updateProfile(profile: {displayName: string , photoURL: string},onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
    verifiyPhone(code: string, onComplete?: (a: Error) => any): wilddog.Promise<any>;
  }

  interface UserInfo {
    displayName: string;
    email: string;
    phone: string;
    photoURL: string;
    providerId: string;
    uid: string;
  }

  function app(name?: string): wilddog.app.App;

  var apps: (wilddog.app.App)[];

  function auth(app?: wilddog.app.App): wilddog.auth.Auth;

  function sync(app?: wilddog.app.App): wilddog.sync.sync;

  function initializeApp(options: Object, name?: string): wilddog.app.App;
}

declare namespace wilddog.app {
  interface App {
    auth(): wilddog.auth.Auth;
    sync(): wilddog.sync.sync;
    delete(): wilddog.Promise<any>;
    name: string;
    options: Object;
  }
}

declare namespace wilddog.auth {
  interface ActionCodeInfo {}

  interface Auth {
    app: wilddog.app.App;
    confirmPasswordResetSms(code: string, newPassword: string, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
    createUserWithPhoneAndPassword(phone: string, password: string, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
    createUserWithEmailAndPassword(email: string, password: string, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
    currentUser: wilddog.User;
    onAuthStateChanged(
        nextOrObserver: Object, error?: (a: wilddog.auth.Error) => any,
        completed?: () => any): () => any;
    sendPasswordResetEmail(email: string, onComplete?: (a: Error) => any): wilddog.Promise<any>;
    sendPasswordResetSms(phone: string, onComplete?: (a: Error) => any): wilddog.Promise<any>;
    signInAnonymously(onComplete?: (a: Error) => any): wilddog.Promise<any>;
    signInWithCredential(credential: wilddog.auth.Credential, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
    signInWithCustomToken(token: string, onComplete?: (a: Error) => any): wilddog.Promise<any>;
    signInWithEmailAndPassword(email: string, password: string, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
    signInWithPhoneAndPassword(phone: string, password: string, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
    signInWithPopup(provider: wilddog.auth.Provider, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
    signInWithRedirect(provider: wilddog.auth.Provider, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
    signOut(onComplete?: (a: Error) => any): wilddog.Promise<any>;
    //verifyIdToken(idToken: string): wilddog.Promise<any>;
    verifyPasswordResetCode(code: string,onComplete?: (a: Error) => any): wilddog.Promise<any>;
  }

  interface Credential {
    provider: string;
  }

  interface Provider {
    providerId: string;
  }

  class WilddogAuthProvider{
    providerId: string;
    static emailCredential(email: string, password: string): wilddog.auth.Credential;
    static phoneCredential(phone: string, password: string): wilddog.auth.Credential;
  }

  interface Error {
    code: string;
    message: string;
  }

  class WeiboAuthProvider{
    providerId: string;
    addScope(scope: string): any;
    static credential(arg1: string,arg2: string): wilddog.auth.Credential;
  }

  class QQAuthProvider implements wilddog.auth.Provider{
    providerId: string;
    addScope(scope: string): any;
    static credential(arg1: string,arg2: string): wilddog.auth.Credential;
  }

  class WeixinAuthProvider implements wilddog.auth.Provider{
    providerId: string;
    addScope(scope: string): any;
    static credential(arg1: string,arg2: string): wilddog.auth.Credential;
  }

  class WeixinmpAuthProvider implements wilddog.auth.Provider{
    providerId: string;
    addScope(scope: string): any;
    static credential(arg1: string,arg2: string): wilddog.auth.Credential;
  }

}

declare namespace wilddog.sync {
  interface DataSnapshot {
    child(path: string): wilddog.sync.DataSnapshot;
    exists(): boolean;
    exportVal(): any;
    forEach(action: (a: wilddog.sync.DataSnapshot) => any): any;
    getPriority(): string|number;
    hasChild(path: string): boolean;
    hasChildren(): boolean;
    key(): string;
    numChildren(): number;
    ref(): Reference;
    val(): any;
  }

  interface sync {
    app: wilddog.app.App;
    ServerValue: any;
    goOffline(): any;
    goOnline(): any;
    ref(path?: string): Reference;
  }

  interface OnDisconnect {
    cancel(onComplete?: (a: Error) => any): wilddog.Promise<any>;
    remove(onComplete?: (a: Error) => any): wilddog.Promise<any>;
    set(value: any, onComplete?: (a: Error) => any): wilddog.Promise<any>;
    setWithPriority(
        value: any, priority: number|string,
        onComplete?: (a: Error) => any): wilddog.Promise<any>;
    update(values: Object, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
  }

  interface Query {
    endAt(value: number|string|boolean, key?: string):
        wilddog.sync.Query;
    equalTo(value: number|string|boolean, key?: string):
        wilddog.sync.Query;
    isEqual(other: wilddog.sync.Query): boolean;
    limitToFirst(limit: number): wilddog.sync.Query;
    limitToLast(limit: number): wilddog.sync.Query;
    off(eventType?: string,
        callback?: (a: wilddog.sync.DataSnapshot, b?: string) => any,
        context?: Object): any;
    on(eventType: string,
       callback: (a: wilddog.sync.DataSnapshot, b?: string) => any,
       cancelCallbackOrContext?: Object, context?: Object): (a: wilddog.sync.DataSnapshot, b?: string) => any;
    once(
        eventType: string,
        successCallback?:
            (a: wilddog.sync.DataSnapshot, b?: string) => any,
        failureCallbackOrContext?: Object,
        context?: Object): wilddog.Promise<any>;
    orderByChild(path: string): wilddog.sync.Query;
    orderByKey(): wilddog.sync.Query;
    orderByPriority(): wilddog.sync.Query;
    orderByValue(): wilddog.sync.Query;
    ref(): wilddog.sync.Reference;
    startAt(value: number|string|boolean, key?: string):
        wilddog.sync.Query;
    toString(): string;
  }

  interface Reference extends wilddog.sync.Query {
    child(path: string): wilddog.sync.Reference;
    key(): string;
    onDisconnect(): wilddog.sync.OnDisconnect;
    parent(): wilddog.sync.Reference;
    push(value?: any, onComplete?: (a: Error) => any):
        wilddog.sync.ThenableReference;
    remove(onComplete?: (a: Error) => any): wilddog.Promise<any>;
    root(): wilddog.sync.Reference;
    set(value: any, onComplete?: (a: Error) => any): wilddog.Promise<any>;
    setPriority(
        priority: string|number,
        onComplete: (a: Error) => any): wilddog.Promise<any>;
    setWithPriority(
        newVal: any, newPriority: string|number,
        onComplete?: (a: Error) => any): wilddog.Promise<any>;
    transaction(
        transactionUpdate: (a: any) => any,
        onComplete?:
            (a: Error, b: boolean,
             c: wilddog.sync.DataSnapshot) => any,
        applyLocally?: boolean): wilddog.Promise<any>;
    update(values: Object, onComplete?: (a: Error) => any):
        wilddog.Promise<any>;
  }

  interface ThenableReference extends wilddog.sync.Reference,
                                      wilddog.Thenable<any> {}

  function enableLogging(enabled?: boolean, persistent?: boolean): any;
}

export = wilddog;
