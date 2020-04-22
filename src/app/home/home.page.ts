import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';



@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	public typeOfUser: string;

	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.typeOfUser = this.getTypeOfUser();
	}

	private getTypeOfUser(): string {
		return this.route.snapshot.paramMap.get('typeOfUser');
	}

	public ppsA(): void {
        this.router.navigate(['/pps-a/'+this.typeOfUser]);
	}
	
	public ppsB(): void {
        this.router.navigate(['/pps-b/'+this.typeOfUser]);
    }



}
