import { Workflow } from '@/types';

export const workflows: Workflow[] = [
  {
    id: 1,
    title: "Invoice Processing Automation",
    description: "Automated invoice extraction and approval workflow",
    screenshot: "https://placehold.co/1200x800/4F46E5/FFFFFF?text=n8n+Workflow+1",
    function: "Extracts invoice data from emails, validates information, updates accounting system, and sends notifications",
    useCase: "Accounts Payable Automation",
    triggers: ["Email received with invoice attachment"],
    actions: [
      "Extract invoice data using AI",
      "Validate vendor information",
      "Update QuickBooks",
      "Send approval request to manager",
      "Notify team via Slack"
    ],
    integrations: ["Gmail", "OpenAI", "QuickBooks", "Slack"]
  },
  {
    id: 2,
    title: "Customer Onboarding Workflow",
    description: "Automated customer onboarding process from signup to activation",
    screenshot: "https://placehold.co/1200x800/99F6E4/0F172A?text=n8n+Workflow+2",
    function: "Automates welcome emails, account setup, training schedule, and CRM updates for new customers",
    useCase: "Customer Success Automation",
    triggers: ["New customer signup"],
    actions: [
      "Send welcome email series",
      "Create customer account",
      "Schedule onboarding call",
      "Add to CRM",
      "Assign customer success manager"
    ],
    integrations: ["Stripe", "SendGrid", "Salesforce", "Calendly"]
  },
  {
    id: 3,
    title: "Social Media Publishing",
    description: "Schedule and publish content across multiple social media platforms",
    screenshot: "https://placehold.co/1200x800/0F172A/99F6E4?text=n8n+Workflow+3",
    function: "Manages content calendar, optimizes posting times, publishes to multiple platforms, and tracks engagement",
    useCase: "Social Media Management",
    triggers: ["Scheduled time", "New content in CMS"],
    actions: [
      "Fetch content from CMS",
      "Optimize images",
      "Post to Twitter/X",
      "Post to LinkedIn",
      "Post to Facebook",
      "Track engagement metrics"
    ],
    integrations: ["Contentful", "Twitter API", "LinkedIn", "Facebook", "Google Analytics"]
  }
];
