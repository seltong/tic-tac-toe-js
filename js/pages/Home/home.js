"use strict"
import { formField, inputField } from '../../components/forms.js';
import { setRoot } from '../../utils.js';
import { renderGame } from '../Game/game.js';

export function renderHome() {
  const form = formField();

  form.append(inputField({
    type: 'button',
    value: 'New Game',
    onClick: () => setRoot(renderGame)
  }));

  form.append(inputField({
    type: 'button',
    value: 'Multiplayer',
    onClick: () => null
  }));

  form.append(inputField({
    type: 'button',
    value: 'Options',
    onClick: () => null
  }));

  //document.querySelector("body").append(form);
  return form;
}