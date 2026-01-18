import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Terms of Service - SpecSnap",
    description: "SpecSnap Terms of Service - Rules for using our service",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>

                <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                    Terms of Service
                </h1>

                <p className="text-zinc-400 mb-8">
                    Last updated: January 18, 2026
                </p>

                <div className="space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By installing or using SpecSnap ("the Extension"), you agree to be bound by these
                            Terms of Service. If you do not agree to these terms, please do not use the Extension.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
                        <p>
                            SpecSnap is a Chrome browser extension that allows you to capture screenshots,
                            record screen content, and edit captured media. The Extension offers both free
                            and paid subscription tiers with varying features.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
                        <p className="mb-4">
                            Some features require you to create an account using Google Sign-In. You are responsible for:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Maintaining the security of your account</li>
                            <li>All activities that occur under your account</li>
                            <li>Notifying us immediately of any unauthorized use</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Subscriptions and Payments</h2>

                        <h3 className="text-lg font-medium text-white mt-4 mb-2">4.1 Billing</h3>
                        <p className="mb-4">
                            Paid subscriptions (Premium and Pro) are billed monthly or annually through LemonSqueezy.
                            Prices are listed in USD and may vary by region.
                        </p>

                        <h3 className="text-lg font-medium text-white mt-4 mb-2">4.2 Cancellation</h3>
                        <p className="mb-4">
                            You may cancel your subscription at any time through the LemonSqueezy customer portal.
                            Your subscription will remain active until the end of the current billing period.
                        </p>

                        <h3 className="text-lg font-medium text-white mt-4 mb-2">4.3 Refunds</h3>
                        <p>
                            Refund requests are handled on a case-by-case basis. Please contact our support team
                            within 14 days of purchase for refund inquiries.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Acceptable Use</h2>
                        <p className="mb-4">You agree not to use SpecSnap to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Violate any applicable laws or regulations</li>
                            <li>Capture or share content without proper authorization</li>
                            <li>Infringe on intellectual property rights of others</li>
                            <li>Capture sensitive personal information without consent</li>
                            <li>Attempt to reverse-engineer or modify the Extension</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Content Ownership</h2>
                        <p>
                            You retain all rights to content you capture using SpecSnap. We do not claim
                            ownership of your screenshots, recordings, or edited media. You are solely
                            responsible for the content you capture and share.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
                        <p>
                            The SpecSnap Extension, including its code, design, and branding, is owned by us
                            and protected by intellectual property laws. You may not copy, modify, or distribute
                            the Extension without our written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Disclaimer of Warranties</h2>
                        <p>
                            SpecSnap is provided "as is" without warranties of any kind. We do not guarantee
                            that the Extension will be error-free, uninterrupted, or meet your specific requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, we shall not be liable for any indirect,
                            incidental, special, or consequential damages arising from your use of the Extension.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. We will notify users of
                            significant changes through the Extension or via email. Continued use of the
                            Extension after changes constitutes acceptance of new terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">11. Termination</h2>
                        <p>
                            We may suspend or terminate your access to SpecSnap at any time for violation of
                            these Terms or for any other reason at our discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">12. Contact</h2>
                        <p>
                            For questions about these Terms, please contact us at:
                        </p>
                        <p className="mt-4">
                            <a href="mailto:support@specsnap.app" className="text-blue-400 hover:text-blue-300">
                                support@specsnap.app
                            </a>
                        </p>
                    </section>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
                    <p>© {new Date().getFullYear()} SpecSnap. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
