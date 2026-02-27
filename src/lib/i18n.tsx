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
    // Navigation
    'nav.about': 'About',
    'nav.initiatives': 'Initiatives',
    'nav.facts': 'Facts',
    'nav.news': 'News',
    'nav.tedx': 'TEDx',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    'nav.join': 'Join',

    // Hero
    'hero.title1': 'Youth Coalition for',
    'hero.title2': 'Organ Donation',
    'hero.subtitle': 'New Yorkers helping New Yorkers save lives',
    'hero.join': 'Join the Movement',
    'hero.facts': 'Learn the Facts',

    // CTAs (shared)
    'cta.join': 'Join the Movement',
    'cta.register': 'Become a Donor Today',
    'cta.text_register': 'Text REGISTER to',
    'cta.send_text': 'Send Text Now',
    'cta.copy_instructions': 'Copy Text Instructions',
    'cta.copied': 'Copied! Send from your phone.',
    'cta.phone_instruction': 'Open your phone\'s messaging app and text "REGISTER" to 57838',
    'cta.partnership': 'In partnership with ONE8FIFTY',
    'cta.takes_seconds': 'It takes 30 seconds. No forms. No waiting.',

    // Footer
    'footer.quick_links': 'Quick Links',
    'footer.get_involved': 'Get Involved',
    'footer.contact': 'Contact',
    'footer.register_donor': 'Register as Donor',
    'footer.text_register': 'Text REGISTER to 57838',
    'footer.join_registry': 'Join the organ donor registry instantly through our partnership with ONE8FIFTY',
    'footer.copyright': '© {year} The Youth Coalition for Organ Donation. All rights reserved.',
    'footer.nonprofit': 'A 501(c)(4) nonprofit lobbying organization.',

    // Theme
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',

    // Accessibility
    'a11y.skip_to_content': 'Skip to main content',
    'a11y.open_menu': 'Open menu',
    'a11y.close_menu': 'Close menu',

    // Blog
    'blog.title': 'News & Updates',
    'blog.subtitle': 'Stories, breakthroughs, and policy updates shaping the future of organ donation.',
    'blog.all': 'All Posts',
    'blog.search': 'Search posts...',
    'blog.no_posts': 'No posts found',
    'blog.empty_hint': 'Try a different search or category.',
    'blog.showing': 'Showing {count} post(s)',
    'blog.read_more': 'Read More',
    'blog.cta_title': 'Stay Informed, Save Lives',
    'blog.cta_subtitle': 'Follow the latest developments in organ donation policy and advocacy.',

    // Stats
    'stats.waiting': 'People waiting for transplants',
    'stats.ny_waiting': 'New Yorkers on the waitlist',
    'stats.die_daily': 'People who die waiting each day',
    'stats.lives_saved': 'Lives one donor can save',

    // Mission
    'mission.title': 'Our Mission',
    'mission.quote': '"Our mission is to encourage more New Yorkers to become organ donors by passing legislation to \'opt-out\' rather than \'opt-in\' at the DMV."',

    // About page
    'about.title': 'Who We Are',
    'about.subtitle': 'Four high school students who decided that saving lives shouldn\'t be optional.',
    'about.story_title': 'Our Story',
    'about.story_text': 'In 2017, when one of Evan\'s family members needed a kidney transplant, four students at East Aurora High School near Buffalo, NY decided to take action. What started as joining their school\'s Donate Life Club became a multinational movement.',
    'about.team_title': 'Meet the Team',
    'about.cta_title': 'Ready to Join Our Story?',

    // Bill page
    'bill.title': 'The Bill',
    'bill.subtitle': 'Our proposed legislation to change organ donation from opt-in to opt-out at the DMV',
    'bill.what_title': 'What the Bill Does',
    'bill.problem_title': 'The Problem',
    'bill.problem_text': 'Currently at the NY DMV, you must actively choose to register as an organ donor. Many people support donation but never check the box — they skip the question, forget, or don\'t think about it.',
    'bill.solution_title': 'The Solution',
    'bill.solution_text': 'Our bill changes the default: unless you specifically choose to skip the organ donation question, you\'re registered as a donor. You always have the right to opt out — the default just saves more lives.',
    'bill.key_provision': 'Key Provision',
    'bill.safeguards_title': 'Built-In Safeguards',
    'bill.safeguard_dmv': 'DMV Only',
    'bill.safeguard_dmv_desc': 'Applies only to license and renewal applications',
    'bill.safeguard_question': 'Consent Question',
    'bill.safeguard_question_desc': 'Applicants see the donation question first',
    'bill.safeguard_optout': 'Easy Opt-Out',
    'bill.safeguard_optout_desc': 'Skip the question or write to the commissioner any time',
    'bill.safeguard_notice': 'Written Notice',
    'bill.safeguard_notice_desc': 'Commissioner sends mail confirming registration',
    'bill.safeguard_minors': 'Under-18 Exempt',
    'bill.safeguard_minors_desc': 'Does not apply to minors',
    'bill.safeguard_choice': 'Your Choice',
    'bill.safeguard_choice_desc': 'You can always opt out at any time, no questions asked',
    'bill.draft_title': '2021 Draft Bill Text',
    'bill.draft_note': 'Based on Bill A07954 (2019), updated for the 2021 legislative session.',
    'bill.view_original': 'View Original 2019 Bill on NY Assembly',
    'bill.cta_title': 'Support This Legislation',
    'bill.cta_subtitle': 'Contact your representatives and join our movement.',

    // Facts page
    'facts.title': 'Fast Facts',
    'facts.subtitle': 'The numbers that drive our mission. Share these — they save lives.',
    'facts.charts_title': 'The Data, Visualized',
    'facts.charts_subtitle': 'Explore the numbers behind the organ donation crisis.',
    'facts.quiz_title': 'Did You Know?',
    'facts.quiz_subtitle': 'Test your organ donation knowledge with our quick quiz!',
    'facts.quiz_question': 'Question {current} of {total}',
    'facts.quiz_score': 'Score: {score}',
    'facts.quiz_next': 'Next Question',
    'facts.quiz_results': 'See Results',
    'facts.quiz_excellent': 'Amazing! You know your stuff!',
    'facts.quiz_good': 'Good effort! Keep learning!',
    'facts.quiz_ok': 'Now you know more than before!',
    'facts.quiz_share': 'Share these facts with friends and family to spread awareness!',
    'facts.quiz_retry': 'Try Again',

    // Join page
    'join.title': 'Be Part of the Movement',
    'join.subtitle': 'If you\'re a young person (or young at heart), you can join us in working towards organ donation policy awareness.',
    'join.note': 'Note: We won\'t ever ask for donations, nor do we accept individual donors at this time, instead relying on volunteer work from our team and the generosity of academic institutions and foundations.',
    'join.form_title': 'Join YCOD',
    'join.name_label': 'Name *',
    'join.email_label': 'Email *',
    'join.zip_label': 'Zip Code *',
    'join.address_label': 'Mailing Address',
    'join.address_hint': '(optional — for a small thank-you gift)',
    'join.submit': 'Join the Movement',
    'join.submitting': 'Joining...',
    'join.privacy': 'Your information is stored securely and used only for YCOD communications. We never share your data with third parties.',
    'join.success_title': 'Welcome to the Movement!',
    'join.success_text': 'Thank you for joining YCOD. Together, we\'re saving lives.',
    'join.register_title': 'Register as a Donor',
    'join.register_text': 'Text REGISTER to 57838 to join the organ donor registry instantly.',
    'join.reps_title': 'Contact Your Representatives',
    'join.reps_text': 'Let your elected officials know you support opt-out organ donation legislation.',
    'join.find_assembly': 'Find Your Assembly Member',
    'join.find_senator': 'Find Your Senator',

    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'New Yorkers helping New Yorkers',
    'contact.info_title': 'Get in Touch',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.location_text': 'Buffalo, NY (Western New York)',
    'contact.social': 'Social',
    'contact.form_title': 'Send a Message',
    'contact.name_label': 'Name *',
    'contact.email_label': 'Email *',
    'contact.message_label': 'Message *',
    'contact.submit': 'Send Message',
    'contact.submitting': 'Sending...',
    'contact.success_title': 'Message Sent!',
    'contact.success_text': 'Thanks for reaching out. We\'ll get back to you soon.',
    'contact.error': 'Could not send message. Please try again or email us directly.',

    // TEDx page
    'tedx.title': 'TEDx',
    'tedx.title_colored': 'Talk',
    'tedx.subtitle': 'Youth political engagement and organ donation advocacy',
    'tedx.quote': '"Young people are seen as apolitical. That\'s not true anymore. Young people are far more likely to be generally participatory than older Americans, more likely to want to engage further in the political process, and more likely to vote than any time in the past fifty years."',
    'tedx.quote_cite': '— Evan Roden, TEDx Talk',
    'tedx.speaker_title': 'About the Speaker',
    'tedx.speaker_bio1': 'Evan Roden is the founder of The Youth Coalition for Organ Donation. A Biomedical Engineering graduate from Tulane University and current Sustainability Engineer at ENFRA, Evan has been advocating for organ donation reform since 2017.',
    'tedx.speaker_bio2': 'After a family member needed a kidney transplant, Evan co-founded YCOD with three classmates at East Aurora High School. The organization has grown to 3,000+ members, drafted actual legislation, and earned nominations and endorsements from major organizations.',
    'tedx.learn_story': 'Learn Our Full Story',
    'tedx.cta_title': 'Inspired? Take Action.',
    'tedx.cta_subtitle': 'Join thousands of young people making a difference.',
    'tedx.register_donor': 'Register as a Donor',

    // Coverage page
    'coverage.title': 'Media Coverage',
    'coverage.subtitle': 'Our story has been shared across local, national, and international media.',
    'coverage.cta_title': 'Watch Our TEDx Talk',
    'coverage.cta_button': 'Watch Now',

    // Initiatives page
    'initiatives.title': 'Our Initiatives',
    'initiatives.subtitle': 'Five pillars driving change in organ donation policy and awareness across New York State and beyond.',
    'initiatives.cta_title': 'Support These Initiatives',
    'initiatives.cta_subtitle': 'Read the proposed legislation and join our movement.',
    'initiatives.read_bill': 'Read the Bill',
    'initiatives.join_us': 'Join Us',

    // Partners page
    'partners.title': 'Our Partners',
    'partners.subtitle': 'We\'re proud to work alongside these incredible organizations in the fight to save lives through organ donation.',
    'partners.cta_title': 'Partner With Us',
    'partners.cta_subtitle': 'Interested in supporting our mission? Get in touch.',

    // Letter generator
    'letter.title': 'Write Your Representative',
    'letter.subtitle': 'We\'ll generate a letter for you. Just fill in your details, copy it, and send.',
    'letter.details': 'Your Details',
    'letter.name_label': 'Your Name',
    'letter.zip_label': 'Your ZIP Code',
    'letter.story_label': 'Personal Story',
    'letter.story_hint': '(optional, but powerful)',
    'letter.preview': 'Letter Preview',
    'letter.copy': 'Copy Letter',
    'letter.copied': 'Copied!',
    'letter.privacy': 'Your name, ZIP code, and personal story are used only to generate this letter in your browser. Nothing is sent to our servers or stored. We do not collect, save, or share any data you enter here.',
    'letter.send_hint': 'After copying your letter, find your representative and send it:',
    'letter.email_client': 'Open in Email Client',

    // Impact calculator
    'calc.title': 'What If More New Yorkers Registered?',
    'calc.subtitle': 'Drag the slider to see the impact of higher registration rates.',
    'calc.rate_label': 'NY Registration Rate',
    'calc.new_registrations': 'New Registrations',
    'calc.lives_saved': 'Lives Saved Per Year',
    'calc.tissue_healed': 'Tissue Recipients Healed',
    'calc.msg_current': 'This is where New York stands today.',
    'calc.msg_modest': 'A modest increase — already making a difference.',
    'calc.msg_achievable': 'This is achievable with simple policy changes.',
    'calc.msg_optout': 'Countries with opt-out systems hit these numbers.',
    'calc.msg_spain': 'Spain-level registration. Thousands of lives saved.',
    'calc.msg_universal': 'Near-universal registration. The dream scenario.',

    // Not found
    'error.404_title': 'Page Not Found',
    'error.404_text': 'The page you\'re looking for doesn\'t exist or has moved.',
    'error.go_home': 'Go Home',
    'error.read_blog': 'Read the Blog',

    // Navigation (additional)
    'nav.bill': 'The Bill',
    'nav.coverage': 'Press',

    // Settings
    'settings.language': 'Language',
    'settings.accessibility': 'Accessibility',
    'settings.high_contrast': 'High Contrast',
    'settings.large_text': 'Large Text',
    'settings.reduced_motion': 'Reduced Motion',
    'settings.dyslexia_font': 'Dyslexia Font',

    // Footer (additional)
    'footer.description': 'Youth Coalition for Organ Donation. New Yorkers helping New Yorkers save lives.',
    'footer.the_bill': 'The Bill',
    'footer.press_coverage': 'Press Coverage',
    'footer.visitors': 'VISITORS',

    // Mission (additional)
    'mission.description': 'Right now, when you get your driver\'s license at the DMV, you have to actively choose to register as an organ donor. We want to flip that default — so everyone is registered unless they choose not to be. This simple change, rooted in behavioral economics, has already saved thousands of lives in countries like Spain, the UK, Austria, and France.',
    'mission.henry_quote': '"I think New Yorkers can put their differences aside and realize saving someone\'s life is really the most important thing you can do."',
    'mission.henry_cite': '— Henry McLaughlin, Co-Founder',

    // Home: Coverage Teaser
    'home.as_seen_in': 'As Seen In',
    'home.media_covered': 'Our story has been covered by media outlets across the country',
    'home.view_press': 'View All Press Coverage',
    'home.tedx_desc': 'Watch our founder Evan Roden\'s TEDx talk on youth political engagement and organ donation advocacy.',
    'home.watch_full': 'Watch Full Talk',

    // Home: Join CTA
    'home.movement_title': 'This Is a Movement of Many',
    'home.movement_desc1': 'Over 3,000 members strong and growing. Young people and those young at heart, coming together to save lives.',
    'home.movement_desc2': 'Join us in advocating for opt-out organ donation in New York State.',

    // Waitlist Ticker
    'waitlist.title': 'National Transplant Waitlist — Simulated Live Counter',
    'waitlist.people_waiting': 'people waiting right now',
    'waitlist.added_daily': 'added daily',
    'waitlist.transplants_day': 'transplants/day',
    'waitlist.die_daily': 'die waiting daily',
    'waitlist.time_message': 'You\'ve been on this page for {time}. In that time, approximately {deaths} people died waiting for an organ.',

    // Timeline
    'timeline.click_expand': 'Click to read more',
    'timeline.click_collapse': 'Click to collapse',

    // DMV Simulator
    'dmv.title': 'Experience the Difference',
    'dmv.subtitle': 'Walk through both systems yourself. See why defaults matter.',
    'dmv.at_dmv': 'You\'re at the DMV, renewing your license.',
    'dmv.intro_text': 'You\'ll go through the organ donation question two ways: the current opt-in system and the proposed opt-out system. Watch how the default changes your experience.',
    'dmv.start_optin': 'Start: Current System (Opt-In)',
    'dmv.current_system': 'CURRENT SYSTEM',
    'dmv.optin_label': 'Opt-In',
    'dmv.proposed_system': 'PROPOSED SYSTEM',
    'dmv.optout_label': 'Opt-Out',
    'dmv.dmv_section': 'DMV License Application — Section 7',
    'dmv.after_paperwork': '(After 45 minutes of paperwork, eye tests, and photos...)',
    'dmv.optin_question': 'Would you like to register as an organ and tissue donor?',
    'dmv.optin_yes': 'Yes, I want to register as an organ donor',
    'dmv.optin_skip': 'Skip this question',
    'dmv.optin_most_skip': 'Most people skip — they\'re tired, rushed, and just want their license.',
    'dmv.submit': 'Submit Application →',
    'dmv.optin_yes_title': 'You registered! You\'re in the minority.',
    'dmv.optin_skip_title': 'You skipped. So do most people.',
    'dmv.optin_yes_text': 'Only about 50% of New Yorkers check "yes." The rest skip it — not because they oppose donation, but because the default is "no."',
    'dmv.optin_skip_text': 'You\'re in good company — about 50% of New Yorkers skip this question. Not because they\'re against donation, but because the default does nothing and they\'re tired of forms.',
    'dmv.try_optout': 'Now Try: Proposed System (Opt-Out) →',
    'dmv.same_dmv': '(Same DMV, same paperwork, same tired applicant...)',
    'dmv.optout_registered': 'You are registered as an organ and tissue donor.',
    'dmv.optout_mail': 'You will receive confirmation by mail. You may opt out at any time.',
    'dmv.optout_change': 'Would you like to change this?',
    'dmv.optout_keep': 'Keep my registration (do nothing)',
    'dmv.optout_remove': 'Remove me from the donor registry',
    'dmv.optout_default': 'Most people do nothing — and that\'s the point. The default saves lives.',
    'dmv.keep_title': 'You stayed registered. No extra effort required.',
    'dmv.remove_title': 'Your choice is respected. You opted out.',
    'dmv.keep_text': 'In opt-out countries, 80–90% of people stay registered simply because the default is "yes." No one is forced — but the path of least resistance saves lives.',
    'dmv.remove_text': 'Opt-out doesn\'t mean forced. You can always say no. The difference is that the default helps instead of hurts. People who want to opt out still can — easily.',
    'dmv.see_comparison': 'See the Comparison →',
    'dmv.compare_title': 'Same Person. Same DMV. Different Default.',
    'dmv.current_optin': 'Current: Opt-In',
    'dmv.register_ny': 'register in NY',
    'dmv.proposed_optout': 'Proposed: Opt-Out',
    'dmv.register_optout': 'register in opt-out countries',
    'dmv.millions_more': 'That\'s millions more potential donors — with zero extra effort from anyone.',
    'dmv.bill_would_do': 'This is what YCOD\'s Bill A07954 would do for New York.',
    'dmv.try_again': 'Try Again',
    'dmv.read_bill': 'Read the Bill',

    // Bill Impact Viz
    'impact.title': 'Projected Impact of Bill A07954',
    'impact.subtitle': 'Based on outcomes from countries that switched to opt-out systems',
    'impact.before': 'Before',
    'impact.after': 'After',
    'impact.reg_rate': 'Registration Rate',
    'impact.annual_donors': 'Annual Donors (NY)',
    'impact.lives_saved': 'Lives Saved (NY/year)',
    'impact.waitlist_reduction': 'Waitlist Reduction',
    'impact.growing': 'Growing',
    'impact.shrinking': 'Shrinking',
    'impact.note': 'These are conservative estimates based on real-world data from opt-out countries. Spain saw a 40% increase in donation rates within 10 years of switching. A similar shift in New York could save over 1,000 additional lives per year.',

    // Action Checklist
    'action.title': 'How You Can Help',
    'action.subtitle': 'Every action makes a difference. Track your impact below.',
    'action.progress': 'Your Progress',
    'action.completed': '{done}/{total} completed',
    'action.champion_title': 'You\'re an organ donation champion!',
    'action.champion_text': 'Thank you for taking every step. You\'re helping save lives.',
    'action.register': 'Register as an organ donor',
    'action.register_desc': 'Text REGISTER to 57838 through our partner ONE8FIFTY.',
    'action.register_link': 'Send text now',
    'action.join_ycod': 'Join YCOD',
    'action.join_desc': 'Add your name to our growing movement of 3,000+ supporters.',
    'action.join_link': 'Join here',
    'action.learn': 'Learn the facts',
    'action.learn_desc': 'Know the numbers so you can share them with others.',
    'action.learn_link': 'Read facts',
    'action.talk': 'Talk to your family',
    'action.talk_desc': 'Have the conversation about organ donation with the people you love.',
    'action.share': 'Share on social media',
    'action.share_desc': 'Spread awareness — post a fact or share our website.',
    'action.write': 'Write your representative',
    'action.write_desc': 'Use our letter generator to contact your NY Assembly member or senator.',
    'action.write_link': 'Write a letter',

    // Myth vs Fact
    'myth.title': 'Myths vs. Facts',
    'myth.subtitle': 'Tap each myth to reveal the truth. How many did you believe?',
    'myth.reveal_all': 'Reveal all answers',
    'myth.hide_all': 'Hide all answers',
    'myth.tap_reveal': 'Tap to reveal the truth →',
    'myth.tap_myth': '← Tap to see the myth',
    'myth.myth_label': 'MYTH',
    'myth.fact_label': 'FACT',

    // Country Comparison Chart
    'chart.reg_title': 'Registration Rates: Opt-Out vs. Opt-In',
    'chart.reg_subtitle': 'Countries with opt-out systems consistently outperform opt-in countries.',
    'chart.optout_system': 'Opt-out system',
    'chart.optin_system': 'Opt-in system',
    'chart.new_york': 'New York',
    'chart.tooltip_optout': '{country} uses an opt-out system — citizens are registered by default.',
    'chart.tooltip_ny': 'New York uses opt-in. Historically one of the lowest registration rates in the US.',
    'chart.tooltip_optin': 'The US uses an opt-in system — you must actively choose to register.',
    'chart.reg_annotation': 'The pattern is clear: opt-out systems produce 20–40% higher registration rates. That translates directly into lives saved.',

    // Organ Breakdown Chart
    'organ.title': 'What Organs Are People Waiting For?',
    'organ.subtitle': 'Out of 103,000+ people on the national transplant waitlist',
    'organ.waiting': 'waiting',
    'organ.people': 'people',
    'organ.callout': 'The kidney crisis dominates the waitlist. 85% of people waiting need a kidney, and the average wait is 3–5 years. Living donation can help — you only need one kidney to live a full, healthy life.',
  },

  zh: {
    // Navigation
    'nav.about': '关于',
    'nav.initiatives': '倡议',
    'nav.facts': '事实',
    'nav.news': '新闻',
    'nav.tedx': 'TEDx',
    'nav.partners': '合作伙伴',
    'nav.contact': '联系',
    'nav.join': '加入',

    // Hero
    'hero.title1': '器官捐献',
    'hero.title2': '青年联盟',
    'hero.subtitle': '纽约人帮助纽约人拯救生命',
    'hero.join': '加入运动',
    'hero.facts': '了解事实',

    // CTAs
    'cta.join': '加入运动',
    'cta.register': '今天就成为捐献者',
    'cta.text_register': '发送 REGISTER 至',
    'cta.send_text': '立即发送短信',
    'cta.copy_instructions': '复制短信说明',
    'cta.copied': '已复制！请从手机发送。',
    'cta.phone_instruction': '打开手机短信应用，发送"REGISTER"至 57838',
    'cta.partnership': '与 ONE8FIFTY 合作',
    'cta.takes_seconds': '只需30秒。无需表格。无需等待。',

    // Footer
    'footer.quick_links': '快速链接',
    'footer.get_involved': '参与其中',
    'footer.contact': '联系方式',
    'footer.register_donor': '注册成为捐献者',
    'footer.text_register': '发送 REGISTER 至 57838',
    'footer.join_registry': '通过我们与 ONE8FIFTY 的合作即时加入器官捐献者注册',
    'footer.copyright': '© {year} 器官捐献青年联盟。保留所有权利。',
    'footer.nonprofit': '501(c)(4) 非营利游说组织。',

    // Theme
    'theme.light': '浅色',
    'theme.dark': '深色',
    'theme.system': '跟随系统',

    // Accessibility
    'a11y.skip_to_content': '跳转到主要内容',
    'a11y.open_menu': '打开菜单',
    'a11y.close_menu': '关闭菜单',

    // Blog
    'blog.title': '新闻和更新',
    'blog.subtitle': '塑造器官捐献未来的故事、突破和政策更新。',
    'blog.all': '所有文章',
    'blog.search': '搜索文章...',
    'blog.no_posts': '未找到文章',
    'blog.empty_hint': '尝试不同的搜索词或类别。',
    'blog.showing': '显示 {count} 篇文章',
    'blog.read_more': '阅读更多',
    'blog.cta_title': '及时了解，拯救生命',
    'blog.cta_subtitle': '关注器官捐献政策和倡导的最新动态。',

    // Stats
    'stats.waiting': '等待器官移植的人数',
    'stats.ny_waiting': '纽约州等待名单上的人数',
    'stats.die_daily': '每天等待中死亡的人数',
    'stats.lives_saved': '一位捐献者可拯救的生命',

    // Mission
    'mission.title': '我们的使命',
    'mission.quote': '"我们的使命是通过立法将DMV的"选择加入"改为"选择退出"，鼓励更多纽约人成为器官捐献者。"',

    // About page
    'about.title': '我们是谁',
    'about.subtitle': '四名高中生决定，拯救生命不应该是可选的。',
    'about.story_title': '我们的故事',
    'about.story_text': '2017年，当Evan的一位家人需要肾脏移植时，纽约州布法罗附近东奥罗拉高中的四名学生决定采取行动。从加入学校的"捐献生命俱乐部"开始，发展成为一项跨国运动。',
    'about.team_title': '认识团队',
    'about.cta_title': '准备好加入我们的故事了吗？',

    // Bill page
    'bill.title': '法案',
    'bill.subtitle': '我们提出的立法，将DMV的器官捐献从"选择加入"改为"选择退出"',
    'bill.what_title': '法案的内容',
    'bill.problem_title': '问题',
    'bill.problem_text': '目前在纽约DMV，您必须主动选择注册为器官捐献者。许多人支持捐献但从未勾选该选项——他们跳过问题、忘记了，或者没有考虑过。',
    'bill.solution_title': '解决方案',
    'bill.solution_text': '我们的法案改变了默认设置：除非您特别选择跳过器官捐献问题，否则您将被注册为捐献者。您始终有权选择退出——默认设置只是为了拯救更多生命。',
    'bill.key_provision': '关键条款',
    'bill.safeguards_title': '内置保障措施',
    'bill.safeguard_dmv': '仅限DMV',
    'bill.safeguard_dmv_desc': '仅适用于驾照和续期申请',
    'bill.safeguard_question': '知情同意问题',
    'bill.safeguard_question_desc': '申请人首先看到捐献问题',
    'bill.safeguard_optout': '轻松退出',
    'bill.safeguard_optout_desc': '跳过问题或随时写信给专员',
    'bill.safeguard_notice': '书面通知',
    'bill.safeguard_notice_desc': '专员发送邮件确认注册',
    'bill.safeguard_minors': '未满18岁豁免',
    'bill.safeguard_minors_desc': '不适用于未成年人',
    'bill.safeguard_choice': '您的选择',
    'bill.safeguard_choice_desc': '您可以随时选择退出，无需任何理由',
    'bill.draft_title': '2021年法案草案',
    'bill.draft_note': '基于2019年A07954法案，为2021年立法会议更新。',
    'bill.view_original': '查看2019年纽约州议会原始法案',
    'bill.cta_title': '支持这项立法',
    'bill.cta_subtitle': '联系您的代表并加入我们的运动。',

    // Facts page
    'facts.title': '重要数据',
    'facts.subtitle': '驱动我们使命的数字。分享这些——它们拯救生命。',
    'facts.charts_title': '数据可视化',
    'facts.charts_subtitle': '探索器官捐献危机背后的数字。',
    'facts.quiz_title': '你知道吗？',
    'facts.quiz_subtitle': '通过我们的快速测验测试你的器官捐献知识！',
    'facts.quiz_question': '第 {current} 题，共 {total} 题',
    'facts.quiz_score': '得分：{score}',
    'facts.quiz_next': '下一题',
    'facts.quiz_results': '查看结果',
    'facts.quiz_excellent': '太棒了！你很了解这些知识！',
    'facts.quiz_good': '不错的努力！继续学习！',
    'facts.quiz_ok': '现在你比以前知道得更多了！',
    'facts.quiz_share': '与亲朋好友分享这些事实，传播意识！',
    'facts.quiz_retry': '再试一次',

    // Join page
    'join.title': '成为运动的一部分',
    'join.subtitle': '如果你是年轻人（或心态年轻的人），你可以加入我们，共同推动器官捐献政策意识。',
    'join.note': '注意：我们永远不会要求捐款，目前也不接受个人捐助者。我们依靠团队的志愿工作以及学术机构和基金会的慷慨支持。',
    'join.form_title': '加入 YCOD',
    'join.name_label': '姓名 *',
    'join.email_label': '邮箱 *',
    'join.zip_label': '邮编 *',
    'join.address_label': '邮寄地址',
    'join.address_hint': '（可选——用于寄送小礼物）',
    'join.submit': '加入运动',
    'join.submitting': '加入中...',
    'join.privacy': '您的信息安全存储，仅用于YCOD通讯。我们绝不会与第三方共享您的数据。',
    'join.success_title': '欢迎加入运动！',
    'join.success_text': '感谢您加入YCOD。我们一起拯救生命。',
    'join.register_title': '注册成为捐献者',
    'join.register_text': '发送 REGISTER 至 57838，即刻加入器官捐献者注册。',
    'join.reps_title': '联系您的代表',
    'join.reps_text': '让您选出的官员知道您支持器官捐献"选择退出"立法。',
    'join.find_assembly': '查找您的议会成员',
    'join.find_senator': '查找您的参议员',

    // Contact page
    'contact.title': '联系我们',
    'contact.subtitle': '纽约人帮助纽约人',
    'contact.info_title': '联系方式',
    'contact.email': '邮箱',
    'contact.phone': '电话',
    'contact.location': '地点',
    'contact.location_text': '纽约州布法罗（西纽约）',
    'contact.social': '社交媒体',
    'contact.form_title': '发送消息',
    'contact.name_label': '姓名 *',
    'contact.email_label': '邮箱 *',
    'contact.message_label': '消息 *',
    'contact.submit': '发送消息',
    'contact.submitting': '发送中...',
    'contact.success_title': '消息已发送！',
    'contact.success_text': '感谢您的来信。我们会尽快回复您。',
    'contact.error': '无法发送消息。请重试或直接发送电子邮件给我们。',

    // TEDx page
    'tedx.title': 'TEDx',
    'tedx.title_colored': '演讲',
    'tedx.subtitle': '青年政治参与和器官捐献倡导',
    'tedx.quote': '"人们认为年轻人不关心政治。这已经不是事实了。年轻人比年长的美国人更有可能参与公共事务，更愿意进一步参与政治进程，投票率也比过去五十年的任何时候都高。"',
    'tedx.quote_cite': '— Evan Roden，TEDx 演讲',
    'tedx.speaker_title': '关于演讲者',
    'tedx.speaker_bio1': 'Evan Roden 是器官捐献青年联盟的创始人。他是杜兰大学生物医学工程专业毕业生，目前在ENFRA担任可持续发展工程师，自2017年以来一直倡导器官捐献改革。',
    'tedx.speaker_bio2': '在一位家庭成员需要肾脏移植后，Evan与东奥罗拉高中的三位同学共同创立了YCOD。该组织已发展到3,000多名成员，起草了实际立法，并获得了主要组织的提名和认可。',
    'tedx.learn_story': '了解我们的完整故事',
    'tedx.cta_title': '受到启发？采取行动。',
    'tedx.cta_subtitle': '加入数千名正在改变世界的年轻人。',
    'tedx.register_donor': '注册成为捐献者',

    // Coverage page
    'coverage.title': '媒体报道',
    'coverage.subtitle': '我们的故事已在地方、全国和国际媒体上分享。',
    'coverage.cta_title': '观看我们的 TEDx 演讲',
    'coverage.cta_button': '立即观看',

    // Initiatives page
    'initiatives.title': '我们的倡议',
    'initiatives.subtitle': '五大支柱推动纽约州及更广泛地区器官捐献政策和意识的变革。',
    'initiatives.cta_title': '支持这些倡议',
    'initiatives.cta_subtitle': '阅读提出的立法并加入我们的运动。',
    'initiatives.read_bill': '阅读法案',
    'initiatives.join_us': '加入我们',

    // Partners page
    'partners.title': '我们的合作伙伴',
    'partners.subtitle': '我们很自豪能与这些出色的组织并肩工作，为通过器官捐献拯救生命而奋斗。',
    'partners.cta_title': '与我们合作',
    'partners.cta_subtitle': '有兴趣支持我们的使命？请联系我们。',

    // Letter generator
    'letter.title': '写信给您的代表',
    'letter.subtitle': '我们会为您生成一封信。只需填写您的信息，复制并发送。',
    'letter.details': '您的信息',
    'letter.name_label': '您的姓名',
    'letter.zip_label': '您的邮编',
    'letter.story_label': '个人故事',
    'letter.story_hint': '（可选，但很有力）',
    'letter.preview': '信件预览',
    'letter.copy': '复制信件',
    'letter.copied': '已复制！',
    'letter.privacy': '您的姓名、邮编和个人故事仅用于在您的浏览器中生成此信件。不会发送到我们的服务器或存储。我们不收集、保存或共享您在此输入的任何数据。',
    'letter.send_hint': '复制信件后，找到您的代表并发送：',
    'letter.email_client': '在邮件客户端中打开',

    // Impact calculator
    'calc.title': '如果更多纽约人注册会怎样？',
    'calc.subtitle': '拖动滑块查看更高注册率的影响。',
    'calc.rate_label': '纽约注册率',
    'calc.new_registrations': '新增注册',
    'calc.lives_saved': '每年拯救的生命',
    'calc.tissue_healed': '组织受益者',
    'calc.msg_current': '这是纽约目前的现状。',
    'calc.msg_modest': '温和的增长——已经在产生影响。',
    'calc.msg_achievable': '通过简单的政策变更即可实现。',
    'calc.msg_optout': '采用"选择退出"制度的国家达到了这些数字。',
    'calc.msg_spain': '西班牙级别的注册率。拯救了数千条生命。',
    'calc.msg_universal': '接近全民注册。梦想场景。',

    // Not found
    'error.404_title': '页面未找到',
    'error.404_text': '您要查找的页面不存在或已移动。',
    'error.go_home': '回到首页',
    'error.read_blog': '阅读博客',

    // Navigation (additional)
    'nav.bill': '法案',
    'nav.coverage': '报道',

    // Settings
    'settings.language': '语言',
    'settings.accessibility': '无障碍',
    'settings.high_contrast': '高对比度',
    'settings.large_text': '大字体',
    'settings.reduced_motion': '减少动画',
    'settings.dyslexia_font': '阅读障碍字体',

    // Footer (additional)
    'footer.description': '器官捐献青年联盟。纽约人帮助纽约人拯救生命。',
    'footer.the_bill': '法案',
    'footer.press_coverage': '媒体报道',
    'footer.visitors': '访客',

    // Mission (additional)
    'mission.description': '目前，当您在DMV办理驾照时，您必须主动选择注册为器官捐献者。我们希望改变这个默认设置——让每个人都自动注册，除非他们选择退出。这种植根于行为经济学的简单改变，已在西班牙、英国、奥地利和法国等国家挽救了数千条生命。',
    'mission.henry_quote': '"我认为纽约人可以放下分歧，认识到拯救某人的生命确实是你能做的最重要的事情。"',
    'mission.henry_cite': '— Henry McLaughlin，联合创始人',

    // Home: Coverage Teaser
    'home.as_seen_in': '媒体报道',
    'home.media_covered': '我们的故事已被全国各地的媒体报道',
    'home.view_press': '查看所有媒体报道',
    'home.tedx_desc': '观看我们的创始人 Evan Roden 关于青年政治参与和器官捐献倡导的 TEDx 演讲。',
    'home.watch_full': '观看完整演讲',

    // Home: Join CTA
    'home.movement_title': '这是一场众人的运动',
    'home.movement_desc1': '超过3,000名成员并持续增长。年轻人和心态年轻的人，团结在一起拯救生命。',
    'home.movement_desc2': '加入我们，倡导纽约州的器官捐献"选择退出"制度。',

    // Waitlist Ticker
    'waitlist.title': '全国移植等待名单 — 模拟实时计数器',
    'waitlist.people_waiting': '人正在等待',
    'waitlist.added_daily': '每日新增',
    'waitlist.transplants_day': '每日移植',
    'waitlist.die_daily': '每日等待中死亡',
    'waitlist.time_message': '您已在此页面停留 {time}。在此期间，大约 {deaths} 人在等待器官中去世。',

    // Timeline
    'timeline.click_expand': '点击了解更多',
    'timeline.click_collapse': '点击收起',

    // DMV Simulator
    'dmv.title': '体验差异',
    'dmv.subtitle': '亲自体验两种系统。了解默认设置为何重要。',
    'dmv.at_dmv': '您在DMV，正在续办驾照。',
    'dmv.intro_text': '您将以两种方式回答器官捐献问题：当前的"选择加入"系统和提议的"选择退出"系统。观察默认设置如何改变您的体验。',
    'dmv.start_optin': '开始：当前系统（选择加入）',
    'dmv.current_system': '当前系统',
    'dmv.optin_label': '选择加入',
    'dmv.proposed_system': '提议系统',
    'dmv.optout_label': '选择退出',
    'dmv.dmv_section': 'DMV驾照申请 — 第7部分',
    'dmv.after_paperwork': '（在45分钟的文书工作、视力测试和拍照之后...）',
    'dmv.optin_question': '您是否愿意注册为器官和组织捐献者？',
    'dmv.optin_yes': '是的，我想注册为器官捐献者',
    'dmv.optin_skip': '跳过此问题',
    'dmv.optin_most_skip': '大多数人选择跳过——他们累了、赶时间，只想拿到驾照。',
    'dmv.submit': '提交申请 →',
    'dmv.optin_yes_title': '您注册了！您属于少数。',
    'dmv.optin_skip_title': '您跳过了。大多数人也是如此。',
    'dmv.optin_yes_text': '只有约50%的纽约人勾选"是"。其余人跳过了——不是因为他们反对捐献，而是因为默认设置是"否"。',
    'dmv.optin_skip_text': '您不是少数——约50%的纽约人跳过了这个问题。不是因为他们反对捐献，而是因为默认设置什么都不做，而且他们已经厌倦了填表。',
    'dmv.try_optout': '现在尝试：提议系统（选择退出）→',
    'dmv.same_dmv': '（同一个DMV，同样的文书工作，同样疲惫的申请人...）',
    'dmv.optout_registered': '您已注册为器官和组织捐献者。',
    'dmv.optout_mail': '您将收到邮件确认。您可以随时选择退出。',
    'dmv.optout_change': '您是否要更改此设置？',
    'dmv.optout_keep': '保持我的注册（不做任何事）',
    'dmv.optout_remove': '将我从捐献者注册中移除',
    'dmv.optout_default': '大多数人什么都不做——这就是关键。默认设置拯救生命。',
    'dmv.keep_title': '您保持了注册。无需额外努力。',
    'dmv.remove_title': '您的选择受到尊重。您已选择退出。',
    'dmv.keep_text': '在"选择退出"国家，80-90%的人保持注册，仅仅因为默认设置是"是"。没有人被强迫——但阻力最小的路径拯救了生命。',
    'dmv.remove_text': '"选择退出"不意味着强迫。您随时可以说不。区别在于默认设置是帮助而不是阻碍。想要退出的人仍然可以——很容易。',
    'dmv.see_comparison': '查看比较 →',
    'dmv.compare_title': '同一个人。同一个DMV。不同的默认设置。',
    'dmv.current_optin': '当前：选择加入',
    'dmv.register_ny': '在纽约注册',
    'dmv.proposed_optout': '提议：选择退出',
    'dmv.register_optout': '在"选择退出"国家注册',
    'dmv.millions_more': '这意味着数百万更多的潜在捐献者——无需任何人付出额外努力。',
    'dmv.bill_would_do': '这就是YCOD的A07954法案将为纽约带来的改变。',
    'dmv.try_again': '再试一次',
    'dmv.read_bill': '阅读法案',

    // Bill Impact Viz
    'impact.title': 'A07954法案的预计影响',
    'impact.subtitle': '基于转换为"选择退出"系统的国家的成果',
    'impact.before': '之前',
    'impact.after': '之后',
    'impact.reg_rate': '注册率',
    'impact.annual_donors': '年度捐献者（纽约）',
    'impact.lives_saved': '每年拯救的生命（纽约）',
    'impact.waitlist_reduction': '等待名单变化',
    'impact.growing': '增长',
    'impact.shrinking': '缩减',
    'impact.note': '这些是基于"选择退出"国家真实数据的保守估计。西班牙在转换后10年内捐献率增长了40%。纽约的类似转变每年可多拯救1,000多条生命。',

    // Action Checklist
    'action.title': '您如何帮助',
    'action.subtitle': '每个行动都会产生影响。在下方追踪您的贡献。',
    'action.progress': '您的进度',
    'action.completed': '{done}/{total} 已完成',
    'action.champion_title': '您是器官捐献冠军！',
    'action.champion_text': '感谢您采取的每一步。您正在帮助拯救生命。',
    'action.register': '注册为器官捐献者',
    'action.register_desc': '通过我们的合作伙伴ONE8FIFTY发送REGISTER至57838。',
    'action.register_link': '立即发送短信',
    'action.join_ycod': '加入YCOD',
    'action.join_desc': '加入我们不断壮大的3,000+支持者运动。',
    'action.join_link': '在此加入',
    'action.learn': '了解事实',
    'action.learn_desc': '了解数据，以便与他人分享。',
    'action.learn_link': '阅读事实',
    'action.talk': '与家人交谈',
    'action.talk_desc': '与您爱的人讨论器官捐献。',
    'action.share': '在社交媒体上分享',
    'action.share_desc': '传播意识——发布事实或分享我们的网站。',
    'action.write': '写信给您的代表',
    'action.write_desc': '使用我们的信件生成器联系您的纽约州议会成员或参议员。',
    'action.write_link': '撰写信件',

    // Myth vs Fact
    'myth.title': '误解与事实',
    'myth.subtitle': '点击每个误解以揭示真相。你相信了多少个？',
    'myth.reveal_all': '显示所有答案',
    'myth.hide_all': '隐藏所有答案',
    'myth.tap_reveal': '点击揭示真相 →',
    'myth.tap_myth': '← 点击查看误解',
    'myth.myth_label': '误解',
    'myth.fact_label': '事实',

    // Country Comparison Chart
    'chart.reg_title': '注册率：选择退出 vs. 选择加入',
    'chart.reg_subtitle': '采用"选择退出"系统的国家始终表现优于"选择加入"国家。',
    'chart.optout_system': '选择退出系统',
    'chart.optin_system': '选择加入系统',
    'chart.new_york': '纽约',
    'chart.tooltip_optout': '{country}采用"选择退出"系统——公民默认注册。',
    'chart.tooltip_ny': '纽约采用"选择加入"制度。历史上注册率在全美最低之列。',
    'chart.tooltip_optin': '美国采用"选择加入"系统——您必须主动选择注册。',
    'chart.reg_annotation': '模式很明确："选择退出"系统产生20-40%更高的注册率。这直接转化为拯救的生命。',

    // Organ Breakdown Chart
    'organ.title': '人们在等待什么器官？',
    'organ.subtitle': '在103,000+全国移植等待名单上的人中',
    'organ.waiting': '等待中',
    'organ.people': '人',
    'organ.callout': '肾脏危机主导着等待名单。85%的等待者需要肾脏，平均等待时间为3-5年。活体捐献可以帮助——您只需要一个肾脏就能过健康的生活。',
  },

  es: {
    // Navigation
    'nav.about': 'Acerca de',
    'nav.initiatives': 'Iniciativas',
    'nav.facts': 'Datos',
    'nav.news': 'Noticias',
    'nav.tedx': 'TEDx',
    'nav.partners': 'Socios',
    'nav.contact': 'Contacto',
    'nav.join': 'Únete',

    // Hero
    'hero.title1': 'Coalición Juvenil para la',
    'hero.title2': 'Donación de Órganos',
    'hero.subtitle': 'Neoyorquinos ayudando a neoyorquinos a salvar vidas',
    'hero.join': 'Únete al Movimiento',
    'hero.facts': 'Conoce los Datos',

    // CTAs
    'cta.join': 'Únete al Movimiento',
    'cta.register': 'Conviértete en Donante Hoy',
    'cta.text_register': 'Envía REGISTER al',
    'cta.send_text': 'Enviar Texto Ahora',
    'cta.copy_instructions': 'Copiar Instrucciones',
    'cta.copied': '¡Copiado! Envía desde tu teléfono.',
    'cta.phone_instruction': 'Abre la app de mensajes de tu teléfono y envía "REGISTER" al 57838',
    'cta.partnership': 'En asociación con ONE8FIFTY',
    'cta.takes_seconds': 'Solo toma 30 segundos. Sin formularios. Sin espera.',

    // Footer
    'footer.quick_links': 'Enlaces Rápidos',
    'footer.get_involved': 'Involúcrate',
    'footer.contact': 'Contacto',
    'footer.register_donor': 'Regístrate como Donante',
    'footer.text_register': 'Envía REGISTER al 57838',
    'footer.join_registry': 'Únete al registro de donantes de órganos al instante a través de nuestra asociación con ONE8FIFTY',
    'footer.copyright': '© {year} La Coalición Juvenil para la Donación de Órganos. Todos los derechos reservados.',
    'footer.nonprofit': 'Organización de cabildeo sin fines de lucro 501(c)(4).',

    // Theme
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.system': 'Sistema',

    // Accessibility
    'a11y.skip_to_content': 'Saltar al contenido principal',
    'a11y.open_menu': 'Abrir menú',
    'a11y.close_menu': 'Cerrar menú',

    // Blog
    'blog.title': 'Noticias y Actualizaciones',
    'blog.subtitle': 'Historias, avances y actualizaciones de políticas que están moldeando el futuro de la donación de órganos.',
    'blog.all': 'Todas las Publicaciones',
    'blog.search': 'Buscar publicaciones...',
    'blog.no_posts': 'No se encontraron publicaciones',
    'blog.empty_hint': 'Prueba con una búsqueda o categoría diferente.',
    'blog.showing': 'Mostrando {count} publicación(es)',
    'blog.read_more': 'Leer Más',
    'blog.cta_title': 'Mantente Informado, Salva Vidas',
    'blog.cta_subtitle': 'Sigue los últimos avances en política y defensa de la donación de órganos.',

    // Stats
    'stats.waiting': 'Personas esperando trasplantes',
    'stats.ny_waiting': 'Neoyorquinos en la lista de espera',
    'stats.die_daily': 'Personas que mueren esperando cada día',
    'stats.lives_saved': 'Vidas que un donante puede salvar',

    // Mission
    'mission.title': 'Nuestra Misión',
    'mission.quote': '"Nuestra misión es alentar a más neoyorquinos a convertirse en donantes de órganos mediante la aprobación de legislación para \'optar por no participar\' en lugar de \'optar por participar\' en el DMV."',

    // About page
    'about.title': 'Quiénes Somos',
    'about.subtitle': 'Cuatro estudiantes de secundaria que decidieron que salvar vidas no debería ser opcional.',
    'about.story_title': 'Nuestra Historia',
    'about.story_text': 'En 2017, cuando un familiar de Evan necesitó un trasplante de riñón, cuatro estudiantes de East Aurora High School cerca de Buffalo, NY decidieron actuar. Lo que comenzó uniéndose al Club de Donación de Vida de su escuela se convirtió en un movimiento multinacional.',
    'about.team_title': 'Conoce al Equipo',
    'about.cta_title': '¿Listo para Unirte a Nuestra Historia?',

    // Bill page
    'bill.title': 'El Proyecto de Ley',
    'bill.subtitle': 'Nuestra legislación propuesta para cambiar la donación de órganos de "optar por participar" a "optar por no participar" en el DMV',
    'bill.what_title': 'Qué Hace el Proyecto de Ley',
    'bill.problem_title': 'El Problema',
    'bill.problem_text': 'Actualmente en el DMV de NY, debes elegir activamente registrarte como donante de órganos. Muchas personas apoyan la donación pero nunca marcan la casilla — se saltan la pregunta, se olvidan o no lo piensan.',
    'bill.solution_title': 'La Solución',
    'bill.solution_text': 'Nuestro proyecto de ley cambia el valor por defecto: a menos que elijas específicamente saltar la pregunta de donación de órganos, quedas registrado como donante. Siempre tienes derecho a optar por no participar — el valor por defecto simplemente salva más vidas.',
    'bill.key_provision': 'Disposición Clave',
    'bill.safeguards_title': 'Salvaguardas Integradas',
    'bill.safeguard_dmv': 'Solo DMV',
    'bill.safeguard_dmv_desc': 'Solo aplica a solicitudes de licencia y renovación',
    'bill.safeguard_question': 'Pregunta de Consentimiento',
    'bill.safeguard_question_desc': 'Los solicitantes ven primero la pregunta de donación',
    'bill.safeguard_optout': 'Fácil Exclusión',
    'bill.safeguard_optout_desc': 'Salta la pregunta o escribe al comisionado en cualquier momento',
    'bill.safeguard_notice': 'Aviso Escrito',
    'bill.safeguard_notice_desc': 'El comisionado envía correo confirmando el registro',
    'bill.safeguard_minors': 'Menores de 18 Exentos',
    'bill.safeguard_minors_desc': 'No aplica a menores',
    'bill.safeguard_choice': 'Tu Elección',
    'bill.safeguard_choice_desc': 'Siempre puedes optar por no participar, sin preguntas',
    'bill.draft_title': 'Texto del Proyecto de Ley 2021',
    'bill.draft_note': 'Basado en el Proyecto A07954 (2019), actualizado para la sesión legislativa 2021.',
    'bill.view_original': 'Ver el Proyecto Original 2019 en la Asamblea de NY',
    'bill.cta_title': 'Apoya Esta Legislación',
    'bill.cta_subtitle': 'Contacta a tus representantes y únete a nuestro movimiento.',

    // Facts page
    'facts.title': 'Datos Rápidos',
    'facts.subtitle': 'Los números que impulsan nuestra misión. Comparte estos datos — salvan vidas.',
    'facts.charts_title': 'Los Datos, Visualizados',
    'facts.charts_subtitle': 'Explora los números detrás de la crisis de donación de órganos.',
    'facts.quiz_title': '¿Sabías Que...?',
    'facts.quiz_subtitle': '¡Pon a prueba tus conocimientos sobre donación de órganos con nuestro quiz rápido!',
    'facts.quiz_question': 'Pregunta {current} de {total}',
    'facts.quiz_score': 'Puntuación: {score}',
    'facts.quiz_next': 'Siguiente Pregunta',
    'facts.quiz_results': 'Ver Resultados',
    'facts.quiz_excellent': '¡Increíble! ¡Conoces bien el tema!',
    'facts.quiz_good': '¡Buen esfuerzo! ¡Sigue aprendiendo!',
    'facts.quiz_ok': '¡Ahora sabes más que antes!',
    'facts.quiz_share': '¡Comparte estos datos con amigos y familiares para crear conciencia!',
    'facts.quiz_retry': 'Intentar de Nuevo',

    // Join page
    'join.title': 'Sé Parte del Movimiento',
    'join.subtitle': 'Si eres joven (o joven de corazón), puedes unirte a nosotros para trabajar en la concientización sobre la política de donación de órganos.',
    'join.note': 'Nota: Nunca pediremos donaciones, ni aceptamos donantes individuales en este momento. Nos basamos en el trabajo voluntario de nuestro equipo y la generosidad de instituciones académicas y fundaciones.',
    'join.form_title': 'Únete a YCOD',
    'join.name_label': 'Nombre *',
    'join.email_label': 'Correo Electrónico *',
    'join.zip_label': 'Código Postal *',
    'join.address_label': 'Dirección Postal',
    'join.address_hint': '(opcional — para un pequeño regalo de agradecimiento)',
    'join.submit': 'Únete al Movimiento',
    'join.submitting': 'Uniéndose...',
    'join.privacy': 'Tu información se almacena de forma segura y se usa solo para comunicaciones de YCOD. Nunca compartimos tus datos con terceros.',
    'join.success_title': '¡Bienvenido al Movimiento!',
    'join.success_text': 'Gracias por unirte a YCOD. Juntos, estamos salvando vidas.',
    'join.register_title': 'Regístrate como Donante',
    'join.register_text': 'Envía REGISTER al 57838 para unirte al registro de donantes de órganos al instante.',
    'join.reps_title': 'Contacta a Tus Representantes',
    'join.reps_text': 'Haz saber a tus funcionarios electos que apoyas la legislación de "optar por no participar" en la donación de órganos.',
    'join.find_assembly': 'Encuentra Tu Miembro de Asamblea',
    'join.find_senator': 'Encuentra Tu Senador',

    // Contact page
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Neoyorquinos ayudando a neoyorquinos',
    'contact.info_title': 'Ponte en Contacto',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.location_text': 'Buffalo, NY (Oeste de Nueva York)',
    'contact.social': 'Redes Sociales',
    'contact.form_title': 'Enviar un Mensaje',
    'contact.name_label': 'Nombre *',
    'contact.email_label': 'Correo Electrónico *',
    'contact.message_label': 'Mensaje *',
    'contact.submit': 'Enviar Mensaje',
    'contact.submitting': 'Enviando...',
    'contact.success_title': '¡Mensaje Enviado!',
    'contact.success_text': 'Gracias por contactarnos. Te responderemos pronto.',
    'contact.error': 'No se pudo enviar el mensaje. Intenta de nuevo o envíanos un correo directamente.',

    // TEDx page
    'tedx.title': 'TEDx',
    'tedx.title_colored': 'Talk',
    'tedx.subtitle': 'Participación política juvenil y defensa de la donación de órganos',
    'tedx.quote': '"Se ve a los jóvenes como apolíticos. Eso ya no es cierto. Los jóvenes son mucho más propensos a participar activamente que los estadounidenses mayores, más propensos a querer participar más en el proceso político, y más propensos a votar que en cualquier momento de los últimos cincuenta años."',
    'tedx.quote_cite': '— Evan Roden, Charla TEDx',
    'tedx.speaker_title': 'Sobre el Orador',
    'tedx.speaker_bio1': 'Evan Roden es el fundador de la Coalición Juvenil para la Donación de Órganos. Graduado en Ingeniería Biomédica de la Universidad de Tulane y actual Ingeniero de Sostenibilidad en ENFRA, Evan ha estado abogando por la reforma de la donación de órganos desde 2017.',
    'tedx.speaker_bio2': 'Después de que un familiar necesitara un trasplante de riñón, Evan cofundó YCOD con tres compañeros de East Aurora High School. La organización ha crecido a más de 3,000 miembros, ha redactado legislación real y ha obtenido nominaciones y respaldos de organizaciones importantes.',
    'tedx.learn_story': 'Conoce Nuestra Historia Completa',
    'tedx.cta_title': '¿Inspirado? Actúa.',
    'tedx.cta_subtitle': 'Únete a miles de jóvenes que están haciendo la diferencia.',
    'tedx.register_donor': 'Regístrate como Donante',

    // Coverage page
    'coverage.title': 'Cobertura Mediática',
    'coverage.subtitle': 'Nuestra historia ha sido compartida en medios locales, nacionales e internacionales.',
    'coverage.cta_title': 'Mira Nuestra Charla TEDx',
    'coverage.cta_button': 'Ver Ahora',

    // Initiatives page
    'initiatives.title': 'Nuestras Iniciativas',
    'initiatives.subtitle': 'Cinco pilares que impulsan el cambio en la política y conciencia de donación de órganos en el Estado de Nueva York y más allá.',
    'initiatives.cta_title': 'Apoya Estas Iniciativas',
    'initiatives.cta_subtitle': 'Lee la legislación propuesta y únete a nuestro movimiento.',
    'initiatives.read_bill': 'Leer el Proyecto de Ley',
    'initiatives.join_us': 'Únete',

    // Partners page
    'partners.title': 'Nuestros Socios',
    'partners.subtitle': 'Estamos orgullosos de trabajar junto a estas increíbles organizaciones en la lucha por salvar vidas a través de la donación de órganos.',
    'partners.cta_title': 'Asóciate con Nosotros',
    'partners.cta_subtitle': '¿Interesado en apoyar nuestra misión? Ponte en contacto.',

    // Letter generator
    'letter.title': 'Escribe a Tu Representante',
    'letter.subtitle': 'Generaremos una carta para ti. Solo llena tus datos, copia y envía.',
    'letter.details': 'Tus Datos',
    'letter.name_label': 'Tu Nombre',
    'letter.zip_label': 'Tu Código Postal',
    'letter.story_label': 'Historia Personal',
    'letter.story_hint': '(opcional, pero poderosa)',
    'letter.preview': 'Vista Previa de la Carta',
    'letter.copy': 'Copiar Carta',
    'letter.copied': '¡Copiado!',
    'letter.privacy': 'Tu nombre, código postal e historia personal solo se usan para generar esta carta en tu navegador. No se envía nada a nuestros servidores ni se almacena. No recopilamos, guardamos ni compartimos ningún dato que ingreses aquí.',
    'letter.send_hint': 'Después de copiar tu carta, encuentra a tu representante y envíala:',
    'letter.email_client': 'Abrir en Cliente de Correo',

    // Impact calculator
    'calc.title': '¿Qué Pasaría Si Más Neoyorquinos Se Registraran?',
    'calc.subtitle': 'Arrastra el control para ver el impacto de tasas de registro más altas.',
    'calc.rate_label': 'Tasa de Registro de NY',
    'calc.new_registrations': 'Nuevos Registros',
    'calc.lives_saved': 'Vidas Salvadas Por Año',
    'calc.tissue_healed': 'Receptores de Tejido Sanados',
    'calc.msg_current': 'Aquí es donde se encuentra Nueva York hoy.',
    'calc.msg_modest': 'Un aumento modesto — ya marcando la diferencia.',
    'calc.msg_achievable': 'Esto es alcanzable con cambios simples de política.',
    'calc.msg_optout': 'Los países con sistemas de exclusión alcanzan estos números.',
    'calc.msg_spain': 'Registro nivel España. Miles de vidas salvadas.',
    'calc.msg_universal': 'Registro casi universal. El escenario soñado.',

    // Not found
    'error.404_title': 'Página No Encontrada',
    'error.404_text': 'La página que buscas no existe o se ha movido.',
    'error.go_home': 'Ir al Inicio',
    'error.read_blog': 'Leer el Blog',

    // Navigation (additional)
    'nav.bill': 'El Proyecto',
    'nav.coverage': 'Prensa',

    // Settings
    'settings.language': 'Idioma',
    'settings.accessibility': 'Accesibilidad',
    'settings.high_contrast': 'Alto Contraste',
    'settings.large_text': 'Texto Grande',
    'settings.reduced_motion': 'Movimiento Reducido',
    'settings.dyslexia_font': 'Fuente para Dislexia',

    // Footer (additional)
    'footer.description': 'Coalición Juvenil para la Donación de Órganos. Neoyorquinos ayudando a neoyorquinos a salvar vidas.',
    'footer.the_bill': 'El Proyecto de Ley',
    'footer.press_coverage': 'Cobertura de Prensa',
    'footer.visitors': 'VISITANTES',

    // Mission (additional)
    'mission.description': 'Actualmente, cuando obtienes tu licencia de conducir en el DMV, debes elegir activamente registrarte como donante de órganos. Queremos cambiar ese valor por defecto — para que todos estén registrados a menos que elijan no estarlo. Este simple cambio, basado en la economía conductual, ya ha salvado miles de vidas en países como España, Reino Unido, Austria y Francia.',
    'mission.henry_quote': '"Creo que los neoyorquinos pueden dejar de lado sus diferencias y darse cuenta de que salvar la vida de alguien es realmente lo más importante que puedes hacer."',
    'mission.henry_cite': '— Henry McLaughlin, Cofundador',

    // Home: Coverage Teaser
    'home.as_seen_in': 'Visto En',
    'home.media_covered': 'Nuestra historia ha sido cubierta por medios de comunicación de todo el país',
    'home.view_press': 'Ver Toda la Cobertura de Prensa',
    'home.tedx_desc': 'Mira la charla TEDx de nuestro fundador Evan Roden sobre la participación política juvenil y la defensa de la donación de órganos.',
    'home.watch_full': 'Ver Charla Completa',

    // Home: Join CTA
    'home.movement_title': 'Este Es un Movimiento de Muchos',
    'home.movement_desc1': 'Más de 3,000 miembros y creciendo. Jóvenes y aquellos jóvenes de corazón, uniéndose para salvar vidas.',
    'home.movement_desc2': 'Únete a nosotros para abogar por la donación de órganos por exclusión en el Estado de Nueva York.',

    // Waitlist Ticker
    'waitlist.title': 'Lista Nacional de Espera para Trasplantes — Contador Simulado en Vivo',
    'waitlist.people_waiting': 'personas esperando ahora mismo',
    'waitlist.added_daily': 'añadidos diariamente',
    'waitlist.transplants_day': 'trasplantes/día',
    'waitlist.die_daily': 'mueren esperando diariamente',
    'waitlist.time_message': 'Has estado en esta página durante {time}. En ese tiempo, aproximadamente {deaths} personas murieron esperando un órgano.',

    // Timeline
    'timeline.click_expand': 'Haz clic para leer más',
    'timeline.click_collapse': 'Haz clic para cerrar',

    // DMV Simulator
    'dmv.title': 'Experimenta la Diferencia',
    'dmv.subtitle': 'Recorre ambos sistemas tú mismo. Observa por qué los valores por defecto importan.',
    'dmv.at_dmv': 'Estás en el DMV, renovando tu licencia.',
    'dmv.intro_text': 'Pasarás por la pregunta de donación de órganos de dos maneras: el sistema actual de inclusión voluntaria y el sistema propuesto de exclusión voluntaria. Observa cómo el valor por defecto cambia tu experiencia.',
    'dmv.start_optin': 'Comenzar: Sistema Actual (Inclusión)',
    'dmv.current_system': 'SISTEMA ACTUAL',
    'dmv.optin_label': 'Inclusión',
    'dmv.proposed_system': 'SISTEMA PROPUESTO',
    'dmv.optout_label': 'Exclusión',
    'dmv.dmv_section': 'Solicitud de Licencia DMV — Sección 7',
    'dmv.after_paperwork': '(Después de 45 minutos de papeleo, exámenes de vista y fotos...)',
    'dmv.optin_question': '¿Le gustaría registrarse como donante de órganos y tejidos?',
    'dmv.optin_yes': 'Sí, quiero registrarme como donante de órganos',
    'dmv.optin_skip': 'Saltar esta pregunta',
    'dmv.optin_most_skip': 'La mayoría salta — están cansados, apurados y solo quieren su licencia.',
    'dmv.submit': 'Enviar Solicitud →',
    'dmv.optin_yes_title': '¡Te registraste! Eres minoría.',
    'dmv.optin_skip_title': 'La saltaste. Igual que la mayoría.',
    'dmv.optin_yes_text': 'Solo alrededor del 50% de los neoyorquinos marca "sí." El resto lo salta — no porque se opongan a la donación, sino porque el valor por defecto es "no."',
    'dmv.optin_skip_text': 'Estás en buena compañía — alrededor del 50% de los neoyorquinos salta esta pregunta. No porque estén en contra de la donación, sino porque el valor por defecto no hace nada y están cansados de formularios.',
    'dmv.try_optout': 'Ahora Prueba: Sistema Propuesto (Exclusión) →',
    'dmv.same_dmv': '(Mismo DMV, mismo papeleo, mismo solicitante cansado...)',
    'dmv.optout_registered': 'Estás registrado como donante de órganos y tejidos.',
    'dmv.optout_mail': 'Recibirás confirmación por correo. Puedes optar por no participar en cualquier momento.',
    'dmv.optout_change': '¿Deseas cambiar esto?',
    'dmv.optout_keep': 'Mantener mi registro (no hacer nada)',
    'dmv.optout_remove': 'Eliminarme del registro de donantes',
    'dmv.optout_default': 'La mayoría no hace nada — y ese es el punto. El valor por defecto salva vidas.',
    'dmv.keep_title': 'Seguiste registrado. Sin esfuerzo adicional.',
    'dmv.remove_title': 'Tu elección es respetada. Optaste por no participar.',
    'dmv.keep_text': 'En países con exclusión, el 80-90% de las personas permanecen registradas simplemente porque el valor por defecto es "sí." Nadie es obligado — pero el camino de menor resistencia salva vidas.',
    'dmv.remove_text': 'Exclusión no significa obligación. Siempre puedes decir que no. La diferencia es que el valor por defecto ayuda en lugar de perjudicar. Quienes quieran optar por no participar aún pueden — fácilmente.',
    'dmv.see_comparison': 'Ver la Comparación →',
    'dmv.compare_title': 'Misma Persona. Mismo DMV. Diferente Valor por Defecto.',
    'dmv.current_optin': 'Actual: Inclusión',
    'dmv.register_ny': 'se registran en NY',
    'dmv.proposed_optout': 'Propuesto: Exclusión',
    'dmv.register_optout': 'se registran en países con exclusión',
    'dmv.millions_more': 'Eso son millones más de donantes potenciales — sin esfuerzo adicional de nadie.',
    'dmv.bill_would_do': 'Esto es lo que el Proyecto A07954 de YCOD haría por Nueva York.',
    'dmv.try_again': 'Intentar de Nuevo',
    'dmv.read_bill': 'Leer el Proyecto de Ley',

    // Bill Impact Viz
    'impact.title': 'Impacto Proyectado del Proyecto A07954',
    'impact.subtitle': 'Basado en resultados de países que cambiaron a sistemas de exclusión',
    'impact.before': 'Antes',
    'impact.after': 'Después',
    'impact.reg_rate': 'Tasa de Registro',
    'impact.annual_donors': 'Donantes Anuales (NY)',
    'impact.lives_saved': 'Vidas Salvadas (NY/año)',
    'impact.waitlist_reduction': 'Reducción de Lista de Espera',
    'impact.growing': 'Creciendo',
    'impact.shrinking': 'Reduciéndose',
    'impact.note': 'Estas son estimaciones conservadoras basadas en datos reales de países con exclusión. España vio un aumento del 40% en las tasas de donación dentro de los 10 años posteriores al cambio. Un cambio similar en Nueva York podría salvar más de 1,000 vidas adicionales por año.',

    // Action Checklist
    'action.title': 'Cómo Puedes Ayudar',
    'action.subtitle': 'Cada acción marca la diferencia. Rastrea tu impacto abajo.',
    'action.progress': 'Tu Progreso',
    'action.completed': '{done}/{total} completados',
    'action.champion_title': '¡Eres un campeón de la donación de órganos!',
    'action.champion_text': 'Gracias por dar cada paso. Estás ayudando a salvar vidas.',
    'action.register': 'Regístrate como donante de órganos',
    'action.register_desc': 'Envía REGISTER al 57838 a través de nuestro socio ONE8FIFTY.',
    'action.register_link': 'Enviar texto ahora',
    'action.join_ycod': 'Únete a YCOD',
    'action.join_desc': 'Añade tu nombre a nuestro movimiento creciente de más de 3,000 simpatizantes.',
    'action.join_link': 'Únete aquí',
    'action.learn': 'Aprende los datos',
    'action.learn_desc': 'Conoce los números para poder compartirlos con otros.',
    'action.learn_link': 'Leer datos',
    'action.talk': 'Habla con tu familia',
    'action.talk_desc': 'Ten la conversación sobre donación de órganos con las personas que amas.',
    'action.share': 'Comparte en redes sociales',
    'action.share_desc': 'Difunde la conciencia — publica un dato o comparte nuestro sitio web.',
    'action.write': 'Escribe a tu representante',
    'action.write_desc': 'Usa nuestro generador de cartas para contactar a tu miembro de la Asamblea o senador de NY.',
    'action.write_link': 'Escribir una carta',

    // Myth vs Fact
    'myth.title': 'Mitos vs. Hechos',
    'myth.subtitle': 'Toca cada mito para revelar la verdad. ¿Cuántos creías?',
    'myth.reveal_all': 'Revelar todas las respuestas',
    'myth.hide_all': 'Ocultar todas las respuestas',
    'myth.tap_reveal': 'Toca para revelar la verdad →',
    'myth.tap_myth': '← Toca para ver el mito',
    'myth.myth_label': 'MITO',
    'myth.fact_label': 'HECHO',

    // Country Comparison Chart
    'chart.reg_title': 'Tasas de Registro: Exclusión vs. Inclusión',
    'chart.reg_subtitle': 'Los países con sistemas de exclusión superan consistentemente a los de inclusión.',
    'chart.optout_system': 'Sistema de exclusión',
    'chart.optin_system': 'Sistema de inclusión',
    'chart.new_york': 'Nueva York',
    'chart.tooltip_optout': '{country} usa un sistema de exclusión — los ciudadanos están registrados por defecto.',
    'chart.tooltip_ny': 'Nueva York usa inclusión. Históricamente una de las tasas de registro más bajas de EE.UU.',
    'chart.tooltip_optin': 'EE.UU. usa un sistema de inclusión — debes elegir activamente registrarte.',
    'chart.reg_annotation': 'El patrón es claro: los sistemas de exclusión producen tasas de registro 20-40% más altas. Eso se traduce directamente en vidas salvadas.',

    // Organ Breakdown Chart
    'organ.title': '¿Qué Órganos Esperan las Personas?',
    'organ.subtitle': 'De más de 103,000 personas en la lista nacional de espera para trasplantes',
    'organ.waiting': 'esperando',
    'organ.people': 'personas',
    'organ.callout': 'La crisis de riñón domina la lista de espera. El 85% de las personas en espera necesitan un riñón, y la espera promedio es de 3-5 años. La donación en vida puede ayudar — solo necesitas un riñón para vivir una vida plena y saludable.',
  },

  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.initiatives': 'Initiatives',
    'nav.facts': 'Faits',
    'nav.news': 'Actualités',
    'nav.tedx': 'TEDx',
    'nav.partners': 'Partenaires',
    'nav.contact': 'Contact',
    'nav.join': 'Rejoindre',

    // Hero
    'hero.title1': 'Coalition des Jeunes pour le',
    'hero.title2': 'Don d\'Organes',
    'hero.subtitle': 'Les New-Yorkais aident les New-Yorkais à sauver des vies',
    'hero.join': 'Rejoindre le Mouvement',
    'hero.facts': 'Découvrir les Faits',

    // CTAs
    'cta.join': 'Rejoindre le Mouvement',
    'cta.register': 'Devenez Donneur Aujourd\'hui',
    'cta.text_register': 'Envoyez REGISTER au',
    'cta.send_text': 'Envoyer le SMS',
    'cta.copy_instructions': 'Copier les Instructions',
    'cta.copied': 'Copié ! Envoyez depuis votre téléphone.',
    'cta.phone_instruction': 'Ouvrez l\'application de messages de votre téléphone et envoyez "REGISTER" au 57838',
    'cta.partnership': 'En partenariat avec ONE8FIFTY',
    'cta.takes_seconds': 'Cela prend 30 secondes. Pas de formulaire. Pas d\'attente.',

    // Footer
    'footer.quick_links': 'Liens Rapides',
    'footer.get_involved': 'S\'impliquer',
    'footer.contact': 'Contact',
    'footer.register_donor': 'S\'inscrire comme Donneur',
    'footer.text_register': 'Envoyez REGISTER au 57838',
    'footer.join_registry': 'Rejoignez le registre des donneurs d\'organes instantanément grâce à notre partenariat avec ONE8FIFTY',
    'footer.copyright': '© {year} La Coalition des Jeunes pour le Don d\'Organes. Tous droits réservés.',
    'footer.nonprofit': 'Organisation de lobbying à but non lucratif 501(c)(4).',

    // Theme
    'theme.light': 'Clair',
    'theme.dark': 'Sombre',
    'theme.system': 'Système',

    // Accessibility
    'a11y.skip_to_content': 'Aller au contenu principal',
    'a11y.open_menu': 'Ouvrir le menu',
    'a11y.close_menu': 'Fermer le menu',

    // Blog
    'blog.title': 'Actualités et Mises à jour',
    'blog.subtitle': 'Histoires, percées et mises à jour politiques façonnant l\'avenir du don d\'organes.',
    'blog.all': 'Tous les Articles',
    'blog.search': 'Rechercher...',
    'blog.no_posts': 'Aucun article trouvé',
    'blog.empty_hint': 'Essayez une recherche ou une catégorie différente.',
    'blog.showing': '{count} article(s) affiché(s)',
    'blog.read_more': 'Lire la Suite',
    'blog.cta_title': 'Restez Informé, Sauvez des Vies',
    'blog.cta_subtitle': 'Suivez les dernières évolutions en matière de politique et de défense du don d\'organes.',

    // Stats
    'stats.waiting': 'Personnes en attente de greffes',
    'stats.ny_waiting': 'New-Yorkais sur la liste d\'attente',
    'stats.die_daily': 'Personnes décédant chaque jour en attente',
    'stats.lives_saved': 'Vies qu\'un donneur peut sauver',

    // Mission
    'mission.title': 'Notre Mission',
    'mission.quote': '"Notre mission est d\'encourager davantage de New-Yorkais à devenir donneurs d\'organes en faisant passer une législation de \'consentement présumé\' plutôt que de \'consentement explicite\' au DMV."',

    // About page
    'about.title': 'Qui Nous Sommes',
    'about.subtitle': 'Quatre lycéens qui ont décidé que sauver des vies ne devrait pas être facultatif.',
    'about.story_title': 'Notre Histoire',
    'about.story_text': 'En 2017, lorsqu\'un membre de la famille d\'Evan a eu besoin d\'une greffe de rein, quatre élèves de East Aurora High School près de Buffalo, NY ont décidé d\'agir. Ce qui a commencé par rejoindre le club Donate Life de leur école est devenu un mouvement multinational.',
    'about.team_title': 'Rencontrez l\'Équipe',
    'about.cta_title': 'Prêt à Rejoindre Notre Histoire ?',

    // Bill page
    'bill.title': 'Le Projet de Loi',
    'bill.subtitle': 'Notre proposition de loi pour passer le don d\'organes du consentement explicite au consentement présumé au DMV',
    'bill.what_title': 'Ce Que Fait le Projet de Loi',
    'bill.problem_title': 'Le Problème',
    'bill.problem_text': 'Actuellement au DMV de NY, vous devez choisir activement de vous inscrire comme donneur d\'organes. Beaucoup de gens soutiennent le don mais ne cochent jamais la case — ils sautent la question, oublient ou n\'y pensent pas.',
    'bill.solution_title': 'La Solution',
    'bill.solution_text': 'Notre projet de loi change le paramètre par défaut : à moins que vous ne choisissiez spécifiquement de sauter la question du don d\'organes, vous êtes inscrit comme donneur. Vous avez toujours le droit de refuser — le paramètre par défaut sauve simplement plus de vies.',
    'bill.key_provision': 'Disposition Clé',
    'bill.safeguards_title': 'Garanties Intégrées',
    'bill.safeguard_dmv': 'DMV Uniquement',
    'bill.safeguard_dmv_desc': 'S\'applique uniquement aux demandes de permis et de renouvellement',
    'bill.safeguard_question': 'Question de Consentement',
    'bill.safeguard_question_desc': 'Les demandeurs voient d\'abord la question du don',
    'bill.safeguard_optout': 'Refus Facile',
    'bill.safeguard_optout_desc': 'Sautez la question ou écrivez au commissaire à tout moment',
    'bill.safeguard_notice': 'Avis Écrit',
    'bill.safeguard_notice_desc': 'Le commissaire envoie un courrier confirmant l\'inscription',
    'bill.safeguard_minors': 'Moins de 18 Ans Exemptés',
    'bill.safeguard_minors_desc': 'Ne s\'applique pas aux mineurs',
    'bill.safeguard_choice': 'Votre Choix',
    'bill.safeguard_choice_desc': 'Vous pouvez toujours refuser à tout moment, sans questions',
    'bill.draft_title': 'Texte du Projet de Loi 2021',
    'bill.draft_note': 'Basé sur le Projet A07954 (2019), mis à jour pour la session législative 2021.',
    'bill.view_original': 'Voir le Projet Original 2019 sur l\'Assemblée de NY',
    'bill.cta_title': 'Soutenez Cette Législation',
    'bill.cta_subtitle': 'Contactez vos représentants et rejoignez notre mouvement.',

    // Facts page
    'facts.title': 'Faits Essentiels',
    'facts.subtitle': 'Les chiffres qui motivent notre mission. Partagez-les — ils sauvent des vies.',
    'facts.charts_title': 'Les Données, Visualisées',
    'facts.charts_subtitle': 'Explorez les chiffres derrière la crise du don d\'organes.',
    'facts.quiz_title': 'Le Saviez-Vous ?',
    'facts.quiz_subtitle': 'Testez vos connaissances sur le don d\'organes avec notre quiz rapide !',
    'facts.quiz_question': 'Question {current} sur {total}',
    'facts.quiz_score': 'Score : {score}',
    'facts.quiz_next': 'Question Suivante',
    'facts.quiz_results': 'Voir les Résultats',
    'facts.quiz_excellent': 'Incroyable ! Vous maîtrisez le sujet !',
    'facts.quiz_good': 'Bon effort ! Continuez à apprendre !',
    'facts.quiz_ok': 'Maintenant vous en savez plus qu\'avant !',
    'facts.quiz_share': 'Partagez ces faits avec vos proches pour sensibiliser !',
    'facts.quiz_retry': 'Réessayer',

    // Join page
    'join.title': 'Faites Partie du Mouvement',
    'join.subtitle': 'Si vous êtes jeune (ou jeune de cœur), vous pouvez nous rejoindre pour sensibiliser à la politique du don d\'organes.',
    'join.note': 'Note : Nous ne demanderons jamais de dons financiers et n\'acceptons pas de donateurs individuels pour le moment. Nous comptons sur le travail bénévole de notre équipe et la générosité des institutions académiques et des fondations.',
    'join.form_title': 'Rejoindre YCOD',
    'join.name_label': 'Nom *',
    'join.email_label': 'E-mail *',
    'join.zip_label': 'Code Postal *',
    'join.address_label': 'Adresse Postale',
    'join.address_hint': '(facultatif — pour un petit cadeau de remerciement)',
    'join.submit': 'Rejoindre le Mouvement',
    'join.submitting': 'En cours...',
    'join.privacy': 'Vos informations sont stockées en toute sécurité et utilisées uniquement pour les communications de YCOD. Nous ne partageons jamais vos données avec des tiers.',
    'join.success_title': 'Bienvenue dans le Mouvement !',
    'join.success_text': 'Merci d\'avoir rejoint YCOD. Ensemble, nous sauvons des vies.',
    'join.register_title': 'Inscrivez-vous comme Donneur',
    'join.register_text': 'Envoyez REGISTER au 57838 pour rejoindre le registre des donneurs d\'organes instantanément.',
    'join.reps_title': 'Contactez Vos Représentants',
    'join.reps_text': 'Faites savoir à vos élus que vous soutenez la législation sur le consentement présumé pour le don d\'organes.',
    'join.find_assembly': 'Trouvez Votre Membre de l\'Assemblée',
    'join.find_senator': 'Trouvez Votre Sénateur',

    // Contact page
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Les New-Yorkais aident les New-Yorkais',
    'contact.info_title': 'Nous Contacter',
    'contact.email': 'E-mail',
    'contact.phone': 'Téléphone',
    'contact.location': 'Lieu',
    'contact.location_text': 'Buffalo, NY (Ouest de New York)',
    'contact.social': 'Réseaux Sociaux',
    'contact.form_title': 'Envoyer un Message',
    'contact.name_label': 'Nom *',
    'contact.email_label': 'E-mail *',
    'contact.message_label': 'Message *',
    'contact.submit': 'Envoyer le Message',
    'contact.submitting': 'Envoi en cours...',
    'contact.success_title': 'Message Envoyé !',
    'contact.success_text': 'Merci de nous avoir contactés. Nous vous répondrons bientôt.',
    'contact.error': 'Impossible d\'envoyer le message. Veuillez réessayer ou nous envoyer un e-mail directement.',

    // TEDx page
    'tedx.title': 'TEDx',
    'tedx.title_colored': 'Talk',
    'tedx.subtitle': 'Engagement politique des jeunes et défense du don d\'organes',
    'tedx.quote': '"On considère les jeunes comme apolitiques. Ce n\'est plus vrai. Les jeunes sont bien plus susceptibles de participer activement que les Américains plus âgés, plus enclins à vouloir s\'engager davantage dans le processus politique, et plus susceptibles de voter qu\'à aucun moment des cinquante dernières années."',
    'tedx.quote_cite': '— Evan Roden, Conférence TEDx',
    'tedx.speaker_title': 'À Propos du Conférencier',
    'tedx.speaker_bio1': 'Evan Roden est le fondateur de la Coalition des Jeunes pour le Don d\'Organes. Diplômé en Ingénierie Biomédicale de l\'Université de Tulane et actuel Ingénieur en Développement Durable chez ENFRA, Evan milite pour la réforme du don d\'organes depuis 2017.',
    'tedx.speaker_bio2': 'Après qu\'un membre de sa famille a eu besoin d\'une greffe de rein, Evan a cofondé YCOD avec trois camarades de East Aurora High School. L\'organisation compte aujourd\'hui plus de 3 000 membres, a rédigé une véritable législation et a obtenu des nominations et des soutiens d\'organisations majeures.',
    'tedx.learn_story': 'Découvrez Notre Histoire Complète',
    'tedx.cta_title': 'Inspiré ? Passez à l\'Action.',
    'tedx.cta_subtitle': 'Rejoignez des milliers de jeunes qui font la différence.',
    'tedx.register_donor': 'Inscrivez-vous comme Donneur',

    // Coverage page
    'coverage.title': 'Couverture Médiatique',
    'coverage.subtitle': 'Notre histoire a été partagée dans les médias locaux, nationaux et internationaux.',
    'coverage.cta_title': 'Regardez Notre Conférence TEDx',
    'coverage.cta_button': 'Regarder',

    // Initiatives page
    'initiatives.title': 'Nos Initiatives',
    'initiatives.subtitle': 'Cinq piliers moteurs de changement dans la politique et la sensibilisation au don d\'organes dans l\'État de New York et au-delà.',
    'initiatives.cta_title': 'Soutenez Ces Initiatives',
    'initiatives.cta_subtitle': 'Lisez la législation proposée et rejoignez notre mouvement.',
    'initiatives.read_bill': 'Lire le Projet de Loi',
    'initiatives.join_us': 'Rejoignez-nous',

    // Partners page
    'partners.title': 'Nos Partenaires',
    'partners.subtitle': 'Nous sommes fiers de travailler aux côtés de ces organisations incroyables dans le combat pour sauver des vies grâce au don d\'organes.',
    'partners.cta_title': 'Devenez Partenaire',
    'partners.cta_subtitle': 'Intéressé à soutenir notre mission ? Contactez-nous.',

    // Letter generator
    'letter.title': 'Écrivez à Votre Représentant',
    'letter.subtitle': 'Nous générerons une lettre pour vous. Remplissez vos informations, copiez et envoyez.',
    'letter.details': 'Vos Informations',
    'letter.name_label': 'Votre Nom',
    'letter.zip_label': 'Votre Code Postal',
    'letter.story_label': 'Histoire Personnelle',
    'letter.story_hint': '(facultatif, mais puissant)',
    'letter.preview': 'Aperçu de la Lettre',
    'letter.copy': 'Copier la Lettre',
    'letter.copied': 'Copié !',
    'letter.privacy': 'Votre nom, code postal et histoire personnelle sont utilisés uniquement pour générer cette lettre dans votre navigateur. Rien n\'est envoyé à nos serveurs ni stocké. Nous ne collectons, ne sauvegardons ni ne partageons aucune donnée que vous saisissez ici.',
    'letter.send_hint': 'Après avoir copié votre lettre, trouvez votre représentant et envoyez-la :',
    'letter.email_client': 'Ouvrir dans le Client Mail',

    // Impact calculator
    'calc.title': 'Et Si Plus de New-Yorkais S\'Inscrivaient ?',
    'calc.subtitle': 'Faites glisser le curseur pour voir l\'impact de taux d\'inscription plus élevés.',
    'calc.rate_label': 'Taux d\'Inscription de NY',
    'calc.new_registrations': 'Nouvelles Inscriptions',
    'calc.lives_saved': 'Vies Sauvées Par An',
    'calc.tissue_healed': 'Receveurs de Tissus Soignés',
    'calc.msg_current': 'C\'est là où en est New York aujourd\'hui.',
    'calc.msg_modest': 'Une augmentation modeste — déjà une différence.',
    'calc.msg_achievable': 'Réalisable avec de simples changements de politique.',
    'calc.msg_optout': 'Les pays avec le consentement présumé atteignent ces chiffres.',
    'calc.msg_spain': 'Niveau Espagne. Des milliers de vies sauvées.',
    'calc.msg_universal': 'Inscription quasi universelle. Le scénario idéal.',

    // Not found
    'error.404_title': 'Page Non Trouvée',
    'error.404_text': 'La page que vous cherchez n\'existe pas ou a été déplacée.',
    'error.go_home': 'Accueil',
    'error.read_blog': 'Lire le Blog',

    // Navigation (additional)
    'nav.bill': 'Le Projet',
    'nav.coverage': 'Presse',

    // Settings
    'settings.language': 'Langue',
    'settings.accessibility': 'Accessibilité',
    'settings.high_contrast': 'Contraste Élevé',
    'settings.large_text': 'Grand Texte',
    'settings.reduced_motion': 'Mouvement Réduit',
    'settings.dyslexia_font': 'Police Dyslexie',

    // Footer (additional)
    'footer.description': 'Coalition des Jeunes pour le Don d\'Organes. Les New-Yorkais aident les New-Yorkais à sauver des vies.',
    'footer.the_bill': 'Le Projet de Loi',
    'footer.press_coverage': 'Couverture Presse',
    'footer.visitors': 'VISITEURS',

    // Mission (additional)
    'mission.description': 'Actuellement, lorsque vous obtenez votre permis de conduire au DMV, vous devez activement choisir de vous inscrire comme donneur d\'organes. Nous voulons inverser ce paramètre par défaut — pour que tout le monde soit inscrit sauf s\'il choisit de ne pas l\'être. Ce simple changement, ancré dans l\'économie comportementale, a déjà sauvé des milliers de vies dans des pays comme l\'Espagne, le Royaume-Uni, l\'Autriche et la France.',
    'mission.henry_quote': '« Je pense que les New-Yorkais peuvent mettre leurs différences de côté et réaliser que sauver la vie de quelqu\'un est vraiment la chose la plus importante que vous puissiez faire. »',
    'mission.henry_cite': '— Henry McLaughlin, Cofondateur',

    // Home: Coverage Teaser
    'home.as_seen_in': 'Vu Dans',
    'home.media_covered': 'Notre histoire a été couverte par des médias à travers le pays',
    'home.view_press': 'Voir Toute la Couverture Presse',
    'home.tedx_desc': 'Regardez la conférence TEDx de notre fondateur Evan Roden sur l\'engagement politique des jeunes et la défense du don d\'organes.',
    'home.watch_full': 'Voir la Conférence Complète',

    // Home: Join CTA
    'home.movement_title': 'C\'est un Mouvement de Plusieurs',
    'home.movement_desc1': 'Plus de 3 000 membres et en croissance. Des jeunes et des jeunes de cœur, unis pour sauver des vies.',
    'home.movement_desc2': 'Rejoignez-nous pour défendre le consentement présumé pour le don d\'organes dans l\'État de New York.',

    // Waitlist Ticker
    'waitlist.title': 'Liste Nationale d\'Attente pour Greffes — Compteur en Direct Simulé',
    'waitlist.people_waiting': 'personnes en attente maintenant',
    'waitlist.added_daily': 'ajoutés par jour',
    'waitlist.transplants_day': 'greffes/jour',
    'waitlist.die_daily': 'décèdent en attente par jour',
    'waitlist.time_message': 'Vous êtes sur cette page depuis {time}. Pendant ce temps, environ {deaths} personnes sont décédées en attente d\'un organe.',

    // Timeline
    'timeline.click_expand': 'Cliquez pour en savoir plus',
    'timeline.click_collapse': 'Cliquez pour réduire',

    // DMV Simulator
    'dmv.title': 'Découvrez la Différence',
    'dmv.subtitle': 'Parcourez les deux systèmes vous-même. Voyez pourquoi les paramètres par défaut comptent.',
    'dmv.at_dmv': 'Vous êtes au DMV, en train de renouveler votre permis.',
    'dmv.intro_text': 'Vous passerez par la question du don d\'organes de deux manières : le système actuel de consentement explicite et le système proposé de consentement présumé. Observez comment le paramètre par défaut change votre expérience.',
    'dmv.start_optin': 'Commencer : Système Actuel (Explicite)',
    'dmv.current_system': 'SYSTÈME ACTUEL',
    'dmv.optin_label': 'Explicite',
    'dmv.proposed_system': 'SYSTÈME PROPOSÉ',
    'dmv.optout_label': 'Présumé',
    'dmv.dmv_section': 'Demande de Permis DMV — Section 7',
    'dmv.after_paperwork': '(Après 45 minutes de paperasse, tests de vue et photos...)',
    'dmv.optin_question': 'Souhaitez-vous vous inscrire comme donneur d\'organes et de tissus ?',
    'dmv.optin_yes': 'Oui, je veux m\'inscrire comme donneur d\'organes',
    'dmv.optin_skip': 'Passer cette question',
    'dmv.optin_most_skip': 'La plupart des gens passent — ils sont fatigués, pressés et veulent juste leur permis.',
    'dmv.submit': 'Soumettre la Demande →',
    'dmv.optin_yes_title': 'Vous vous êtes inscrit ! Vous êtes dans la minorité.',
    'dmv.optin_skip_title': 'Vous avez passé. Comme la plupart des gens.',
    'dmv.optin_yes_text': 'Seulement environ 50% des New-Yorkais cochent « oui ». Le reste passe — non pas parce qu\'ils s\'opposent au don, mais parce que le paramètre par défaut est « non ».',
    'dmv.optin_skip_text': 'Vous êtes en bonne compagnie — environ 50% des New-Yorkais passent cette question. Non pas parce qu\'ils sont contre le don, mais parce que le paramètre par défaut ne fait rien et qu\'ils sont fatigués des formulaires.',
    'dmv.try_optout': 'Essayez Maintenant : Système Proposé (Présumé) →',
    'dmv.same_dmv': '(Même DMV, même paperasse, même demandeur fatigué...)',
    'dmv.optout_registered': 'Vous êtes inscrit comme donneur d\'organes et de tissus.',
    'dmv.optout_mail': 'Vous recevrez une confirmation par courrier. Vous pouvez vous retirer à tout moment.',
    'dmv.optout_change': 'Souhaitez-vous modifier cela ?',
    'dmv.optout_keep': 'Garder mon inscription (ne rien faire)',
    'dmv.optout_remove': 'Me retirer du registre des donneurs',
    'dmv.optout_default': 'La plupart des gens ne font rien — et c\'est tout l\'intérêt. Le paramètre par défaut sauve des vies.',
    'dmv.keep_title': 'Vous êtes resté inscrit. Aucun effort supplémentaire.',
    'dmv.remove_title': 'Votre choix est respecté. Vous vous êtes retiré.',
    'dmv.keep_text': 'Dans les pays à consentement présumé, 80-90% des personnes restent inscrites simplement parce que le défaut est « oui ». Personne n\'est forcé — mais le chemin de moindre résistance sauve des vies.',
    'dmv.remove_text': 'Consentement présumé ne signifie pas forcé. Vous pouvez toujours dire non. La différence est que le paramètre par défaut aide au lieu de nuire. Ceux qui veulent se retirer peuvent toujours le faire — facilement.',
    'dmv.see_comparison': 'Voir la Comparaison →',
    'dmv.compare_title': 'Même Personne. Même DMV. Différent Paramètre par Défaut.',
    'dmv.current_optin': 'Actuel : Explicite',
    'dmv.register_ny': 's\'inscrivent à NY',
    'dmv.proposed_optout': 'Proposé : Présumé',
    'dmv.register_optout': 's\'inscrivent dans les pays à consentement présumé',
    'dmv.millions_more': 'C\'est des millions de donneurs potentiels en plus — sans effort supplémentaire de quiconque.',
    'dmv.bill_would_do': 'C\'est ce que le Projet A07954 de YCOD ferait pour New York.',
    'dmv.try_again': 'Réessayer',
    'dmv.read_bill': 'Lire le Projet de Loi',

    // Bill Impact Viz
    'impact.title': 'Impact Projeté du Projet A07954',
    'impact.subtitle': 'Basé sur les résultats des pays ayant adopté le consentement présumé',
    'impact.before': 'Avant',
    'impact.after': 'Après',
    'impact.reg_rate': 'Taux d\'Inscription',
    'impact.annual_donors': 'Donneurs Annuels (NY)',
    'impact.lives_saved': 'Vies Sauvées (NY/an)',
    'impact.waitlist_reduction': 'Réduction de la Liste d\'Attente',
    'impact.growing': 'En croissance',
    'impact.shrinking': 'En diminution',
    'impact.note': 'Ce sont des estimations conservatrices basées sur des données réelles de pays à consentement présumé. L\'Espagne a vu une augmentation de 40% des taux de don dans les 10 ans suivant le changement. Un changement similaire à New York pourrait sauver plus de 1 000 vies supplémentaires par an.',

    // Action Checklist
    'action.title': 'Comment Vous Pouvez Aider',
    'action.subtitle': 'Chaque action fait la différence. Suivez votre impact ci-dessous.',
    'action.progress': 'Votre Progression',
    'action.completed': '{done}/{total} complétés',
    'action.champion_title': 'Vous êtes un champion du don d\'organes !',
    'action.champion_text': 'Merci d\'avoir franchi chaque étape. Vous aidez à sauver des vies.',
    'action.register': 'Inscrivez-vous comme donneur d\'organes',
    'action.register_desc': 'Envoyez REGISTER au 57838 via notre partenaire ONE8FIFTY.',
    'action.register_link': 'Envoyer le SMS',
    'action.join_ycod': 'Rejoignez YCOD',
    'action.join_desc': 'Ajoutez votre nom à notre mouvement grandissant de plus de 3 000 sympathisants.',
    'action.join_link': 'Rejoindre ici',
    'action.learn': 'Apprenez les faits',
    'action.learn_desc': 'Connaissez les chiffres pour les partager avec d\'autres.',
    'action.learn_link': 'Lire les faits',
    'action.talk': 'Parlez à votre famille',
    'action.talk_desc': 'Ayez la conversation sur le don d\'organes avec les personnes que vous aimez.',
    'action.share': 'Partagez sur les réseaux sociaux',
    'action.share_desc': 'Sensibilisez — publiez un fait ou partagez notre site web.',
    'action.write': 'Écrivez à votre représentant',
    'action.write_desc': 'Utilisez notre générateur de lettres pour contacter votre membre de l\'Assemblée ou sénateur de NY.',
    'action.write_link': 'Écrire une lettre',

    // Myth vs Fact
    'myth.title': 'Mythes vs. Faits',
    'myth.subtitle': 'Touchez chaque mythe pour révéler la vérité. Combien en croyiez-vous ?',
    'myth.reveal_all': 'Révéler toutes les réponses',
    'myth.hide_all': 'Masquer toutes les réponses',
    'myth.tap_reveal': 'Touchez pour révéler la vérité →',
    'myth.tap_myth': '← Touchez pour voir le mythe',
    'myth.myth_label': 'MYTHE',
    'myth.fact_label': 'FAIT',

    // Country Comparison Chart
    'chart.reg_title': 'Taux d\'Inscription : Présumé vs. Explicite',
    'chart.reg_subtitle': 'Les pays à consentement présumé surpassent systématiquement les pays à consentement explicite.',
    'chart.optout_system': 'Consentement présumé',
    'chart.optin_system': 'Consentement explicite',
    'chart.new_york': 'New York',
    'chart.tooltip_optout': '{country} utilise le consentement présumé — les citoyens sont inscrits par défaut.',
    'chart.tooltip_ny': 'New York utilise le consentement explicite. Historiquement l\'un des taux d\'inscription les plus bas aux États-Unis.',
    'chart.tooltip_optin': 'Les États-Unis utilisent le consentement explicite — vous devez activement choisir de vous inscrire.',
    'chart.reg_annotation': 'Le schéma est clair : le consentement présumé produit des taux d\'inscription 20-40% plus élevés. Cela se traduit directement en vies sauvées.',

    // Organ Breakdown Chart
    'organ.title': 'Quels Organes Attendent les Gens ?',
    'organ.subtitle': 'Parmi les plus de 103 000 personnes sur la liste nationale d\'attente pour greffes',
    'organ.waiting': 'en attente',
    'organ.people': 'personnes',
    'organ.callout': 'La crise rénale domine la liste d\'attente. 85% des personnes en attente ont besoin d\'un rein, et l\'attente moyenne est de 3-5 ans. Le don de vivant peut aider — vous n\'avez besoin que d\'un seul rein pour vivre une vie pleine et saine.',
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
