import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environments';
import { AuthStatus, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseIrl: string =environment.baseUrl;
  private http = inject(HttpClient)

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  constructor() { }

  login(email:string, password:string): Observable<Boolean>{

    return of(true);
  }
}
