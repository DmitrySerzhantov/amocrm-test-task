type ItemNavigation = [
  {value: string; href: string; id: string},
  {value: string; href: string; id: string},
  {value: string; href: string; id: string},
  {value: string; href: string; id: string},
  {value: string; href: string; id: string}
];

export const itemNavigation: ItemNavigation = [
  {value: 'Услуги', href: '/', id: 'Services'},
  {value: 'Виджеты', href: '/', id: 'Widgets'},
  {value: 'Интеграции', href: '/', id: 'Integrations'},
  {value: 'Кейсы', href: '/', id: 'Case'},
  {value: 'Сертификаты', href: '/', id: 'Certificates'},
];

export const tel: string = '+7 555 555-55-55';
type Gifts = [
  {title: string; text: string; id: string},
  {title: string; text: string; id: string},
  {title: string; text: string; id: string},
  {title: string; text: string; id: string}
];

export const gifts: Gifts = [
  {title: 'Виджеты', text: '30 готовых решений', id: 'Виджеты'},
  {title: 'Dashboard', text: 'с показателями вашего бизнеса', id: 'Dashboard'},
  {
    title: 'Skype Аудит',
    text: 'отдела продаж и CRM системы',
    id: 'Skype Аудит',
  },
  {title: '35 дней', text: 'использования CRM', id: '35 дней'},
];

export const aboutList: string[] = ['Партнёрская программа', 'Вакансии'];
export const menuList: string[] = [
  'Расчёт стоимости',
  'Кейсы',
  'Услуги',
  'Благодарственные письма',
  'Виджеты',
  'Сертификаты',
  'Интеграции',
  'Блог на Youtube',
  'Наши клиенты',
  'Вопрос / Ответ',
];
