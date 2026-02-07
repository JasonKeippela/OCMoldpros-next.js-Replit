import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mold Prevention San Clemente | Home Inspector',
  description: 'Mold prevention inspections in San Clemente. Find moisture risks, fix easy problems early, and avoid costly mold damage in your coastal home.',
}

export default function MoldPreventionPage() {
  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Mold Prevention</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mold Prevention San Clemente</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Stop it before it starts</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-gray">
          <p>Most mold problems we see in San Clemente didn&apos;t start as a &quot;mold problem&quot;. It started as a little moisture. A small leak. A bathroom fan nobody uses. A gutter that overflows in the rain. Then months go by… and now it&apos;s a smell, a stain, or someone not feeling good.</p>

          <p>A <strong>mold prevention inspection in San Clemente</strong> is basically a smart checkup for the house. Find the moisture habits, fix the easy stuff, and avoid the expensive stuff later.</p>

          <p>People usually ask us:</p>
          <ul>
            <li>&quot;How do I keep mold from coming back?&quot;</li>
            <li>&quot;What do I do if my house always smells musty?&quot;</li>
            <li>&quot;Is my bathroom setup causing mold?&quot;</li>
            <li>&quot;Is coastal air making this worse?&quot;</li>
          </ul>

          <p>Most of the time, the fix is not crazy. It&apos;s just the right checklist.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Mold Prevention</h2>

          <p>Mold prevention is about moisture control. Mold can&apos;t grow without moisture.</p>

          <p>Here are the main things we look for and talk through during mold prevention work:</p>
          <ul>
            <li>High humidity inside the home (especially bedrooms and closets)</li>
            <li>Bathrooms with weak vent fans or poor airflow</li>
            <li>Showers with missing caulk or gaps in grout</li>
            <li>Plumbing drips under sinks and behind toilets</li>
            <li>Window condensation and foggy glass issues</li>
            <li>Attic ventilation problems and roof leak risk spots</li>
            <li>Crawlspace moisture and poor drainage outside</li>
            <li>HVAC drain line issues and dirty coils that hold moisture</li>
          </ul>

          <p>We&apos;ll point out what&apos;s low-cost and what&apos;s &quot;hey don&apos;t ignore this&quot; because it will turn into damage.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Home Inspector</h2>

          <p>A mold prevention visit works best when it&apos;s done by a <strong>home inspector</strong> who actually understands how houses take on moisture.</p>

          <p>During a prevention-focused inspection, we check the usual high-risk areas:</p>
          <ul>
            <li>Bathrooms (fans, showers, sinks, toilet bases)</li>
            <li>Kitchen sink, dishwasher area, fridge water line area</li>
            <li>Laundry area (hookups, drain, pan, venting)</li>
            <li>Attic (roof penetrations, vents, insulation gaps, bath vent terminations)</li>
            <li>Crawlspace (if accessible) for damp soil, vents, vapor barrier basics</li>
            <li>Windows and sliders for staining, gaps, and condensation patterns</li>
            <li>Exterior drainage, gutters, downspouts, slope away from the house</li>
          </ul>

          <p>This stuff is boring… but boring is good. Boring houses don&apos;t grow mold.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Easy Mold Prevention Tips for San Clemente Homes</h2>

          <p>Here&apos;s what helps the most for coastal homes. These are the same things we tell friends and family.</p>
          <ul>
            <li>Run bathroom fans for 20 minutes after showers (or set a timer switch)</li>
            <li>Keep indoor humidity around 45–55% if you can</li>
            <li>Don&apos;t push furniture tight against exterior walls (let it breathe)</li>
            <li>If a closet smells musty, add airflow (louvered doors or small vent solutions)</li>
            <li>Fix small leaks fast (don&apos;t &quot;watch it&quot; for weeks)</li>
            <li>Keep gutters clear before winter rains</li>
            <li>Make sure downspouts push water away from the house</li>
            <li>If you have recurring condensation, address airflow + humidity, not just wiping windows</li>
          </ul>

          <p>If you&apos;ve had mold before, prevention matters even more. Mold tends to come back when the moisture pattern never got fixed.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Common Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Do I need mold prevention if I&apos;ve never had mold?</h3>
              <p>If you&apos;re in San Clemente and you have coastal moisture, it&apos;s smart. Prevention is cheaper than repairs.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">What&apos;s the biggest cause of mold in homes here?</h3>
              <p>Bathrooms and small leaks. Also poor drainage outside after rains.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Can I prevent mold without a dehumidifier?</h3>
              <p>Sometimes yes, sometimes no. Depends on the home. Venting and airflow can solve a lot, but humidity is still king.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Does bleach prevent mold?</h3>
              <p>Not really. Bleach might clean surface staining, but it doesn&apos;t fix the moisture problem that caused it.</p>
            </div>
          </div>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">What you get after the visit</h2>

          <p>You get clear notes and a simple action list you can follow. Usually it&apos;s:</p>
          <ul>
            <li>quick fixes you can do right away</li>
            <li>repairs to schedule soon</li>
            <li>longer-term upgrades that help (if needed)</li>
          </ul>

          <p>No scare tactics. Just a plan.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Scheduling Mold Prevention San Clemente</h2>

          <p>If your home has that musty smell, if you&apos;ve had leaks, or if you just want to keep your place in good shape… mold prevention is a smart move.</p>

          <p>Catch the moisture habits early, fix the easy stuff, and avoid the mess later.</p>
        </div>
      </section>

      <section className="py-20 bg-ocean-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Inspection Today</h2>
          <p className="text-xl text-ocean-100 mb-8">
            Contact us to learn more about our services or schedule your mold inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9493715934" className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg">
              Call for FREE Consultation
            </a>
            <Link href="/contact" className="px-8 py-4 bg-ocean-600 text-white border-2 border-white rounded-lg hover:bg-ocean-800 transition-colors font-semibold text-lg">
              Get Free Quote now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
