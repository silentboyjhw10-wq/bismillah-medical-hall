# বিসমিল্লাহ মেডিকেল হল — Android Project

এই প্রজেক্টটি আপনার আপলোড করা HTML অ্যাপকে Capacitor Android wrapper দিয়ে APK বানানোর প্রাথমিক Source Project।

## ফোন থেকে GitHub ব্যবহার করে APK বানানো

1. ZIP ফাইলটি Extract করুন।
2. GitHub-এ নতুন Repository তৈরি করুন: `bismillah-medical-hall`
3. Extract করা ফোল্ডারের ভেতরের সব ফাইল Repository-র root-এ Upload করুন।
4. `main` branch-এ Push/Commit করুন।
5. Repository → Actions → **Build Android APK** খুলুন।
6. Workflow সফল হলে Artifacts থেকে `bismillah-medical-hall-debug-apk` ডাউনলোড করুন।
7. ZIP খুলে `app-debug.apk` Android ফোনে ইনস্টল করুন।

## বর্তমান সংস্করণের সীমাবদ্ধতা — খুব গুরুত্বপূর্ণ

- এটি প্রথম Android wrapper/build scaffold; production-ready pharmacy system নয়।
- বর্তমান HTML-এর ডেটা এখনও WebView `localStorage`-এ থাকে; SQLite migration এখনও করা হয়নি।
- Batch-wise multi-batch stock, FEFO allocation, barcode scanning, returns/refunds, encrypted backup, user roles ও audit log এখনও পূর্ণাঙ্গভাবে implement করা হয়নি।
- এই build-এ Android APK তৈরির pipeline প্রস্তুত করা হয়েছে; GitHub Actions-এ build সফল হয়েছে বলে এখনও দাবি করা হচ্ছে না।
- প্রথমে পরীক্ষামূলক ডেটা দিয়ে পরীক্ষা করুন। বাস্তব ব্যবসার হিসাব রাখার আগে পূর্ণ SQLite, backup/restore এবং stock logic যাচাই করতে হবে।

## Backup
Settings → ডেটা ব্যাকআপ থেকে JSON export করুন এবং আলাদা নিরাপদ স্থানে রাখুন। অ্যাপ uninstall করলে local data মুছে যেতে পারে।
