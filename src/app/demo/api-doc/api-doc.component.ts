import { Component } from '@angular/core';

@Component({
  selector: 'app-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.css'],
})
export class ApiDocComponent {
  public readonly apiDefinitionCode = `public readonly api = new TableAPI();`;
  public readonly setInputValueCode = `this.api.next({
  type: API.setInputValue,
  value: [
      { key: 'age', value: '32' },
    ],
});`;

  public readonly setInputValueCode2 = `this.api.next({
  type: API.setInputValue,
  value: [
      { key: 'age', value: '32' },
      { key: 'company', value: 'Ko' },
    ],
});`;

  public readonly setInputValueCode3 = `this.api.next({
  type: API.setInputValue,
  value: [
      { key: 'age', value: '' },
      { key: 'company', value: '' },
    ],
});`;

  public readonly rowContextMenuClickedCode = `this.api.next({
  type: API.rowContextMenuClicked,
});`;

  public readonly toolPanelClickedCode = `this.api.next({
  type: API.toolPanelClicked,
});`;
}