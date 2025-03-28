export const featuredResearch = {
  id: 1,
  title: "Autoimmune Disease Research Shows Gender Disparities in Treatment Responses",
  category: "NEW STUDY",
  summary: "A groundbreaking study published in Nature Medicine reveals significant gender differences in immune responses to autoimmune disease treatments, potentially explaining why women experience higher rates of these conditions and different treatment outcomes.",
  content: "Researchers at Stanford University have discovered key differences in how male and female immune systems respond to treatments for autoimmune diseases like lupus, rheumatoid arthritis, and multiple sclerosis. The study, which analyzed data from more than 50,000 patients, found that women's immune systems respond differently to standard immunosuppressive therapies, requiring different dosing strategies and potentially entirely different treatment approaches.\n\nThese findings could help explain why women are up to four times more likely to develop autoimmune conditions and why they often experience more side effects from standard treatments. The researchers identified specific immune cell subtypes and signaling pathways that differ between sexes, opening new avenues for developing sex-specific treatment protocols.\n\n\"This is a paradigm shift in how we should approach autoimmune disease treatment,\" said Dr. Elena Rodriguez, the study's lead author. \"For decades, we've used a one-size-fits-all approach, but this research clearly demonstrates that sex-based biology needs to be a primary consideration in treatment development and clinical guidelines.\"",
  imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  publishDate: "2023-06-15",
  source: "Nature Medicine",
  sourceUrl: "https://www.nature.com/natmedicine/"
};

export const recentResearchNews = [
  {
    id: 2,
    title: "New Clinical Trial Aims to Address Maternal Health Disparities",
    category: "CLINICAL TRIALS",
    summary: "A multi-center trial launched to investigate interventions that may reduce maternal mortality rates among minority women.",
    content: "The National Institutes of Health has launched a landmark clinical trial specifically designed to address the alarming disparities in maternal health outcomes for women of color. The MOTHER (Maternal Outcomes Through Enhanced Research) study will enroll 10,000 pregnant women across 20 medical centers nationwide, with a focus on testing interventions that may reduce complications and mortality rates.\n\nThe trial will evaluate a combination of enhanced prenatal monitoring protocols, culturally-responsive care models, and early intervention strategies for common pregnancy complications. Researchers will track outcomes including rates of preeclampsia, hemorrhage, and cardiac events – all conditions that disproportionately affect Black and Indigenous women.\n\n\"This represents one of the largest investments in addressing maternal health disparities in U.S. history,\" said Dr. James Watson, principal investigator. \"The maternal mortality rate for Black women is three times higher than for white women. This is unacceptable, and this trial aims to develop evidence-based interventions to close this gap.\"",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-05-28",
    source: "National Institutes of Health",
    sourceUrl: "https://www.nih.gov/"
  },
  {
    id: 3,
    title: "New Biomarkers Discovered for Early Detection of Ovarian Cancer",
    category: "BREAKTHROUGH",
    summary: "Researchers identify novel protein signatures that may enable earlier diagnosis of ovarian cancer, potentially improving survival rates.",
    content: "Scientists at Johns Hopkins Medicine have identified a panel of protein biomarkers in blood that could potentially revolutionize ovarian cancer detection. The discovery, published in Cancer Discovery, could lead to the first effective screening test for a cancer that is often diagnosed too late for successful treatment.\n\nThe research team used advanced proteomics to identify five proteins that, when measured together, detected early-stage ovarian cancer with 91% accuracy in the study population. Current detection methods, which rely on symptoms and the CA-125 blood test, typically only identify the disease after it has spread beyond the ovaries.\n\n\"Ovarian cancer has been called the 'silent killer' because symptoms don't typically appear until the disease is advanced,\" explained Dr. Sarah Chen, lead researcher. \"A simple blood test that can reliably detect early-stage disease would be a game-changer for survival rates, which currently hover around 48% due to late diagnosis.\"",
    imageUrl: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-05-12",
    source: "Cancer Discovery",
    sourceUrl: "https://aacrjournals.org/cancerdiscovery"
  },
  {
    id: 4,
    title: "NIH Announces New Policy for Sex as a Biological Variable in Research",
    category: "POLICY UPDATE",
    summary: "Updated guidelines require researchers to account for sex differences in all NIH-funded preclinical research, addressing historical gender bias.",
    content: "The National Institutes of Health has strengthened its policy requiring the consideration of sex as a biological variable (SABV) in research design, analysis, and reporting. The updated guidelines, which take effect in January 2024, mandate that all NIH-funded studies include both male and female subjects in preclinical research unless a strong scientific justification exists for studying only one sex.\n\nThe policy revision comes after a comprehensive review found that despite initial SABV policies implemented in 2016, many studies still failed to adequately analyze sex differences or include sufficient female subjects in research protocols. The new guidelines include more specific requirements for reporting sex-disaggregated data and analyzing potential sex differences in results.\n\n\"This policy update represents a critical step toward addressing the historic underrepresentation of female subjects in biomedical research,\" said Dr. Janine Clayton, Director of the NIH Office of Research on Women's Health. \"Understanding how biological sex influences health and disease is essential for developing treatments that work effectively for everyone.\"",
    imageUrl: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-04-30",
    source: "National Institutes of Health",
    sourceUrl: "https://orwh.od.nih.gov/sex-gender/nih-policy-sex-biological-variable"
  }
];

// Combined array for all research news
export const allResearchNews = [featuredResearch, ...recentResearchNews];
