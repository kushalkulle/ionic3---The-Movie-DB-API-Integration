import { Component, Input, ViewChild  } from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';
/**
 * Generated class for the MovielistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movielist',
  templateUrl: 'movielist.html'
})
export class MovielistComponent {
  @Input() data: any;
  @Input() events: any;

  @ViewChild(Content)
  content: Content;
  animateItems = [];
  animateClass: any;

  constructor() {
    this.animateClass = { 'zoom-in': true };
  }

  onEvent(event: string, item: any, e: any) {
    if (e) {
        e.stopPropagation();
    }
    if (this.events[event]) {
    }
}

ngOnChanges(changes: { [propKey: string]: any }) {
    console.log('ngOnChanges');
    let that = this;
    that.data = changes['data'].currentValue;
    if (that.data && that.data.items) {
        that.animateItems = [];
        for (let i = 0; i < that.data.items.length; i++) {
            setTimeout(function () {
                that.animateItems.push(that.data.items[i]);
            }, 200 * i);
        }
    }
}

}
