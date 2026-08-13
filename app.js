"use strict";

const ACTIVITIES = [
  {id:"face-song",ages:["0-2"],times:[10,20],modes:["together","remote"],types:["play","talk"],title:"שיר, פנים וקצב",description:"שרים שיר קצר ומוסיפים תנועת פנים או יד שחוזרת בכל בית. התינוק לומד לזהות את הקול והקצב שלכם.",prep:"לא צריך להכין דבר",steps:["בחרו שיר קצר שאתם זוכרים בעל פה.","שירו לאט והוסיפו תנועה קבועה בכל פעם שחוזרת מילה.","עצרו לרגע והמתינו למבט, לחיוך או לתנועה — ואז חזרו על השיר."],prompt:"איזה שיר שרו לכם כשהייתם קטנים? ספרו להורים מאיפה אתם מכירים אותו."},
  {id:"texture",ages:["0-2"],times:[10,20],modes:["together"],types:["play"],title:"סל המרקמים",description:"חקירה רגועה של חפצים בטוחים ורכים בעזרת מגע, מילים וקול מוכר.",prep:"שלושה חפצים בטוחים בעלי מרקמים שונים",steps:["הניחו לידכם מטפחת, כדור בד וכף עץ חלקה.","תנו לתינוק לגעת בכל חפץ בהשגחה ותארו במילה אחת: רך, חלק, קר.","בחרו את החפץ שעורר הכי הרבה עניין וחזרו אליו."],prompt:"איזה חפץ פשוט שימש אתכם כצעצוע בילדות?"},
  {id:"pretend-shop",ages:["3-5"],times:[20,45],modes:["together"],types:["play"],title:"החנות המשפחתית",description:"פותחים חנות דמיונית ומתחלפים בתפקידים. המשחק מאפשר לילד להוביל ואתם נכנסים לעולם שלו.",prep:"כמה חפצים מהבית ומטבעות מנייר",steps:["בחרו יחד מה מוכרים וסדרו את החנות.","תנו לילד להיות המוכר ואתם הלקוח המבולבל.","החליפו תפקידים והמציאו מוצר מצחיק שאי אפשר לקנות בשום מקום."],prompt:"מה הייתם קונים בחנות שמוכרת רק דברים שעושים שמח?"},
  {id:"story-chain",ages:["3-5","6-9"],times:[10,20],modes:["together","remote"],types:["talk","play","digital"],title:"סיפור במשפטים",description:"ממציאים סיפור יחד — כל אחד מוסיף משפט אחד בלבד.",prep:"דמיון וקצת סבלנות",steps:["התחילו במשפט: יום אחד מצאנו ליד הדלת...", "התחלפו: כל אחד מוסיף משפט אחד.","אחרי שישה משפטים, נסו יחד להמציא סוף מפתיע."],prompt:"איזו דמות בסיפור הייתם רוצים לפגוש באמת?"},
  {id:"family-drawing",ages:["3-5","6-9"],times:[20,45],modes:["together"],types:["create"],title:"ציור שעובר בינינו",description:"מציירים על אותו דף בתורות ונותנים לציור להשתנות בלי לתכנן מראש.",prep:"דף גדול וצבעים",steps:["כל אחד בוחר צבע.","ציירו במשך דקה והעבירו את הדף.","המשיכו את מה שהאחר התחיל בלי למחוק.","בסוף תנו ליצירה שם וחתמו יחד."],prompt:"מה הוסיף האחר שלא הייתם חושבים עליו לבד?"},
  {id:"old-object",ages:["6-9","10-13","14-18"],times:[20,45],modes:["together","remote"],types:["talk","digital"],title:"החפץ שמספר סיפור",description:"בוחרים חפץ ישן ומגלים דרכו רגע מהעבר — בלי מצגת ובלי הרצאה.",prep:"חפץ ישן או תמונה שלו",steps:["הציגו את החפץ בלי להסביר ובקשו מהנכד לנחש למה שימש.","ספרו סיפור אחד קצר שקשור אליו.","בקשו מהנכד לבחור חפץ עכשווי שהיה רוצה לשמור לעתיד."],prompt:"מה אדם בעתיד יוכל ללמוד עלינו משני החפצים?"},
  {id:"walk-notice",ages:["3-5","6-9","10-13","14-18"],times:[20,45,90],modes:["together"],types:["move"],title:"הליכת שלושה דברים",description:"יוצאים להליכה קצרה וכל אחד מחפש משהו יפה, משהו משונה ומשהו שמעורר שאלה.",prep:"נעליים נוחות",steps:["קבעו מסלול שמתאים ליכולת של שניכם.","חפשו בדרך שלושה דברים: יפה, משונה ומסקרן.","עצרו ליד כל בחירה וספרו למה בחרתם בה.","בסוף החליטו יחד איזו בחירה הייתה המפתיעה ביותר."],prompt:"על מה הסתכלתם היום אחרת בזכות האחר?"},
  {id:"snack-lab",ages:["3-5","6-9"],times:[20,45],modes:["together"],types:["cook"],title:"צלחת צבעים",description:"מכינים יחד נשנוש משלושה צבעים ומעניקים לו שם משפחתי.",prep:"שלושה מאכלים מתאימים ובטוחים, לאחר תיאום אלרגיות עם ההורים",steps:["בחרו יחד שלושה צבעים שתרצו בצלחת.","שטפו, חתכו או סדרו לפי גיל הילד ובהשגחה.","סדרו צורה או פנים ותנו למנה שם.","אכלו יחד בלי הערות על כמות או משקל."],prompt:"איזה טעם אהבתם כילדים והיום אתם פחות אוהבים — או להפך?"},
  {id:"board-invent",ages:["6-9","10-13"],times:[45,90],modes:["together"],types:["create","play"],title:"ממציאים משחק משפחתי",description:"יוצרים משחק פשוט עם מסלול, משימות וכלל משפחתי מצחיק.",prep:"דף, טושים, קובייה וכלי משחק",steps:["ציירו מסלול של 20 משבצות.","הוסיפו יחד שש משימות קצרות.","החליטו על כלל מפתיע אחד.","שחקו סיבוב ניסיון ושנו כלל שלא עובד."],prompt:"מי מכם טוב יותר בהמצאת חוקים ומי בשיפור שלהם?"},
  {id:"then-now-music",ages:["10-13","14-18"],times:[20,45],modes:["together","remote"],types:["talk","digital"],title:"שיר שלי, שיר שלך",description:"כל אחד משמיע שיר אחד מהעולם שלו ומקשיב לשיר של האחר בלי לשפוט.",prep:"טלפון או מחשב עם מוזיקה",steps:["הסבא או הסבתא בוחרים שיר שמחזיר אותם לגיל הנכד.","הנכד בוחר שיר שמספר משהו על החיים שלו עכשיו.","כל אחד מקשיב לשיר של האחר עד הסוף.","שתפו מילה, צליל או תחושה שתפסו אתכם."],prompt:"איזה שיר הייתם בוחרים למסע משותף?"},
  {id:"photo-detective",ages:["6-9","10-13","14-18"],times:[20,45],modes:["together","remote"],types:["talk","digital"],title:"בלשי התמונה הישנה",description:"מתבוננים בתמונה משפחתית ושואלים לפני שמספרים את הסיפור שמאחוריה.",prep:"תמונה משפחתית ישנה, מודפסת או על המסך",steps:["הסתכלו חצי דקה בלי לדבר.","הנכד מעלה שלוש השערות: איפה, מתי ומה קרה.","ספרו את הסיפור האמיתי — בקצרה.","מצאו פרט אחד בתמונה שמחבר לאותה משפחה היום."],prompt:"איזו תמונה מהחיים שלנו היום ראוי שמישהו יחקור בעוד חמישים שנה?"},
  {id:"tech-swap",ages:["10-13","14-18"],times:[20,45],modes:["together","remote"],types:["digital"],title:"שיעור הפוך",description:"הנכד מלמד פעולה דיגיטלית אחת, והסב מלמד מיומנות אחת מהעולם שלו.",prep:"טלפון וחפץ או מיומנות שרוצים ללמד",steps:["בחרו פעולה דיגיטלית קטנה ומוגדרת.","הנכד מלמד לאט, והסב מבצע בעצמו.","החליפו: הסב מלמד פעולה או טיפ שימושי.","כל אחד אומר מה עזר לו ללמוד."],prompt:"מה הופך מישהו למורה טוב, בלי קשר לגיל?"},
  {id:"future-letter",ages:["10-13","14-18"],times:[45,90],modes:["together","remote"],types:["create","talk"],title:"מכתב לעוד חמש שנים",description:"כל אחד כותב לעצמו ולאחר משפט שייפתח בתאריך עתידי.",prep:"שני דפים ושתי מעטפות",steps:["כתבו תאריך לפתיחה בעוד חמש שנים.","כל אחד משלים: אני מקווה שעד אז...", "כתבו זה לזה איחול אחד ושאלה אחת.","סגרו במעטפות ושמרו במקום מוסכם."],prompt:"מה חשוב שיישאר בינינו גם כשהחיים ישתנו?"},
  {id:"news-two-views",ages:["14-18"],times:[20,45],modes:["together","remote"],types:["talk","digital"],title:"אותו נושא, שתי נקודות מבט",description:"בוחרים נושא אקטואלי ומתרגלים סקרנות במקום ויכוח.",prep:"ידיעה קצרה ממקור שמכירים",steps:["קראו או סכמו יחד את העובדות הבסיסיות.","כל אחד אומר מה הוא חושב ומדוע, בלי לקטוע.","כל אחד מנסח טיעון אחד של הצד האחר בצורה הוגנת.","מסיימים בדבר אחד שעליו מסכימים."],prompt:"האם משהו בדעתכם השתנה לאחר שהקשבתם?"},
  {id:"phone-quiz",ages:["6-9","10-13","14-18"],times:[10,20],modes:["remote"],types:["play","digital"],title:"חידון שלושה רמזים",description:"משחק קצר שמתאים לשיחת טלפון: חושבים על אדם, מקום או חפץ ונותנים שלושה רמזים.",prep:"שיחת טלפון בלבד",steps:["בחרו דבר שהאחר מכיר.","תנו רמז קשה, אחריו בינוני ולבסוף קל.","התחלפו בתפקידים.","בסיבוב האחרון בחרו משהו שמזכיר חוויה משותפת."],prompt:"איזה רמז גרם לכם להבין מיד?"},
  {id:"memory-recipe",ages:["6-9","10-13","14-18"],times:[45,90],modes:["together"],types:["cook","talk"],title:"מתכון עם סיפור",description:"מכינים מאכל משפחתי, אבל בכל שלב מוסיפים גם חלק מהסיפור שלו.",prep:"מתכון מתואם עם ההורים וכל המצרכים",steps:["הציגו את המתכון וספרו ממי למדתם אותו.","חלקו משימות בטוחות ומתאימות לגיל.","בזמן ההכנה ספרו זיכרון אחד שקשור למאכל.","בסוף כתבו על דף את שם המתכון ומשפט מהסיפור."],prompt:"איזה מאכל הייתם רוצים שהדור הבא ימשיך להכין?"},
  {id:"mini-interview",ages:["6-9","10-13","14-18"],times:[10,20],modes:["together","remote"],types:["talk"],title:"ראיון בשלוש שאלות",description:"כל אחד מראיין את האחר בשלוש שאלות בלבד — ואז מסכם דבר חדש שלמד.",prep:"אפשר להכין שלוש שאלות מראש",steps:["הנכד שואל שלוש שאלות והסב עונה בקצרה.","מתחלפים: הסב שואל שלוש שאלות.","כל אחד אומר: הדבר שלא ידעתי עליך הוא..."],prompt:"איזו שאלה תרצו לשמור לפעם הבאה?"},
  {id:"stretch-story",ages:["3-5","6-9"],times:[10,20],modes:["together","remote"],types:["move","play"],title:"סיפור בתנועה",description:"ממציאים סיפור קצר שבו כל דמות מקבלת תנועה שאפשר לבצע בעמידה או בישיבה.",prep:"מרחב בטוח קטן",steps:["בחרו שלוש דמויות ותנועה לכל דמות.","ספרו סיפור ובכל הופעה של דמות עושים את התנועה.","החליפו מספר והמציאו סוף חדש."],prompt:"איזו תנועה הכי הצחיקה אתכם?"}
];

