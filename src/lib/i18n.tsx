'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type Locale = 'en' | 'zh' | 'es' | 'fr';

const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
};

// Core UI translations
const translations: Record<Locale, Record<string, string>> = {
  en: {
    'nav.about': 'About',
    'nav.initiatives': 'Initiatives',
    'nav.facts': 'Facts',
    'nav.news': 'News',
    'nav.tedx': 'TEDx',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    'nav.join': 'Join',
    'hero.title1': 'Youth Coalition for',
    'hero.title2': 'Organ Donation',
    'hero.subtitle': 'New Yorkers helping New Yorkers save lives',
    'hero.join': 'Join the Movement',
    'hero.facts': 'Learn the Facts',
    'cta.join': 'Join the Movement',
    'cta.register': 'Become a Donor Today',
    'cta.text_register': 'Text REGISTER to',
    'cta.send_text': 'Send Text Now',
    'cta.copy_instructions': 'Copy Text Instructions',
    'cta.copied': 'Copied! Send from your phone.',
    'cta.phone_instruction': 'Open your phone\'s messaging app and text "REGISTER" to 57838',
    'cta.partnership': 'In partnership with ONE8FIFTY',
    'cta.takes_seconds': 'It takes 30 seconds. No forms. No waiting.',
    'footer.quick_links': 'Quick Links',
    'footer.get_involved': 'Get Involved',
    'footer.contact': 'Contact',
    'footer.register_donor': 'Register as Donor',
    'footer.text_register': 'Text REGISTER to 57838',
    'footer.join_registry': 'Join the organ donor registry instantly through our partnership with ONE8FIFTY',
    'footer.copyright': '© {year} The Youth Coalition for Organ Donation. All rights reserved.',
    'footer.nonprofit': 'A 501(c)(4) nonprofit lobbying organization.',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
    'a11y.skip_to_content': 'Skip to main content',
    'a11y.open_menu': 'Open menu',
    'a11y.close_menu': 'Close menu',
    'blog.title': 'News & Updates',
    'blog.subtitle': 'Stories, breakthroughs, and policy updates shaping the future of organ donation.',
    'blog.all': 'All Posts',
    'blog.search': 'Search posts...',
    'blog.no_posts': 'No posts found',
    'blog.showing': 'Showing {count} post(s)',
    'blog.read_more': 'Read More',
    'stats.waiting': 'People waiting for transplants',
    'stats.ny_waiting': 'New Yorkers on the waitlist',
    'stats.die_daily': 'People who die waiting each day',
    'stats.lives_saved': 'Lives one donor can save',
    'mission.title': 'Our Mission',
    'mission.quote': '"Our mission is to encourage more New Yorkers to become organ donors by passing legislation to \'opt-out\' rather than \'opt-in\' at the DMV."',
  },
  zh: {
    'nav.about': '关于',
    'nav.initiatives': '倡议',
    'nav.facts': '事实',
    'nav.news': '新闻',
    'nav.tedx': 'TEDx',
    'nav.partners': '合作伙伴',
    'nav.contact': '联系',
    'nav.join': '加入',
    'hero.title1': '器官捐献',
    'hero.title2': '青年联盟',
    'hero.subtitle': '纽约人帮助纽约人拯救生命',
    'hero.join': '加入运动',
    'hero.facts': '了解事实',
    'cta.join': '加入运动',
    'cta.register': '今天就成为捐献者',
    'cta.text_register': '发送 REGISTER 至',
    'cta.send_text': '立即发送短信',
    'cta.copy_instructions': '复制短信说明',
    'cta.copied': '已复制！请从手机发送。',
    'cta.phone_instruction': '打开手机短信应用，发送"REGISTER"至 57838',
    'cta.partnership': '与 ONE8FIFTY 合作',
    'cta.takes_seconds': '只需30秒。无需表格。无需等待。',
    'footer.quick_links': '快速链接',
    'footer.get_involved': '参与其中',
    'footer.contact': '联系方式',
    'footer.register_donor': '注册成为捐献者',
    'footer.text_register': '发送 REGISTER 至 57838',
    'footer.join_registry': '通过我们与 ONE8FIFTY 的合作即时加入器官捐献者注册',
    'footer.copyright': '© {year} 器官捐献青年联盟。保留所有权利。',
    'footer.nonprofit': '501(c)(4) 非营利游说组织。',
    'theme.light': '浅色',
    'theme.dark': '深色',
    'theme.system': '跟随系统',
    'a11y.skip_to_content': '跳转到主要内容',
    'a11y.open_menu': '打开菜单',
    'a11y.close_menu': '关闭菜单',
    'blog.title': '新闻和更新',
    'blog.subtitle': '塑造器官捐献未来的故事、突破和政策更新。',
    'blog.all': '所有文章',
    'blog.search': '搜索文章...',
    'blog.no_posts': '未找到文章',
    'blog.showing': '显示 {count} 篇文章',
    'blog.read_more': '阅读更多',
    'stats.waiting': '等待器官移植的人数',
    'stats.ny_waiting': '纽约州等待名单上的人数',
    'stats.die_daily': '每天等待中死亡的人数',
    'stats.lives_saved': '一位捐献者可拯救的生命',
    'mission.title': '我们的使命',
    'mission.quote': '"我们的使命是通过立法将DMV的"选择加入"改为"选择退出"，鼓励更多纽约人成为器官捐献者。"',
  },
  es: {
    'nav.about': 'Acerca de',
    'nav.initiatives': 'Iniciativas',
    'nav.facts': 'Datos',
    'nav.news': 'Noticias',
    'nav.tedx': 'TEDx',
    'nav.partners': 'Socios',
    'nav.contact': 'Contacto',
    'nav.join': 'Únete',
    'hero.title1': 'Coalición Juvenil para la',
    'hero.title2': 'Donación de Órganos',
    'hero.subtitle': 'Neoyorquinos ayudando a neoyorquinos a salvar vidas',
    'hero.join': 'Únete al Movimiento',
    'hero.facts': 'Conoce los Datos',
    'cta.join': 'Únete al Movimiento',
    'cta.register': 'Conviértete en Donante Hoy',
    'cta.text_register': 'Envía REGISTER al',
    'cta.send_text': 'Enviar Texto Ahora',
    'cta.copy_instructions': 'Copiar Instrucciones',
    'cta.copied': '¡Copiado! Envía desde tu teléfono.',
    'cta.phone_instruction': 'Abre la app de mensajes de tu teléfono y envía "REGISTER" al 57838',
    'cta.partnership': 'En asociación con ONE8FIFTY',
    'cta.takes_seconds': 'Solo toma 30 segundos. Sin formularios. Sin espera.',
    'footer.quick_links': 'Enlaces Rápidos',
    'footer.get_involved': 'Involúcrate',
    'footer.contact': 'Contacto',
    'footer.register_donor': 'Regístrate como Donante',
    'footer.text_register': 'Envía REGISTER al 57838',
    'footer.join_registry': 'Únete al registro de donantes de órganos al instante a través de nuestra asociación con ONE8FIFTY',
    'footer.copyright': '© {year} La Coalición Juvenil para la Donación de Órganos. Todos los derechos reservados.',
    'footer.nonprofit': 'Organización de cabildeo sin fines de lucro 501(c)(4).',
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.system': 'Sistema',
    'a11y.skip_to_content': 'Saltar al contenido principal',
    'a11y.open_menu': 'Abrir menú',
    'a11y.close_menu': 'Cerrar menú',
    'blog.title': 'Noticias y Actualizaciones',
    'blog.subtitle': 'Historias, avances y actualizaciones de políticas que están moldeando el futuro de la donación de órganos.',
    'blog.all': 'Todas las Publicaciones',
    'blog.search': 'Buscar publicaciones...',
    'blog.no_posts': 'No se encontraron publicaciones',
    'blog.showing': 'Mostrando {count} publicación(es)',
    'blog.read_more': 'Leer Más',
    'stats.waiting': 'Personas esperando trasplantes',
    'stats.ny_waiting': 'Neoyorquinos en la lista de espera',
    'stats.die_daily': 'Personas que mueren esperando cada día',
    'stats.lives_saved': 'Vidas que un donante puede salvar',
    'mission.title': 'Nuestra Misión',
    'mission.quote': '"Nuestra misión es alentar a más neoyorquinos a convertirse en donantes de órganos mediante la aprobación de legislación para \'optar por no participar\' en lugar de \'optar por participar\' en el DMV."',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.initiatives': 'Initiatives',
    'nav.facts': 'Faits',
    'nav.news': 'Actualités',
    'nav.tedx': 'TEDx',
    'nav.partners': 'Partenaires',
    'nav.contact': 'Contact',
    'nav.join': 'Rejoindre',
    'hero.title1': 'Coalition des Jeunes pour le',
    'hero.title2': 'Don d\'Organes',
    'hero.subtitle': 'Les New-Yorkais aident les New-Yorkais à sauver des vies',
    'hero.join': 'Rejoindre le Mouvement',
    'hero.facts': 'Découvrir les Faits',
    'cta.join': 'Rejoindre le Mouvement',
    'cta.register': 'Devenez Donneur Aujourd\'hui',
    'cta.text_register': 'Envoyez REGISTER au',
    'cta.send_text': 'Envoyer le SMS',
    'cta.copy_instructions': 'Copier les Instructions',
    'cta.copied': 'Copié ! Envoyez depuis votre téléphone.',
    'cta.phone_instruction': 'Ouvrez l\'application de messages de votre téléphone et envoyez "REGISTER" au 57838',
    'cta.partnership': 'En partenariat avec ONE8FIFTY',
    'cta.takes_seconds': 'Cela prend 30 secondes. Pas de formulaire. Pas d\'attente.',
    'footer.quick_links': 'Liens Rapides',
    'footer.get_involved': 'S\'impliquer',
    'footer.contact': 'Contact',
    'footer.register_donor': 'S\'inscrire comme Donneur',
    'footer.text_register': 'Envoyez REGISTER au 57838',
    'footer.join_registry': 'Rejoignez le registre des donneurs d\'organes instantanément grâce à notre partenariat avec ONE8FIFTY',
    'footer.copyright': '© {year} La Coalition des Jeunes pour le Don d\'Organes. Tous droits réservés.',
    'footer.nonprofit': 'Organisation de lobbying à but non lucratif 501(c)(4).',
    'theme.light': 'Clair',
    'theme.dark': 'Sombre',
    'theme.system': 'Système',
    'a11y.skip_to_content': 'Aller au contenu principal',
    'a11y.open_menu': 'Ouvrir le menu',
    'a11y.close_menu': 'Fermer le menu',
    'blog.title': 'Actualités et Mises à jour',
    'blog.subtitle': 'Histoires, percées et mises à jour politiques façonnant l\'avenir du don d\'organes.',
    'blog.all': 'Tous les Articles',
    'blog.search': 'Rechercher...',
    'blog.no_posts': 'Aucun article trouvé',
    'blog.showing': '{count} article(s) affiché(s)',
    'blog.read_more': 'Lire la Suite',
    'stats.waiting': 'Personnes en attente de greffes',
    'stats.ny_waiting': 'New-Yorkais sur la liste d\'attente',
    'stats.die_daily': 'Personnes décédant chaque jour en attente',
    'stats.lives_saved': 'Vies qu\'un donneur peut sauver',
    'mission.title': 'Notre Mission',
    'mission.quote': '"Notre mission est d\'encourager davantage de New-Yorkais à devenir donneurs d\'organes en faisant passer une législation de \'consentement présumé\' plutôt que de \'consentement explicite\' au DMV."',
  },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string>) => string;
  locales: typeof LOCALE_NAMES;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key: string) => key,
  locales: LOCALE_NAMES,
});

export function useI18n() {
  return useContext(I18nContext);
}

function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith('zh')) return 'zh';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('fr')) return 'fr';
  return 'en';
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const stored = localStorage.getItem('ycod-locale') as Locale | null;
    setLocaleState(stored || detectLocale());
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('ycod-locale', l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string>) => {
      let str = translations[locale]?.[key] || translations.en[key] || key;
      if (vars) {
        Object.entries(vars).forEach(([k, v]) => {
          str = str.replace(`{${k}}`, v);
        });
      }
      return str;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, locales: LOCALE_NAMES }}>
      {children}
    </I18nContext.Provider>
  );
}
