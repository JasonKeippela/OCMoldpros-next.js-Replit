import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rental Property Inspections San Clemente | Home Inspector',
  description: 'Rental property inspections in San Clemente for landlords, tenants, and property managers. Move-in, move-out, and mid-lease inspections with clear documentation.',
}

export default function RentalPropertyInspectionsPage() {
  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Rental Property Inspections</li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-ocean-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Rental Property Inspections San Clemente</h1>
          <p className="text-xl text-gray-600 max-w-3xl">Protect your place (and your sanity)</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-gray">
          <p>Rentals can be great… until something breaks, leaks, or turns into a big argument. We get calls from landlords, property managers, and tenants all the time in San Clemente when someone says, &quot;This wasn&apos;t like this when I moved in.&quot;</p>

          <p>A <strong>rental property inspection in San Clemente</strong> helps you get the facts on paper. Before a tenant moves in, after they move out, or when there&apos;s a problem in the middle and nobody agrees on what&apos;s real.</p>

          <p>People usually reach out when:</p>
          <ul>
            <li>There&apos;s a musty smell and someone&apos;s worried about mold</li>
            <li>A tenant says &quot;the bathroom fan doesn&apos;t work&quot; and now there&apos;s moisture damage</li>
            <li>You want documentation before move-in or after move-out</li>
            <li>A leak happened and you want to know what got impacted</li>
            <li>You&apos;re trying to avoid a he said / she said situation</li>
          </ul>

          <p>Simple goal: clear notes, photos, and a straight answer.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Rental Property Inspections</h2>

          <p>Rental property inspections are usually done in 3 common situations:</p>

          <p><strong>1) Move-in inspection</strong><br />This is the baseline. We document condition, moisture risk areas, and obvious issues so everyone starts clean.</p>

          <p><strong>2) Mid-lease problem inspection</strong><br />Something happens (leak, smell, staining, complaints). We inspect, document, and help point to what&apos;s causing it.</p>

          <p><strong>3) Move-out inspection</strong><br />This helps confirm what changed and what didn&apos;t. Also helps with planning repairs fast so you can re-rent quicker.</p>

          <p>What we typically inspect in a rental:</p>
          <ul>
            <li>Bathrooms (showers, sinks, fans, caulk, moisture signs)</li>
            <li>Kitchen sink and plumbing</li>
            <li>Laundry hookups and drain pans (if present)</li>
            <li>Windows and sliders (water staining, draft gaps, poor seals)</li>
            <li>Walls/ceilings for stains, bubbling paint, soft drywall</li>
            <li>HVAC basics and visible vent issues</li>
            <li>Exterior entry points, drainage direction, and obvious water paths</li>
            <li>Garage areas (if attached), especially water heater + laundry zones</li>
          </ul>

          <p>If there&apos;s a concern about air quality or moisture, we&apos;ll document what we see and explain what it could mean.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Home Inspector</h2>

          <p>Having a <strong>home inspector</strong> involved with rental property inspections can save you money and headaches. Because most rental problems start small and go unnoticed until someone&apos;s mad.</p>

          <p>As a home inspector, we&apos;re looking for:</p>
          <ul>
            <li>Leaks that aren&apos;t obvious yet</li>
            <li>Moisture signs that show up before visible mold</li>
            <li>Poor venting (bathrooms are the big one)</li>
            <li>Drainage and exterior water issues that lead to interior problems</li>
            <li>&quot;Quick fixes&quot; that weren&apos;t really fixed (patch paint over stains, loose caulk, etc.)</li>
          </ul>

          <p>We don&apos;t take sides. We document the condition and help you understand what&apos;s likely going on.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Why rentals in San Clemente get tricky</h2>

          <p>San Clemente rentals deal with the same coastal stuff as every other home here: marine layer, salty air, cool nights, and moisture that creeps into places you don&apos;t expect.</p>

          <p>Common problem zones we see in rentals:</p>
          <ul>
            <li>Bathrooms with weak vent fans (or tenants not using them)</li>
            <li>Sliders and windows that leak in winter rains</li>
            <li>Condos where plumbing issues from upstairs units show up below</li>
            <li>Older beach-area units with old caulk, old seals, and hidden staining</li>
            <li>Laundry closets that trap humidity</li>
          </ul>

          <p>Rental property inspections catch the patterns early, before it turns into a bigger repair or a bigger fight.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Common Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Do I need a rental inspection if the unit looks fine?</h3>
              <p>If you want a real baseline, yes. &quot;Looks fine&quot; can still hide moisture issues, slow leaks, or poor venting.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Is this for landlords only?</h3>
              <p>No. Tenants call too, especially when they&apos;re feeling symptoms or worried about air quality.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Can you do this fast?</h3>
              <p>Usually yes, depending on schedule. Most rental situations are time-sensitive.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Will you tell me who caused the damage?</h3>
              <p>We document condition and likely causes based on what we see. We&apos;re not a courtroom. But clear documentation helps a lot.</p>
            </div>
          </div>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">What you get after the inspection</h2>

          <p>You get a clear summary and photo documentation you can use for:</p>
          <ul>
            <li>Tenant communication</li>
            <li>Maintenance planning</li>
            <li>Property manager records</li>
            <li>Repair planning before re-renting</li>
            <li>Peace of mind (seriously)</li>
          </ul>

          <p>We also tell you what&apos;s urgent vs what can wait.</p>

          <hr className="my-10" />

          <h2 className="text-2xl font-bold text-gray-900">Scheduling Rental Property Inspections San Clemente</h2>

          <p>If you own rentals in San Clemente, manage them, or live in one and you&apos;re worried about moisture, leaks, or &quot;something in the air&quot;… don&apos;t guess.</p>

          <p>A rental property inspection gets you clear info so you can move forward the right way.</p>

          <p>Get the facts. Fix what needs fixing. Keep the place healthy and avoid the chaos.</p>
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
