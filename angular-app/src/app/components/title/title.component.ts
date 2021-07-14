import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
}
