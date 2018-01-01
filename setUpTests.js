import enzyme, { shallow, render, mount, configure } from 'enzyme';
import 'babel-polyfill';
import jsdom from 'jsdom';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Mock the dom for tests.
const html =
  "<!DOCTYPE html><html><head><meta charset='utf-8'></head><body></body></html>";

global.document = jsdom.jsdom(html, {
  globalize: true,
  console: true,
  useEach: false,
  skipWindowCheck: false
});

global.window = document.defaultView;
global.navigator = window.navigator;

// Make enzyme methods available in all tests.
global.shallow = shallow;
global.render = render;
global.mount = mount;
