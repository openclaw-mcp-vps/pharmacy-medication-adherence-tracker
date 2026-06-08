import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedAdhere — Medication Adherence Tracker for Pharmacies',
  description: 'Help patients stick to medication schedules with smart reminders. Pharmacy dashboard, patient portal, and automated SMS/email reminders.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5884377e-dcac-4f74-865e-bbf131debd46"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
