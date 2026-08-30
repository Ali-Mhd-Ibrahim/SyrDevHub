/**
 * دليل التطبيقات السورية - ملف البيانات
 * ==========================================
 * لإضافة تطبيق جديد: أضف عنصرًا جديدًا في المصفوفة APPS بالأسفل.
 * لا تقم برفع ملفات تثبيت (APK) هنا — ضع رابط المصدر الرسمي فقط
 * (متجر التطبيق، أو موقع الشركة المطورة، أو صفحة GitHub الرسمية).
 *
 * الحقول المطلوبة:
 *  id          : معرف فريد بالإنجليزية (بدون مسافات) - مثال: "example-app"
 *  name        : اسم التطبيق
 *  category    : واحدة من فئات CATEGORIES بالأسفل (استخدم المفتاح key)
 *  description : وصف قصير (سطر إلى سطرين)
 *  platforms   : مصفوفة من ["android", "ios", "web"]
 *  officialLink: رابط الموقع الرسمي أو صفحة المطوّر
 *  storeLinks  : روابط المتاجر الرسمية { android: "...", ios: "...", web: "..." }
 *                (اترك الحقل فارغًا "" إن لم يكن متوفرًا لتلك المنصة)
 *  verified    : true إذا تم التحقق من الرابط الرسمي والمطوّر
 */

const CATEGORIES = [
  { key: "delivery", label: "توصيل الطعام", icon: "🍽️" },
  { key: "transport", label: "نقل ومواصلات", icon: "🚗" },
  { key: "payments", label: "دفع إلكتروني", icon: "💳" },
  { key: "shopping", label: "تسوق", icon: "🛍️" },
  { key: "realestate", label: "عقارات", icon: "🏠" },
  { key: "education", label: "تعليم", icon: "📚" },
  { key: "health", label: "صحة", icon: "🩺" },
  { key: "jobs", label: "وظائف وخدمات", icon: "💼" },
  { key: "other", label: "أخرى", icon: "✨" },
];

// ⚠️ الأمثلة التالية هي بيانات توضيحية فقط (placeholder) لشرح شكل الملف.
// يرجى حذفها واستبدالها بتطبيقات حقيقية موثّقة قبل نشر الموقع.
const APPS = [
  {
    id: "example-delivery-app",
    name: "مثال: تطبيق توصيل",
    category: "delivery",
    description: "وصف قصير يشرح ماذا يقدّم التطبيق وفي أي مدن يعمل.",
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
    category: "payments",
    description: "وصف قصير للتطبيق وأبرز ميزاته.",
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
