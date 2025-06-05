import { Component } from '@angular/core';

type ChangeEventSelectType<ValueType = string> = Event & {
  target: HTMLSelectElement & { value: ValueType };
};

type StatusVariantsType = 'approved' | 'pending' | 'rejected';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  status: StatusVariantsType = "pending";

  onStatusChange(event: Event) {
    const typedEvent = event as ChangeEventSelectType<StatusVariantsType>;

    this.status = typedEvent.target.value;
  }
}
