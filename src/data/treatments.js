import {
    Droplet, Moon, Activity, Heart, Sun, User, Eye, Leaf,
    Sparkles, Feather, Smile, Circle, Shield, Brain, Wind, Flame,
    Baby, Flower2
} from 'lucide-react';

export const treatmentData = [
    {
        id: "panchkarma",
        title: "Panchkarma",
        desc: "The five detoxification procedures that cleanse the body of toxins. Includes Vamana, Virechana, Basti, Nasya, and Raktamokshana.",
        icon: Droplet,
        detailContent: {
            overview: "Panchakarma (the 'five therapies') is Ayurveda's principal purification and detoxification treatment. These therapeutic means of eliminating toxins (Ama) from the body are Vamana, Virechana, Nasya, Basti, and Raktamokshana. This series helps remove deep-rooted toxins caused by stress and illness, balancing the Doshas that govern all biological functions.",
            benefits: [
                "Eliminates deep-rooted toxins and waste products",
                "Restores the digestive fire (Agni)",
                "Enhances immunity and longevity",
                "Improves mental clarity and reduces stress",
                "Balances the three Doshas (Vata, Pitta, Kapha)"
            ],
            process: "The therapy involves five main procedures: 1. Vamana (Emesis therapy for Kapha), 2. Virechana (Purgation for Pitta), 3. Basti (Enema for Vata), 4. Nasya (Nasal administration), and 5. Raktamokshana (Blood cleansing). Each is monitored carefully through special diets and pre-purification (Purva Karma) stages."
        }
    },
    {
        id: "shirodhara",
        title: "Shirodhara",
        desc: "A classical and well-established ayurvedic procedure of slowly and steadily dripping medicated oil or other liquids on the forehead.",
        icon: Moon,
        detailContent: {
            overview: "Shirodhara is a deeply relaxing therapy where warm, medicated liquid (oil, herbal decoction, or buttermilk) is continuously poured over the forehead for 20-30 minutes. It induces a completely relaxing and rejuvenating mental and physical state, deeply revitalizing the central nervous system.",
            benefits: [
                "Relieves anxiety, depression, and hypertension",
                "Effective for insomnia and stress-related headaches",
                "Strengthens sensory organs",
                "Helps in treating facial paralysis and neurological disorders",
                "Prevents premature graying of hair and hair loss"
            ],
            process: "The patient lies down, and a specialized apparatus pours a steady stream of warm medicated liquid over the 'third eye' area of the forehead for 30-45 minutes."
        }
    },
    {
        id: "ksharsutra",
        title: "Ksharsutra (Piles & Fistula)",
        desc: "World-renowned Ayurved solution for Piles, Fistula-in-ano, and Fissures with minimal recurrence.",
        icon: Activity,
        detailContent: {
            overview: "At Mundada Ayurved Hospital, we are specialists in the Ksharsutra procedure. This is the gold standard for treating Piles, Fistula, and Fissures. By using a specialized medicated thread, we ensure the root cause is addressed with minimal invasiveness and virtually no chance of recurrence.",
            benefits: [
                "Permanent cure for complex Fistula and chronic Piles",
                "Advanced Ayurvedic parasurgical technique",
                "Fastest recovery with no major surgical cuts",
                "Safe even for diabetic and high-risk patients"
            ],
            process: "The therapy uses a medicated thread changed periodically. This thread naturally cuts and heals the fistula tract, ensuring healthy tissue grows from within."
        }
    },
    {
        id: "womens-health",
        title: "Women's Health & Fertility",
        desc: "Comprehensive care for fertility, maternity care, and hormonal health through specialized Ayurved protocols.",
        icon: Heart,
        detailContent: {
            overview: "Ayurveda describes woman as the 'mother of religion and culture.' We host specialized management for various epochs of a woman's life—from adolescence (Rajomathi) to menopause (Rajoniwruti). Our focus is on restoring the normal physiological process of menstruation and hormonal balance.",
            benefits: [
                "Management of Amenorrhoea (scanty/absent menses)",
                "Relief from Dysmenorrhoea (painful menstruation)",
                "Holistic support for Menopausal Syndrome (Hot flashes, mood swings)",
                "Natural Phyto-estrogen based therapies",
                "Panchakarma rejuvenation for reproductive health"
            ],
            process: "Treatment includes internal herbal preparations (like Ashoka, Shatavari), specialized Basti (enema) therapies, and lifestyle modifications to balance the Apan Vayu."
        }
    },
    {
        id: "fibroids",
        title: "Uterine Fibroids",
        desc: "Specialized Ayurvedic management for uterine fibroids using constitutional remedies and detoxification.",
        icon: Shield,
        detailContent: {
            overview: "Ayurveda manages uterine fibroids by addressing the underlying hormonal imbalance and Kapha-Vata stagnation. Toxin accumulation in the reproductive tissue is identified as the root cause, which irritates tissues into excess growth.",
            benefits: [
                "Natural reduction in fibroid size through detoxification",
                "Relief from heavy menstrual bleeding (Raktapradar)",
                "Effective Intra-Uterine (Uttare Basti) treatments",
                "Avoidance of invasive surgeries through Rejuvenation therapy"
            ],
            process: "A combination of localized Basti, specialized herbalized oil massage (Snehan), and heat treatments (Swedan) to liquefy and eliminate embedded impurities."
        }
    },
    {
        id: "skin-disorders",
        title: "Skin Disorders",
        desc: "Holistic treatment for psoriasis, eczema, and acne through blood purification and internal medicines.",
        icon: Sun,
        detailContent: {
            overview: "Skin problems are often rooted in blood (Rakta) impurities and deep tissue imbalances. Ayurvedic treatment aims for deep purification and revitalization to restore skin health from within.",
            benefits: [
                "Effective management of Psoriasis and Eczema",
                "Natural treatment for Acne and Vitiligo",
                "Blood purification through Raktamokshana and Virechana",
                "Improves skin luster and texture naturally"
            ],
            process: "Treatment includes internal blood-purifying herbs, medicated local applications, and detoxification therapies to eliminate the root cause."
        }
    },
    {
        id: "joint-spine-care",
        title: "Joint & Spine Care",
        desc: "Management of arthritis, spondylosis, and back pain through Kati Basti and other external therapies.",
        icon: User,
        detailContent: {
            overview: "We specialize in treating musculoskeletal disorders by reducing inflammation, lubricating joints, and strengthening the spine. Ayurveda excels in chronic pain management without invasive procedures.",
            benefits: [
                "Relief from Spondylosis and Sciatica",
                "Treatment for Arthritis and Joint Stiffness",
                "Reduction in chronic back and neck pain",
                "Improved mobility and flexibility"
            ],
            process: "Therapies like Kati Basti (oil retention on the back), Patra Pinda Sweda (hot bolus massage), and Vata-pacifying internal medicines are used."
        }
    },
    {
        id: "abhyanga",
        title: "Abhyanga",
        desc: "A full-body massage with warm, medicated herbal oils tailored to your dosha.",
        icon: Sparkles,
        detailContent: {
            overview: "Abhyanga is the 'mother of all massages,' using warm medicated oils customized to your body type. It naturally harmonizes Mind, Body, and Spirit by nourishing tissues and revitalizing the system.",
            benefits: [
                "Increases tissue strength and blood circulation",
                "Rejuvenates and anti-ages the whole body",
                "Removes cellulite and beautifies skin",
                "Induces better sleep and reduces stress"
            ],
            process: "A full-body rhythmic massage is performed for 45-60 minutes, usually followed by a steam herbal bath (Swedan)."
        }
    },
    {
        id: "swedan",
        title: "Swedan (Steam)",
        desc: "Herbal steam therapy that induces sweating to release toxins from the body.",
        icon: Sun,
        detailContent: {
            overview: "Swedan is a sudation therapy where the patient is made to sweat using herbal steam. It flushes the system through the skin and is most effective after Abhyanga.",
            benefits: [
                "Reduces pain and stiffness in the body",
                "Eliminates toxins and promotes lightness",
                "Beautifies the skin and reduces cellulite",
                "Opens pores to facilitate detoxification"
            ],
            process: "The patient sits in a steam chamber while medicated herbal steam envelops the body, usually for 15-20 minutes."
        }
    },
    {
        id: "netra-tarpana",
        title: "Netra Tarpana",
        desc: "Rejuvenating eye therapy using medicated ghee retained over the eyes.",
        icon: Eye,
        detailContent: {
            overview: "Netra Tarpana is a specialized treatment where the eyes are bathed in pure medicated ghee. It is essential for modern lifestyle-related eye strain.",
            benefits: [
                "Relieves eye strain from computer/TV usage",
                "Corrects refractive errors and improves vision",
                "Helps prevent early Cataract formation",
                "Treats Dry Eye Syndrome and Glaucoma"
            ],
            process: "Medicated ghee is retained over the eyes for 10-15 minutes while the patient blinks, within a dough boundary built around the eye sockets."
        }
    },
    {
        id: "maternity-fertility",
        title: "Fertility & Maternity Care",
        desc: "Specialized Ayurved protocols for Male/Female infertility, PCOS, and Garbhasanskar (Maternity care).",
        icon: Baby,
        detailContent: {
            overview: "At Mundada Ayurved Hospital, we offer a holistic approach to reproductive health, inspired by the deep wisdom of askayurveda.in. We address the root causes of fertility issues by balancing the Doshas and nourishing the Shukra Dhatu (reproductive tissues). Our hospital provides dedicated care for both partners to ensure a healthy path to parenthood.",
            benefits: [
                "Female Infertility: Management of PCOS, hormonal imbalances, and ovulation disorders",
                "Male Infertility: Natural protocols for low sperm count and motility issues",
                "Maternity Care: Garbhasanskar for full-term healthy pregnancy and fetal development",
                "Support for IVF/IUI: Pre-conception planning to enhance success rates of ART",
                "Management of recurrent miscarriages through deep tissue detoxification"
            ],
            process: "Our treatment involves specialized Basti (enema) therapies, internal Ayurved medicines like Ashwagandha and Shatavari, and personalized diet charts. We also offer Sutika Paricharya (post-partum care) to help mothers recover their strength and vitality."
        }
    }
];
