import '../css/styles.css';

const refs = {
    bodyTheme: document.querySelector('body'),
    themeSwitchButton: document.querySelector('button[data-action="theme-switch"]'),
    toolbarIconSwitch: document.querySelector('.toolbar__icon'),
};

const darkTheme = {
    theme: 'theme-dark',
    icon: 'brightness_3',
};

const lightTheme = {
    theme: 'theme-light',
    icon: 'wb_sunny',
};

const previousTheme = localStorage.getItem('theme');

// if (previousTheme === darkTheme.theme) {
//   // switchTheme(darkTheme.theme);
// // } else {
// //   switchTheme(lightTheme.theme);
// refs.bodyTheme.classList.add(darkTheme.theme)
// }

refs.themeSwitchButton.addEventListener('click', handleSwitchTheme);

function handleSwitchTheme() {
  if (refs.bodyTheme.classList.toggle(darkTheme.theme)) {
    refs.toolbarIconSwitch.textContent = lightTheme.icon;
    localStorage.setItem('theme', 'dark');
    return;
  }
  refs.bodyTheme.classList.remove(lightTheme.theme);
  refs.toolbarIconSwitch.textContent = darkTheme.icon;
  localStorage.setItem('theme', 'light');
};

