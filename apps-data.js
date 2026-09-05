/**
 * دليل التطبيقات السورية - ملف البيانات
 * ==========================================
 * لإضافة تطبيق جديد: أضف عنصرًا جديدًا في المصفوفة APPS بالأسفل.
 * لا تقم برفع ملفات تثبيت (APK) هنا — ضع رابط المصدر الرسمي فقط
 * (متجر التطبيق، أو موقع الشركة المطورة، أو صفحة GitHub الرسمية).
 *
 * الحقول المطلوبة:
 *  id          : معرف فريد بالإنجليزية (بدون مسافات) - مثال: "example-app"
 *  name        : اسم التطبيق (بالعربية)
 *  name_en     : اسم التطبيق بالإنجليزية (اختياري - يُستخدم عند تصفح الموقع بالإنجليزية)
 *  category    : واحدة من فئات CATEGORIES بالأسفل (استخدم المفتاح key)
 *  description : وصف قصير (سطر إلى سطرين)
 *  description_en: وصف التطبيق بالإنجليزية (اختياري)
 *  platforms   : مصفوفة من ["android", "ios", "web"]
 *  officialLink: رابط الموقع الرسمي أو صفحة المطوّر
 *  storeLinks  : روابط المتاجر الرسمية { android: "...", ios: "...", web: "..." }
 *                (اترك الحقل فارغًا "" إن لم يكن متوفرًا لتلك المنصة)
 *  verified    : true إذا تم التحقق من الرابط الرسمي والمطوّر
 */

const CATEGORIES = [
  { key: "delivery", label: "توصيل الطعام", label_en: "Food Delivery", icon: "🍽️" },
  { key: "transport", label: "نقل ومواصلات", label_en: "Transport", icon: "🚗" },
  { key: "payments", label: "دفع إلكتروني", label_en: "Payments", icon: "💳" },
  { key: "shopping", label: "تسوق", label_en: "Shopping", icon: "🛍️" },
  { key: "realestate", label: "عقارات", label_en: "Real Estate", icon: "🏠" },
  { key: "education", label: "تعليم", label_en: "Education", icon: "📚" },
  { key: "health", label: "صحة", label_en: "Health", icon: "🩺" },
  { key: "jobs", label: "وظائف وخدمات", label_en: "Jobs & Services", icon: "💼" },
  { key: "other", label: "أخرى", label_en: "Other", icon: "✨" },
];

// ⚠️ الأمثلة التالية هي بيانات توضيحية فقط (placeholder) لشرح شكل الملف.
// يرجى حذفها واستبدالها بتطبيقات حقيقية موثّقة قبل نشر الموقع.
const APPS = [
  {
    id: "example-delivery-app",
    name: "مثال: تطبيق توصيل",
    name_en: "Example: Delivery App",
    category: "delivery",
    description: "وصف قصير يشرح ماذا يقدّم التطبيق وفي أي مدن يعمل.",
    description_en: "A short description of what the app offers and which cities it serves.",
    platforms: ["android", "ios"],
    officialLink: "https://example.com",
    storeLinks: {
      android: "https://play.google.com/store/apps/details?id=example",
      ios: "",
      web: "",
    },
    verified: false,
  },
  {
    id: "example-payments-app",
    name: "مثال: محفظة دفع",
    name_en: "Example: Payment Wallet",
    category: "payments",
    description: "وصف قصير للتطبيق وأبرز ميزاته.",
    description_en: "A short description of the app and its key features.",
    platforms: ["android", "web"],
    officialLink: "https://example.com",
    storeLinks: {
      android: "https://play.google.com/store/apps/details?id=example2",
      ios: "",
      web: "https://example.com",
    },
    verified: false,
  },
];
