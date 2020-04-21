import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-mgr',
  templateUrl: './contact-mgr.component.html',
  styleUrls: ['./contact-mgr.component.css'],
})
export class ContactMgrComponent implements OnInit {
  constructor() {}

  @Input()
  username = '?';

  ngOnInit(): void {}
}
