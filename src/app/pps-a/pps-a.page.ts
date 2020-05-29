import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from '../models/message';
import { map } from 'rxjs/operators';
import { ChatService } from '../services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-pps-a',
	templateUrl: './pps-a.page.html',
	styleUrls: ['./pps-a.page.scss'],
})
export class PpsAPage implements OnInit {

	public typeOfUser: string;
	public ppsaForms: FormGroup;
	public messageList: Observable<Message[]> = new Observable<Message[]>();

	@ViewChild('content',{static: false}) scroll: IonContent;

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
		setTimeout(()=>{
			this.scrollToElement();
			this.messageList.subscribe(_ =>{
				this.scrollToElement();
			})
		},3000);
	}
	
	public scrollToElement() { 
		this.scroll.scrollToBottom(500);
 	}


	private getTypeOfUser(): string {
		return this.route.snapshot.paramMap.get('typeOfUser');
	}

	private initializeForm(): void {
		this.ppsaForms = new FormGroup({
			'message': new FormControl(null, [Validators.required ,Validators.maxLength(21)]),
			});
	}

	public add(): void {
		let chatppsa = (<HTMLInputElement>document.getElementById("chatppsa"));
		chatppsa.value = "";
        this.service.add(this.build());
	}

	private build(): Message {
        return Message.create(
            this.ppsaForms.get('message').value,
			this.typeOfUser,
			true
		)
	}
	
	public consultUser(user: string): boolean{
		if(user == this.typeOfUser)	
			return true;
		else
			return false;
	}
}
