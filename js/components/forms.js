"use strict"

export function inputField(
  { type = 'text',
    value = '',
    classes = '',
    onClick = null
  }) {
  const input = document.createElement('input');

  input.setAttribute('type', type);
  input.setAttribute('value', value);
  input.setAttribute('class', classes);
  onClick && input.addEventListener('click', () => onClick());

  return input;
}

export function labelField(children = '', classes = '') {
  const label = document.createElement('label');

  label.setAttribute('class', classes);

  label.append(children);

  return label;
}

export function formField() {
  const form = document.createElement('form');
  return form;
}