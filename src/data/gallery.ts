import type { GalleryItem } from "@/lib/types";

export const galleryCategories = [
  "Certificates",
  "Meetings",
  "Awareness Activities",
  "Community Engagement",
  "Public Service",
  "Media",
  "Videos",
] as const;

export const galleryItems: GalleryItem[] = [
  { id: "1", title: "Organizational Certificate", category: "Certificates", description: "Certificate of association with AICHLS." },
  { id: "2", title: "Appointment Documentation", category: "Certificates", description: "Appointment letter placeholder for organizational role." },
  { id: "3", title: "Team Meeting", category: "Meetings", description: "Discussion on public grievance awareness initiatives." },
  { id: "4", title: "Planning Session", category: "Meetings", description: "Community outreach planning meeting." },
  { id: "5", title: "Rights Awareness Session", category: "Awareness Activities", description: "Educational session on citizen rights." },
  { id: "6", title: "Legal Literacy Workshop", category: "Awareness Activities", description: "Workshop on legal awareness for citizens." },
  { id: "7", title: "Community Outreach", category: "Community Engagement", description: "Engaging with local community members." },
  { id: "8", title: "Citizen Education Program", category: "Community Engagement", description: "Public education on grievance mechanisms." },
  { id: "9", title: "Public Service Initiative", category: "Public Service", description: "Community welfare and service-oriented activity." },
  { id: "10", title: "Volunteer Coordination", category: "Public Service", description: "Coordinating volunteer efforts for citizen support." },
  { id: "11", title: "Media Interaction", category: "Media", description: "Placeholder for media coverage and press interactions." },
  { id: "12", title: "Public Awareness Campaign", category: "Media", description: "Campaign materials for rights awareness." },
  { id: "13", title: "Educational Video", category: "Videos", description: "Video content on human rights awareness." },
  { id: "14", title: "Grievance Guide Video", category: "Videos", description: "Video guide on filing public grievances." },
];
