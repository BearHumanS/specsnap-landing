import { Footer } from "@/components/Footer";
import { ArrowRight, Check, Zap, Image as ImageIcon, Layout, Move } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px]" />
        
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            Version 2.0 Now Available
          </div>
          
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Capture Beautiful Screen Recordings & Screenshots
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 mb-10 leading-relaxed">
            Create professional-grade screen captures in seconds. Add studio-quality backgrounds, 
            smooth zoom effects, and edit instantly—all within your browser.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://chrome.google.com/webstore/detail/your-extension-id"
              className="inline-flex items-center rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:scale-105 hover:shadow-blue-600/40"
            >
              Add to Chrome — It's Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-zinc-800"
            >
              Verify Quality
            </Link>
          </div>

          {/* Video Placeholder */}
          <div className="mt-20 relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-xl">
             <div className="aspect-video w-full rounded-xl bg-zinc-950 overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                   </div>
                </div>
                <div className="absolute bottom-4 left-4 text-sm text-zinc-500">Preview Placeholder</div>
             </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-white/5 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-zinc-500 mb-8">TRUSTED BY TEAMS AT</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                {/* Placeholders for logos */}
                {['Acme', 'GlobalCorp', 'Infinite', 'Solis'].map((name) => (
                    <span key={name} className="text-xl font-bold font-mono text-zinc-400">{name}</span>
                ))}
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Everything you need to showcase your work</h2>
            <p className="text-zinc-400">SpecSnap gives you superpowers for your documentation and demos.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <ImageIcon className="h-6 w-6 text-pink-500" />,
                title: "Beautiful Backgrounds",
                desc: "Automatically add gradients and padding to make your screenshots pop."
              },
              {
                icon: <Move className="h-6 w-6 text-blue-500" />,
                title: "Zoom & Pan Effects",
                desc: "Create smooth, kinematic recordings that follow your mouse cursor."
              },
              {
                icon: <Zap className="h-6 w-6 text-yellow-500" />,
                title: "Instant Editing",
                desc: "Crop, blur sensitive info, and annotate directly in the browser."
              }
            ].map((feature, i) => (
              <div key={i} className="group relative rounded-2xl border border-white/10 bg-zinc-900/50 p-8 hover:bg-zinc-900 transition-colors">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-zinc-800 p-3 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 sm:py-32 bg-zinc-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Simple, transparent pricing</h2>
             <p className="text-zinc-400">Start for free, upgrade when you need more power.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
             {/* Free Plan */}
             <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
               <h3 className="text-lg font-semibold text-zinc-300">Free</h3>
               <div className="mt-4 flex items-baseline">
                 <span className="text-4xl font-bold text-white">$0</span>
                 <span className="ml-1 text-sm text-zinc-500">/forever</span>
               </div>
               <p className="mt-4 text-sm text-zinc-400">Perfect for quick screenshots.</p>
               <Link href="#" className="mt-6 block w-full rounded-lg bg-white/10 px-4 py-2.5 text-center text-sm font-semibold hover:bg-white/20">Get Started</Link>
               <ul className="mt-8 space-y-3 text-sm text-zinc-400">
                 {['Unlimited Screenshots', 'Basic Editing', '720p Recording', 'Export to PNG'].map(item => (
                   <li key={item} className="flex items-center"><Check className="mr-2 h-4 w-4 text-blue-500" />{item}</li>
                 ))}
               </ul>
             </div>

             {/* Pro Plan */}
             <div className="relative rounded-2xl border border-blue-600 bg-zinc-900 p-8 shadow-2xl shadow-blue-900/20 transform scale-105 z-10">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white"> Most Popular </div>
               <h3 className="text-lg font-semibold text-white">Pro</h3>
               <div className="mt-4 flex items-baseline">
                 <span className="text-4xl font-bold text-white">$12</span>
                 <span className="ml-1 text-sm text-zinc-500">/month</span>
               </div>
               <p className="mt-4 text-sm text-zinc-400">For creators and power users.</p>
               <Link href="#" className="mt-6 block w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-500">Start Free Trial</Link>
               <ul className="mt-8 space-y-3 text-sm text-zinc-400">
                 {['Everything in Free', '4K Recording', 'Origin Quality (60fps)', 'No Watermark', 'Cloud Storage'].map(item => (
                   <li key={item} className="flex items-center"><Check className="mr-2 h-4 w-4 text-blue-500" />{item}</li>
                 ))}
               </ul>
             </div>

             {/* Team Plan */}
             <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
               <h3 className="text-lg font-semibold text-zinc-300">Team</h3>
               <div className="mt-4 flex items-baseline">
                 <span className="text-4xl font-bold text-white">$49</span>
                 <span className="ml-1 text-sm text-zinc-500">/month</span>
               </div>
               <p className="mt-4 text-sm text-zinc-400">Unified billing & roles.</p>
               <Link href="#" className="mt-6 block w-full rounded-lg bg-white/10 px-4 py-2.5 text-center text-sm font-semibold hover:bg-white/20">Contact Sales</Link>
               <ul className="mt-8 space-y-3 text-sm text-zinc-400">
                 {['Everything in Pro', '5+ Members', 'Centralized Billing', 'Priority Support', 'SSO'].map(item => (
                   <li key={item} className="flex items-center"><Check className="mr-2 h-4 w-4 text-blue-500" />{item}</li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}