import type { Guide } from "@/lib/types";

const sharedDisclaimer =
  "<p><em>This guide is for educational purposes only and does not constitute legal advice. Verify procedures with official government sources before taking action.</em></p>";

export const guides: Guide[] = [
  {
    slug: "how-to-file-a-public-grievance",
    title: "How to File a Public Grievance",
    excerpt:
      "A step-by-step educational guide on understanding and filing public grievances through official channels in India.",
    category: "Public Grievance",
    definition:
      "A public grievance is a formal complaint raised by a citizen regarding deficiency in service delivery, misconduct, or failure of a public authority or government department.",
    keyTakeaways: [
      "Identify the correct department and grievance channel before filing.",
      "Document facts, dates, and supporting evidence clearly.",
      "Use official portals such as CPGRAMS where applicable.",
      "Follow up respectfully and keep reference numbers.",
      "Escalate through appellate mechanisms if no response within prescribed timelines.",
    ],
    faqs: [
      {
        id: "g1-f1",
        question: "What is CPGRAMS?",
        answer:
          "Centralized Public Grievance Redress and Monitoring System (CPGRAMS) is an online platform that allows citizens to lodge grievances with central government ministries and departments.",
      },
      {
        id: "g1-f2",
        question: "Can I file grievances with state departments?",
        answer:
          "Yes. Most states operate their own grievance portals or integrate with national systems. Check your state government's official website for the correct portal.",
      },
    ],
    content: `
      <h2>Understanding Public Grievances</h2>
      <p>Public grievance mechanisms exist so citizens can raise concerns about government services, delays, corruption, or administrative failures through structured channels. These systems promote accountability and responsive governance when used responsibly.</p>
      <h2>Step 1: Identify the Correct Authority</h2>
      <p>Before filing, determine which department or agency is responsible for the issue. Grievances sent to the wrong authority may be rejected or delayed. Review official websites, service charters, and departmental jurisdiction.</p>
      <h2>Step 2: Gather Documentation</h2>
      <p>Collect all relevant records: application copies, receipts, reference numbers, correspondence, photographs, and dates of interaction. Clear documentation strengthens your complaint and speeds review.</p>
      <h2>Step 3: Choose the Filing Channel</h2>
      <ul>
        <li><strong>Online portals:</strong> CPGRAMS for central government matters; state grievance portals for state issues.</li>
        <li><strong>Department grievance cells:</strong> Many departments maintain dedicated grievance officers.</li>
        <li><strong>Written representation:</strong> Where online filing is unavailable, submit a signed letter to the designated officer.</li>
      </ul>
      <h2>Step 4: Draft Your Complaint Clearly</h2>
      <p>Include your name, contact details, a concise subject line, chronological facts, specific relief sought, and enclosures. Avoid abusive language. Stick to verifiable facts.</p>
      <h2>Step 5: Submit and Save Acknowledgment</h2>
      <p>After submission, save the grievance registration number, screenshot, or receipt. This reference is essential for follow-up and escalation.</p>
      <h2>Step 6: Follow Up and Escalate</h2>
      <p>Track status on the portal. If timelines prescribed by rules or citizen charters expire without resolution, use appellate or escalation options listed on the official portal.</p>
      ${sharedDisclaimer}
    `,
  },
  {
    slug: "how-to-approach-government-departments",
    title: "How to Approach Government Departments",
    excerpt:
      "Learn how to communicate effectively and respectfully with government departments for information, services, and grievance redressal.",
    category: "Public Grievance",
    definition:
      "Approaching a government department means engaging through designated channels— counters, helplines, online services, or grievance cells—for services, information, or complaint redressal.",
    keyTakeaways: [
      "Know the department's mandate before visiting or writing.",
      "Carry identity proof and relevant documents.",
      "Use official helplines and appointment systems where available.",
      "Maintain polite, factual communication.",
      "Keep copies of all submissions and responses.",
    ],
    faqs: [
      {
        id: "g2-f1",
        question: "Should I visit in person or apply online?",
        answer:
          "Prefer online or helpline channels when available. Visit in person when required for verification, hearings, or when digital access is limited.",
      },
    ],
    content: `
      <h2>Preparation Before You Approach</h2>
      <p>Research the department's role, required documents, office timings, and service standards. Many departments publish citizen charters listing timelines and procedures.</p>
      <h2>Communication Best Practices</h2>
      <p>Be clear, respectful, and factual. State your request or complaint in writing when possible. Ask for receipt stamps, reference numbers, or acknowledgment emails.</p>
      <h2>Using Helplines and e-Governance Services</h2>
      <p>Government helplines and online service portals reduce delays. Use official numbers listed on .gov.in websites only—avoid unofficial agents claiming guaranteed results.</p>
      <h2>When Things Do Not Move</h2>
      <p>If responses are delayed beyond charter timelines, escalate through the department's grievance officer, senior officials, or state/national grievance portals.</p>
      ${sharedDisclaimer}
    `,
  },
  {
    slug: "rti-guide",
    title: "RTI Guide: Right to Information",
    excerpt:
      "A citizen's educational guide to filing RTI applications, fees, timelines, and appeals under the RTI Act, 2005.",
    category: "RTI",
    definition:
      "The Right to Information Act, 2005 empowers citizens to request information from public authorities to promote transparency and accountability in governance.",
    keyTakeaways: [
      "Any citizen can file an RTI to public authorities under the Act.",
      "Applications must clearly describe the information sought.",
      "Authorities must respond within 30 days in most cases.",
      "First appeal lies with a senior officer; second appeal with Information Commissions.",
      "Certain information categories are exempt from disclosure.",
    ],
    faqs: [
      {
        id: "g3-f1",
        question: "What fee is required for RTI?",
        answer:
          "Central rules prescribe application fees (commonly ₹10). Below Poverty Line applicants may be exempt. State rules may differ slightly.",
      },
      {
        id: "g3-f2",
        question: "Can RTI be filed online?",
        answer:
          "Yes. RTI Online portal and state-specific portals allow electronic filing for many authorities.",
      },
    ],
    content: `
      <h2>Purpose of RTI</h2>
      <p>RTI enables citizens to access records, documents, and information held by public authorities. It strengthens democratic participation and holds institutions accountable.</p>
      <h2>How to File an RTI Application</h2>
      <ol>
        <li>Identify the public authority holding the information.</li>
        <li>Address the application to the Public Information Officer (PIO).</li>
        <li>Write clearly what information you need—avoid vague requests.</li>
        <li>Pay prescribed fee and attach proof if required.</li>
        <li>Submit by post, in person, or through official online portals.</li>
      </ol>
      <h2>Timelines and Appeals</h2>
      <p>PIOs must provide information within 30 days (48 hours if life or liberty involved). If denied or delayed, file first appeal with the First Appellate Authority within 30 days, then second appeal with the Information Commission.</p>
      <h2>Exemptions</h2>
      <p>The Act lists exemptions including national security, personal privacy, and information that would impede investigation. Balancing tests may apply in some cases.</p>
      ${sharedDisclaimer}
    `,
  },
  {
    slug: "consumer-complaint-guide",
    title: "Consumer Complaint Guide",
    excerpt:
      "How to understand and pursue consumer complaints under the Consumer Protection Act, 2019 in India.",
    category: "Consumer Rights",
    definition:
      "A consumer complaint is a formal dispute filed by a buyer of goods or services against deficiency, unfair trade practice, or defective products seeking redressal.",
    keyTakeaways: [
      "Consumers have statutory rights to safety, information, choice, and redressal.",
      "Attempt amicable resolution with the seller first when safe to do so.",
      "File complaints with district/state/national consumer commissions based on claim value.",
      "Preserve invoices, warranties, and communication records.",
      "National Consumer Helpline (1915) assists with guidance.",
    ],
    faqs: [
      {
        id: "g4-f1",
        question: "Where do I file a consumer complaint?",
        answer:
          "Jurisdiction depends on the value of goods/services and compensation claimed. District Commission, State Commission, or National Commission as per prescribed limits.",
      },
    ],
    content: `
      <h2>Know Your Consumer Rights</h2>
      <p>The Consumer Protection Act, 2019 protects against defective products, deficient services, misleading advertisements, and unfair contracts. Awareness of these rights is the first step toward effective redressal.</p>
      <h2>Steps to File a Complaint</h2>
      <ul>
        <li>Send a legal notice or written complaint to the opposite party.</li>
        <li>File online through the e-Daakhil portal or at the appropriate commission.</li>
        <li>Attach evidence: bills, photos, expert reports, correspondence.</li>
        <li>Attend hearings or opt for online proceedings where offered.</li>
      </ul>
      <h2>Relief Available</h2>
      <p>Commissions may order replacement, refund, compensation, discontinuation of unfair practices, and payment of costs.</p>
      ${sharedDisclaimer}
    `,
  },
  {
    slug: "cyber-crime-complaint-guide",
    title: "Cyber Crime Complaint Guide",
    excerpt:
      "Educational guide on reporting cyber fraud, harassment, and online crimes through official channels in India.",
    category: "Cyber Safety",
    definition:
      "Cyber crime refers to criminal activities conducted through computers, networks, or digital devices—including fraud, identity theft, harassment, and hacking.",
    keyTakeaways: [
      "Report immediately on cybercrime.gov.in or helpline 1930.",
      "Preserve screenshots, URLs, emails, and transaction IDs.",
      "Inform your bank if financial fraud is involved.",
      "Do not delete evidence before filing complaint.",
      "Follow up with local cyber crime police if required.",
    ],
    faqs: [
      {
        id: "g5-f1",
        question: "What is the national cyber crime helpline?",
        answer: "Dial 1930 for financial cyber fraud assistance. Use cybercrime.gov.in for registering complaints.",
      },
    ],
    content: `
      <h2>Common Cyber Crimes</h2>
      <p>Online fraud, phishing, UPI scams, identity theft, cyber bullying, and unauthorized access affect millions of citizens. Early reporting improves chances of blocking transactions and investigation.</p>
      <h2>How to Report</h2>
      <ol>
        <li>Visit the National Cyber Crime Reporting Portal.</li>
        <li>Select appropriate category and fill details accurately.</li>
        <li>Upload evidence and save acknowledgment.</li>
        <li>For financial fraud, call 1930 immediately.</li>
      </ol>
      <h2>Prevention Tips</h2>
      <p>Use strong passwords, enable two-factor authentication, verify URLs, avoid sharing OTPs, and educate family members about common scams.</p>
      ${sharedDisclaimer}
    `,
  },
  {
    slug: "women-helpline-guide",
    title: "Women Helpline Guide",
    excerpt:
      "Information on helplines, support services, and legal awareness resources for women facing violence or discrimination.",
    category: "Women Rights",
    definition:
      "Women helplines provide emergency assistance, counselling, and referral services for women facing violence, harassment, or distress.",
    keyTakeaways: [
      "National Women Helpline: 1091 (where operational) and emergency 112.",
      "One Stop Centres provide integrated support services.",
      "Domestic Violence Act enables protection orders and shelter.",
      "Document incidents and seek medical/legal aid when safe.",
      "Contact police in immediate danger.",
    ],
    faqs: [
      {
        id: "g6-f1",
        question: "Is domestic violence a crime?",
        answer:
          "Yes. Physical, emotional, sexual, and economic abuse within domestic relationships are addressed under the Protection of Women from Domestic Violence Act and Indian Penal Code provisions.",
      },
    ],
    content: `
      <h2>Emergency Response</h2>
      <p>In immediate danger, call police emergency 112 or local police station. Helplines connect survivors to counselling, legal aid, and shelter where available.</p>
      <h2>Legal Protections</h2>
      <p>Laws address domestic violence, workplace harassment, dowry-related offences, and sexual assault. Understanding these laws helps women seek appropriate remedies through courts and support services.</p>
      <h2>Support Services</h2>
      <p>One Stop Centres, women police stations, legal services authorities, and NGOs provide assistance. Always verify you are contacting official or recognized organizations.</p>
      ${sharedDisclaimer}
    `,
  },
  {
    slug: "senior-citizen-support-guide",
    title: "Senior Citizen Support Guide",
    excerpt:
      "Guide to maintenance rights, welfare schemes, and helplines available for senior citizens in India.",
    category: "Senior Citizen Rights",
    definition:
      "Senior citizen support encompasses legal, social, and welfare mechanisms that protect elderly persons from neglect, abuse, and economic insecurity.",
    keyTakeaways: [
      "Elder Line: 14567 for information and support.",
      "Maintenance Act enables elders to claim maintenance from children/relatives.",
      "Report abuse or abandonment to police and welfare authorities.",
      "Explore senior citizen concessions and pension schemes officially.",
      "Plan property and financial matters with legal documentation.",
    ],
    faqs: [
      {
        id: "g7-f1",
        question: "Can senior citizens claim maintenance from children?",
        answer:
          "Yes, under the Maintenance and Welfare of Parents and Senior Citizens Act, tribunals can order maintenance subject to proof and procedure.",
      },
    ],
    content: `
      <h2>Rights and Protections</h2>
      <p>Senior citizens are entitled to dignity, maintenance, and protection from abuse. Tribunals under the Maintenance Act provide accessible forums for maintenance claims.</p>
      <h2>Welfare and Schemes</h2>
      <p>Central and state governments operate pension schemes, healthcare programs, and travel concessions. Verify eligibility on official government portals.</p>
      <h2>Preventing Abuse and Neglect</h2>
      <p>Family members, neighbours, and institutions should report suspected abuse. Legal awareness empowers seniors to safeguard property and personal autonomy.</p>
      ${sharedDisclaimer}
    `,
  },
  {
    slug: "emergency-resources",
    title: "Emergency Resources",
    excerpt:
      "Quick reference to national helplines and emergency services for citizens in distress across India.",
    category: "Public Welfare",
    definition:
      "Emergency resources are official helplines and services providing immediate assistance for police, medical, fire, women, children, senior citizens, and cyber crime situations.",
    keyTakeaways: [
      "Universal Emergency Number: 112",
      "Police: 100 (legacy) / 112",
      "Ambulance: 102 / 108 in many states",
      "Women Helpline: 1091 (state-dependent)",
      "Cyber Crime: 1930",
      "Senior Citizens: Elder Line 14567",
      "Child Helpline: 1098",
    ],
    faqs: [
      {
        id: "g8-f1",
        question: "Should I call 112 or 100?",
        answer:
          "112 is the integrated emergency number in India. It routes calls to appropriate services. Some states still publicize legacy numbers that redirect to emergency services.",
      },
    ],
    content: `
      <h2>National Helplines</h2>
      <ul>
        <li><strong>112</strong> – Unified emergency response</li>
        <li><strong>1098</strong> – Childline for children in need of care</li>
        <li><strong>1091</strong> – Women helpline (where available)</li>
        <li><strong>14567</strong> – Elder Line for senior citizens</li>
        <li><strong>1930</strong> – Cyber crime financial fraud helpline</li>
        <li><strong>1915</strong> – National Consumer Helpline</li>
      </ul>
      <h2>When to Use Each Service</h2>
      <p>Use police emergency for crime and immediate safety threats. Use medical helplines for health emergencies. Use specialized helplines for domain-specific guidance and referral.</p>
      <h2>Stay Prepared</h2>
      <p>Save helpline numbers in your phone, share them with vulnerable family members, and verify numbers from official government sources periodically.</p>
      ${sharedDisclaimer}
    `,
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}
