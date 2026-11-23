
const questions = {
    beginner: [
        {q:"Antropologiya qanday fan?",a:["Inson va uning biologik, madaniy hamda ijtimoiy xususiyatlarini o‘rganuvchi fan","Faqat sayyoralarni o‘rganuvchi fan","Faqat o‘simliklarni o‘rganuvchi fan","Faqat kimyoviy moddalarni o‘rganuvchi fan"],c:0,e:"Antropologiya insonni, uning biologiyasi, madaniyati va jamiyatlarini turli jihatdan o‘rganadi."},
        {q:"Antropologiyaning asosiy tadqiqot obyekti nima?",a:["Tog‘ jinslari","Inson","Sayyoralar","Elektr toki"],c:1,e:"Antropologiyaning markaziy tadqiqot obyekti inson va insoniyatdir."},
        {q:"Madaniyat deganda nimani tushunamiz?",a:["Faqat musiqa","Faqat kiyim","Jamiyatning qadriyatlari, urf-odatlari, bilimlari va turmush tarzi","Faqat sport"],c:2,e:"Madaniyat bilim, qadriyat, urf-odat, til, san’at va turmush tarzini qamrab oladi."},
        {q:"Antropologiyada urf-odatlar nima uchun o‘rganiladi?",a:["Jamiyatning turmush tarzi va qadriyatlarini tushunish uchun","Faqat ob-havoni aniqlash uchun","Mashina yasash uchun","Matematik hisoblash uchun"],c:0,e:"Urf-odatlar jamiyatning tarixi, qadriyatlari va ijtimoiy hayotini tushunishga yordam beradi."},
        {q:"Insoniyat tarixida tilning asosiy vazifasi nima?",a:["Faqat qo‘shiq aytish","Muloqot va axborot almashish","Faqat yozuv chizish","Faqat hisoblash"],c:1,e:"Til insonlar o‘rtasidagi muloqot, fikr va bilim almashishning muhim vositasidir."},
        {q:"Antropologiya qaysi fanlar bilan hamkorlik qiladi?",a:["Faqat astronomiya","Faqat matematika","Biologiya, tarix, sotsiologiya va boshqa fanlar","Faqat sport"],c:2,e:"Antropologiya ko‘plab fanlar bilan hamkorlikda insonni kengroq o‘rganadi."},
        {q:"Ijtimoiy guruh nima?",a:["Umumiy munosabat yoki maqsadlar bilan bog‘langan insonlar to‘plami","Faqat bir bino","Faqat hayvonlar","Faqat kitoblar"],c:0,e:"Ijtimoiy guruh — o‘zaro munosabatga kirishadigan va muayyan aloqalar bilan bog‘langan insonlar guruhidir."},
        {q:"Antropologiyada turmush tarzi nimani anglatadi?",a:["Faqat ish joyi","Insonlarning kundalik faoliyati, odatlari va yashash usuli","Faqat kiyim turi","Faqat ovqat nomlari"],c:1,e:"Turmush tarzi insonlarning kundalik hayoti, mehnati, ovqatlanishi, munosabatlari va odatlarini o‘z ichiga oladi."},
        {q:"Antropologik tadqiqotlarda suhbat usuli nima uchun ishlatiladi?",a:["Suhbatdoshlarning tajribasi va qarashlarini bilish uchun","Faqat rasm chizish uchun","Haroratni o‘lchash uchun","Buyum yasash uchun"],c:0,e:"Suhbat usuli odamlarning tajribasi, fikrlari va madaniy qarashlarini o‘rganish imkonini beradi."},
        {q:"Antropologiya insoniyatni qanday o‘rganishga intiladi?",a:["Faqat bitta jihatdan","Faqat tashqi ko‘rinish orqali","Turli biologik, ijtimoiy va madaniy jihatlarni birgalikda","Faqat iqtisodiy tomondan"],c:2,e:"Antropologiya insonni turli jihatlardan o‘rganishga intiluvchi keng qamrovli fan."}
    ],

    intermediate: [
        {q:"Madaniy antropologiya asosan nimani o‘rganadi?",a:["Inson madaniyatlari, qadriyatlari va turmush tarzini","Faqat sayyoralar","Faqat kimyoviy reaksiyalar","Faqat matematik formulalar"],c:0,e:"Madaniy antropologiya inson jamiyatlarining madaniy hayoti, qadriyatlari va amaliyotlarini o‘rganadi."},
        {q:"Etnografiya nima?",a:["Tog‘larni o‘lchash","Muayyan jamiyat yoki guruh hayotini tavsiflash va o‘rganish","Yulduzlarni kuzatish","Kimyoviy tajriba"],c:1,e:"Etnografiya jamiyatlarning kundalik hayoti va madaniy xususiyatlarini batafsil o‘rganish hamda tavsiflash usulidir."},
        {q:"Fieldwork (dala tadqiqoti) nima?",a:["Faqat kutubxonada o‘tirish","Kompyuter o‘yini","Tadqiqot olib borilayotgan muhitda bevosita ma’lumot yig‘ish","Faqat laboratoriya jihozlarini tekshirish"],c:2,e:"Dala tadqiqoti antropologning odamlar va ularning tabiiy muhitida bevosita kuzatuv hamda ma’lumot yig‘ishini anglatadi."},
        {q:"Ishtirokchi kuzatuv usuli qanday amalga oshiriladi?",a:["Tadqiqotchi muhitda qatnashib, kuzatish orqali ma’lumot yig‘adi","Faqat internetdan ma’lumot oladi","Faqat test tuzadi","Faqat statistik jadval chizadi"],c:0,e:"Ishtirokchi kuzatuvda tadqiqotchi o‘rganilayotgan muhitdagi faoliyatlarda qatnashishi va kuzatishi mumkin."},
        {q:"Arxeologik antropologiya qaysi manbalar bilan ishlaydi?",a:["Faqat zamonaviy gazeta","Moddiy qoldiqlar va arxeologik dalillar","Faqat ob-havo xaritalari","Faqat elektron qurilmalar"],c:1,e:"Arxeologik antropologiya moddiy qoldiqlar orqali insoniyatning o‘tmishi va jamiyatlarini o‘rganadi."},
        {q:"Biologik antropologiya nimani o‘rganadi?",a:["Faqat til grammatikasini","Faqat iqtisodiy tizimlarni","Inson biologiyasi, evolyutsiyasi va biologik xilma-xilligini","Faqat me’morchilikni"],c:2,e:"Biologik antropologiya inson evolyutsiyasi, biologik xususiyatlari va xilma-xilligini o‘rganadi."},
        {q:"Madaniy relativizm tushunchasi nimani anglatadi?",a:["Madaniyatni uning o‘z konteksti va qadriyatlari asosida tushunishga intilish","Barcha madaniyatlarni bir xil deb hisoblash","Madaniyatni o‘rganmaslik","Faqat o‘z madaniyatini tan olish"],c:0,e:"Madaniy relativizm boshqa madaniyatlarni ularning o‘z sharoitlari va qadriyatlari asosida tushunishga intiladi."},
        {q:"Etnotsentrizm nima?",a:["Barcha madaniyatlarni ilmiy o‘rganish","O‘z madaniyatini mezon qilib, boshqa madaniyatlarni shu nuqtai nazardan baholash","Madaniyatlararo muloqot","Til o‘rganish"],c:1,e:"Etnotsentrizm o‘z madaniyatini markaziy yoki ustun mezon deb qabul qilib, boshqalarni unga qarab baholashdir."},
        {q:"Antropologiyada qarindoshlik tizimi nima uchun o‘rganiladi?",a:["Faqat familiyalarni yozish uchun","Faqat uy qurish uchun","Oilaviy va ijtimoiy munosabatlar hamda qarindoshlik tuzilishini tushunish uchun","Faqat til tovushlarini o‘rganish uchun"],c:2,e:"Qarindoshlik tizimlari oilaviy aloqalar, majburiyatlar va jamiyatdagi munosabatlarni tushunishga yordam beradi."},
        {q:"Moddiy madaniyatga qaysi biri misol bo‘ladi?",a:["Asboblar, uy-joy, kiyim va buyumlar","Faqat fikrlar","Faqat maqollar","Faqat his-tuyg‘ular"],c:0,e:"Moddiy madaniyat insonlar yaratgan va foydalangan jismoniy buyumlar hamda inshootlarni qamrab oladi."}
    ],

    advanced: [
        {q:"Antropologiyada holistik yondashuv nimani anglatadi?",a:["Insonni faqat bitta xususiyati bilan o‘rganish","Inson va jamiyatni o‘zaro bog‘liq ko‘plab jihatlar orqali o‘rganish","Faqat biologik ma’lumotlarni yig‘ish","Faqat tarixiy sanalarni yodlash"],c:1,e:"Holistik yondashuv inson hayotining biologik, madaniy, ijtimoiy va tarixiy jihatlarini o‘zaro bog‘liq holda o‘rganadi."},
        {q:"Emik yondashuv nimaga e’tibor beradi?",a:["Tadqiqotchining tashqi nazariyasigagina","Faqat statistikaga","Madaniyat vakillarining o‘z tushunchalari va qarashlariga","Faqat biologik o‘lchovlarga"],c:2,e:"Emik yondashuv madaniyatni uning ichidagi odamlar qanday tushunishi va izohlashiga e’tibor beradi."},
        {q:"Etik (etic) yondashuv nimani anglatadi?",a:["Madaniyatni tashqi tahliliy tushunchalar va taqqoslash orqali o‘rganish","Faqat mahalliy tilda suhbatlashish","Tadqiqotni to‘xtatish","Faqat tarixiy hikoyalarni yozish"],c:0,e:"Etik yondashuv hodisalarni tashqi ilmiy mezonlar va tahliliy tushunchalar yordamida o‘rganadi."},
        {q:"Liminality tushunchasi antropologiyada nimani ifodalaydi?",a:["Oddiy kundalik ish","Ritual yoki o‘zgarish jarayonidagi oraliq bosqich","Faqat iqtisodiy almashinuv","Geografik chegarani o‘lchash"],c:1,e:"Liminality marosim yoki o‘zgarish jarayonida eski va yangi maqomlar orasidagi oraliq holatni ifodalaydi."},
        {q:"Ritual antropologiyada qanday o‘rganiladi?",a:["Faqat sport faoliyati sifatida","Faqat iqtisodiy hisob","Ramziy ma’nolar, ijtimoiy vazifalar va madaniy kontekst orqali","Faqat yozuv turi sifatida"],c:2,e:"Ritual antropologiyada ramzlar, jamoaviy munosabatlar, e’tiqod va ijtimoiy vazifalar nuqtai nazaridan tahlil qilinadi."},
        {q:"Madaniy diffuziya nima?",a:["Madaniy g‘oyalar, texnologiyalar yoki amaliyotlarning guruhlar orasida tarqalishi","Madaniyatning butunlay yo‘qolishi","Faqat biologik o‘zgarish","Faqat geografik ko‘chish"],c:0,e:"Madaniy diffuziya — madaniy xususiyatlarning odamlar va jamiyatlar o‘rtasidagi aloqalar orqali tarqalishidir."},
        {q:"Antropologik tadqiqotlarda triangulyatsiya nima?",a:["Uchta shaharni o‘rganish","Turli manba yoki usullar orqali ma’lumotlarni tekshirish va taqqoslash","Faqat uchta savol berish","Uchta kitob yozish"],c:1,e:"Triangulyatsiya bir necha usul, manba yoki nazariyadan foydalanib xulosalarning ishonchliligini oshirishga yordam beradi."},
        {q:"Refleksivlik antropologik tadqiqotda nimani anglatadi?",a:["Tadqiqotchini o‘z ta’siri, nuqtai nazari va taxminlarini tahlil qilishga undash","Faqat natijani qayta yozish","Barcha suhbatlarni bekor qilish","Faqat raqamlar bilan ishlash"],c:0,e:"Refleksivlik tadqiqotchining o‘z qarashlari va ishtiroki ma’lumot hamda xulosalarga qanday ta’sir qilishini anglashidir."},
        {q:"Antropologik tadqiqotda informant yoki ishtirokchi bilan ishlashda nima muhim?",a:["Uning fikrini o‘zgartirishga majburlash","Rozilik, hurmat, maxfiylik va etik me’yorlarga rioya qilish","Ma’lumotlarni ruxsatsiz tarqatish","Faqat bitta javobni qabul qilish"],c:1,e:"Tadqiqot etikasi ishtirokchilarning roziligi, xavfsizligi, shaxsiy hayoti va hurmatini himoya qiladi."},
        {q:"Ijtimoiy antropologiya asosan nimani o‘rganadi?",a:["Faqat qadimgi toshlar","Faqat hayvonlar","Jamiyatdagi munosabatlar, institutlar, guruhlar va ijtimoiy hayotni","Faqat iqlim"],c:2,e:"Ijtimoiy antropologiya insonlar o‘rtasidagi munosabatlar, institutlar, ijtimoiy tuzilish va hayot tarzlarini o‘rganadi."}
    ],

    expert: [
        {q:"Antropologiyada strukturaviy funksionalizm nimaga urg‘u beradi?",a:["Jamiyat tarkibiy qismlarining o‘zaro aloqasi va ijtimoiy tizimdagi vazifalariga","Faqat individual his-tuyg‘ularga","Faqat texnologiyaga","Faqat geografik joylashuvga"],c:0,e:"Strukturaviy funksionalizm jamiyatning institutlari va tarkibiy qismlari qanday bog‘langan hamda tizimni saqlashda qanday vazifalar bajarishini tahlil qiladi."},
        {q:"Strukturaviy antropologiya bilan ko‘proq bog‘liq olim kim?",a:["Charles Darwin","Claude Lévi-Strauss","Isaac Newton","Louis Pasteur"],c:1,e:"Claude Lévi-Strauss strukturaviy antropologiyaning muhim namoyandalaridan biri bo‘lib, madaniy tizimlar va ularning tuzilishini tahlil qilgan."},
        {q:"Evolyutsion antropologiyada adaptatsiya tushunchasi nimani anglatadi?",a:["Muhit bilan bog‘liq sharoitlarda moslashish jarayoni yoki xususiyatlari","Faqat madaniy marosim","Faqat til o‘zgarishi","Tarixiy hujjatlarni saqlash"],c:0,e:"Adaptatsiya organizm yoki populyatsiyaning muhit bilan munosabatlarida moslashishga yordam beradigan xususiyat yoki jarayonlarni anglatadi."},
        {q:"Arxeogenetika qanday ma’lumotlarni o‘rganishga yordam beradi?",a:["Faqat qadimgi binolar balandligini","Qadimgi biologik materiallardan olingan genetik ma’lumotlar orqali populyatsiyalar tarixi va aloqalarini","Faqat sopol rangini","Faqat iqlim xaritalarini"],c:1,e:"Arxeogenetika qadimgi biologik qoldiqlardagi DNK orqali populyatsiyalar tarixi, qarindoshlik va migratsiya jarayonlarini o‘rganadi."},
        {q:"Biologik antropologiyada populyatsiya genetikasining ahamiyati nima?",a:["Faqat tillarni tasniflash","Faqat uylarni o‘rganish","Populyatsiyalardagi genetik xilma-xillik va o‘zgarishlarni o‘rganish","Faqat qadimgi tangalarni sanash"],c:2,e:"Populyatsiya genetikasi guruhlar ichidagi va guruhlar o‘rtasidagi genetik xilma-xillik hamda uning o‘zgarishini o‘rganadi."},
        {q:"Antropologiyada postkolonial yondashuv qanday masalalarni tahlil qiladi?",a:["Mustamlakachilik merosi, hokimiyat, bilim ishlab chiqarish va vakillik masalalarini","Faqat ob-havoni","Faqat biologik o‘lchovlarni","Faqat arifmetik masalalarni"],c:0,e:"Postkolonial yondashuv mustamlakachilik tarixi va uning jamiyat, madaniyat, hokimiyat hamda bilimga ta’sirini tanqidiy tahlil qiladi."},
        {q:"Urban antropologiya nimani o‘rganadi?",a:["Faqat qishloq xo‘jaligi","Shahar hayoti, urbanizatsiya, ijtimoiy munosabatlar va shahar madaniyatini","Faqat tog‘ jinslari","Faqat qadimgi hayvonlar"],c:1,e:"Urban antropologiya shaharlarning ijtimoiy va madaniy hayotini, urbanizatsiya hamda shahar muhitidagi munosabatlarni o‘rganadi."},
        {q:"Globalizatsiya antropologik tadqiqotlarda qanday tushuniladi?",a:["Barcha jamiyatlarning yo‘qolishi","Faqat iqtisodiy o‘sish","Dunyo miqyosida odamlar, g‘oyalar, tovarlar va axborot aloqalarining kuchayishi","Faqat davlat chegaralarini o‘zgartirish"],c:2,e:"Globalizatsiya jamiyatlar va hududlar o‘rtasidagi iqtisodiy, madaniy, texnologik va ijtimoiy aloqalarning kuchayishini anglatadi."},
        {q:"Tibbiy antropologiya nimani o‘rganadi?",a:["Salomatlik, kasallik va tibbiyotning madaniy hamda ijtimoiy jihatlarini","Faqat hayvonlar anatomiyasini","Faqat kimyoviy elementlarni","Faqat tarixiy xaritalarni"],c:0,e:"Tibbiy antropologiya salomatlik va kasallikni madaniyat, jamiyat, iqtisodiyot va inson tajribasi bilan bog‘liq holda o‘rganadi."},
        {q:"Antropologik tadqiqotlarda etik rozilik (informed consent) nimani anglatadi?",a:["Ishtirokchini majburlash","Ishtirokchiga tadqiqot haqida tushunarli ma’lumot berib, ixtiyoriy roziligini olish","Ma’lumotni yashirincha yig‘ish","Natijalarni oldindan belgilash"],c:1,e:"Informed consent ishtirokchi tadqiqot maqsadi, jarayoni va ehtimoliy oqibatlarini tushunib, ixtiyoriy qatnashishga rozilik berishini anglatadi."},
        {q:"Antropologik bilimning muhim amaliy ahamiyati nimada?",a:["Madaniy farqlarni yo‘q qilish","Barcha jamiyatlarni bir xil qilish","Inson va jamiyatlarni chuqurroq tushunish, madaniyatlararo muloqot va hamkorlikni yaxshilash","Faqat qadimiy buyumlarni yig‘ish"],c:2,e:"Antropologiya insonlar va jamiyatlarni tushunish, madaniyatlararo muloqot, hurmat va ijtimoiy muammolarni tahlil qilishga yordam beradi."}
    ]
};

