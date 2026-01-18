import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Privacy Policy - SpecSnap",
    description: "SpecSnap Privacy Policy - How we handle your data",
};

export default function PrivacyPage() {
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
                    Privacy Policy
                </h1>

                <p className="text-zinc-400 mb-8">
                    Last updated: January 18, 2026
                </p>

                <div className="space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Overview</h2>
                        <p>
                            SpecSnap ("we", "our", or "us") is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, and safeguard your information
                            when you use our Chrome extension and related services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>

                        <h3 className="text-lg font-medium text-white mt-4 mb-2">2.1 Data Stored Locally</h3>
                        <p className="mb-4">
                            SpecSnap is designed with privacy in mind. All screenshots and recordings are
                            <strong className="text-white"> stored locally on your device</strong> using browser storage (IndexedDB).
                            We do not have access to your captured content.
                        </p>

                        <h3 className="text-lg font-medium text-white mt-4 mb-2">2.2 Account Information</h3>
                        <p className="mb-4">
                            If you choose to sign in with Google OAuth, we collect:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Email address</li>
                            <li>Display name</li>
                            <li>Profile picture URL</li>
                        </ul>
                        <p className="mt-4">
                            This information is used solely for account management and subscription verification.
                        </p>

                        <h3 className="text-lg font-medium text-white mt-4 mb-2">2.3 Subscription Data</h3>
                        <p>
                            If you subscribe to Premium or Pro plans, we process payment through LemonSqueezy.
                            We store subscription status and plan type to provide appropriate features.
                            We do not store your payment card information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>To provide and maintain the SpecSnap service</li>
                            <li>To manage your account and subscription</li>
                            <li>To provide customer support</li>
                            <li>To send important service-related notifications</li>
                            <li>To improve our product and user experience</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Google Drive Integration</h2>
                        <p>
                            If you use the Google Drive upload feature (Pro plan), we request access to upload files
                            to your Google Drive. We use the limited <code className="bg-zinc-800 px-1 rounded">drive.file</code> scope,
                            which only allows access to files that SpecSnap creates. We cannot access any other files in your Drive.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Data Sharing</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties.
                            We may share information only in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                            <li>With service providers who assist in operating our service (Supabase, LemonSqueezy)</li>
                            <li>If required by law or to protect our rights</li>
                            <li>With your explicit consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your information.
                            Your local data is stored in your browser's protected storage.
                            Cloud communications are encrypted using HTTPS/TLS.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights</h2>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Access your personal data</li>
                            <li>Request deletion of your account and associated data</li>
                            <li>Export your data</li>
                            <li>Opt out of promotional communications</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Children's Privacy</h2>
                        <p>
                            SpecSnap is not intended for use by children under 13 years of age.
                            We do not knowingly collect personal information from children under 13.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes
                            by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
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
