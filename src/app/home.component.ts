import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h1>Home</h1>
  <div>
  <form ngNoForm>
    <md-input-container><input mdInput placeholder="title" [(ngModel)]="post.title"></md-input-container>
  </form>
</div>
<div>My name is {{post.title}}</div>
`,
})
export class HomeComponent  {
  post: any = {};
}
