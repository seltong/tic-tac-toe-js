"use strinct"

import { inputField } from '../../components/forms.js';
import { renderHome } from '../Home/home.js';
import { setRoot } from '../../utils.js';

function renderBoard() {
  return inputField({
    type: 'button',
    value: 'Go back',
    onClick: () => setRoot(renderHome)
  });
}

export function renderGame() {
  return renderBoard();
}