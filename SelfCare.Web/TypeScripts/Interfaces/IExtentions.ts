﻿module care.Extentions {
    'use strict';

    export interface ILoginData {
        userName: string;
        password: string;
    }

    export interface ISignUpData {
        userName: string;
        email: string;
        password: string;
        confirmPassword: string;
    }

    export interface IAuthInfo {
        access_token: string;
        isAuth: boolean;
        userName: string;
        roles:Array<string>;
    }

    export class AuthInfo {
        access_token: string;
        isAuth: boolean;
        userName: string;
        roles: Array<string>;
    }

    export class LoginData implements ILoginData{
        userName: string;
        password: string;
    }

    export class SignUpData implements ISignUpData {
        userName: string;
        email: string;
        password: string;
        confirmPassword: string;
    }
}