const levelNames = {
    beginner: "BOSHLANG‘ICH",
    intermediate: "O‘RTA",
    advanced: "YUQORI",
    expert: "EKSPERT"
};

const screens = document.querySelectorAll(".screen");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

let currentLevel = "";
let testQuestions = [];
let currentOptions = [];
let questionIndex = 0;
let score = 0;
let time = 20;
let timerInterval = null;
let locked = false;
let results = [];

function showScreen(id) {
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

document.querySelectorAll(".level").forEach(btn => {
    btn.addEventListener("click", () => startTest(btn.dataset.level));
});

function startTest(level) {
    currentLevel = level;
    testQuestions = shuffle(questions[level]).slice(0, 10);
    questionIndex = 0;
    score = 0;
    results = [];

    document.getElementById("levelName").textContent = levelNames[level];

    showScreen("quiz");
    renderQuestion();
}

function renderQuestion() {
    clearInterval(timerInterval);
    locked = false;
    time = 20;

    const q = testQuestions[questionIndex];

    document.getElementById("counter").textContent =
        `${questionIndex + 1} / 10`;

    document.getElementById("questionNo").textContent =
        `SAVOL ${String(questionIndex + 1).padStart(2, "0")}`;

    document.getElementById("questionText").textContent = q.q;
    document.getElementById("timer").textContent = time;

    document.getElementById("progressBar").style.width =
        `${(questionIndex + 1) * 10}%`;

    document.getElementById("feedback").textContent = "";
    nextBtn.disabled = true;
    nextBtn.textContent =
        questionIndex === 9 ? "NATIJANI KO‘RISH →" : "KEYINGI SAVOL →";

    optionsEl.innerHTML = "";

    currentOptions = shuffle(
        q.a.map((text, originalIndex) => ({
            text,
            originalIndex
        }))
    );

    currentOptions.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = `${String.fromCharCode(65 + index)}. ${option.text}`;

        btn.addEventListener("click", () => answer(option.originalIndex, btn));

        optionsEl.appendChild(btn);
    });

    timerInterval = setInterval(() => {
        time--;
        document.getElementById("timer").textContent = time;

        if (time <= 0) {
            clearInterval(timerInterval);
            answer(null, null);
        }
    }, 1000);
}

