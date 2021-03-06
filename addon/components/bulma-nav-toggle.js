import Ember from 'ember';
import layout from '../templates/components/bulma-nav-toggle';
import { _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  tagName: 'span',
  classNames: ['nav-toggle'],
  classNameBindings: _responsiveHelpers,
  /**
    Handle click action on mousedown, return instance of component for mutablity

    @method mouseDown
    @returns Component
    @public
  */
  mouseDown() {
    let action = this.get('onmousedown');
    if (action) {
      action(this);
    }
  },
  actions: {
    click() {
      this.mouseDown();
    }
  }
});
