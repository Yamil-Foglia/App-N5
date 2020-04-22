import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from '../models/message';
import { map } from 'rxjs/operators';
import { ChatService } from '../services/chat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-pps-b',
	templateUrl: './pps-b.page.html',
	styleUrls: ['./pps-b.page.scss'],
})
export class PpsBPage implements OnInit {

	public typeOfUser: string;
	public ppsbForms: FormGroup;
	public messageList: any;

	constructor(private service: ChatService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.initializeForm();
		this.typeOfUser = this.getTypeOfUser();
		this.messageList = this.service.getAll().snapshotChanges().pipe(
			map(x => x.map(z => {
				let mess: Message = z.payload.doc.data() as Message;
				mess.idFirebase = z.payload.doc.id;
				return mess;
			}))
		);
	}

	private getTypeOfUser(): string {
		return this.route.snapshot.paramMap.get('typeOfUser');
	}

	private initializeForm(): void {
		this.ppsbForms = new FormGroup({
			'message': new FormControl(null, [Validators.required, Validators.maxLength(21)]),
		});
	}

	public add(): void {
		this.service.add(this.build());
	}

	private build(): Message {
		return Message.create(
			this.ppsbForms.get('message').value,
			this.typeOfUser,
			false
		)
	}

	public consultUser(user: string): boolean {
		if (user == this.typeOfUser)
			return true;
		else
			return false;
	}

}