const CARDS = [
  {ages:["3-5","6-9"],topic:"childhood",q:"מה היה המשחק שהכי אהבתם לשחק כשהייתם בגיל שלי?",follow:"נסו למצוא דבר אחד שדומה ודבר אחד ששונה."},
  {ages:["6-9","10-13","14-18"],topic:"childhood",q:"איזה ריח או טעם מחזיר אתכם מיד לילדות?",follow:"ספרו על המקום ועל האנשים שהיו שם."},
  {ages:["10-13","14-18"],topic:"childhood",q:"איזה כלל שהיה בבית שלכם בילדות נראה היום מוזר?",follow:"האם יש בו משהו שהייתם בכל זאת רוצים לשמור?"},
  {ages:["6-9","10-13","14-18"],topic:"childhood",q:"מי היה החבר או החברה הכי טובים שלכם, ומה אהבתם לעשות יחד?",follow:"מה לדעתכם הופך חברות לטובה?"},
  {ages:["3-5","6-9","10-13","14-18"],topic:"family",q:"איזו מסורת משפחתית הייתם רוצים שנמשיך תמיד?",follow:"הציעו שינוי קטן שיהפוך אותה גם למסורת שלכם."},
  {ages:["6-9","10-13","14-18"],topic:"family",q:"איזה סיפור משפחתי תמיד מצחיק אתכם מחדש?",follow:"מי עוד במשפחה מספר אותו אחרת?"},
  {ages:["3-5","6-9"],topic:"family",q:"אם המשפחה שלנו הייתה חיה, איזו חיה היא הייתה ולמה?",follow:"כל אחד בוחר חיה ומסביר."},
  {ages:["10-13","14-18"],topic:"family",q:"איזה דבר חשוב למדתם מאחד ההורים שלכם?",follow:"האם אתם משתמשים בו גם היום?"},
  {ages:["3-5","6-9","10-13","14-18"],topic:"dreams",q:"אם היינו יכולים לצאת מחר למסע לכל מקום, לאן היינו נוסעים?",follow:"מה הדבר הראשון שהיינו עושים שם?"},
  {ages:["6-9","10-13","14-18"],topic:"dreams",q:"איזה דבר חדש הייתם רוצים ללמוד בשנה הקרובה?",follow:"איך האחר יכול לעזור בצעד הראשון?"},
  {ages:["10-13","14-18"],topic:"dreams",q:"איך לדעתכם ייראה יום רגיל בעולם בעוד עשרים שנה?",follow:"איזה דבר אתם מקווים שלא ישתנה?"},
  {ages:["3-5","6-9"],topic:"fun",q:"אם הייתם יכולים להמציא חג חדש, מה היו עושים בו?",follow:"תנו לחג שם והמציאו מאכל מיוחד."},
  {ages:["6-9","10-13","14-18"],topic:"fun",q:"איזה כוח־על היה הכי שימושי דווקא למשפחה שלנו?",follow:"מתי השתמשתם בו לאחרונה?"},
  {ages:["10-13","14-18"],topic:"fun",q:"איזה שיר, סרט או ספר הייתם רוצים להכיר זה לזה?",follow:"נסו להסביר מה אתם אוהבים בו בלי לגלות את הסוף."},
  {ages:["3-5","6-9","10-13","14-18"],topic:"values",q:"מה היה הדבר הטוב ביותר שמישהו עשה בשבילכם השבוע?",follow:"איזה מעשה קטן נוכל לעשות בשביל מישהו אחר?"},
  {ages:["6-9","10-13","14-18"],topic:"values",q:"מתי שיניתם את דעתכם על משהו חשוב?",follow:"מה גרם לכם להסתכל אחרת?"},
  {ages:["10-13","14-18"],topic:"values",q:"מה חשוב יותר לדעתכם: להיות צודקים או לשמור על הקשר?",follow:"האם אפשר לפעמים להשיג את שניהם?"},
  {ages:["3-5","6-9"],topic:"values",q:"מה הופך יום רגיל ליום טוב?",follow:"בחרו דבר אחד שאפשר לעשות כבר היום."}
];

