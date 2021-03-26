
export function setRoot(newRoot) {
  const root = document.getElementById('root');
  root.innerHTML = '';
  root.append(newRoot());
}