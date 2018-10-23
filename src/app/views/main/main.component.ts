import {Component, ElementRef, OnInit} from '@angular/core';
import {SocketService} from '../../core/socket.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  info: any;
  messages: any;
  nick: string;
  language: string;

  constructor(private socketService: SocketService,
              private element: ElementRef,
              private route: ActivatedRoute) {
    this.info = {};
    this.messages = [];
  }

  ngOnInit() {

    this.nick = this.route.snapshot.params['nick'];
    this.language = this.route.snapshot.params['lg'];

    console.log('user', this.nick);
    console.log('language', this.language);
    this.socketService.newMessage.subscribe(res => {
      // console.log(res);
      this.receiveMessage(res);
      setTimeout(() => {
        const el = this.element.nativeElement.querySelector('.main__chat__content');
        const scroll = (el.scrollHeight - el.offsetHeight);
        el.scrollTo(0, scroll);
      });
    });

  }

  sendMessage(message) {
    console.log(message);
    this.socketService.sendMessage(message);
    this.info.sendMessage = '';
  }

  receiveMessage(message) {
    console.log(message);
        this.messages.push(message);
  }


}
