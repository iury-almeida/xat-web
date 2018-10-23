import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;

  public newMessage = new Subject<any>();

  constructor() {
    this.socket = io('http://localhost:666');

    this.socket.emit('connection', {data: 'data'});
    // this.socket.emit('my other event', {valor: 'emitiu'});
    this.socket.on('message', res => {
      this.newMessage.next(res);
    })
  }

  public sendMessage(message) {
    this.socket.emit('sendMessage', {message: message});
  }



}
