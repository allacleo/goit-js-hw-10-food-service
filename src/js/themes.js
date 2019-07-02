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


refs.themeSwitchButton.addEventListener('click', handleSwitchTheme);

function handleSwitchTheme() {
  if (refs.bodyTheme.classList.toggle(darkTheme.theme)) {
    refs.toolbarIconSwitch.textContent = darkTheme.icon;
    localStorage.setItem('settings', JSON.stringify(darkTheme));
    return;
  }
  refs.bodyTheme.classList.remove(lightTheme.theme);
  refs.toolbarIconSwitch.textContent = lightTheme.icon;
  localStorage.setItem('settings', JSON.stringify(lightTheme));
};



const savedSettings = localStorage.getItem('settings');
const parsedSettings = JSON.parse(savedSettings);

refs.bodyTheme.classList.add(parsedSettings.theme);
refs.toolbarIconSwitch.textContent = parsedSettings.icon;