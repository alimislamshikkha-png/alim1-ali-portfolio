export type ServiceCategory = 'all' | 'va' | 'marketing' | 'administrative' | 'data' | 'creative' | 'support';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  division: 'Virtual Assistant' | 'Digital Marketing Support';
  category: ServiceCategory;
  shortDescription: string;
  detailedDescription: string;
  businessBenefits: string[];
  scopeOfWork: string[];
  deliverables: string[];
  toolsUsed: string[];
  turnaroundTime: string;
  iconName: string;
  administrativeClarification?: string;
}

export interface DemoProject {
  id: string;
  number: string;
  title: string;
  division: 'Digital Marketing Support' | 'Virtual Assistant';
  imagePath: string;
  tagline: string;
  description: string;
  businessProblem: string;
  proposedSolution: string;
  workflow: string[];
  tools: string[];
  deliverables: string[];
  summary: string;
  demoTypeLabel: string; // 'Independent Demo Project'
}

export interface TestimonialCardData {
  id: string;
  clientName: string;
  companyName: string;
  country: string;
  serviceCategory: string;
  feedbackText: string;
  reviewDate: string;
  verificationStatus: string;
  statusBadge: string;
  hourlyOrContract: string;
}

export interface BookingFormData {
  clientName: string;
  email: string;
  service: string;
  meetingPurpose: string;
  platform: 'Google Meet' | 'Zoom' | 'Microsoft Teams';
  date: string;
  timeSlot: string;
  timezone: string;
  additionalNotes?: string;
}

export interface LeadGenFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  websiteUrl?: string;
  country: string;
  serviceRequired: string;
  projectDescription: string;
  estimatedBudget?: string;
  preferredContactMethod: 'Email' | 'LinkedIn' | 'WhatsApp / Video Call';
}

export interface FAQItem {
  id: string;
  category: 'services' | 'pricing' | 'collaboration' | 'security' | 'booking';
  question: string;
  answer: string;
}
