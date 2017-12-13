import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginserService } from '../loginser.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    userid: string;
    password: string;

    constructor(private router: Router, private loginser: LoginserService) {}

    checkLogin(e){
        e.preventDefault();
        var userid=e.target.elements[0].value;
        var password=e.target.elements[1].value;
        //this.userid == 'admin' && this.password == 'admin'
       // console.log(userid, password);
        let result;
        this.loginser.setUserLoggedIn(userid, password).then(user => {
            if(user) {
                console.log('******** here ************');
                this.router.navigate(['/layout']);
            } else {
                this.router.navigate(['/access-denied']);  
            }
        }, err => {
            console.log(err);
        });
    }

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
