import { Droplet, Moon, Activity, Heart, Sun, User } from 'lucide-react';

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
    }
];
