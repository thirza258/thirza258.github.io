import { useState, useEffect } from "react";

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: "privacy" | "terms";
  onClose: () => void;
}

export const LegalModal = ({
  isOpen,
  initialTab = "privacy",
  onClose,
}: LegalModalProps) => {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-slate-800 dark:text-slate-100">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚖️</span>
            <h2 id="legal-modal-title" className="text-lg font-bold">
              {activeTab === "privacy" ? "Privacy Policy" : "Terms of Service"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 pt-2 bg-slate-50/50 dark:bg-slate-900/20">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`pb-3 px-4 font-semibold text-sm border-b-2 transition-all ${
              activeTab === "privacy"
                ? "border-yellow-500 text-yellow-600 dark:text-yellow-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`pb-3 px-4 font-semibold text-sm border-b-2 transition-all ${
              activeTab === "terms"
                ? "border-yellow-500 text-yellow-600 dark:text-yellow-400"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            Terms of Service
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
            <strong>🔒 100% Fully Self-Hosted &amp; Private:</strong> This portfolio and its associated web platforms are fully self-hosted on private infrastructure. Your browsing sessions and interaction data do not leave our host environment and are never sold, rented, or commercialized.
          </div>

          {activeTab === "privacy" ? (
            <div className="space-y-6">
              <section>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  1. Zero Visitor Surveillance
                </h3>
                <p>
                  This personal portfolio website does not employ tracking cookies, invasive device fingerprinting, or cross-site advertising networks. We do not harvest or sell personal information about visitors.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  2. AI Projects &amp; OpenRouter Provider Disclosure
                </h3>
                <p className="mb-3">
                  Certain interactive engineering showcases and demonstration applications featured across this portfolio (including English Practice, Gemini Japanese, Nevatal AI, Literal Storyboard, and Country-SDG) utilize <strong>OpenRouter</strong> as the backend AI model router and inference provider.
                </p>
                <p className="mb-2">
                  When you submit prompts within those dedicated AI applications, queries are transmitted securely via API to OpenRouter solely to generate model responses:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    OpenRouter Privacy Policy:{" "}
                    <a
                      href="https://openrouter.ai/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-600 dark:text-yellow-400 underline font-medium hover:opacity-80"
                    >
                      https://openrouter.ai/privacy
                    </a>
                  </li>
                  <li>
                    OpenRouter Terms of Service:{" "}
                    <a
                      href="https://openrouter.ai/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-600 dark:text-yellow-400 underline font-medium hover:opacity-80"
                    >
                      https://openrouter.ai/terms
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  3. Contact Forms &amp; Inquiries
                </h3>
                <p>
                  If you contact the author through the contact form, your name, email, and message are used solely to reply directly to your inquiry.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  4. Privacy Inquiries &amp; Contact
                </h3>
                <p>
                  For any privacy questions or data requests regarding this portfolio and self-hosted projects, please email{" "}
                  <a
                    href="mailto:nevatalapp@gmail.com"
                    className="text-yellow-600 dark:text-yellow-400 underline font-medium hover:opacity-80"
                  >
                    nevatalapp@gmail.com
                  </a>.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              <section>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  1. Acceptance &amp; Portfolio Use
                </h3>
                <p>
                  By browsing this portfolio and interactive project showcases, you agree to these Terms of Service. This website serves as a technical portfolio and educational demonstration.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  2. AI Showcase Usage &amp; Third-Party Services
                </h3>
                <p>
                  Demonstrations incorporating AI functionality depend on OpenRouter API endpoints. Availability of live model inference is governed by provider uptime and rate limits. Users must not submit harmful, illegal, or abusive inputs into interactive demo interfaces.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  3. Intellectual Property
                </h3>
                <p>
                  All project source code, written articles, architectural diagrams, and illustrations are the intellectual property of Thirza Ahmad Tsaqif unless otherwise noted under specific open-source licenses (MIT/Apache 2.0).
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  4. Disclaimer
                </h3>
                <p>
                  This website and demonstrated software are provided &ldquo;as is&rdquo; without warranties of any kind regarding suitability for commercial deployment.
                </p>
              </section>

              <section>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  5. Legal Notices &amp; Contact
                </h3>
                <p>
                  For inquiries or legal notices regarding these terms, reach out to{" "}
                  <a
                    href="mailto:nevatalapp@gmail.com"
                    className="text-yellow-600 dark:text-yellow-400 underline font-medium hover:opacity-80"
                  >
                    nevatalapp@gmail.com
                  </a>.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <span className="text-xs text-slate-500 font-mono">
            Effective: November 1, 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
export default LegalModal;
