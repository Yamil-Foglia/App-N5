import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Helpers } from '../core/helpers';
import { Message } from '../models/message';


@Injectable({
	providedIn: 'root'
})
export class ChatService {

	constructor(private db: AngularFirestore) { }

	public add(message: Message): Promise<unknown> {
		return this.db.collection('message').add(Helpers.convertToObject(message));
	}

	public getAll(): AngularFirestoreCollection<unknown> {
		return this.db.collection('message');
	}
}