function answer(selectedIndex, clickedButton) {
    if (locked) return;

    locked = true;
    clearInterval(timerInterval);

    const q = testQuestions[questionIndex];
    const correct = selectedIndex === q.c;

    if (correct) score++;

    results.push({
        question: q.q,
        selected: selectedIndex === null ? "Vaqt tugadi" : q.a[selectedIndex],
        correctAnswer: q.a[q.c],
        isCorrect: correct,
        explanation: q.e
    });

    const buttons = [...optionsEl.querySelectorAll(".option")];

    buttons.forEach((btn, index) => {
        btn.disabled = true;

        if (currentOptions[index].originalIndex === q.c) {
            btn.classList.add("correct");
        }
    });

    if (clickedButton && !correct) {
        clickedButton.classList.add("wrong");
    }

    document.getElementById("feedback").textContent = correct
        ? "✓ To‘g‘ri! " + q.e
        : "✗ Noto‘g‘ri. " + q.e;

    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    if (!locked) return;

    if (questionIndex < 9) {
        questionIndex++;
        renderQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    clearInterval(timerInterval);
    showScreen("result");

    const percent = score * 10;

    document.getElementById("score").textContent = score;
    document.getElementById("correct").textContent = score;
    document.getElementById("wrong").textContent = 10 - score;
    document.getElementById("percent").textContent = percent + "%";

    let title, message;

    if (score === 10) {
        title = "MUKAMMAL!";
        message = "Barcha savollarga to‘g‘ri javob berdingiz!";
    } else if (score >= 8) {
        title = "AJOYIB NATIJA!";
        message = "Antropologiya bo‘yicha bilimlaringiz juda yaxshi!";
    } else if (score >= 6) {
        title = "YAXSHI NATIJA!";
        message = "Yaxshi! Bilimlaringizni yanada mustahkamlang.";
    } else if (score >= 4) {
        title = "HARAKATINGIZ YAXSHI!";
        message = "O‘rganishda davom eting va yana urinib ko‘ring.";
    } else {
        title = "IZLANISHDA DAVOM ETING!";
        message = "Har bir test — yangi bilim va tajriba!";
    }

    document.getElementById("resultTitle").textContent = title;
    document.getElementById("resultMessage").textContent = message;

    const reviewEl = document.getElementById("review");
    reviewEl.innerHTML = "";

    results.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "review-item";

        const h = document.createElement("h4");
        h.textContent = `${index + 1}. ${item.question}`;

        const status = document.createElement("p");
        status.className = item.isCorrect ? "correct-text" : "wrong-text";
        status.textContent = item.isCorrect
            ? "✓ TO‘G‘RI JAVOB"
            : "✗ NOTO‘G‘RI JAVOB";

        const selected = document.createElement("p");
        selected.textContent = "Sizning javobingiz: " + item.selected;

        const correct = document.createElement("p");
        correct.textContent = "To‘g‘ri javob: " + item.correctAnswer;

        const explanation = document.createElement("p");
        explanation.className = "explanation";
        explanation.textContent = "Izoh: " + item.explanation;

        card.append(h, status, selected, correct, explanation);
        reviewEl.appendChild(card);
    });
}

document.getElementById("retryBtn").addEventListener("click", () => {
    startTest(currentLevel);
});

document.getElementById("homeBtn").addEventListener("click", () => {
    clearInterval(timerInterval);
    showScreen("home");
});

document.getElementById("exitBtn").addEventListener("click", () => {
    clearInterval(timerInterval);
    showScreen("home");
});
