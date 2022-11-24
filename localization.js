const locale = 'lt';

let translations = {};

document.addEventListener('DOMContentLoaded', () => {
  setLocale(locale);
});

const setLocale = async newLocale => {
  translations = await fetchTranslations(newLocale);
  texts = translations.text;
  placeholders = translations.placeholder;
  values = translations.value;

  translatePage();
};

const fetchTranslations = async newLocale => {
  const response = await fetch(`lang/${newLocale}.json`);

  return await response.json();
};

const translatePage = () => {
  document.querySelectorAll('[localization-key]').forEach(element => {
    let key = element.getAttribute('localization-key');
    let translation = texts[key];

    element.innerHTML = translation;
  });
  document
    .querySelectorAll('[localization-placeholder-key]')
    .forEach(element => {
      let key = element.getAttribute('localization-placeholder-key');
      let translation = placeholders[key];

      element.placeholder = translation;
    });
  document.querySelectorAll('[localization-value-key]').forEach(element => {
    let key = element.getAttribute('localization-value-key');
    let translation = values[key];
    element.value = translation;
  });
};
const switcher = document.getElementById('localization-switcher');

switcher.onchange = e => {
  // Set the locale to the selected option's value

  setLocale(e.target.value);
};
