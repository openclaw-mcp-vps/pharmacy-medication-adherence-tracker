export default function Home() {
  const faqs = [
    {
      q: 'How does the reminder system work?',
      a: 'We send automated SMS and email reminders via Twilio and SendGrid based on each patient\'s medication schedule. Pharmacists configure timing and frequency from the dashboard.'
    },
    {
      q: 'Is patient data HIPAA compliant?',
      a: 'Yes. All data is encrypted at rest and in transit. We follow HIPAA guidelines for PHI handling, access controls, and audit logging.'
    },
    {
      q: 'Can patients track their own adherence?',
      a: 'Absolutely. Each patient gets a secure portal to view their schedule, confirm doses taken, and see their adherence history over time.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Independent Pharmacies
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Help Patients Stick to Their{' '}
          <span className="text-[#58a6ff]">Medication Schedules</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          MedAdhere sends personalized SMS and email reminders, then gives your pharmacy a real-time dashboard to monitor adherence patterns and intervene early.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="#pricing"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            See Pricing
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[['95%', 'Avg adherence lift'], ['2 min', 'Setup per patient'], ['HIPAA', 'Compliant']].map(([stat, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pharmacy Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited patients',
              'SMS & email reminders',
              'Adherence dashboard',
              'Patient self-service portal',
              'HIPAA-compliant storage',
              'Twilio & SendGrid integration',
              'Priority support'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started — $12/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-4">14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} MedAdhere. Built for independent pharmacies.
      </footer>
    </main>
  )
}
