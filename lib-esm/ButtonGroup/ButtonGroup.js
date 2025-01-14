import styled from 'styled-components';
import { get } from '../constants.js';
import sx from '../sx.js';

const ButtonGroup = styled.div.withConfig({
  displayName: "ButtonGroup",
  componentId: "sc-1gxhls1-0"
})(["display:inline-flex;vertical-align:middle;isolation:isolate;&& > *{margin-inline-end:-1px;position:relative;border-radius:0;:first-child{border-top-left-radius:", ";border-bottom-left-radius:", ";}:last-child{border-top-right-radius:", ";border-bottom-right-radius:", ";}:focus,:active,:hover{z-index:1;}}", ";"], get('radii.2'), get('radii.2'), get('radii.2'), get('radii.2'), sx);
var ButtonGroup$1 = ButtonGroup;

export { ButtonGroup$1 as default };
