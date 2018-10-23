import { Component, OnInit } from '@angular/core';
import { UiToolbarService } from 'ng-smn-ui';
import {Router} from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	languages: string[];
	allLanguages: any[];
	searchState;
	loading;
	timing;
	teste;
	language: string;
	user: string;

	constructor(
		public toolbarService: UiToolbarService,
		private router: Router) {
		
		this.languages = ['Português', 'English', 'Español', 'Deutsch', 'Pусский', '日本語'];
		this.allLanguages = [{
			name: 'Português',
			value: 'pt'
		}, {
			name: 'English',
			value: 'en'
		}, {
			name: 'Español',
			value: 'es'
		}, {
			name: 'Deutsch',
			value: 'de'
		}, {
			name: 'Pусский',
			value: 'ru'
		}, {
			name: '日本語',
			value: 'jp'
		}];

	}

	ngOnInit() {
	}

    ngAfterViewInit() {
        // this.toolbarService.activateExtendedToolbar(960);
    }

    ngOnDestroy() {
        // this.toolbarService.deactivateExtendedToolbar();
	}
	
	onChangeModel(){
		console.log(this.language);
		console.log(this.user);
	}

	goToChat(){
		console.log('chamout')
		this.router.navigate(['main-chat/',  this.language, this.user]);
	}
}