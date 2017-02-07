import QUnit from 'steal-qunit';
import plugin from './xedos-animator';

QUnit.module('xedos-animator');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the xedos-animator plugin');
});