const PROJECTS = [
  {id:"recipes",symbol:"♨",title:"ספר המתכונים המשפחתי",desc:"מתכון אחד בכל מפגש, יחד עם הסיפור והאדם שמאחוריו.",age:"6 ומעלה",duration:"3–6 מפגשים",materials:"מחברת, כלי כתיבה ומטבח",steps:["בחרו מתכון אחד שמספר משהו על המשפחה.","כתבו את המצרכים וחלקו משימות בטוחות.","בזמן ההכנה שאלו: ממי למדת את המתכון ומתי הכנת אותו לראשונה?", "הדביקו או ציירו תמונה של המנה וכתבו משפט מהסיפור.","במפגש הבא בחרו מתכון מהצד או מהדור האחר."]},
  {id:"family-tree",symbol:"⌁",title:"עץ משפחה עם סיפורים",desc:"לא רק שמות ותאריכים — לכל ענף מוסיפים זיכרון קטן.",age:"8 ומעלה",duration:"2–4 מפגשים",materials:"דף גדול, טושים ופתקים",steps:["ציירו יחד גזע וענפים מרכזיים.","הוסיפו שמות של בני משפחה שהנכד מכיר.","ליד כל שם כתבו פרט אחד: כישרון, מקום או סיפור.","בחרו אדם אחד שפחות מכירים ושאלו בן משפחה עליו.","השאירו ענפים פתוחים לגילויים הבאים."]},
  {id:"childhood-map",symbol:"⌖",title:"מפת הילדות",desc:"מסמנים על מפה את הבית, בית הספר, מקום המשחק וסיפור אחד מכל נקודה.",age:"9 ומעלה",duration:"מפגש אחד או טיול",materials:"מפה מודפסת או דף לציור",steps:["סמנו את הבית שבו גדל הסב או הסבתא.","הוסיפו שלושה מקומות חשובים מהילדות.","ליד כל מקום כתבו כותרת לסיפור קצר.","אם אפשר, צאו לסיור; אם לא, חפשו יחד את המקומות במפה.","הנכד מוסיף למפה מקום חשוב מהחיים שלו היום."]},
  {id:"time-capsule",symbol:"◷",title:"קפסולת זמן",desc:"מכתבים וחפצים קטנים שיחכו לכם לתאריך שקבעתם יחד.",age:"6 ומעלה",duration:"מפגש אחד",materials:"קופסה, מעטפות וחפצים קטנים",steps:["בחרו יחד תאריך שבו תפתחו את הקופסה.","כל אחד כותב מכתב לעצמו ומכתב לאחר.","הוסיפו חפץ קטן או ציור שמייצג את התקופה.","כתבו על הקופסה את תאריך הפתיחה והיכן תשמרו אותה.","סגרו יחד — ואל תציצו לפני הזמן."]},
  {id:"then-now",symbol:"◫",title:"אלבום אז והיום",desc:"משחזרים רגעים ישנים בתמונות חדשות ומספרים מה השתנה.",age:"8 ומעלה",duration:"2–3 מפגשים",materials:"תמונות מודפסות, דפים ודבק",steps:["בחרו שלוש תמונות משפחתיות ישנות.","בדקו יחד מי מופיע ומה קרה בכל תמונה.","שחזרו תנוחה או מקום בתמונה חדשה, מחוץ לאפליקציה.","הדפיסו והצמידו ישן ליד חדש.","כתבו מתחת לכל זוג: מה השתנה ומה נשאר."]},
  {id:"family-games",symbol:"✦",title:"ערכת המשחקים שלנו",desc:"ממציאים שלושה משחקים קצרים שמתאימים בדיוק למשפחה שלכם.",age:"5 ומעלה",duration:"2–4 מפגשים",materials:"דפים, טושים, קובייה וקלפים",steps:["בחרו משחק מוכר ושנו בו כלל אחד.","המציאו משחק שאלות קצר על המשפחה.","צרו משחק תנועה שאפשר לבצע גם בישיבה.","שחקו ובדקו מה ברור ומה צריך לשנות.","כתבו את החוקים ושמרו הכול בקופסה אחת."]}
];

