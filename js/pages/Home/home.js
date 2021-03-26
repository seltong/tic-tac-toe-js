"use strict"
import { formField, inputField } from '../../components/forms.js';

export function renderHome() {
  const form = formField();

  form.append(inputField({
    type: 'button',
    value: 'New Game',
    onClick: () => null
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

  document.querySelector("body").append(form);
}