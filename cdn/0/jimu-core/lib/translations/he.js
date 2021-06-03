define({
  loading: 'טוען',
  apply: 'בצע',
  ok: 'אישור',
  publish: 'פרסם',
  cancel: 'בטל',
  yes: 'כן',
  no: 'לא',
  open: 'פתוח',
  close: 'סגירה',
  widgetLoadError: 'הטעינה נכשלה',
  notPublishError:
    'פריט זה לא פורסם. פתח פריט זה ב-Experience Builder, לאחר מכן לחץ על <b>&nbsp;פרסם&nbsp;</b> כדי לפרסמו.',
  versionUpdateMsg:
    'עדכונים חדשים זמינים. לחץ על \'טען מחדש\' כדי לקבל את העדכונים האחרונים.',
  userLocaleChangeMsg:
    'מיקום המשתמש השתנה. לחץ על \'טען מחדש\' כדי לרענן את הדף.',
  doUpdate: 'טען מחדש',
  search: 'חיפוש',
  delete: 'מחיקה',
  about: 'אודות',
  neverUnsupportedBrowserTitle: 'דפדפן לא נתמך',
  neverUnsupportedBrowserOnlineContent:
    'אתה משתמש בדפדפן שאינו נתמך על ידי [ArcGIS Experience Builder]. השתמש בגרסה העדכנית ביותר של <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> או <edge-link>Microsoft Edge</edge-link>. הוסף משוב דרך <feedback-link>GeoNet, קהילת Esri</feedback-link>.',
  neverUnsupportedBrowserEnterpriseContent:
    'אתה משתמש בדפדפן שאינו נתמך על ידי [ArcGIS Experience Builder]. השתמש בגרסה העדכנית ביותר של <chrome-link>Google Chrome</chrome-link>, <firefox-link>Mozilla Firefox</firefox-link>, <safari-link>Apple Safari</safari-link> או <edge-link>Microsoft Edge</edge-link>.',
  message_StringSelectionChange: 'שינויים בבחירת מחרוזות',
  message_ExtentChange: 'הרחב שינויים',
  message_DataRecordsSelectionChange: 'שינויים בבחירת רשומות',
  message_DataRecordSetChange: 'הרשומות נוצרו',
  message_SelectDataRecord: 'בחר רשומת נתונים',
  actions: 'פעולות',
  noActions: 'אין פעולות זמינות',
  export: 'ייצא',
  exportAll: 'ייצא הכל',
  exportSelected: 'ייצא את הפריטים שנבחרו',
  largeWarningTitle: 'האם אתה בטוח שברצונך לייצא את כל רשומות הנתונים? ',
  largeWarningContent: 'היצוא של סט נתונים גדול ייקח זמן.',
  tooLargeWarningTitle: 'ניתן לייצא רק את {max} הרשומות הראשונות.',
  tooLargeWarningContent: 'ייצוא סט נתונים מוגבל ל-{max} הרשומות הראשונות.',
  dataAction_ExportJson: 'יצוא ל-JSON',
  dataAction_ExportCSV: 'יצוא ל-CSV',
  dataAction_ExportGeoJson: 'ייצא אל GeoJSON',
  messageAction_SelectDataRecord: 'בחר רשומות נתונים',
  messageAction_FilterDataRecord: 'סנן רשומת נתונים',
  icon: 'סמל',
  small: 'קטן',
  low: 'נמוכה',
  medium: 'בינונית',
  high: 'גבוה',
  large: 'גדול',
  // concepts
  experience: 'חוויה',
  template: 'תבנית',
  widget: 'וידג\'ט',
  section: 'קטע',
  view: 'הצג',
  page: 'דף',
  dialog: 'חלון',
  layout: 'פריסת עמוד',
  theme: 'ערכת נושא',
  dataSource: 'מקור נתונים',
  block: 'חסום',
  screenGroup: 'קבוצת מסך',
  screen: 'מסך',
  dialogConfirmationDefaultText: 'אני מסכים לתנאים ולהתניות המצוינים לעיל',
  dialogPreventDisplayAgainDefaultText: 'אל תציג זאת שוב',
  // privilege and license
  noEditPrivilegesError:
    'לחשבונך אין הרשאות ליצור נתונים או לשנות אותם.',
  noEditContentPrivilegesError:
    'לחשבונך אין הרשאות ליצור או לשנות תוכן.',
  essentialAppsLicenseErrorForApp:
    'החשבון שלך אינו מורשה להשתמש באפליקציה שאינה ציבורית. בקש ממנהל המערכת בארגון שלך להקצות לך סוג משתמש שכולל את Essential Apps או רישיון הרחבה ל-Essential Apps.',
  essentialAppsLicenseErrorForBuilder:
    'לחשבונך אין אישיון ל-Experience Builder. בקש ממנהל המערכת בארגון שלך להקצות לך סוג משתמש שכולל את Essential Apps או רישיון הרחבה ל-Essential Apps.',
  roleError:
    'גרסת המפתח של Experience Builder מחייבת חשבון ArcGIS פעיל מרמה 2. יש להתחבר עם חשבון שכולל הרשאות מרמה 2.',
  roleError2:
    'Experience Builder Developer Edition מחייב חשבון ארגון ArcGIS עם סוג משתמש שכולל הרשאות ליצור תוכן.',
  invalidResourceExperience: 'אין תמיכה בפריט זה.',
  invalidResourceItem: 'הפריט לא קיים או לא נגיש.',
  invalidResourcePermission:
    'אין לך הרשאות לגשת למשאב זה.',
  dataSourceCreateError: 'הנתונים לא נגישים.',
  blockedByAdminErrorForApp:
    'הארגון שלך חסם גישה ליישום זה. לפרטים, פנה למנהל המערכת שלך.',
  blockedByAdminErrorForBuilder:
    'הארגון שלך חסם את הגישה ל-Experience Builder. לפרטים, פנה למנהל המערכת שלך.',
  //in upgrade
  upgradedFrom: 'שודרג מתצורה קודמת',
  versionIsHigh:
    'אופס... נראה שחוויה זו נוצרה עם גרסה מתקדמת יותר של ArcGIS Experience Builder. שדרג לגרסה העדכנית ביותר כדי להציג.',
  badVersion: 'אופס... נראה שהגרסה של חוויה זו שגויה. בדוק את קובץ הקונפיגורציה שלה.'
});