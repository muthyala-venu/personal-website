import type { Credential } from "@/lib/types";

export const credentials: Credential[] = [
  {
    id: "appointment",
    title: "Organizational Appointment",
    description:
      "State Vice President – Public Grievances with the All India Council of Human Rights, Liberties & Social Justice (AICHLS).",
    type: "appointment",
  },
  {
    id: "membership",
    title: "Organizational Membership",
    description:
      "Associated with AICHLS in a leadership capacity focused on public grievance awareness and citizen rights education.",
    type: "membership",
  },
  {
    id: "certificate",
    title: "Certificate of Association",
    description:
      "Documentation of organizational role and association. Certificate image placeholder for verification display.",
    type: "certificate",
  },
  {
    id: "verification",
    title: "Identity & Role Verification",
    description:
      "Placeholder for identity verification documents and QR-based credential verification when available.",
    type: "verification",
  },
];

export const credentialDisclaimer =
  "This credential represents an organizational role within AICHLS and should not be interpreted as a government appointment, statutory authority, or judicial power. The role is focused on awareness, education, and advocacy—not enforcement or official adjudication.";
