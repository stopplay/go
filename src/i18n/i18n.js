import I18n from 'react-native-i18n';
import en from './languages/en-US';
import ptBR from './languages/pt-BR';
import ar from './languages/ar';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

I18n.defaultLocale = 'en';

I18n.translations = {
  en,
  'pt-BR': ptBR,
  ar,
};

export default I18n;