const GUIDE = [
  {id:"relationship",title:"בניית קשר בריא לאורך השנים",lede:"הקשר אינו נבנה ברגע אחד — הוא נבנה מחדש בכל שלב מתוך התאמה לצרכים המשתנים של הילד.",sections:[
    ["0–2 · נוכחות וביטחון",["נוכחות שקטה, שירה ודיבור בקול רגוע בונים היכרות.","ביקורים קצרים ותכופים עדיפים לעיתים על מפגשים נדירים וארוכים.","כבדו את שגרות השינה וההאכלה שקבעו ההורים."]],
    ["3–5 · משחק ודמיון",["משחק דמיוני וקריאה חוזרת הם שפה טבעית לקרבה.","תנו לילד תפקיד קטן בזמן שאתם יחד.","התפרצות רגשית אינה דחייה שלכם; הגבול צריך להיות רגוע ועקבי."]],
    ["6–9 · סקרנות ולמידה",["שתפו בתחביבים שלכם והתעניינו באמת בתחביבים שלהם.","זמן אחד־על־אחד מחזק תחושת ייחודיות.","שאלו שאלות פתוחות והקשיבו לפני שאתם מתקנים או מציעים פתרון."]],
    ["10–13 · עצמאות מתחילה",["כבדו פרטיות ואל תדרשו שיתוף בכל דבר.","הכירו את המוזיקה, המשחקים והסדרות שלהם בלי לזלזל.","המשיכו ליזום קשר גם כשהם נראים פחות זקוקים לכם."]],
    ["14–18 · שיחה של שווים",["שוחחו על דעות, עתיד וערכים — לא רק על ציונים.","היו מקור יציב ולא שיפוטי גם כשאינכם מסכימים.","הודעה קצרה ונעימה שומרת קשר בלי להכביד."]]
  ]},
  {id:"activities",title:"פעילויות מותאמות לגיל",lede:"הפעילות היא אמצעי לקשר, לא מבחן הצלחה. עדיף מפגש קצר ונעים על פרויקט מושלם שמעייף את כולם.",sections:[
    ["0–2",["שירה, משחקי פנים וטיול קצר בעגלה.","חקירת חפצים בטוחים בהשגחה."]],
    ["3–5",["משחק דמיוני, פאזלים, ציור ואפייה עם משימות בטוחות.","תנו לילד להוביל חלק מהמשחק."]],
    ["6–9",["משחקי קופסה, טיול טבע ופרויקט שנמשך כמה מפגשים.","למדו מיומנות זה מזה."]],
    ["10–13",["בישול מלא, צפייה ושיחה, הליכה או יצירה דיגיטלית.","אפשרו לנכד לבחור ולהוביל."]],
    ["14–18",["תכנון טיול, שיחה על נושא משותף או עזרה בפרויקט אמיתי.","בקשו מהם ללמד אתכם משהו — לא רק לקבל עצות."]]
  ]},
  {id:"nutrition",title:"תזונה וקשר סביב השולחן",lede:"אהבה דרך אוכל היא מסורת נפלאה, כל עוד היא מכבדת את בריאות הילד ואת כללי ההורים.",sections:[
    ["עקרונות כלליים",["בררו מראש אלרגיות, רגישויות וכללי תזונה ופעלו לפיהם.","שתפו את הנכדים בהכנה — הקשר נבנה יותר בעשייה מאשר בכמות הממתקים.","אל תעירו על משקל, מראה גוף או כמות האכילה, גם לא בבדיחה.","הציעו בחירה בין שתי אפשרויות מתאימות במקום מאבק כוח."]],
    ["לפי גיל",["לתינוקות נותנים מזון רק לפי הנחיות ההורים.","לילדי גן מציעים משימות קטנות ובטוחות.","ביסודי אפשר לחקור את מקור המזון.","בגיל ההתבגרות שומרים במיוחד על שפה לא שיפוטית סביב גוף ואכילה."]]
  ]},
  {id:"boundaries",title:"גבולות והתנהגות",lede:"הסב או הסבתא אינם מחליפים את ההורים, אבל הם דמות משמעותית וקבועה שמעניקה מרחב בטוח נוסף.",sections:[
    ["מומלץ",["לתמוך בכללים שההורים קבעו גם כשהם שונים מדרככם.","להקשיב ברצינות ולדבר בגובה העיניים.","להיות עקביים ולהודות בטעות כשצריך.","לשמור סודות רגילים — אך לא סוד שפוגע בבטיחות הילד."]],
    ["כדאי להימנע",["לא לבטל החלטה הורית לפני הנכד.","לא להשוות בין נכדים או להעיר על גוף וציונים.","לא לקנות חיבה באמצעות מתנות.","לא לערב את הילד בסכסוכים בין מבוגרים."]]
  ]},
  {id:"development",title:"הבנת שלבי ההתפתחות",lede:"היכרות כללית עם התפתחות מסייעת להתאים ציפיות. לכל ילד קצב אישי, ובכל דאגה משמעותית פונים להורים ולאיש מקצוע.",sections:[
    ["0–5 · ויסות, תנועה ודמיון",["תינוקות זקוקים למבוגר כדי להירגע ולחוש ביטחון.","בגיל הגן הדמיון מתרחב והוויסות עדיין מתפתח.","אנרגיה גבוהה והתפרצויות אינן בהכרח בעיית התנהגות."]],
    ["6–9 · כללים, הישגים וחברות",["החשיבה נעשית הגיונית יותר וחברות מקבלת מקום מרכזי.","דימוי עצמי מושפע מהשוואות — לכן חשוב להימנע מהן."]],
    ["10–18 · זהות ועצמאות",["שינויים גופניים ורגשיים מתרחשים בקצב שונה.","היכולת לחשיבה מופשטת, שיפוט וויסות ממשיכה להבשיל לאורך ההתבגרות ואף לאחריה.","התרחקות מסוימת מהמשפחה היא חלק מבניית זהות ואינה סוף הקשר."]]
  ]},
  {id:"aging",title:"לדבר על הזדקנות",lede:"שיחה כנה, קצרה ומותאמת גיל עוזרת לילדים להבין שינויים בגוף בלי להפוך אותם למטפלים של המבוגר.",sections:[
    ["איך מסבירים",["ענו בפשטות על שאלות בנוגע לשיער לבן, הליכה איטית או מכשיר שמיעה.","הציגו הזדקנות כחלק טבעי מהחיים.","אפשר להראות רגש, אך לא להטיל על הנכד אחריות לדאוג לכם."]],
    ["מחלה ואובדן",["שתפו מידע שמתאים לגיל ובתיאום עם ההורים.","הבדילו בין מה שיודעים לבין מה שעדיין לא יודעים.","אפשרו שאלות חוזרות; ילדים מעבדים מידע בהדרגה.","במצב מורכב בקשו הכוונה מקצועית מותאמת למשפחה."]]
  ]},
  {id:"parents",title:"שיתוף פעולה עם ההורים",lede:"קשר טוב עם הנכדים נשען על כבוד לסמכות ההורית, תיאום וצמצום התחרות בין המבוגרים.",sections:[
    ["תקשורת טובה",["שאלו את ההורים כיצד הם רוצים שתתייחסו לנושא רגיש.","הציעו עזרה קונקרטית במקום לצפות שיבקשו.","העלו ביקורת או הצעה בשיחה פרטית, לא מול הילד."]],
    ["כשיש מחלוקת",["בררו את הכוונה לפני שמפרשים החלטה כהתנגדות אישית.","לא כל אי־הסכמה דורשת עימות.","לעולם אל תשתמשו בנכד כשליח או כבן ברית.","אם המתח נמשך, גישור או ייעוץ עדיפים על הסלמה."]]
  ]},
  {id:"families",title:"משפחות מגוונות וקשר מרחוק",lede:"אין מבנה משפחתי אחד נכון. הקשר צריך להתאים למציאות המשפחתית, לשפה, למרחק וליכולות של כל אחד.",sections:[
    ["משפחות מורכבות",["כבדו סבים חורגים, משפחות גרושות ומסורות שונות בלי לדרוש מהילד לבחור צד.","אל תתחרו על תואר הסב או הסבתא האהובים.","תאמו חגים, מתנות ומפגשים כדי לא להעמיס תיווך על ההורים."]],
    ["קשר ממרחק",["קבעו טקס קצר וקבוע: סיפור שבועי, חידון או שיר.","עדיף קשר קצר וצפוי על שיחת וידאו ארוכה שמכבידה.","שלבו פעילות: להראות חפץ, לצייר יחד או לבשל את אותו מתכון בשני בתים."]],
    ["צרכים ויכולות שונות",["התאימו קצב, רעש, תנועה ושפה לצורכי הילד והמבוגר.","שאלו את ההורים מה מסייע לילד ומה מציף אותו.","אל תניחו שחוסר קשר עין, דיבור מועט או צורך בהפסקה הם חוסר עניין או חיבה."]]
  ]},
  {id:"digital",title:"הקשר בעולם הדיגיטלי",lede:"הטכנולוגיה יכולה לקרב, אבל שימוש מכבד דורש תיאום, פרטיות ובטיחות.",sections:[
    ["פרטיות ופרסום",["אל תפרסמו תמונה או מידע על הנכד בלי אישור ההורים ובהתאם לגיל — גם באלבום שנראה פרטי.","אל תשתפו מיקום, מסגרת לימודים או פרטים מזהים.","כבדו בקשה של מתבגר להסיר תמונה שלו."]],
    ["שיחות ומסכים",["קבעו עם ההורים מה מתאים מבחינת זמן ותוכן.","בשיחת וידאו עשו משהו יחד במקום רק לשאול שאלות.","אל תיעלבו אם הילד אינו זמין מיד או מעדיף הודעה קצרה."]],
    ["הונאות ובטיחות",["אל תעבירו כסף בעקבות הודעה דחופה לפני שווידאתם בקול עם בן המשפחה.","אל תמסרו קוד אימות, סיסמה או פרטי אשראי בהודעה.","אם משהו מרגיש מלחיץ או דחוף במיוחד — עוצרים ומתייעצים."]]
  ]}
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
let lastActivity = null;
let lastCard = -1;
let currentGuide = "relationship";

function createChoice(container, name, value, label, checked=false){
  const wrap=document.createElement("div");wrap.className="choice-option";
  const input=document.createElement("input");input.type="radio";input.name=name;input.id=`${name}-${value}`;input.value=value;input.checked=checked;
  const text=document.createElement("label");text.htmlFor=input.id;text.textContent=label;
  wrap.append(input,text);container.append(wrap);
}

function setupFilters(){
  [["0-2","0–2"],["3-5","3–5"],["6-9","6–9"],["10-13","10–13"],["14-18","14–18"]].forEach((x,i)=>createChoice($("#ageChoices"),"age",x[0],x[1],i===2));
  [[10,"10 דק׳"],[20,"20 דק׳"],[45,"45 דק׳"],[90,"שעה+"]].forEach((x,i)=>createChoice($("#timeChoices"),"time",x[0],x[1],i===1));
  [["together","נפגשים יחד"],["remote","מרחוק"]].forEach((x,i)=>createChoice($("#modeChoices"),"mode",x[0],x[1],i===0));
}

function getActivityMatches(){
  const form=$("#activityForm");const fd=new FormData(form);const age=fd.get("age"),time=Number(fd.get("time")),mode=fd.get("mode"),type=fd.get("type");
  return ACTIVITIES.filter(a=>a.ages.includes(age)&&a.modes.includes(mode)&&a.times.some(t=>t<=time)&& (type==="any"||a.types.includes(type)));
}

function showActivity(activity){
  lastActivity=activity;const result=$("#activityResult");
  result.innerHTML=`<div class="activity-result"><div class="result-kicker"><span>ההצעה שלנו</span><span>${String(ACTIVITIES.indexOf(activity)+1).padStart(2,"0")}</span></div><h2>${activity.title}</h2><p class="description">${activity.description}</p><div class="result-meta"><span>◷ ${activity.times[0]}–${Math.max(...activity.times)} דקות</span><span>⌂ ${activity.modes.includes("remote")?"גם מרחוק":"מפגש משותף"}</span></div><h3>מה צריך?</h3><p>${activity.prep}</p><h3>איך עושים?</h3><ol>${activity.steps.map(s=>`<li>${s}</li>`).join("")}</ol><div class="talk-prompt"><strong>שאלה לסיום</strong><br>${activity.prompt}</div><div class="result-buttons"><button class="button primary" id="anotherActivity" type="button">הצעה אחרת</button><button class="button secondary" type="button" onclick="window.print()">הדפסה</button></div></div>`;
  $("#anotherActivity").addEventListener("click",generateActivity);
}

function generateActivity(){
  let matches=getActivityMatches();
  if(!matches.length){
    const fd=new FormData($("#activityForm"));const age=fd.get("age"),mode=fd.get("mode");
    matches=ACTIVITIES.filter(a=>a.ages.includes(age)&&a.modes.includes(mode));
  }
  if(!matches.length){matches=ACTIVITIES;}
  const alternatives=matches.filter(a=>a!==lastActivity);showActivity(alternatives[Math.floor(Math.random()*alternatives.length)]||matches[0]);
}

function filteredCards(){const age=$("#cardAge").value,topic=$("#cardTopic").value;return CARDS.map((c,i)=>({...c,index:i})).filter(c=>(age==="all"||c.ages.includes(age))&&(topic==="all"||c.topic===topic));}
function showNewCard(){let cards=filteredCards();let options=cards.filter(c=>c.index!==lastCard);const card=options[Math.floor(Math.random()*options.length)]||cards[0]||CARDS[0];lastCard=card.index??0;const el=$("#conversationCard");$(".card-label",el).textContent=`קלף ${String(lastCard+1).padStart(2,"0")}`;$("p",el).textContent=card.q;$("small",el).textContent=`אחרי התשובה: ${card.follow}`;}

function renderProjects(){const grid=$("#projectGrid");grid.replaceChildren();PROJECTS.forEach(p=>{const article=document.createElement("article");article.className="project-card";article.innerHTML=`<span class="project-symbol" aria-hidden="true">${p.symbol}</span><h2>${p.title}</h2><p>${p.desc}</p><div class="project-tags"><span>${p.age}</span><span>${p.duration}</span></div><a class="button secondary" href="#project:${p.id}">לפרויקט המלא <span aria-hidden="true">←</span></a>`;grid.append(article);});}
function renderProject(id){const p=PROJECTS.find(x=>x.id===id)||PROJECTS[0];const el=$("#projectDetail");el.innerHTML=`<a class="back-link" href="#projects">→ חזרה לכל הפרויקטים</a><p class="eyebrow">פרויקט משפחתי</p><h1 id="project-title">${p.title}</h1><p class="project-lede">${p.desc}</p><div class="project-summary"><div><small>מתאים לגיל</small><strong>${p.age}</strong></div><div><small>משך</small><strong>${p.duration}</strong></div><div><small>מה צריך</small><strong>${p.materials}</strong></div></div><div class="steps"><h2>שלבי הפרויקט</h2>${p.steps.map((s,i)=>`<div class="step"><b>${i+1}</b><div><h3>${i===0?"מתחילים":i===p.steps.length-1?"מסיימים":"ממשיכים"}</h3><p>${s}</p></div></div>`).join("")}</div><div class="hero-actions" style="margin-top:20px"><button class="button secondary" type="button" onclick="window.print()">הדפסת ההוראות</button></div>`;}

function renderGuideNav(){const nav=$("#guideNav");nav.replaceChildren();GUIDE.forEach((g,i)=>{const b=document.createElement("button");b.type="button";b.dataset.guide=g.id;b.textContent=`${String(i+1).padStart(2,"0")} · ${g.title}`;b.setAttribute("aria-current",String(g.id===currentGuide));b.addEventListener("click",()=>{currentGuide=g.id;history.replaceState(null,"",`#guide:${g.id}`);renderGuide();});nav.append(b);});}
function renderGuide(){const g=GUIDE.find(x=>x.id===currentGuide)||GUIDE[0];currentGuide=g.id;renderGuideNav();const content=$("#guideContent");content.innerHTML=`<p class="eyebrow">מדור ${String(GUIDE.indexOf(g)+1).padStart(2,"0")}</p><h2>${g.title}</h2><p class="guide-lede">${g.lede}</p>${g.sections.map((s,i)=>`<section class="accordion"><h3><button class="accordion-button" type="button" aria-expanded="${i===0}" aria-controls="guide-panel-${i}"><span class="age-dot" aria-hidden="true"></span><span>${s[0]}</span><span class="chevron" aria-hidden="true">⌄</span></button></h3><div class="accordion-panel" id="guide-panel-${i}" ${i===0?"":"hidden"}><ul>${s[1].map(x=>`<li>${x}</li>`).join("")}</ul></div></section>`).join("")}<div class="note-box"><strong>חשוב לזכור:</strong> כל ילד, מבוגר ומשפחה שונים. התאימו את העצה למציאות שלכם ושמרו על תקשורת פתוחה עם ההורים.</div>`;
  $$(".accordion-button",content).forEach(btn=>btn.addEventListener("click",()=>{const open=btn.getAttribute("aria-expanded")==="true";btn.setAttribute("aria-expanded",String(!open));document.getElementById(btn.getAttribute("aria-controls")).hidden=open;}));
}

function parseRoute(){const raw=location.hash.slice(1)||"home";const [route,param]=raw.split(":");return {route,param};}
function route(){const {route:requested,param}=parseRoute();let page=requested;if(!["home","today","cards","projects","project","guide"].includes(page))page="home";if(page==="project")renderProject(param);if(page==="guide"){currentGuide=param||currentGuide;renderGuide();} $$(".page").forEach(p=>p.classList.toggle("active",p.dataset.page===page));$$("[data-route]").forEach(a=>a.classList.toggle("active",a.dataset.route===(page==="project"?"projects":page)));$("#mainNav").classList.remove("open");$("#menuButton").setAttribute("aria-expanded","false");window.scrollTo(0,0);setTimeout(()=>$("#main-content").focus({preventScroll:true}),0);}

setupFilters();renderProjects();renderGuide();
$("#activityForm").addEventListener("submit",e=>{e.preventDefault();generateActivity();});
$("#newCardButton").addEventListener("click",showNewCard);$("#swapCardButton").addEventListener("click",()=>{const card=$("#conversationCard");const small=$("small",card);small.textContent="עכשיו מי שענה ראשון שואל, והאחר עונה. נסו לא לקטוע.";});
$("#cardAge").addEventListener("change",showNewCard);$("#cardTopic").addEventListener("change",showNewCard);
$("#menuButton").addEventListener("click",e=>{const open=$("#mainNav").classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",String(open));});
$("#fontButton").addEventListener("click",e=>{const on=document.body.classList.toggle("large-text");e.currentTarget.setAttribute("aria-pressed",String(on));});
$("#contrastButton").addEventListener("click",e=>{const on=document.body.classList.toggle("high-contrast");e.currentTarget.setAttribute("aria-pressed",String(on));});
window.addEventListener("hashchange",route);route();
