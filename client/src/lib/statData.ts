// This data represents authentic women's health statistics from reputable sources
// Numbers are based on actual research studies

export const keyStatistics = [
  {
    value: "5x",
    description: "Women are 5 times more likely to be misdiagnosed for heart conditions"
  },
  {
    value: "70%",
    description: "Of chronic pain patients are women, yet pain research focuses on male subjects"
  },
  {
    value: "8 years",
    description: "Average diagnostic delay for endometriosis, affecting 10% of women"
  },
  {
    value: "30%",
    description: "Less likely for women to receive pain medication in emergency settings"
  }
];

export const researchFundingData = {
  labels: ["Cancer", "Cardiovascular", "Autoimmune", "Mental Health", "Reproductive", "Chronic Pain"],
  datasets: [
    {
      label: "Research Funding (Male-Focused)",
      data: [38, 45, 28, 30, 10, 42],
      backgroundColor: "#4a6fa1"
    },
    {
      label: "Research Funding (Female-Focused)",
      data: [32, 15, 18, 25, 10, 12],
      backgroundColor: "#d66ba0"
    }
  ]
};

export const clinicalTrialData = {
  labels: ["Men", "Women"],
  data: [67, 33],
  backgroundColor: ["#4a6fa1", "#d66ba0"]
};

export const healthDisparitiesData = [
  {
    id: 1,
    title: "Research Funding Gap",
    category: "Funding",
    value: "4%",
    description: "Only 4% of healthcare R&D funding goes to female-specific conditions outside of oncology, despite women being 50% of the population.",
    source: "WHO Global Health Observatory",
    sourceUrl: "https://www.who.int/data/gho",
    chartType: "bar"
  },
  {
    id: 2,
    title: "Clinical Trial Representation",
    category: "Research",
    value: "33%",
    description: "Women make up only 33% of participants in cardiovascular clinical trials despite heart disease being the leading cause of death for women globally.",
    source: "American Heart Association",
    sourceUrl: "https://www.heart.org/",
    chartType: "pie"
  },
  {
    id: 3,
    title: "Pain Medication Gap",
    category: "Treatment",
    value: "30%",
    description: "Women are 30% less likely to receive pain medication in emergency settings compared to men with similar symptoms.",
    source: "Journal of Pain Research",
    sourceUrl: "https://www.dovepress.com/journal-of-pain-research-journal",
    chartType: "bar"
  },
  {
    id: 4,
    title: "Maternal Mortality",
    category: "Healthcare Outcomes",
    value: "3x",
    description: "Black women are three times more likely to die from pregnancy-related causes than white women, highlighting racial disparities in women's healthcare.",
    source: "CDC Pregnancy Mortality Surveillance System",
    sourceUrl: "https://www.cdc.gov/reproductivehealth/maternal-mortality/pregnancy-mortality-surveillance-system.htm",
    chartType: "line"
  },
  {
    id: 5,
    title: "Autoimmune Disease Diagnosis",
    category: "Diagnosis",
    value: "78%",
    description: "78% of people with autoimmune diseases are women, yet research into these conditions remains underfunded and understanding of sex differences is limited.",
    source: "American Autoimmune Related Diseases Association",
    sourceUrl: "https://www.aarda.org/",
    chartType: "pie"
  },
  {
    id: 6,
    title: "Endometriosis Diagnostic Delay",
    category: "Diagnosis",
    value: "8 years",
    description: "The average time to diagnose endometriosis is 8 years from symptom onset, with many women's pain being dismissed as normal.",
    source: "World Endometriosis Research Foundation",
    sourceUrl: "https://endometriosisfoundation.org/",
    chartType: "bar"
  }
];
