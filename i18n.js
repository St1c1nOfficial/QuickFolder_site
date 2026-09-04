(() => {
  const STORAGE_KEY = "qf-lang";
  const DEFAULT_LANG = "ru";

  const dict = {
    ru: {
      "meta.title": "QuickFolder — быстрый доступ к папкам",
      "meta.description":
        "QuickFolder — лёгкое Windows-приложение для быстрого доступа к избранным папкам. Группы, поиск, RU/EN. by St1c1n.",
      "nav.why": "Зачем",
      "nav.better": "Преимущества",
      "nav.use": "Где помогает",
      "nav.compare": "Аналоги",
      "nav.github": "GitHub",
      "lang.label": "Язык",
      "hero.eyebrow": "Windows · Offline · Без аккаунта",
      "hero.title": "Папки, которые нужны каждый день — <em>в один клик</em>",
      "hero.lead":
        "QuickFolder — лёгкое приложение, которое держит избранные каталоги под рукой: рабочий стол, проекты, документы, учёба. Без хаоса в проводнике и без лишних вкладок.",
      "hero.download": "Скачать для Windows",
      "hero.source": "Исходный код",
      "hero.meta1": "Один файл .exe",
      "hero.meta2": "Русский / English",
      "hero.meta3": "Данные только у вас",
      "hero.shotAlt": "Интерфейс QuickFolder",
      "why.title": "Для чего это",
      "why.lead":
        "Не ещё один «файловый менеджер на 100 кнопок», а быстрый доступ к тому, чем вы реально пользуетесь.",
      "why.card1.title": "Закрепить важное",
      "why.card1.text":
        "Добавьте папки проектов, клиента, учёбы или загрузок — и открывайте их без поиска по диску.",
      "why.card2.title": "Навести порядок",
      "why.card2.text":
        "Группы, избранное, недавние и корзина. Всё разложено, как в удобном лаунчере, а не в куче ярлыков на рабочем столе.",
      "why.card3.title": "Работать локально",
      "why.card3.text":
        "Без облака, без регистрации, без трекинга. Список папок хранится у вас — вы сами выбираете папку для данных.",
      "better.title": "Чем QuickFolder удобнее",
      "better.lead":
        "Сравниваем не «с Adobe», а с тем, как люди обычно открывают папки каждый день.",
      "table.h.explorer": "Проводник Windows",
      "table.h.shortcuts": "Ярлыки на рабочем столе",
      "table.h.app": "QuickFolder",
      "table.r1.label": "Скорость доступа",
      "table.r1.explorer": "Часто «Клиент → диск → папка → ещё папка»",
      "table.r1.shortcuts": "Быстро, но рабочий стол превращается в свалку",
      "table.r1.app": "Один клик «Открыть»",
      "table.r2.label": "Группировка",
      "table.r2.explorer": "Ограничена",
      "table.r2.shortcuts": "Почти нет",
      "table.r2.app": "Свои группы, цвета, фильтры",
      "table.r3.label": "Поиск по избранному",
      "table.r3.explorer": "По всему диску",
      "table.r3.shortcuts": "Глазами",
      "table.r3.app": "Мгновенный поиск по вашему списку",
      "table.r4.label": "Порядок",
      "table.r4.explorer": "Зависит от дисциплины",
      "table.r4.shortcuts": "Быстро захламляется",
      "table.r4.app": "Избранное / недавние / корзина",
      "table.r5.label": "Внешний вид",
      "table.r5.explorer": "Стандартный",
      "table.r5.shortcuts": "—",
      "table.r5.app": "Тёмный UI, акцентный цвет, RU/EN",
      "use.title": "Где упрощает жизнь",
      "use.lead": "Реальные сценарии — не абстрактные «productivity tips».",
      "use.card1.title": "Разработка и фриланс",
      "use.card1.text":
        "Проекты на разных дисках, репозитории, дизайн-ресурсы. Открыл QuickFolder — сразу в нужную папку клиента.",
      "use.card2.title": "Учёба",
      "use.card2.text":
        "Лекции, курсовые, материалы по предметам. Не нужно каждый раз вспоминать, где лежит семестр.",
      "use.card3.title": "Работа в офисе",
      "use.card3.text":
        "Шаблоны, отчёты, общие сетевые папки. Меньше кликов — меньше раздражения в конце дня.",
      "use.card4.title": "Медиа и личное",
      "use.card4.text":
        "Фото, видео, загрузки, архивы. Всё важное — в одном окне, а не размазано по «Документам».",
      "compare.title": "Есть ли аналоги",
      "compare.lead":
        "Да. Но чаще это либо тяжёлые файловые менеджеры, либо простые списки ярлыков.",
      "compare.similar.title": "Похожие решения",
      "compare.similar.li1":
        "<strong>Total Commander / Directory Opus</strong> — мощные менеджеры. Много функций, выше порог входа, тяжелее «просто открыть 5 папок».",
      "compare.similar.li2":
        "<strong>fman, Double Commander</strong> — удобны для про-пользователей, но это снова полноценные менеджеры.",
      "compare.similar.li3":
        "<strong>Ярлыки Windows / панели быстрого доступа</strong> — бесплатно и встроено, но слабая организация и быстро захламляется.",
      "compare.similar.li4":
        "<strong>Launchy / Ueli / PowerToys Run</strong> — лаунчеры всего подряд. Не заточены именно под «каталог любимых папок».",
      "compare.place.title": "Место QuickFolder",
      "compare.place.text":
        "Если вам не нужен «второй Total Commander», а нужен <strong>чистый список важных папок</strong> с группами, поиском и тёмным интерфейсом — QuickFolder попадает ровно в эту нишу.",
      "compare.place.li1": "Один .exe, без установки зоопарка компонентов",
      "compare.place.li2": "Фокус на избранных путях, а не на всём диске",
      "compare.place.li3": "Локальные данные, первый запуск с выбором папки хранения",
      "compare.place.li4": "Открытый исходный код на GitHub",
      "cta.title": "Попробуйте QuickFolder",
      "cta.text":
        "Скачайте релиз, укажите папку для данных и добавьте первые каталоги. Через минуту — уже быстрее, чем лазить по проводнику.",
      "cta.download": "Скачать .exe",
      "cta.github": "GitHub",
      "footer.repo": "Repository",
      "footer.releases": "Releases",
      "footer.license": "MIT License",
    },
    en: {
      "meta.title": "QuickFolder — quick access to folders",
      "meta.description":
        "QuickFolder — a lightweight Windows app for quick access to your favorite folders. Groups, search, RU/EN. by St1c1n.",
      "nav.why": "Why",
      "nav.better": "Benefits",
      "nav.use": "Use cases",
      "nav.compare": "Alternatives",
      "nav.github": "GitHub",
      "lang.label": "Language",
      "hero.eyebrow": "Windows · Offline · No account",
      "hero.title": "Folders you need every day — <em>in one click</em>",
      "hero.lead":
        "QuickFolder is a lightweight app that keeps your favorite directories within reach: desktop, projects, documents, schoolwork. No File Explorer chaos, no extra tabs.",
      "hero.download": "Download for Windows",
      "hero.source": "Source code",
      "hero.meta1": "Single .exe file",
      "hero.meta2": "Russian / English",
      "hero.meta3": "Your data stays with you",
      "hero.shotAlt": "QuickFolder interface",
      "why.title": "What it's for",
      "why.lead":
        "Not another “file manager with 100 buttons” — just fast access to the folders you actually use.",
      "why.card1.title": "Pin what matters",
      "why.card1.text":
        "Add project, client, school, or download folders — and open them without hunting across the disk.",
      "why.card2.title": "Stay organized",
      "why.card2.text":
        "Groups, favorites, recent, and trash. Laid out like a handy launcher, not a pile of desktop shortcuts.",
      "why.card3.title": "Work offline",
      "why.card3.text":
        "No cloud, no sign-up, no tracking. Your folder list stays on your PC — you choose where data is stored.",
      "better.title": "Why QuickFolder is more convenient",
      "better.lead":
        "We compare not “to Adobe”, but to how people usually open folders every day.",
      "table.h.explorer": "Windows Explorer",
      "table.h.shortcuts": "Desktop shortcuts",
      "table.h.app": "QuickFolder",
      "table.r1.label": "Access speed",
      "table.r1.explorer": "Often “This PC → drive → folder → another folder”",
      "table.r1.shortcuts": "Fast, but the desktop turns into a dump",
      "table.r1.app": "One “Open” click",
      "table.r2.label": "Grouping",
      "table.r2.explorer": "Limited",
      "table.r2.shortcuts": "Almost none",
      "table.r2.app": "Your own groups, colors, filters",
      "table.r3.label": "Search favorites",
      "table.r3.explorer": "Across the whole disk",
      "table.r3.shortcuts": "With your eyes",
      "table.r3.app": "Instant search across your list",
      "table.r4.label": "Order",
      "table.r4.explorer": "Depends on discipline",
      "table.r4.shortcuts": "Gets cluttered fast",
      "table.r4.app": "Favorites / recent / trash",
      "table.r5.label": "Look & feel",
      "table.r5.explorer": "Default",
      "table.r5.shortcuts": "—",
      "table.r5.app": "Dark UI, accent color, RU/EN",
      "use.title": "Where it saves time",
      "use.lead": "Real scenarios — not abstract “productivity tips”.",
      "use.card1.title": "Dev & freelance",
      "use.card1.text":
        "Projects on different drives, repos, design assets. Open QuickFolder — jump straight into the client folder.",
      "use.card2.title": "Study",
      "use.card2.text":
        "Lectures, coursework, subject materials. No more guessing where this semester lives.",
      "use.card3.title": "Office work",
      "use.card3.text":
        "Templates, reports, shared network folders. Fewer clicks — less friction by end of day.",
      "use.card4.title": "Media & personal",
      "use.card4.text":
        "Photos, video, downloads, archives. Everything important in one window — not scattered under Documents.",
      "compare.title": "Are there alternatives?",
      "compare.lead":
        "Yes. But they are usually either heavy file managers or simple shortcut lists.",
      "compare.similar.title": "Similar tools",
      "compare.similar.li1":
        "<strong>Total Commander / Directory Opus</strong> — powerful managers. Lots of features, steeper learning curve, heavier for “just open 5 folders”.",
      "compare.similar.li2":
        "<strong>fman, Double Commander</strong> — great for power users, but again full-blown file managers.",
      "compare.similar.li3":
        "<strong>Windows shortcuts / Quick Access</strong> — free and built-in, but weak organization and clutter piles up fast.",
      "compare.similar.li4":
        "<strong>Launchy / Ueli / PowerToys Run</strong> — launchers for everything. Not focused on a catalog of favorite folders.",
      "compare.place.title": "Where QuickFolder fits",
      "compare.place.text":
        "If you don’t need a “second Total Commander” but want a <strong>clean list of important folders</strong> with groups, search, and a dark UI — QuickFolder hits that niche.",
      "compare.place.li1": "Single .exe, no component zoo to install",
      "compare.place.li2": "Focused on favorite paths, not the whole disk",
      "compare.place.li3": "Local data, first-run storage folder picker",
      "compare.place.li4": "Open source on GitHub",
      "cta.title": "Try QuickFolder",
      "cta.text":
        "Download a release, pick a data folder, and add your first directories. In a minute you’re already faster than digging through Explorer.",
      "cta.download": "Download .exe",
      "cta.github": "GitHub",
      "footer.repo": "Repository",
      "footer.releases": "Releases",
      "footer.license": "MIT License",
    },
  };

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && dict[saved]) return saved;
    } catch (_) {
      /* ignore */
    }
    const nav = (navigator.language || "").toLowerCase();
    return nav.startsWith("ru") ? "ru" : "en";
  }

  function applyLang(lang) {
    const pack = dict[lang] || dict[DEFAULT_LANG];
    document.documentElement.lang = lang;

    const title = pack["meta.title"];
    if (title) document.title = title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc && pack["meta.description"]) {
      desc.setAttribute("content", pack["meta.description"]);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = pack[key];
      if (value == null) return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      const value = pack[key];
      if (value != null) el.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }
  }

  function init() {
    const switcher = document.querySelector("[data-lang-switcher]");
    if (switcher) {
      switcher.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-lang]");
        if (!btn) return;
        applyLang(btn.getAttribute("data-lang"));
      });
    }

    applyLang(detectLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
