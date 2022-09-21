import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() complexObj: any;


  render() {
    return (
      
      this.complexObj.map((item:any) => (
        <div class="itemHolder">
          <div>{item.value}</div>
          <div>{item.label}</div>
        </div>
      ))
    )
  }
}
