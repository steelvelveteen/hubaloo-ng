import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'prompt-unit',
  templateUrl: './prompt-unit.component.html',
  styleUrls: ['./prompt-unit.component.scss']
})
export class PromptUnitComponent implements OnInit {

  @Input() btnText: string;
  @Input() promptText: string;
  @Output() toggleMode = new EventEmitter();
  // @Output() toggleResetPasswordMode = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.toggleMode.emit();
    // this.toggleResetPasswordMode.emit();
  }
}
