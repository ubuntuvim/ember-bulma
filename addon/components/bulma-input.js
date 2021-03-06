import Ember from 'ember';
import layout from '../templates/components/bulma-input';
import computed, { alias } from 'ember-computed-decorators';
import { makeString, nativeAttrs, deprecations } from '../utils';

const {
  Component,
  get,
  set
} = Ember;

const {
  input
} = nativeAttrs;

export default Component.extend({
  layout,
  tagName: 'input',
  classNames: ['input'],
  classNameBindings: [
    'isSmall:is-small',
    'isMedium:is-medium',
    'isLarge:is-large'
  ],
  attributeBindings: ['isDisabled:disabled','disabled'].concat(input),

  /**
    * Default class name binding
    *
    * @property isNormal
    * @type Bool
    * @default true
    */
  isNormal: true,

  init() {
    this._super(...arguments);

    // Make user aware of deprecations for this Component
    deprecations([
      { name: 'control', value: get(this, 'control') },
      { name: 'isLoading', value: get(this, 'isLoading')},
      { name: 'isTextarea', value: get(this, 'isTextarea')},
      { name: 'key-up', value: get(this, 'key-up')}
    ]);
  }
});
