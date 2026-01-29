import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const articles: Record<string, {
  title: string
  excerpt: string
  category: string
  date: string
  content: string[]
  image?: string
}> = {
  'why-cleaning-your-washing-machine-matters': {
    title: 'Why Cleaning Your Washing Machine Matters More Than You Think',
    excerpt: 'Modern washing machines create the perfect environment for mold and mildew. Learn a simple 1-week reset protocol to eliminate buildup and keep your laundry fresh.',
    category: 'Prevention',
    date: '2026-01-29',
    image: '/washing-machine-cleaning.jpg',
    content: [
      'Most people assume their washing machine stays clean because it\'s constantly washing clothes. Unfortunately, the opposite is often true.',
      'Modern washing machines—especially high-efficiency and front-loading units—create the perfect environment for buildup: moisture, detergent residue, fabric softener film, skin cells, and lint. Over time, this combination can lead to mold and mildew growth, musty odors transferring to clothing, reduced cleaning performance, and potential air quality concerns inside the home.',
      'If your laundry smells "off" even after washing, or if you notice black residue around the door seal or detergent tray, your washing machine is asking for attention.',
      'The good news? You can clean it thoroughly using simple, affordable ingredients—and a short, focused routine.',
      '## A Deep-Clean Laundry Machine Reset (1-Week Protocol)',
      'This method is designed as a reset, not a forever routine. The goal is to break down biofilm, kill mold and bacteria, and flush residue from places you can\'t see—like internal hoses, drums, and trays.',
      '**What You\'ll Need:** White distilled vinegar (all-purpose), citric acid powder, and washing machine cleaning tablets (active/enzymatic type).',
      '## Step 1: Vinegar Cleaning Cycle (Daily for 7 Days)',
      '**What to do:** Pour vinegar into the detergent tray and the fabric softener tray. Add 2 cups of vinegar directly into the drum. Run the machine on the hottest cleaning or sanitize cycle.',
      '**Why it works:** Vinegar helps break down mineral buildup, soap residue, and mild mold growth—especially in trays and internal lines where moisture lingers.',
      '## Step 2: Citric Acid Cleaning Cycle (Daily for 7 Days)',
      'On the same day, run a second cycle.',
      '**What to do:** Add 2 cups of citric acid powder directly into the drum. Run another hot cleaning or sanitize cycle.',
      '**Why it works:** Citric acid is extremely effective at dissolving scale, biofilm, and residue that vinegar alone may not fully remove. It\'s especially helpful for deep internal buildup.',
      '**Important:** Run vinegar and citric acid in separate cycles, never together.',
      '## Step 3: Cleaning Tablets (Daily for 7 Days)',
      'After completing the vinegar + citric acid week, move to tablets.',
      '**What to do:** Use one washing machine cleaning tablet per day. Run a hot cleaning cycle.',
      '**Why it works:** Cleaning tablets often contain enzymes or oxygen-based cleaners that target organic material, odors, and lingering contamination.',
      '## Monthly Maintenance Going Forward',
      'Once your machine has been reset, maintenance is simple. Each month: run one vinegar cycle, run one citric acid cycle, and run one cleaning tablet cycle. That\'s it.',
      'This keeps residue from rebuilding and helps prevent mold and odor from coming back.',
      '## Extra Tips to Keep Mold From Returning',
      'Leave the washer door open after every load. Remove wet laundry immediately. Wipe down the door gasket and detergent tray weekly. Avoid overusing detergent or fabric softener.',
      'A clean washing machine doesn\'t just protect your clothes—it supports a healthier home environment overall.',
      '## Final Thought',
      'If you\'re proactive about mold prevention in your home, your washing machine shouldn\'t be overlooked. It\'s one of the most moisture-heavy appliances in the house, and when neglected, it can quietly contribute to odors, contamination, and poor indoor air quality.',
      'A little routine maintenance goes a long way.'
    ]
  },
  'how-fast-can-mold-spread-in-home': {
    title: 'How Fast Can Mold Spread in a Home?',
    excerpt: 'Mold can begin growing in as little as 24-48 hours after moisture is introduced. Learn what conditions allow mold to spread quickly and when to call a professional inspector.',
    category: 'Education',
    date: '2026-01-23',
    content: [
      '## What San Clemente & Orange County Homeowners Need to Know',
      'Mold doesn\'t wait around — and that\'s what makes it so dangerous.',
      'One small leak, a little extra humidity, or a musty smell that gets brushed off can turn into a widespread mold problem faster than most homeowners realize. In coastal areas like San Clemente and throughout Orange County, the right conditions for mold growth are often already present.',
      'If you\'ve ever wondered how quickly mold can spread — or whether that smell in your home is something to worry about — this article will walk you through exactly what happens, why it happens, and when it\'s time to call a professional mold inspector.',
      '## How Fast Does Mold Actually Grow?',
      'Under the right conditions, mold can begin growing in as little as 24–48 hours after moisture is introduced.',
      'That moisture might come from a roof or window leak, plumbing leaks behind walls, bathroom or laundry room humidity, condensation from HVAC systems, or flooding and water intrusion.',
      'Once moisture is present, mold spores — which already exist in normal indoor air — settle and begin colonizing surfaces.',
      'The scary part? You don\'t need standing water. Elevated humidity alone can be enough.',
      '## What Conditions Allow Mold to Spread So Quickly?',
      'Mold growth isn\'t random. It follows very predictable environmental patterns.',
      '**Humidity**: When indoor humidity rises above 55–60%, mold growth becomes much more likely. Coastal homes in San Clemente and Orange County often hover near this range without homeowners realizing it.',
      '**Temperature**: Mold thrives between 60°F and 80°F — which happens to be the ideal indoor comfort range for people.',
      '**Organic Materials**: Mold feeds on drywall, wood framing, carpet and padding, furniture, and dust and debris. Once mold starts feeding, it spreads outward — often behind walls, under flooring, and into HVAC systems.',
      '## Why Mold Spreads Beyond the Original Water Source',
      'One of the biggest misconceptions is that mold stays where the leak occurred.',
      'In reality, mold releases microscopic spores into the air, those spores travel through air movement and HVAC systems, and they settle elsewhere and begin growing if conditions allow.',
      'This is why you might see mold in a bedroom even though the original leak was in a bathroom or attic.',
      '## Different Types of Mold Tell Different Stories',
      'Not all mold is the same — and mold reports often reveal how and why a problem developed.',
      '**Aspergillus (Hydrophobic Mold)**: Thrives in high humidity, can grow without direct water exposure, often indicates long-term moisture or humidity issues, and is common in HVAC systems and walls.',
      '**Stachybotrys (Hydrophilic Mold)**: Requires chronic water intrusion, often linked to leaks, flooding, or saturated building materials, and signals a more serious moisture event.',
      'Understanding the type of mold helps pinpoint whether the issue is humidity-driven or caused by an active or past leak. This is why air sampling and proper interpretation matter — not just visual inspection.',
      '## The Musty Smell Warning Sign',
      'A well-maintained home should not smell musty.',
      'If you notice a damp, earthy odor, a smell that comes and goes, odors stronger after rain or humidity, or smells near bathrooms, closets, or HVAC vents — that\'s often mold activity behind walls or under flooring, even if you can\'t see it yet.',
      'By the time mold becomes visible, it\'s usually already well established.',
      '## How Fast Can Mold Spread Through a House?',
      'Once active, mold can colonize multiple rooms in weeks, spread through HVAC systems rapidly, contaminate personal belongings, and create elevated indoor spore counts throughout the home.',
      'This is why early mold inspections are critical — especially if health symptoms or odors are present.',
      '## When Should You Get a Mold Inspection?',
      'You should consider a professional mold inspection if your home has a musty or unexplained odor, you\'ve had leaks, water damage, or past remediation, someone in the home has unexplained symptoms, you\'re buying or selling a home, or you live in a humid coastal environment.',
      '## Why Professional Mold Testing Matters',
      'A proper mold inspection doesn\'t just look for visible growth. It helps identify hidden mold sources, measure airborne spore levels, determine moisture and humidity conditions, and provide guidance on next steps.',
      'At OC Mold Pros, we focus on education, clarity, and actionable findings, not fear-based sales tactics.',
      '## Need Help or Have Questions?',
      'If you\'re concerned about mold in your home — or just want clarity — the best first step is a conversation. Call or text OC Mold Pros at 949-371-5934, or DM us to set up a free 20-minute consultation.',
      'We proudly serve San Clemente and all of Orange County, helping homeowners understand what\'s happening inside their homes and what to do next.'
    ]
  },
  'case-study-mold-discovery-after-holidays-dana-point': {
    title: 'Case Study: Mold Discovery After the Holidays',
    excerpt: 'A Dana Point homeowner returned from holiday travel to find visible mold in two closets. Learn how a roof leak and lack of humidity control created the perfect conditions for Aspergillus growth.',
    category: 'Case Study',
    date: '2026-01-13',
    content: [
      '## Dana Point, California | Part 1 - The Findings',
      '## The Call That Started It All',
      'This case study began with a call from a homeowner in Dana Point, California, just a couple of miles from the ocean. The client explained that their family had been away for about a week and a half over the holidays. When they returned home, they noticed something alarming: visible mold spots in two separate closets on two different floors of the house.',
      'Given the visible mold and recent heavy rains, they wanted answers quickly and scheduled a mold inspection for the very next day.',
      '## Exterior Inspection: Mostly Solid, Minor Vulnerabilities',
      'We began with a full exterior inspection of the home. Overall, the exterior was in good condition. However, there were a couple of light sconces on the exterior walls that needed to be reset and properly caulked at the top. While minor, these openings can allow moisture intrusion over time—especially in coastal environments where wind-driven rain is common.',
      'Nothing on the exterior immediately explained the mold growth, but it did reveal small areas that should be corrected to prevent future moisture problems.',
      '## Interior Findings: Evidence of a Roof Leak',
      'Once inside the home, the picture became clearer.',
      'During the heavy rains over the holidays, a roof leak occurred while the family was away. Water intrusion caused sheetrock damage in a second-floor area, including visible separation and deterioration. With no one home to notice or respond, moisture was able to sit for an extended period of time—creating ideal conditions for mold growth.',
      '## The Primary Issue: Mold Colonization in Two Closets',
      'The most significant findings were in two closets located on different floors of the home. Both areas showed active mold colonization, and sampling confirmed the presence of Aspergillus.',
      'Aspergillus is a common indoor mold that thrives in elevated humidity rather than direct water exposure. This detail matters.',
      'Based on the conditions and homeowner input, it\'s very likely that the HVAC system was turned off while the family was away, there was no air circulation, the home remained dark and stagnant, and humidity levels quietly climbed. In other words, the perfect environment for Aspergillus to grow.',
      '## A Longer Story Than Just One Leak',
      'While the roof leak accelerated the problem, the evidence suggests this wasn\'t a brand-new issue.',
      'The homeowners mentioned that various family members had experienced intermittent health challenges over the years, including headaches, congestion, and general discomfort that seemed to come and go. Nothing severe enough to immediately point to mold—but enough to raise questions in hindsight.',
      'Given the type of mold found and the conditions present, it\'s very possible that Aspergillus had been present at low levels for years, with humidity acting as the constant fuel source.',
      'The holiday leak didn\'t create the problem—it exposed it.',
      '## Why Humidity Control Matters So Much',
      'A helpful way to think about mold is this: Mold is like water in a bathtub. You can keep scooping water out, but if the faucet is still running, the tub will keep filling.',
      'In this home, humidity was the faucet.',
      'Without proper moisture control, mold remediation alone is often temporary. Mold doesn\'t need standing water—just enough moisture in the air to survive and grow.',
      '## The Path Forward: Moisture Reduction First',
      'The primary recommendation for this home was to address the moisture overburden by installing a whole-home dehumidification system.',
      'We\'ve seen this approach work repeatedly, including with another client who installed whole-home dehumidification, reduced indoor humidity to optimal levels, saw mold growth stop, and experienced significant health improvements.',
      'Simply removing excess moisture can halt fungal growth and dramatically improve indoor air quality.',
      '## Restore Your Home. Restore Your Health.',
      'This case perfectly illustrates a simple but powerful truth: When you restore the home, you often restore the health of the people living in it.',
      'Indoor air quality matters—especially in coastal homes where humidity is a constant challenge.',
      '## Part 2: What Happened Next',
      'In Part 2, we\'ll share what steps were taken after the inspection, how humidity control changed the environment, updates on remediation and indoor air quality improvements. More to come.'
    ]
  },
  'understanding-health-effects-mold-holistic-perspective': {
    title: 'Understanding the Health Effects of Mold: A Holistic Perspective',
    excerpt: 'From a homeopathic and naturopathic standpoint, mold exposure can impact overall health in deeper and subtler ways than just structural concerns.',
    category: 'Health',
    date: '2026-01-12',
    content: [
      'When it comes to mold exposure, the conversation often focuses on structural fixes and visible signs. However, from a homeopathic and naturopathic standpoint, it\'s essential to understand how mold can impact overall health in deeper and often subtler ways.',
      '## The Hidden Health Impacts of Mold Exposure',
      'Mold spores can trigger a range of health issues, particularly for individuals with sensitivities, allergies, or pre-existing respiratory conditions. From a holistic health perspective, mold exposure isn\'t just about sneezing or coughing; it can contribute to a cascade of symptoms, including chronic fatigue, headaches, brain fog, and even disruptions to the immune system.',
      '## A Naturopathic Approach to Mold-Related Symptoms',
      'Many natural health practitioners emphasize that mold can act as a hidden stressor on the body. This stress can lead to inflammation and exacerbate underlying conditions. For instance, individuals with mold sensitivity may experience prolonged fatigue that doesn\'t resolve with rest, or cognitive issues that feel like persistent brain fog.',
      'From a holistic standpoint, addressing these symptoms often involves more than just removing the mold. It may include supporting the body\'s detox pathways, using natural anti-inflammatory remedies, and even adopting dietary changes that help the body recover.',
      '## Key Takeaways for Homeowners and Health Enthusiasts',
      'For homeowners dealing with mold, understanding these health impacts is crucial. It\'s not just about fixing a leak or cleaning a wall; it\'s about recognizing that mold can have a real and lasting impact on well-being. Taking a holistic approach—incorporating both professional remediation and supportive health measures—can make all the difference.'
    ]
  },
  'understanding-health-risks-mold-exposure': {
    title: 'Understanding the Health Risks of Mold Exposure',
    excerpt: 'Learn about the potential health effects of mold exposure, who is most at risk, and when to seek professional help.',
    category: 'Health',
    date: '2024-12-15',
    content: [
      'Mold exposure is a concern that affects millions of homeowners each year. Understanding the health risks associated with mold can help you make informed decisions about your home and family\'s well-being.',
      '## Common Health Effects',
      'Exposure to mold can cause a variety of health effects, ranging from mild to severe. Common symptoms include nasal congestion, throat irritation, coughing, wheezing, and eye irritation. For individuals with mold allergies, reactions can be more pronounced.',
      '## Who Is Most at Risk?',
      'Certain groups are more vulnerable to mold-related health issues, including infants and children, elderly individuals, people with respiratory conditions like asthma, those with weakened immune systems, and individuals with mold allergies.',
      '## When to Seek Professional Help',
      'If you or family members experience persistent symptoms that improve when away from home, it may be time to schedule a professional mold inspection. Early detection can prevent more serious health complications and costly remediation.'
    ]
  },
  'signs-hidden-mold-home': {
    title: 'Signs You May Have Hidden Mold in Your Home',
    excerpt: 'Discover the warning signs that could indicate hidden mold growth in your walls, attic, or other concealed areas.',
    category: 'Detection',
    date: '2024-12-10',
    content: [
      'Mold doesn\'t always grow in plain sight. Hidden mold can develop behind walls, under flooring, and in other concealed areas where moisture accumulates.',
      '## Warning Signs to Watch For',
      'Musty or earthy odors in certain areas of your home, visible water stains on walls or ceilings, peeling or bubbling paint or wallpaper, warped or buckled flooring, and increased allergy symptoms when at home.',
      '## Common Hiding Spots',
      'Mold commonly hides behind drywall, under carpets and padding, inside HVAC systems and ductwork, in attics and crawl spaces, and around plumbing fixtures and pipes.',
      '## What to Do If You Suspect Hidden Mold',
      'If you notice any of these warning signs, consider scheduling a professional mold inspection. Our inspectors use thermal imaging and moisture detection equipment to identify hidden mold without invasive testing.'
    ]
  },
  'preventing-mold-growth-coastal-orange-county': {
    title: 'Preventing Mold Growth in Coastal Orange County Homes',
    excerpt: 'Special considerations for homes near the beach, including managing humidity and salt air exposure.',
    category: 'Prevention',
    date: '2024-12-05',
    content: [
      'Living near the beautiful Orange County coastline comes with unique challenges when it comes to mold prevention. The marine layer, salt air, and higher humidity levels require special attention.',
      '## Coastal Climate Challenges',
      'Homes in coastal areas like Newport Beach, Huntington Beach, and Laguna Beach face persistent humidity from the marine layer, salt air that can accelerate wear on building materials, and temperature fluctuations that can cause condensation.',
      '## Prevention Strategies',
      'Maintain indoor humidity below 50%, ensure proper ventilation in bathrooms and kitchens, regularly inspect and maintain weather sealing, use exhaust fans during and after showers, and consider a whole-home dehumidifier.',
      '## Regular Maintenance Tips',
      'Inspect your home seasonally for signs of moisture intrusion, clean gutters and downspouts regularly, check for proper drainage around the foundation, and address any leaks immediately.'
    ]
  },
  'what-to-do-find-mold-home': {
    title: 'What to Do If You Find Mold in Your Home',
    excerpt: 'Step-by-step guide on how to respond when you discover mold, including when to call a professional.',
    category: 'Response',
    date: '2024-11-28',
    content: [
      'Discovering mold in your home can be alarming, but knowing how to respond can help you address the issue effectively and safely.',
      '## Immediate Steps',
      'Don\'t panic—most mold situations are manageable. Avoid disturbing the mold, as this can release spores into the air. Document the affected area with photos. Identify and stop any water sources contributing to the moisture.',
      '## When to DIY vs. Call a Professional',
      'Small areas of mold (less than 10 square feet) on non-porous surfaces can often be cleaned with proper precautions. However, you should call a professional if the affected area is larger than 10 square feet, mold is in HVAC systems, there\'s been significant water damage, or you or family members have health concerns.',
      '## The Importance of Professional Testing',
      'Before and after remediation, professional testing can confirm the type of mold present and verify that remediation was successful. This provides peace of mind and documentation for your records.'
    ]
  },
  'difference-mold-inspection-testing': {
    title: 'The Difference Between Mold Inspection and Mold Testing',
    excerpt: 'Understanding the different types of mold assessment services and which one you need.',
    category: 'Education',
    date: '2024-11-20',
    content: [
      'When dealing with potential mold issues, you\'ll often hear the terms "mold inspection" and "mold testing" used interchangeably. However, they serve different purposes.',
      '## What Is a Mold Inspection?',
      'A mold inspection is a visual assessment of your property to identify signs of mold growth, moisture problems, and conditions conducive to mold. It includes examining high-risk areas, checking for water damage, and using tools like moisture meters and thermal imaging.',
      '## What Is Mold Testing?',
      'Mold testing involves collecting samples (air, surface, or bulk) to identify the types and concentrations of mold present. This can include air sampling to measure airborne spore counts, surface swabs to identify mold species, and bulk samples of materials for laboratory analysis.',
      '## Which Do You Need?',
      'Most situations benefit from both inspection and testing. The inspection identifies problem areas, while testing provides scientific data about what\'s present. Together, they give you a complete picture of your mold situation.'
    ]
  },
  'common-mold-types-orange-county': {
    title: 'Common Mold Types Found in Orange County Homes',
    excerpt: 'An overview of the most common mold species we encounter during inspections and their characteristics.',
    category: 'Education',
    date: '2024-11-15',
    content: [
      'During our inspections throughout Orange County, we encounter several common mold species. Understanding these can help you better understand your test results.',
      '## Cladosporium',
      'One of the most common outdoor and indoor molds. It appears olive-green to brown or black and is often found on fabrics, wood surfaces, and HVAC systems.',
      '## Aspergillus',
      'A large genus with many species, commonly found in dust, building materials, and food. Some species can produce mycotoxins that may cause health issues.',
      '## Penicillium',
      'Often found in water-damaged buildings, this blue or green mold spreads quickly and can cause allergic reactions in sensitive individuals.',
      '## Stachybotrys (Black Mold)',
      'Often called "toxic black mold," this species requires very wet conditions to grow. It\'s commonly found on cellulose-rich materials like drywall and wood that have been wet for extended periods.',
      '## Understanding Your Results',
      'Finding mold in your home doesn\'t always mean there\'s a problem. Context matters—including the types present, concentration levels, and comparison to outdoor samples. Our detailed reports help you understand what your results mean for your specific situation.'
    ]
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  
  if (!article) {
    return { title: 'Article Not Found | OC Mold Pros' }
  }
  
  return {
    title: `${article.title} | OC Mold Pros Blog`,
    description: article.excerpt,
  }
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles[slug]
  
  if (!article) {
    notFound()
  }

  return (
    <main className="pt-28">
      <nav className="bg-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium truncate max-w-[200px]">{article.title}</li>
          </ol>
        </div>
      </nav>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-gray-900 bg-ocean-50 px-3 py-1 rounded">{article.category}</span>
              <span className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
            <p className="text-xl text-gray-600">{article.excerpt}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>
              }
              return <p key={i} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Have Questions About Mold?</h3>
            <p className="text-gray-600 mb-6">
              If you have concerns about mold in your home, we are here to help. Schedule a free 20-minute consultation to discuss your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9493715934" className="px-6 py-3 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-center">
                Call 949-371-5934
              </a>
              <Link href="/contact" className="px-6 py-3 border-2 border-ocean-600 text-gray-900 rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-center">
                Request a Consultation
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-800 font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
