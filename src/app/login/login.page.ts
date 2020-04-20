import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../app/services/auth.service'
import { IUser } from '../core/interfaces';
import { testUsers } from '../core/data/test.user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public folder: string;
	public loginForm: FormGroup;
	public isLoading: boolean;
	public testUser: any;

	constructor(private activatedRoute: ActivatedRoute, private auth: AuthService, private router: Router) { }

	ngOnInit() {
		this.folder = this.activatedRoute.snapshot.paramMap.get('id');
		this.initializeForm();
		this.testUser = testUsers;
	}

	private initializeForm(): void {
		this.loginForm = new FormGroup({
			'email': new FormControl(null, [Validators.required, Validators.email]),
			'password': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
			'typeOfUser': new FormControl(null, [Validators.required]),
		});
	}

	public login(): void {
		this.isLoading = true;
		this.auth.loginEmail(
			this.loginForm.get('email').value,
			this.loginForm.get('password').value)
			.then(x => {
				this.isLoading = false;
				console.log('email', x);
				this.router.navigate(['/home/']);
				//     this.toastService.create({
				//         message: '¡Bienvenido!',
				//         duration: 2000,
				//         color: 'success',
				//         animated: true,
				//         position: 'top'
				//     }).then(tt => tt.present())
			})
			.catch(x => {
				this.isLoading = false;
				console.error('error', x);
				//     this.toastService.create({
				//         message: 'El email y/o la contraseña son incorrectos. Reinténtelo.',
				//         duration: 2000,
				//         color: 'danger',
				//         animated: true
				//     }).then(tt => tt.present())
				// })
			});
	}


	public insertEmail(){
		let email = (this.loginForm.get('typeOfUser').value as IUser).email;
		let pwd = (this.loginForm.get('typeOfUser').value as IUser).pwd;
		this.loginForm.get('email').setValue(email);
		this.loginForm.get('password').setValue(pwd);
	}

}
