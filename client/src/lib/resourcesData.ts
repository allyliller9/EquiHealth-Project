// Authentic resources for women's health information and advocacy

export const researchReports = [
  {
    id: 1,
    title: "WHO Report: Global Women's Health Trends 2023",
    url: "https://www.who.int/health-topics/womens-health",
    category: "research"
  },
  {
    id: 2,
    title: "NIH Women's Health Research Roadmap",
    url: "https://orwh.od.nih.gov/research/funded-research-and-programs",
    category: "research"
  },
  {
    id: 3,
    title: "Lancet Women and Cardiovascular Disease Study",
    url: "https://www.thelancet.com/clinical/diseases/cardiovascular-diseases",
    category: "research"
  },
  {
    id: 4,
    title: "Gender Bias in Medical Diagnosis: Meta-analysis",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5543375/",
    category: "research"
  }
];

export const educationalMaterials = [
  {
    id: 1,
    title: "Understanding Women's Health Screenings by Age",
    url: "https://www.womenshealth.gov/screenings-and-vaccines",
    category: "educational"
  },
  {
    id: 2,
    title: "Guide to Advocating for Yourself in Medical Settings",
    url: "https://www.nih.gov/health-information/your-healthiest-self-wellness-toolkits",
    category: "educational"
  },
  {
    id: 3,
    title: "Reproductive Health Rights Overview",
    url: "https://www.plannedparenthood.org/learn",
    category: "educational"
  },
  {
    id: 4,
    title: "Menopause: Symptoms, Treatment Options & Research Gaps",
    url: "https://www.menopause.org/for-women",
    category: "educational"
  }
];

export const supportOrganizations = [
  {
    id: 1,
    title: "Society for Women's Health Research",
    url: "https://swhr.org/",
    category: "organization"
  },
  {
    id: 2,
    title: "Black Women's Health Imperative",
    url: "https://bwhi.org/",
    category: "organization"
  },
  {
    id: 3,
    title: "International Association for the Study of Pain",
    url: "https://www.iasp-pain.org/",
    category: "organization"
  },
  {
    id: 4,
    title: "Endometriosis Foundation of America",
    url: "https://www.endofound.org/",
    category: "organization"
  }
];

export const policyBriefs = [
  {
    id: 1,
    title: "Women's Health Equity: Policy Recommendations",
    url: "https://www.kff.org/womens-health-policy/",
    category: "policy"
  },
  {
    id: 2,
    title: "Addressing the Maternal Health Crisis",
    url: "https://www.acog.org/advocacy/policy-priorities/maternal-mortality",
    category: "policy"
  },
  {
    id: 3,
    title: "Gender-Based Research Mandates",
    url: "https://orwh.od.nih.gov/sex-gender/nih-policy-sex-biological-variable",
    category: "policy"
  },
  {
    id: 4,
    title: "Healthcare Access for Underserved Women",
    url: "https://www.hrsa.gov/womens-health",
    category: "policy"
  }
];

// Combined resources for easy filtering
export const allResources = [
  ...researchReports,
  ...educationalMaterials,
  ...supportOrganizations,
  ...policyBriefs
];
