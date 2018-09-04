import { Injectable } from '@angular/core';
import { Message } from "./message.model";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages: AngularFirestoreCollection<Message>;

  constructor(private db: AngularFirestore) {
     this.messages = db.collection<Message>("messages");
  }

  addMsg(msg) {
    this.messages.add(msg);
  }

}
