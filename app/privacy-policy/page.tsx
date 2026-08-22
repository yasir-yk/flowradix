import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Database,
  Globe,
  Bell,
  Mail,
  MapPin,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for FlowRadix and its integrated applications (including ChatRadix, Shopify Plugins, and Meta API services).",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 22, 2026";

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden mb-10">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-44 h-44 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 text-teal-600 dark:text-teal-400 font-semibold text-xs tracking-wider uppercase mb-3">
              <Shield className="w-4 h-4" />
              <span>Trust, Transparency & Security</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              This Privacy Policy explains how <strong>FlowRadix</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, protects, and handles information across our website (<strong>flowradix.com</strong>), flagship products (including <strong>ChatRadix</strong>), custom applications, and e-commerce plugin integrations.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Policy Content Sections */}
          <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            
            {/* Section 1: Overview */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-base">
                <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <Eye className="w-4 h-4" />
                </div>
                <h2>1. Information We Collect</h2>
              </div>
              <p>
                We only collect information that is strictly necessary to deliver, maintain, and optimize our services. Information may include:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-slate-900 dark:text-white">Direct Inquiries & Project Requests:</strong> Name, business email address, company name, project details, budget range, and timeline submitted via our contact forms.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Application & Plugin Data (ChatRadix & Custom Apps):</strong> Operational metadata, webhook payloads, integration tokens, and platform identifiers (e.g., Shopify store domain, WooCommerce endpoint, Meta Business Account IDs) required to synchronize catalogs and automate messaging workflows.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white">Technical & Usage Telemetry:</strong> Anonymized log files, browser type, device information, IP address, and response latencies to safeguard infrastructure and troubleshoot performance.
                </li>
              </ul>
            </section>

            {/* Section 2: How We Use Information */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-base">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <FileText className="w-4 h-4" />
                </div>
                <h2>2. How We Use Your Information</h2>
              </div>
              <p>
                The information collected is used solely for the following legitimate purposes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  "Delivering and maintaining ChatRadix messaging and automation",
                  "Responding to inquiries, quotes, and engineering consultations",
                  "Authorizing and verifying secure API and webhook connections",
                  "Preventing abuse, fraud, and unauthorized system access",
                  "Complying with applicable legal and regulatory obligations",
                  "Optimizing speed, reliability, and backend infrastructure",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: WhatsApp & Meta Platform API Compliance */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-base">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Globe className="w-4 h-4" />
                </div>
                <h2>3. Meta Platform & WhatsApp API Compliance</h2>
              </div>
              <p>
                Our flagship product <strong>ChatRadix</strong> integrates directly with the Meta Cloud API and WhatsApp Business Platform. We strictly comply with Meta Developer Policies:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>We do not sell, rent, or transfer customer conversational data or phone numbers to third-party data brokers or advertising networks.</li>
                <li>Data transmitted through WhatsApp webhooks is processed securely in transit via TLS 1.3 and validated using HMAC SHA-256 signatures.</li>
                <li>Access tokens and API credentials are kept encrypted at rest using industry-grade AES-256 encryption standards.</li>
              </ul>
            </section>

            {/* Section 4: Data Retention & Security */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-base">
                <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <Lock className="w-4 h-4" />
                </div>
                <h2>4. Data Storage & Security Controls</h2>
              </div>
              <p>
                We implement robust technical and organizational security measures to protect your personal data from unauthorized access, loss, or alteration. These include zero-trust access policies, encrypted databases, rate limiting, and regular security audits.
              </p>
              <p>
                Data is retained only as long as necessary to provide the services or until you request its deletion.
              </p>
            </section>

            {/* Section 5: Your Rights & Data Deletion */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-base">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Database className="w-4 h-4" />
                </div>
                <h2>5. User Rights & Data Deletion Requests</h2>
              </div>
              <p>
                Regardless of your location, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Request access to personal information we hold about you.</li>
                <li>Request rectification or correction of inaccurate data.</li>
                <li>Request permanent deletion of your data and associated application tokens.</li>
                <li>Opt out of any marketing or non-essential email notifications.</li>
              </ul>
              <p className="pt-2">
                To submit a data access or deletion request, please reach out to us directly at{" "}
                <a href="mailto:contact@flowradix.com" className="text-teal-600 dark:text-teal-400 font-semibold underline">
                  contact@flowradix.com
                </a>.
              </p>
            </section>

            {/* Section 6: Cookies & Tracking */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold text-base">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Bell className="w-4 h-4" />
                </div>
                <h2>6. Cookies & Tracking Technologies</h2>
              </div>
              <p>
                We use essential cookies strictly to maintain session state, theme preferences (Dark / Light mode), and CSRF protection. We do not employ third-party tracking or behavioral advertising pixels.
              </p>
            </section>

            {/* Section 7: Contact Information */}
            <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-teal-400 font-bold text-base">
                <div className="p-2 rounded-xl bg-teal-500/20 text-teal-400">
                  <Mail className="w-4 h-4" />
                </div>
                <h2>7. Contact & Official Address</h2>
              </div>
              <p className="text-slate-300 text-sm">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our team:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
                  <div className="text-xs font-semibold text-teal-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Physical Office Address</span>
                  </div>
                  <div className="text-xs text-slate-200">
                    FlowRadix Engineering<br />
                    House no. 05 Mehtab St. Chohan Rd IslamPura
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
                  <div className="text-xs font-semibold text-teal-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Electronic Mail</span>
                  </div>
                  <div className="text-xs text-slate-200">
                    <a href="mailto:contact@flowradix.com" className="hover:underline text-teal-300">
                      contact@flowradix.com
                    </a>
                    <br />
                    <a href="https://flowradix.com" className="hover:underline text-slate-400">
                      https://flowradix.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
