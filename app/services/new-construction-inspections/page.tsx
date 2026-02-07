import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Construction Inspections San Clemente | Home Inspector',
  description: 'New construction inspections in San Clemente by a local home inspector. Pre-drywall, final walkthrough, and 11-month warranty inspections for new builds.',
}

export default function NewConstructionInspectionsPage() {
  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">New Construction Inspections</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">New Construction Inspections San Clemente</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Catch the stuff that gets missed</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-gray">
          <p>New homes are supposed to be &quot;perfect&quot;, right? But we&apos;ve seen way too many brand new builds in and around San Clemente that had issues from day one. Not because the builder is evil. It&apos;s usually because things move fast, subs rotate in and out, and little details get skipped.</p>

          <p>A <strong>new construction inspection in San Clemente</strong> is how you catch problems before you sign off, before drywall gets closed up, and before that &quot;small&quot; issue turns into a giant expensive one later.</p>

          <p>A lot of people call us after they move in and say:</p>
          <ul>
            <li>&quot;Why is this window leaking already?&quot;</li>
            <li>&quot;Why does the shower smell musty?&quot;</li>
            <li>&quot;Why is the stucco cracked this soon?&quot;</li>
            <li>&quot;Is this normal or should I be worried?&quot;</li>
          </ul>

          <p>Most of the time, it&apos;s fixable… if you find it early.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">New Construction Inspections</h2>

          <p>A new construction inspection is a detailed look at the home while it&apos;s being built, or right before you close, or both.</p>

          <p>Common phases we inspect:</p>
          <ul>
            <li><strong>Pre-drywall inspection</strong> (before insulation and drywall go up)</li>
            <li><strong>Final walkthrough inspection</strong> (near completion / before closing)</li>
            <li><strong>11-month warranty inspection</strong> (before your builder warranty runs out)</li>
          </ul>

          <p>We check the stuff buyers usually don&apos;t notice:</p>
          <ul>
            <li>Roof and flashing details</li>
            <li>Window install and waterproofing basics</li>
            <li>Plumbing leaks and water heater setup</li>
            <li>Bathroom venting and moisture risk spots</li>
            <li>HVAC basics, drains, and airflow red flags</li>
            <li>Attic and crawl areas (when accessible)</li>
            <li>Exterior drainage patterns and grading</li>
            <li>Doors, locks, safety items, and finish issues</li>
          </ul>

          <p>If something looks off, we document it clearly so you can hand it to the builder. Simple. Clean. No drama.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Home Inspector</h2>

          <p>This is where a good <strong>home inspector</strong> helps you a ton. Builders have their own inspections. City has their inspections. But those are not the same thing as someone working for YOU, walking the property with your best interest in mind.</p>

          <p>As a home inspector doing new construction inspections in San Clemente, we look for:</p>
          <ul>
            <li>Water entry risks (even tiny ones)</li>
            <li>Missing caulk, gaps, or bad seals</li>
            <li>Mis-installed vents or exhaust fans</li>
            <li>Poor drainage that pushes water toward the house</li>
            <li>Attic issues like disconnected ducts or insulation gaps</li>
            <li>Plumbing and supply line problems under sinks and behind walls (where we can access)</li>
          </ul>

          <p>And yeah, sometimes it&apos;s small stuff. But small stuff piles up. You want it on paper before closing day.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Why this matters in San Clemente</h2>

          <p>San Clemente has coastal moisture, marine layer, and salty air. New homes here can still get moisture problems fast if things aren&apos;t sealed right.</p>

          <p>We see trouble spots show up around:</p>
          <ul>
            <li>Windows and sliders facing ocean air</li>
            <li>Stucco hairline cracks that turn into water entry</li>
            <li>Bathrooms with weak venting</li>
            <li>Laundry rooms with sloppy drain installs</li>
            <li>Garages and converted spaces that don&apos;t breathe right</li>
          </ul>

          <p>New construction inspections catch these patterns early. That&apos;s the whole point.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Common Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Do I really need a new construction inspection if it&apos;s a brand new home?</h3>
              <p>Honestly, yes. &quot;New&quot; does not mean &quot;no problems.&quot; It means the problems are easier to fix right now.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Will the builder get mad?</h3>
              <p>Most good builders don&apos;t. They may not love it, but a clean punch list helps everyone. You&apos;re not attacking them, you&apos;re protecting your investment.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">When should I schedule it?</h3>
              <p>Best time is pre-drywall and again before closing. If you can only do one, do the final before closing.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">What if I already closed?</h3>
              <p>Then do an 11-month warranty inspection before your warranty ends. That one saves people big money all the time.</p>
            </div>
          </div>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">What you get after the inspection</h2>

          <p>You&apos;ll get clear notes and photo documentation you can share with your builder or project manager. No weird language. No &quot;maybe&quot;. Just what we saw and why it matters.</p>

          <p>We&apos;ll also tell you what&apos;s urgent vs what&apos;s just cosmetic.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Scheduling New Construction Inspections San Clemente</h2>

          <p>If you&apos;re building in San Clemente, or buying a new build, or you&apos;re near that final walkthrough… don&apos;t go in blind.</p>

          <p>A new construction inspection is one of the best &quot;small&quot; costs you can pay to avoid a huge cost later.</p>

          <p>Book it, get the list, hand it to the builder, and move in with a lot more peace.</p>
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
