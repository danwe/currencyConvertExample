import { Component ,EventEmitter,Input , Output} from '@angular/core';

@Component({
  selector: 'app-drop-down-currency',
  templateUrl: './drop-down-currency.component.html',
  styleUrls: ['./drop-down-currency.component.scss']
})
export class DropDownCurrencyComponent {
  @Input() rates : { key: string; value: unknown; }[] = [];
  @Output() updateDropdown: EventEmitter<{ key: string; value: unknown; }> = new EventEmitter();
  @Input() textLabel: string = '';

  selected : { key: string; value: unknown; } = {
    key: '',
    value: 0
  };
  ngOnInit(): void {
  }

  rateLevelChangeAction(event: any) {
    this.updateDropdown.emit(event.value);
  }
}
