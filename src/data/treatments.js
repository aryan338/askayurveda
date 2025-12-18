import { Droplet, Moon, Activity, Heart, Sun, User, Eye, Leaf, Sparkles, Feather, Smile, Circle } from 'lucide-react';

export const treatmentData = [
    {
        id: "panchkarma",
        title: "Panchkarma",
        desc: "The five detoxification procedures that cleanse the body of toxins. Includes Vamana, Virechana, Basti, Nasya, and Raktamokshana.",
        icon: Droplet,
        detailContent: {
            // Detailed content for the Panchkarma page
            overview: "Panchkarma is a purification and detoxification therapy designed to restore balance to the body's Doshas (Vata, Pitta, Kapha). It is a process that deeply cleanses the body and revitalizes the immune system.",
            benefits: [
                "Eliminates toxins and waste products",
                "Restores the digestive fire (Agni)",
                "Enhances immunity and longevity",
                "Improves mental clarity and reduces stress"
            ],
            process: "The therapy involves three stages: Purva Karma (pre-purification), Pradhana Karma (main purification - the 5 procedures), and Paschat Karma (post-purification)."
        }
    },
    {
        id: "shirodhara",
        title: "Shirodhara",
        desc: "A classical and well-established ayurvedic procedure of slowly and steadily dripping medicated oil or other liquids on the forehead.",
        icon: Moon,
        detailContent: {
            overview: "Shirodhara is a deeply relaxing therapy where warm, medicated liquid is poured continuously over the third eye area. It is highly effective for nervous disorders and stress management.",
            benefits: [
                "Relieves anxiety, stress, and insomnia",
                "Improves concentration and memory",
                "Nourishes hair and scalp",
                "Balances Vata dosha in the head and neck region"
            ],
            process: "The patient lies down, and the therapist gently pours a continuous stream of oil (Taila), buttermilk (Takradhara), or decoction (Kashaya) for 30-45 minutes."
        }
    },
    {
        id: "ksharsutra",
        title: "Ksharsutra",
        desc: "A specialized minimal invasive ayurvedic parasurgical procedure for Fistula-in-Ano and Hemorrhoids.",
        icon: Activity,
        detailContent: {
            overview: "Ksharsutra therapy involves using a medicated thread to treat anal fistula, providing a safer and less painful alternative to traditional surgery with minimal recurrence.",
            benefits: [
                "Highly effective treatment for Fistula-in-Ano",
                "Minimal hospital stay and faster recovery",
                "Less chance of sphincter damage",
                "Suitable for recurrent cases"
            ],
            process: "The medicated thread (Ksharsutra) is placed in the tract, which gradually cuts and heals the tract simultaneously over several weeks."
        }
    },
    {
        id: "womens-health",
        title: "Women's Health",
        desc: "Specialized care for disorders including fibroids, hormonal imbalances, and menstrual issues using natural remedies.",
        icon: Heart,
        detailContent: {
            overview: "Ayurveda offers holistic protocols to address common women's health issues, focusing on hormonal balance, reproductive health, and emotional well-being.",
            benefits: [
                "Natural management of uterine fibroids",
                "Regulation of menstrual cycles and PMS",
                "Support for menopausal symptoms",
                "Treatments for PCOS and infertility support"
            ],
            process: "Treatment involves internal medicines (herbal decoctions), specific Panchkarma therapies, and essential diet & lifestyle advice."
        }
    },
    {
        id: "skin-disorders",
        title: "Skin Disorders",
        desc: "Holistic treatment for psoriasis, eczema, and acne through blood purification and internal medicines.",
        icon: Sun,
        detailContent: {
            overview: "Skin problems are often rooted in imbalances of the blood (Rakta) and deep tissues. Ayurvedic treatment aims for deep purification and revitalization.",
            benefits: [
                "Effective treatment for chronic eczema and psoriasis",
                "Natural management of acne and rashes",
                "Blood purification (Rakta Mokshana) therapies",
                "Improves skin luster and texture naturally"
            ],
            process: "A combination of specific herbal formulas, medicated local applications, and detoxification processes like Virechana are used."
        }
    },
    {
        id: "joint-spine-care",
        title: "Joint & Spine Care",
        desc: "Management of arthritis, spondylosis, and back pain through Kati Basti and other external therapies.",
        icon: User,
        detailContent: {
            overview: "Ayurveda excels in treating musculoskeletal disorders by reducing inflammation, lubricating joints, and strengthening bones and tissues.",
            benefits: [
                "Relief from arthritis and joint stiffness",
                "Treatment for chronic back and neck pain (Spondylosis)",
                "External therapies like Kati Basti and Janu Basti",
                "Improves mobility and flexibility"
            ],
            process: "Treatment often involves localized oil pooling (Basti), Pinda Sweda (hot poultice massage), and customized internal Vata-pacifying medicines."
        }
    },
    {
        id: "abhyanga",
        title: "Abhyanga",
        desc: "A full-body massage with warm, medicated herbal oils tailored to your dosha.",
        icon: Sparkles,
        detailContent: {
            overview: "Abhyanga is a traditional Ayurvedic full-body massage using warm medicated oils. The oil is chosen based on your body constitution (Prakruti) and current imbalances (Vikruti).",
            benefits: [
                "Nourishes the body and prevents aging",
                "Improves blood circulation and skin texture",
                "Induces sound sleep and reduces stress",
                "Pacifies Vata dosha and strengthens muscles"
            ],
            process: "Rhythmic massage strokes are applied in the direction of hair growth (Anuloma) for 45-60 minutes, often followed by a steam bath (Swedan)."
        }
    },
    {
        id: "swedan",
        title: "Swedan (Steam)",
        desc: "Herbal steam therapy that induces sweating to release toxins from the body.",
        icon: Sun, // Using Sun to represent Heat
        detailContent: {
            overview: "Swedan is a sudation therapy where the patient is made to sweat using herbal steam. It is usually done after Abhyanga to liquefy toxins and facilitate their removal.",
            benefits: [
                "Relieves stiffness and heaviness in the body",
                "Opens the pores and eliminates toxins",
                "Improves circulation and reduces inflammation",
                "Effective for arthritis and muscular pain"
            ],
            process: "The patient sits in a steam chamber with their head outside (to keep it cool) while herbal steam envelops the body for 15-20 minutes."
        }
    },
    {
        id: "netra-tarpana",
        title: "Netra Tarpana",
        desc: "Rejuvenating eye therapy using medicated ghee retained over the eyes.",
        icon: Eye,
        detailContent: {
            overview: "Netra Tarpana acts as a powerful rejuvenation therapy for the eyes. It involves retaining warm, medicated ghee over the eyes for a specific duration.",
            benefits: [
                "Relieves eye strain, burning, and dryness",
                "Improves vision and strengthens eye muscles",
                "Helps in treating dark circles and refractive errors",
                "Preventative care for computer vision syndrome"
            ],
            process: "A dough ring is constructed around the eyes, and warm medicated ghee is gently poured in and retained while the patient blinks intermittently."
        }
    },
    {
        id: "chakra-vasti",
        title: "Chakra Vasti",
        desc: "Localized oil retention therapy focusing on specific energy centers like the navel or heart.",
        icon: Circle,
        detailContent: {
            overview: "Chakra Vasti involves retaining warm medicated oil over a specific chakra or area of the body, such as the Nabhi (navel - Nabhi Vasti) or Hridaya (heart - Hrood Vasti).",
            benefits: [
                "Balances the solar plexus and digestion (Nabhi Vasti)",
                "Strengthens heart muscles and relieves anxiety (Hrood Vasti)",
                "Releases deep-seated emotions and stress",
                "Improves local circulation and energy flow"
            ],
            process: "A dough dam is built over the target area, and warm oil is poured and kept at a constant temperature for a set period."
        }
    },
    {
        id: "patra-pinda-sweda",
        title: "Patra Pinda Sweda",
        desc: "Hot bolus massage using herbal leaves to treat pain and stiffness.",
        icon: Leaf,
        detailContent: {
            overview: "Also known as Elakizhi, this therapy involves massaging the body with heated boluses (poultices) filled with fried herbal leaves and medicinal ingredients.",
            benefits: [
                "Highly effective for joint pain and arthritis",
                "Relieves sciatica and spondylosis",
                "Reduces inflammation and stiffness",
                "Strengthens neuromuscular systems"
            ],
            process: "Herbal leaves are fried in oil, tied in cloth boluses, heated, and stamped over the body or painful areas."
        }
    },
    {
        id: "udvartana",
        title: "Udvartana",
        desc: "Exfoliating massage using herbal powders, excellent for weight loss and skin health.",
        icon: Feather, // Representing lightness
        detailContent: {
            overview: "Udvartana is a lymphatic massage where dry herbal powder is rubbed over the body in an upward direction (against hair growth).",
            benefits: [
                "Promotes weight loss and reduces cellulite",
                "Improves skin tone and exfoliates dead skin",
                "Reduces excess Kapha dosha",
                "Energizes the body and improves circulation"
            ],
            process: "Dry herbal powder is vigorously massaged into the skin for 45 minutes, creating friction and heat."
        }
    },
    {
        id: "shiroabhyanga",
        title: "Shiroabhyanga",
        desc: "Relaxing head massage with herbal oils to relieve stress and improve hair health.",
        icon: Smile, // Mental well-being
        detailContent: {
            overview: "Shiroabhyanga is a traditional Ayurvedic head massage focusing on the marma points of the head, neck, and shoulders.",
            benefits: [
                "Drastically reduces stress and headaches",
                "Prevents hair fall and greying",
                "Improves quality of sleep",
                "Nourishes the sense organs"
            ],
            process: "Medicated oil is applied to the head and massaged gently into the scalp and neck area."
        }
    },
    {
        id: "padaabhyanga",
        title: "Padaabhyanga",
        desc: "Therapeutic foot massage that relaxes the entire body and improves vision.",
        icon: User, // Reusing User as we don't have Foot icon, or could use Activity
        detailContent: {
            overview: "Ayurveda considers the feet as a map to the whole body. Padaabhyanga activates vital marma points on the soles of the feet.",
            benefits: [
                "Relieves insomnia and anxiety",
                "Improves vision (Netra Prasadana)",
                "Reduces cracking of heels and foot pain",
                "Balances Vata dosha"
            ],
            process: "Warm oil or ghee is massaged onto the feet, paying special attention to the soles and toes."
        }
    },
    {
        id: "shiro-basti",
        title: "Shiro Basti",
        desc: "Retention of medicated oil on the head using a specialized cap.",
        icon: Moon, // Cooling/Mental
        detailContent: {
            overview: "Shiro Basti is considered the most intensive of the oil treatments for the head. Oil is retained on the head for a prolonged period.",
            benefits: [
                "Effective for neurological disorders",
                "Treats facial paralysis and migraines",
                "Improves mental clarity and memory",
                "Nourishes the brain and scalp"
            ],
            process: "A tall leather or resin cap is fixed around the head with dough, and warm medicated oil is poured in and held for 30-45 minutes."
        }
    }
];
