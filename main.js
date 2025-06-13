export function setupButtonListener() {
  document.getElementById('myButton').addEventListener('click', () => {
    alert('Button clicked!');
    console.log('Button clicked!');
  });
}

setupButtonListener();