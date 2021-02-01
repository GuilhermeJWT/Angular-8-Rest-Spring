import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private http: HttpClient, private router: Router) { }


  recuperar(login) {

    let user = new User();
    user.login = login;

    return this.http.post(AppConstants.getBaseUrlPath + 'recuperar/', user).subscribe(data => {

      alert(JSON.parse(JSON.stringify(data)).error)

    },
      error => {

        console.error("Erro ao Recuperar Login!");
        alert('Erro ao Recuperar Login!')
      }
    );
  }

  login(usuario) {

    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      /*Retorno Http*/

      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      localStorage.setItem("token", token);

      console.info("Tohken: " + localStorage.getItem("token"));

      this.router.navigate(['home']);


    },
      error => {

        console.error("Erro ao Realizar Login!");
        alert('Acesso Negado!')
      }
    );
  }



}
