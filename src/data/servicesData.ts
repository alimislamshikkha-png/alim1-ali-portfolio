import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  // VIRTUAL ASSISTANT — 8 SERVICES
  {
    id: 'va-support',
    number: '01',
    title: 'Virtual Assistant Support',
    division: 'Virtual Assistant',
    category: 'administrative',
    shortDescription: 'Dedicated remote administrative assistance to streamline executive priorities, coordinate daily tasks, and eliminate operational bottlenecks.',
    detailedDescription: 'Dedicated remote administrative assistance tailored for high-growth founders, executives, and remote teams. Handles task coordination, document preparation, correspondence follow-ups, schedule oversight, and vendor liaisons so you can focus entirely on strategic business growth.',
    businessBenefits: [
      'Reclaim 15–20 hours of executive focus each week',
      'Eliminate daily task friction and missed deadlines',
      'Consistent, reliable communication and status updates',
      'Flexible remote hours accommodating US, UK, and EU timezones'
    ],
    scopeOfWork: [
      'Daily operational task coordination & priority checklist management',
      'Document formatting, correspondence drafting, and cloud filing',
      'Contractor, vendor, and partner liaison support',
      'Travel itinerary planning and reservation tracking',
      'General day-to-day administrative execution'
    ],
    deliverables: [
      'Daily task status reports and priority logs',
      'Organized document repository and templates',
      'Vendor and contractor follow-up logs',
      'Travel and schedule briefing packets',
      'Routine administrative correspondence drafts'
    ],
    toolsUsed: ['Google Workspace', 'Microsoft 365', 'Slack', 'Notion', 'Trello', 'Asana'],
    turnaroundTime: 'Daily / On-demand within business hours',
    iconName: 'Briefcase'
  },
  {
    id: 'email-management',
    number: '02',
    title: 'Email Management',
    division: 'Virtual Assistant',
    category: 'administrative',
    shortDescription: 'Inbox Zero organization, priority categorization, 4-tier labeling hierarchies, and prompt communication workflows.',
    detailedDescription: 'Transforms messy, chaotic inboxes into structured, stress-free communication hubs. Implements proven triage protocols, color-coded labeling hierarchies, spam filtering, and professionally drafted response templates for routine partner and client inquiries.',
    businessBenefits: [
      'Achieve and sustain Inbox Zero every business day',
      'Ensure high-priority VIP emails receive same-day responses',
      'Prevent lost invoices, missed contracts, and delayed follow-ups',
      'Dramatically reduce cognitive overload and inbox anxiety'
    ],
    scopeOfWork: [
      'Inbox audit and junk/newsletter filtration',
      '4-Tier color-coded folder and label hierarchy creation',
      'VIP sender rule automation and urgent notification flagging',
      'Drafting professional canned responses for common inquiries',
      'Twice-daily scheduled maintenance sweeps'
    ],
    deliverables: [
      '4-Tier structured inbox labeling system',
      'Action-required daily priority queue',
      'Suite of approved professional response templates',
      'Unsubscribed junk and archived newsletter log',
      'Weekly communication summary report'
    ],
    toolsUsed: ['Gmail / Google Workspace', 'Microsoft Outlook', 'Clean Email', 'Trello'],
    turnaroundTime: 'Twice daily checks (Morning & Afternoon)',
    iconName: 'Mail'
  },
  {
    id: 'calendar-coordination',
    number: '03',
    title: 'Calendar & Meeting Coordination',
    division: 'Virtual Assistant',
    category: 'administrative',
    shortDescription: 'Frictionless schedule coordination, meeting link distribution, buffer block enforcement, and timezone management.',
    detailedDescription: 'Eliminates time-consuming back-and-forth scheduling emails. Manages complex international calendars, coordinates appointments across worldwide time zones, sets up video conferencing links, prepares attendee briefing notes, and resolves conflicts proactively.',
    businessBenefits: [
      'Zero double-bookings or cross-timezone scheduling mix-ups',
      'Protected focus blocks and adequate rest intervals between calls',
      'Polite, professional scheduling interactions representing your brand',
      'Prompt conflict resolution and reschedule notifications'
    ],
    scopeOfWork: [
      'Multi-timezone appointment booking and invitation management',
      'Buffer-time and deep-work focus block protection',
      'Meeting link generation (Google Meet, Zoom, Microsoft Teams)',
      'Pre-meeting attendee background research and agenda distribution',
      'Timely reschedule management with polite client communications'
    ],
    deliverables: [
      'Conflict-free synchronized master calendar',
      'Pre-meeting attendee briefing summaries',
      'Automated booking link integration & setup',
      'Weekly meeting time allocation overview',
      'Prompt conflict resolution logs'
    ],
    toolsUsed: ['Google Calendar', 'Calendly', 'Zoom', 'Google Meet', 'Microsoft Teams'],
    turnaroundTime: 'Within 2–4 hours of request',
    iconName: 'Calendar'
  },
  {
    id: 'data-entry-spreadsheet',
    number: '04',
    title: 'Data Entry & Spreadsheet Management',
    division: 'Virtual Assistant',
    category: 'data',
    shortDescription: 'High-accuracy data transcription, database cleaning, formula automation, and custom dashboard design.',
    detailedDescription: 'Combines meticulous data entry with advanced spreadsheet engineering. Converts raw records, scanned PDFs, business cards, and invoices into clean, formula-automated Google Sheets and Excel workbooks equipped with dynamic lookups, validation rules, and executive summaries.',
    businessBenefits: [
      'Spotless data hygiene with 99.8%+ transcription accuracy',
      'Instant visibility into sales, orders, and KPI metrics via automated formulas',
      'Elimination of duplicate rows, formatting anomalies, and manual calculation errors',
      'Standardized CSV templates ready for CRM and ERP importing'
    ],
    scopeOfWork: [
      'Accurate data transcription from forms, invoices, and digital files',
      'Database de-duplication, formatting standardization, and error audits',
      'Formula implementation (XLOOKUP, VLOOKUP, INDEX/MATCH, SUMIFS)',
      'Interactive Pivot Table and executive dashboard creation',
      'Data validation rules and dropdown interface design'
    ],
    deliverables: [
      'Formula-automated Google Sheets and Excel master workbooks',
      'Executive KPI visual charts and summary cards',
      'Cleaned, deduplicated customer & product registries',
      'Custom data validation rules and input forms',
      'Sanitized CSV export templates'
    ],
    toolsUsed: ['Microsoft Excel', 'Google Sheets', 'Airtable', 'Power BI (Basic)'],
    turnaroundTime: '24–48 hours based on batch volume',
    iconName: 'Table'
  },
  {
    id: 'online-business-research',
    number: '05',
    title: 'Online Business Research',
    division: 'Virtual Assistant',
    category: 'data',
    shortDescription: 'Comprehensive web research, vendor comparison, market intelligence, and structured decision-ready briefs.',
    detailedDescription: 'Conducts thorough, methodical online investigation to uncover critical business information. Evaluates software tools, vets potential suppliers, investigates market trends, and compiles verified source citations into actionable executive summary reports.',
    businessBenefits: [
      'Make informed vendor and commercial decisions supported by verified facts',
      'Save 15+ hours of tedious web browsing and information filtering',
      'Uncover market pricing benchmarks, service capabilities, and supplier terms',
      'Receive well-organized briefs highlighting strategic takeaways'
    ],
    scopeOfWork: [
      'Define research methodology, questions, and parameters',
      'Gather data from verified industry publications and public registries',
      'Cross-check supplier reputations, pricing plans, and integration capabilities',
      'Synthesize complex findings into clean comparison tables',
      'Draft clear executive takeaway memos with source links'
    ],
    deliverables: [
      'Comprehensive research report dossier (PDF / Sheets)',
      'Side-by-side vendor and tool comparison matrices',
      'Directory of verified industry source citations',
      'Pricing model and feature compatibility evaluations',
      'Executive summary memo highlighting key recommendations'
    ],
    toolsUsed: ['Google Advanced Search', 'LinkedIn', 'Crunchbase', 'Google Sheets', 'Google Docs'],
    turnaroundTime: '48–72 hours per research brief',
    iconName: 'Search'
  },
  {
    id: 'customer-support',
    number: '06',
    title: 'Customer Support Assistance',
    division: 'Virtual Assistant',
    category: 'support',
    shortDescription: 'Polite, empathetic, and responsive frontline support via email, helpdesk tickets, and live chat channels.',
    detailedDescription: 'Delivers warm, brand-aligned customer care for growing businesses. Promptly answers customer questions, resolves routine account issues, triages technical tickets to senior team members, processes standard requests, and updates support documentation.',
    businessBenefits: [
      'Deliver fast, professional responses to customer inquiries',
      'Maintain positive client sentiment and build lasting brand loyalty',
      'Ensure every customer question is tracked and resolved according to SOPs',
      'Free technical leads from routine customer onboarding and FAQ handling'
    ],
    scopeOfWork: [
      'Daily helpdesk ticket monitoring and timely resolution',
      'Live chat triage and polite customer onboarding assistance',
      'Escalation routing for technical, complex, or billing issues',
      'Customer help center article and FAQ documentation maintenance',
      'Weekly customer inquiry trends and satisfaction summaries'
    ],
    deliverables: [
      'Scheduled shift helpdesk ticket resolution',
      'Detailed inquiry logs and escalation summaries',
      'Customer FAQ and canned response documentation',
      'Weekly customer sentiment and volume reports',
      'Standardized support SOP checklists'
    ],
    toolsUsed: ['Zendesk', 'Freshdesk', 'Intercom', 'Gmail', 'Help Scout', 'Slack'],
    turnaroundTime: 'Scheduled shift coverage / guaranteed SLA',
    iconName: 'Headphones'
  },
  {
    id: 'admin-operations',
    number: '07',
    title: 'Administrative & Operations Support',
    division: 'Virtual Assistant',
    category: 'administrative',
    shortDescription: 'Standard operating procedure documentation, workflow mapping, cloud drive audits, and operational oversight.',
    detailedDescription: 'Brings structural discipline to company operations. Documents clear, step-by-step Standard Operating Procedures (SOPs), organizes shared cloud drives (Google Drive / OneDrive), updates team task directories, and supports smooth remote team collaboration.',
    businessBenefits: [
      'Turn chaotic internal processes into repeatable, documented workflows',
      'Enable seamless new hire onboarding with clear step-by-step SOPs',
      'Maintain a spotless, permission-controlled cloud drive architecture',
      'Ensure team accountability with standardized weekly task checklists'
    ],
    scopeOfWork: [
      'Audit existing internal workflows and identify friction points',
      'Author clear Standard Operating Procedure (SOP) documentation',
      'Restructure shared cloud drives with intuitive folder hierarchies',
      'Maintain team task boards and operational sprint backlogs',
      'Take structured meeting minutes with actionable assignments'
    ],
    deliverables: [
      'Comprehensive SOP documentation library',
      'Restructured, permission-managed cloud drive system',
      'Weekly operational checklist and status board updates',
      'Meeting minute summaries with owner assignments',
      'Internal knowledge base architecture (Notion / Google Docs)'
    ],
    toolsUsed: ['Notion', 'Google Drive', 'OneDrive', 'Loom', 'Trello', 'Slack'],
    turnaroundTime: '3–5 business days per workflow module',
    iconName: 'Settings'
  },
  {
    id: 'crm-file-management',
    number: '08',
    title: 'CRM & File Management',
    division: 'Virtual Assistant',
    category: 'administrative',
    shortDescription: 'Clean CRM contact updating, deal stage tracking, cloud file archiving, and database hygiene.',
    detailedDescription: 'Maintains spotless customer relationship records and digital filing systems. Deduplicates client contacts, records interaction notes, organizes deal stages in your CRM, and ensures company files are systematically named, tagged, and backed up in cloud storage.',
    businessBenefits: [
      'Sales and leadership always access up-to-date, accurate customer histories',
      'Zero lost agreements, missing contracts, or duplicate contact records',
      'Streamlined digital filing with uniform naming and tagging conventions',
      'Increased sales velocity through structured pipeline tracking'
    ],
    scopeOfWork: [
      'CRM database de-duplication, contact updating, and tag hygiene',
      'Deal pipeline status verification and stage updates',
      'Digital filing structure design and systematic document archiving',
      'Customer interaction logging and follow-up task creation',
      'Regular data backup checks and permission reviews'
    ],
    deliverables: [
      'Deduplicated, standardized CRM contact database',
      'Organized cloud file directory with uniform naming protocols',
      'Deal stage verification and pipeline health reports',
      'Client onboarding document archiving checklists',
      'Data security and file permission audit summaries'
    ],
    toolsUsed: ['HubSpot CRM', 'Notion', 'Google Drive', 'OneDrive', 'Airtable', 'Google Sheets'],
    turnaroundTime: 'Daily / Weekly maintenance cycles',
    iconName: 'Database'
  },

  // DIGITAL MARKETING SUPPORT — 8 SERVICES
  {
    id: 'social-media-management',
    number: '09',
    title: 'Social Media Management',
    division: 'Digital Marketing Support',
    category: 'marketing',
    shortDescription: 'Multi-platform post scheduling, community comment moderation, brand mention tracking, and channel coordination.',
    detailedDescription: 'Keeps your brand social channels active, consistent, and engaged. Coordinates multi-platform publishing schedules, uploads approved graphics, writes formatted captions, moderates audience comments, and flags priority direct messages requiring personal attention.',
    businessBenefits: [
      'Consistent daily brand presence across target social channels',
      'Prompt community comment responses building organic engagement',
      'Save 10+ hours weekly on manual posting and hashtag formatting',
      'Structured monthly reporting tracking audience reach and impressions'
    ],
    scopeOfWork: [
      'Pre-schedule approved posts across Meta, LinkedIn, and X',
      'Daily community comment moderation and spam removal',
      'Hashtag grouping, asset resizing, and caption formatting',
      'Direct message triage and routing to appropriate team members',
      'Monthly audience reach and post engagement data recaps'
    ],
    deliverables: [
      'Scheduled multi-platform publishing queue',
      'Daily community engagement and moderation log',
      'Curated hashtag cluster collections',
      'Direct message routing summary',
      'Monthly social performance and engagement recap'
    ],
    toolsUsed: ['Meta Business Suite', 'Buffer', 'Hootsuite', 'Later', 'LinkedIn Creator Tools'],
    turnaroundTime: 'Ongoing weekly schedule management',
    iconName: 'Share2'
  },
  {
    id: 'social-content-planning',
    number: '10',
    title: 'Social Media Content Planning',
    division: 'Digital Marketing Support',
    category: 'marketing',
    shortDescription: 'Strategic editorial roadmaps, monthly content calendars, thematic topic generation, and publishing schedules.',
    detailedDescription: 'Structures your social media messaging into predictable, high-value content themes. Engineers 30-day master calendars balancing educational value, case study proof, engagement questions, and promotional calls-to-action tailored for each platform.',
    businessBenefits: [
      'Never run out of post ideas or scramble for last-minute content',
      'Cohesive brand storytelling that resonates with target buyers',
      'Strategic content pillar distribution driving organic trust',
      'Clear visibility into upcoming posts for executive pre-approval'
    ],
    scopeOfWork: [
      'Target audience interest and trend topic research',
      'Formulation of core content pillars (Educational, Proof, Insight, Action)',
      'Creation of comprehensive 30-day monthly content calendars',
      'Drafting platform-specific hooks, caption concepts, and post angles',
      'Weekly publishing review and content cadence adjustments'
    ],
    deliverables: [
      '30-Day master content calendar (Google Sheets / Notion)',
      'Thematic weekly content ideas & hook repository',
      'Platform-specific publishing schedule guidelines',
      'Post asset requirements and creative brief checklist',
      'Monthly content cadence evaluation memo'
    ],
    toolsUsed: ['Notion', 'Google Sheets', 'Meta Business Suite', 'Trello', 'Canva Pro'],
    turnaroundTime: 'Monthly & Weekly Planning Cadence',
    iconName: 'CalendarCheck'
  },
  {
    id: 'canva-graphic-design',
    number: '11',
    title: 'Canva Graphic Design',
    division: 'Digital Marketing Support',
    category: 'creative',
    shortDescription: 'Eye-catching promotional banners, carousel slide decks, social graphics, and marketing collateral.',
    detailedDescription: 'Creates high-converting, brand-consistent visual collateral in Canva Pro. Produces Instagram feed posts, multi-slide LinkedIn carousels, webinar announcement banners, promotional sale flyers, and digital lead magnet covers ready for publishing.',
    businessBenefits: [
      'Elevate brand aesthetics with professional, high-contrast visual design',
      'Drive higher click-throughs and saves on social media feeds',
      'Fast turnaround for time-sensitive promotions and announcements',
      'Receive fully editable Canva source links for seamless team reuse'
    ],
    scopeOfWork: [
      'Setup and maintain client brand kit (fonts, logos, color codes)',
      'Design social media post and story graphics (1080x1080, 1080x1920)',
      'Produce multi-page educational LinkedIn carousel PDF documents',
      'Create promotional banners, masterclass graphics, and event covers',
      'Deliver high-res PNG/JPG exports and editable Canva team links'
    ],
    deliverables: [
      '10+ custom branded social post & story designs',
      'Multi-slide LinkedIn carousel document decks',
      'Event and promotional landscape banners',
      'Digital flyer and product spotlight mockups',
      'Editable Canva source links and style guideline sheets'
    ],
    toolsUsed: ['Canva Pro', 'Figma (Basic)', 'Photopea', 'Remove.bg'],
    turnaroundTime: '24–48 hours per graphic set',
    iconName: 'Palette'
  },
  {
    id: 'video-editing',
    number: '12',
    title: 'Short-form Video Editing',
    division: 'Digital Marketing Support',
    category: 'creative',
    shortDescription: 'Engaging vertical video editing for Reels, TikTok, and YouTube Shorts with animated captions and dynamic pacing.',
    detailedDescription: 'Cuts raw mobile recordings, podcast excerpts, or Zoom webinars into punchy vertical videos. Removes dead air, inserts retention-driving zoom transitions, synchronizes bold animated subtitles, adds sound effects, and formats exports for Reels, TikTok, and Shorts.',
    businessBenefits: [
      'Capture immediate viewer attention with 1.5-second retention hooks',
      'Boost watch time and completion rates through rapid, tight pacing',
      'Ensure 100% video comprehension with bold on-screen subtitles',
      'Repurpose long-form webinars into multiple high-reach micro-clips'
    ],
    scopeOfWork: [
      'Review raw footage and extract high-impact speaking moments',
      'Trim pauses, filler words, and dead air with jump cuts',
      'Generate synchronized, word-by-word animated subtitles',
      'Apply punch-in zooms, b-roll overlays, and graphic markers',
      'Level audio and export optimized 1080p vertical MP4 files'
    ],
    deliverables: [
      'Clean 9:16 vertical video edits ready for social publishing',
      'Word-by-word animated caption overlays',
      'Hook pacing and timeline cut marker breakdown',
      'Normalized background music and sound effects audio',
      'Exported high-resolution MP4 video packages'
    ],
    toolsUsed: ['CapCut Pro', 'Adobe Premiere Rush', 'Descript', 'Canva Video'],
    turnaroundTime: '24–48 hours per video edit',
    iconName: 'Video'
  },
  {
    id: 'lead-generation-prospect-research',
    number: '13',
    title: 'Lead Generation & Prospect Research',
    division: 'Digital Marketing Support',
    category: 'data',
    shortDescription: 'Targeted B2B prospect identification, verified contact list compilation, and structured lead tracking.',
    detailedDescription: 'Executes methodical prospect research to help businesses identify potential customers. Researches target companies according to your Ideal Customer Profile (ICP), verifies contact details, validates email domains, and organizes structured spreadsheets ready for outreach.',
    businessBenefits: [
      'Fuel outreach pipelines with verified, high-fit prospective leads',
      'Eliminate bounce rates and bad data through manual email verification',
      'Receive well-categorized lead lists segmented by industry and size',
      'Empower your sales team to start conversations immediately'
    ],
    scopeOfWork: [
      'Define Ideal Customer Profile (ICP) parameters and criteria',
      'Identify target companies and key decision-maker titles',
      'Verify corporate contact details, LinkedIn URLs, and locations',
      'Deduplicate records and format into clean, sortable spreadsheets',
      'Log qualification notes and company revenue/headcount metrics'
    ],
    deliverables: [
      'Verified prospect directory (Company, Decision Maker, Title, Email)',
      'Organized, deduplicated Google Sheets / Excel database',
      'Prospect qualification notes and industry segmentation tags',
      'CRM-ready importable CSV files',
      'Research source citation and verification log'
    ],
    toolsUsed: ['LinkedIn Sales Navigator', 'Google Advanced Search', 'Google Sheets', 'Excel', 'Apollo / Hunter (Manual)'],
    turnaroundTime: '24–48 hours per prospect batch',
    iconName: 'UserCheck'
  },
  {
    id: 'competitor-research',
    number: '14',
    title: 'Competitor Research',
    division: 'Digital Marketing Support',
    category: 'data',
    shortDescription: 'In-depth digital audit of competitor offerings, social media presence, pricing models, and market positioning.',
    detailedDescription: 'Performs thorough competitive analysis to help businesses understand market landscapes. Evaluates competitor social media tactics, posting frequencies, audience engagement ratios, pricing tiers, and positioning gaps to identify strategic differentiation opportunities.',
    businessBenefits: [
      'Understand what marketing angles and formats rival brands use successfully',
      'Identify underserved customer segments and market positioning gaps',
      'Benchmark your pricing, features, and social frequency against competitors',
      'Formulate data-backed operational adjustments to capture market share'
    ],
    scopeOfWork: [
      'Identify 3–5 primary direct and indirect market competitors',
      'Audit competitor digital touchpoints (Website, Socials, Content)',
      'Benchmark posting frequency, engagement metrics, and audience size',
      'Map pricing structures, package inclusions, and promotional angles',
      'Synthesize strengths, weaknesses, and differentiation opportunities'
    ],
    deliverables: [
      'Comprehensive competitor analysis report (PDF / Sheets)',
      'Side-by-side metric comparison dashboard',
      'Social presence and content frequency evaluation matrix',
      'Pricing tier and offer structure benchmark grid',
      'Actionable recommendations memo highlighting market opportunities'
    ],
    toolsUsed: ['Google Sheets', 'Excel', 'Canva Pro', 'Online Research Tools', 'SimilarWeb (Demo)'],
    turnaroundTime: '48–72 hours per audit report',
    iconName: 'Search'
  },
  {
    id: 'marketing-reporting-analytics',
    number: '15',
    title: 'Marketing Reporting & Analytics',
    division: 'Digital Marketing Support',
    category: 'data',
    shortDescription: 'Consolidated performance dashboards tracking social growth, campaign metrics, traffic trends, and activity logs.',
    detailedDescription: 'Transforms fragmented marketing numbers into clean, visual executive reports. Consolidates follower growth, engagement rates, website clicks, email open rates, and campaign metrics into easy-to-read spreadsheets and visual charts for clear decision-making.',
    businessBenefits: [
      'Clear, transparent visibility into marketing activities and outcomes',
      'Identify top-performing content formats and optimal posting times',
      'Eliminate the headache of deciphering complex ad and analytics dashboards',
      'Receive concise executive summaries highlighting key trends'
    ],
    scopeOfWork: [
      'Extract marketing metrics from Meta, email tools, and social channels',
      'Cleanse data and populate structured tracking spreadsheets',
      'Calculate month-over-month percentage variances and growth rates',
      'Design intuitive visual charts (traffic sources, follower velocity)',
      'Compile executive summary memos detailing activity highlights'
    ],
    deliverables: [
      'Monthly marketing performance dashboard (Sheets / Excel)',
      'Engagement, reach, and follower growth visual trend charts',
      'Channel traffic attribution comparison table',
      'Campaign activity and change log documentation',
      'Executive performance summary briefing memo'
    ],
    toolsUsed: ['Google Sheets', 'Microsoft Excel', 'Meta Insights', 'Looker Studio', 'Notion'],
    turnaroundTime: 'Weekly & Monthly Reporting Cycles',
    iconName: 'BarChart3'
  },
  {
    id: 'email-marketing-support',
    number: '16',
    title: 'Email Marketing Support',
    division: 'Digital Marketing Support',
    category: 'marketing',
    shortDescription: 'Newsletter template formatting, email copywriting assistance, subscriber list hygiene, and broadcast scheduling.',
    detailedDescription: 'Provides hands-on administrative and design coordination for email campaigns. Formats mobile-responsive email layouts in Mailchimp or Brevo, drafts engaging subject lines and body copy, cleans subscriber lists, tests links, and schedules broadcasts for optimal deliverability.',
    businessBenefits: [
      'Consistently nurture email subscribers with polished, professional broadcasts',
      'Maintain high sender reputation with clean, segmented contact lists',
      'Mobile-responsive email designs that look crisp across all email clients',
      'Track open and click-through metrics to continuously refine campaigns'
    ],
    scopeOfWork: [
      'Design responsive, branded email templates with clear CTA buttons',
      'Draft and format email newsletter copy, subject lines, and preview text',
      'Segment subscriber lists, remove bounced addresses, and test rendering',
      'Schedule automated broadcasts per marketing calendar guidelines',
      'Track post-send open rates, link clicks, and subscriber feedback'
    ],
    deliverables: [
      'Responsive branded email newsletter template',
      'Drafted email copy with A/B subject line alternatives',
      'Cleaned, tagged subscriber list structure',
      'Post-send email analytics tracking spreadsheet',
      'Broadcast checklist and deliverability test log'
    ],
    toolsUsed: ['Mailchimp', 'Brevo (Demo)', 'Canva Pro', 'Google Docs', 'Google Sheets'],
    turnaroundTime: '24–48 hours per campaign broadcast',
    iconName: 'Megaphone',
    administrativeClarification: 'Administrative Scope Clarification: I provide structured operational, organizational, and coordination support for digital marketing workflows. This includes scheduling approved content, formatting graphics in Canva, tracking leads, organizing campaign files, and compiling performance reports. I do not provide SEO services, advanced paid advertising strategy, media spend management, or ad account growth guarantees.'
  }
];
