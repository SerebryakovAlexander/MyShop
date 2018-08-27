import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public logo = 'assets/img/logo.png';
  public placeholder = 'Более 1000 товаров';
  public searchText;

  public constructor (
    private _sanitazer: DomSanitizer
  ) {

  }

  public span(): SafeHtml {
    return this._sanitazer.bypassSecurityTrustHtml(`<span style="color:red">Hi ${this.searchText || ''} </span>`);
  }
}
