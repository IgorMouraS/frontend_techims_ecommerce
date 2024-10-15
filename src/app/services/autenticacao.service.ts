import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../data/data.user';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private apiUrl = "http://localhost:3000/api/auth";

    public user!: User;

    constructor(private http: HttpClient) { }

    createAccount(email: string, password: string): void {
        const payload = { email, password }

        this.http.post(`${this.apiUrl}/register`, payload)
            .subscribe({
                next: (response) => {
                    console.log('Conta criada com sucesso:', response);
                },
                error: (error) => {
                    console.error('Erro ao criar a conta:', error);
                }
            });


        // Aqui você pode fazer uma requisição HTTP para um backend para criar uma conta de usuário.
        console.log(JSON.stringify({
            message: "Creating a new account",
            email: email,
            password: password
        }));
    }

    getUserProfile(email: string): Observable<any> {

        // Aqui você pode fazer uma requisição HTTP para um backend para fazer login.
        return this.http.get<User>(`http://localhost:3000/api/auth/profile/${email}`)

    }

}