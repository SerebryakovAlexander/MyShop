import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public logo: string = 'assets/img/logo.png';

  @Input()
  public placeholder: string;

  @Output()
  public search: EventEmitter<string> = new EventEmitter();

  public onSearch(value: string): void {
    this.search.emit(value);
  }
}
