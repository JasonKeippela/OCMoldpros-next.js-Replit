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
  imageAlt?: string
  imageTitle?: string
  imageCaption?: string
}> = {
  'hidden-mold-risk-refrigerator-condensate-pans': {
    title: 'The Hidden Mold Risk Beneath Your Refrigerator: Condensate (Drip) Pans',
    excerpt: 'One of the most overlooked mold sources in Southern California homes is hiding underneath your refrigerator. Learn why condensate pans become mold hotspots and what you can do.',
    category: 'Prevention',
    date: '2026-01-29',
    image: '/refrigerator-condensate-pan.jpg',
    imageAlt: 'Refrigerator condensate drip pan with mold and debris buildup from high humidity conditions in Southern California home',
    imageTitle: 'Refrigerator Condensate Pan Mold Growth Example',
    imageCaption: 'A refrigerator condensate drip pan. This is what happens in a home with high humidity.',
    content: [
      'When people think about mold problems in a home, they usually picture bathrooms, laundry rooms, or visible leaks. What almost no one expects is that one of the most common "ground zero" mold sources can be hiding underneath the refrigerator.',
      'In Southern California especially, we\'ve seen a surprising number of mold outbreaks—even in brand-new homes and luxury developments—that trace back to a simple but overlooked component: the refrigerator condensate pan.',
      '## What Is a Refrigerator Condensate Pan?',
      'Most refrigerators, including high-end models like Sub-Zero–style refrigerator/freezer units, are designed to collect moisture created during normal cooling and defrost cycles.',
      'That moisture drains into a condensate (or drip) pan located underneath or behind the refrigerator. In theory, the water should slowly evaporate with the help of heat from the condenser.',
      'In reality—especially in humid environments—that evaporation often doesn\'t happen efficiently.',
      '## Why Condensate Pans Become Mold Hotspots',
      'A refrigerator condensate pan creates a near-perfect environment for mold growth: standing water that doesn\'t fully evaporate, darkness (hidden beneath the appliance), warmth from the condenser cycling on and off, dust and debris pulled in by airflow, and mold spores that are always present in indoor air.',
      'When all of these factors come together, mold can colonize extremely quickly—sometimes in weeks, not months.',
      'This isn\'t theoretical. During inspections, we\'ve repeatedly seen condensate pans that were actively growing mold and spreading spores into surrounding kitchen areas.',
      '## How Mold Spreads Beyond the Refrigerator',
      'Once mold establishes itself in or around the drip pan, it doesn\'t always stay there.',
      'In more severe cases, we\'ve documented mold growth and contamination in kitchen cabinets adjacent to the refrigerator, silverware drawers, base cabinets and toe-kicks, flooring near the fridge, and the air space throughout the kitchen.',
      'High humidity plus airflow allows spores to move easily, especially when the refrigerator cycles on and off throughout the day.',
      'What starts as a hidden moisture issue can quietly affect a much larger area of the home.',
      '## "But My Home Is Brand New…"',
      'This is one of the most common reactions we hear.',
      'New construction does not guarantee protection from mold. In fact, newer homes often have tighter building envelopes, less natural air exchange, higher indoor humidity, and larger, more powerful refrigeration units.',
      'All of these factors can increase the likelihood of condensate moisture lingering instead of evaporating.',
      '## Smell Is Your Early Warning System',
      'A healthy home should be smell-neutral.',
      'You shouldn\'t smell mustiness, sour or earthy odors, "dirty fridge" smells, or anything coming from inside or around the refrigerator.',
      'You also shouldn\'t smell garbage once it\'s closed, or lingering odors in an otherwise clean kitchen.',
      'If you do smell something—even faintly—that\'s often an early indicator that moisture and microbial growth may be present somewhere.',
      'Smell is one of the body\'s first and best warning signals. It\'s worth paying attention to.',
      '## What Homeowners Can Do',
      'While not all condensate pans are easily accessible, some practical steps include: periodically pulling the refrigerator out (if safe to do so), checking for standing water or visible buildup, keeping indoor humidity under control, and addressing musty or unexplained kitchen odors promptly.',
      'If access is limited or concerns persist, professional evaluation may be the safest route.',
      '## Final Thought',
      'Refrigerator condensate pans are one of the most overlooked and underestimated sources of mold in Southern California homes.',
      'They\'re hidden. They\'re quiet. And when conditions are right, they can become the starting point for a much bigger problem.',
      'A healthy home should feel comfortable and smell like… nothing at all.'
    ]
  },
  'why-cleaning-your-washing-machine-matters': {
    title: 'Why Cleaning Your Washing Machine Matters More Than You Think',
    excerpt: 'Modern washing machines create the perfect environment for mold and mildew. Learn a simple 1-week reset protocol to eliminate buildup and keep your laundry fresh.',
    category: 'Prevention',
    date: '2026-01-29',
    image: '/washing-machine-chart.jpg',
    imageAlt: 'Washing machine cleaning schedule chart showing nuclear clean option with vinegar and citric acid, weekly maintenance routine, and recommended products for mold prevention',
    imageTitle: 'Washing Machine Mold Prevention Cleaning Schedule',
    imageCaption: 'Complete washing machine cleaning protocol: deep clean reset, monthly maintenance, and every-load tips to prevent mold and mildew buildup',
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
  },
  'mold-inspection-newport-beach-coastal-homes': {
    title: 'Why Newport Beach Homes Need Mold Inspections More Often Than You Think',
    excerpt: 'Coastal humidity, salt air, and older construction make Newport Beach properties uniquely vulnerable to hidden mold growth — here is what homeowners need to know.',
    category: 'City Guide',
    date: '2026-05-21',
    content: [
      'Newport Beach is one of the most desirable places to live in Orange County. It is also one of the highest mold-risk environments in Southern California.',
      'The combination of marine humidity from Newport Harbor, salt air that degrades window seals and exterior finishes, and a significant stock of older construction on the Balboa Peninsula creates conditions where mold can establish itself quickly and quietly.',
      '## The Coastal Humidity Problem',
      'Most people think of mold as a problem caused by leaks or flooding. In coastal cities like Newport Beach, persistent ambient humidity is just as significant a driver.',
      'When marine air infiltrates a home through windows, doors, HVAC intake vents, and building envelope gaps, it raises the relative humidity of indoor surfaces. Once surfaces stay above 60% relative humidity consistently, mold can colonize without any visible water event.',
      'Harbor-facing properties on the Balboa Peninsula, Balboa Island, and Lido Isle see the most concentrated humidity exposure. Homes in Newport Coast and Corona del Mar are slightly more protected but still experience significant marine layer influence during summer months.',
      '## Older Construction and Hidden Vulnerabilities',
      'Many of the most beloved properties in Newport Beach — beach cottages near the pier, homes on the Balboa Peninsula dating from the 1940s and 1950s, and older structures throughout West Newport — were built before modern moisture barriers, vapor retarders, and ventilation standards.',
      'These homes absorb ambient moisture more readily than newer construction. Original single-pane windows allow condensation to form on frames and sills. Older plumbing systems develop slow leaks inside walls that go undetected for years. Attic spaces with minimal ventilation trap humid air during warm months.',
      '## What We Find Most Often in Newport Beach Inspections',
      'During inspections in Newport Beach, the most common findings include mold in HVAC evaporator coil areas from condensate moisture, mold behind harbor-facing walls from persistent humidity infiltration, mold under kitchen sinks and dishwashers from slow plumbing drips, and elevated mold spore counts in master bathrooms with inadequate exhaust ventilation.',
      'Luxury properties are not immune. We regularly inspect high-value homes in Newport Coast and Corona del Mar and find mold in climate-controlled wine rooms, in spa-adjacent rooms with elevated humidity, and in tightly sealed spaces that trap moisture.',
      '## Vacation Properties Face Additional Risk',
      'Newport Beach has a significant population of vacation homes and second properties that sit unoccupied for extended periods. When a home is unoccupied, HVAC systems may run inefficiently, plumbing leaks go undetected, and marine humidity accumulates without anyone noticing the signs.',
      'We recommend annual mold inspections for any Newport Beach property that is not occupied full time. The cost of an annual inspection is a fraction of the cost of remediation after a significant mold event.',
      '## What to Do If You Suspect Mold',
      'If you notice a musty odor, see staining on walls or ceilings, or experience unexplained respiratory symptoms that improve when you leave the home, do not wait. These are early warning signs that warrant professional evaluation.',
      'OC Mold Pros provides mold inspections throughout Newport Beach including the Balboa Peninsula, Balboa Island, Corona del Mar, Newport Coast, Lido Isle, and West Newport. We are IAC2 certified, veteran owned, and inspection-only — our findings carry zero conflict of interest. Call 949-371-5934 for a free 20-minute consultation.'
    ]
  },
  'mold-inspection-irvine-master-planned-communities': {
    title: 'Mold in Irvine Master-Planned Communities: What Homeowners Are Not Told',
    excerpt: 'Energy-efficient construction in Irvine neighborhoods like Woodbridge, Quail Hill, and Portola Springs creates conditions where indoor humidity accumulates faster than most homeowners realize.',
    category: 'City Guide',
    date: '2026-05-21',
    content: [
      'Irvine is consistently ranked among the safest and most livable cities in the United States. Its master-planned communities offer well-maintained homes, manicured parks, and excellent schools. What the brochures do not mention is that the same construction features that make these homes energy efficient can make them more susceptible to indoor mold growth.',
      '## The Tight Building Envelope Problem',
      'Modern construction in Irvine communities like Portola Springs, Quail Hill, Laguna Altura, and Woodbury prioritizes energy efficiency. Homes are sealed tightly to reduce heating and cooling costs. Windows and doors minimize air infiltration. Insulation is dense and continuous.',
      'The unintended consequence is that moisture generated inside the home — from cooking, showers, breathing, and plants — has fewer pathways to escape. Without adequate mechanical ventilation, indoor humidity builds up. When it reaches levels that consistently exceed 60%, mold can begin growing on surfaces inside wall cavities, in HVAC systems, and in poorly ventilated bathrooms.',
      '## HVAC Systems Are the Most Common Source',
      'In Irvine homes, the number one mold source we find during inspections is the HVAC system — specifically the evaporator coil and condensate drain line.',
      'When the air conditioner runs, it removes moisture from indoor air and deposits it as condensate on the evaporator coil. That condensate is supposed to drain through a condensate line to the exterior. When the line clogs — which happens regularly due to algae and debris — water backs up into the air handler unit and the surrounding mechanical closet. Mold can establish itself within days.',
      'Once mold is in the HVAC system, it distributes spores throughout the home every time the system runs.',
      '## Older Villages Show Different Patterns',
      'Woodbridge, one of Irvine\'s original planned communities, has homes from the late 1970s and 1980s. These properties have aging plumbing systems, older HVAC equipment, and construction details that were standard at the time but would not meet current moisture management standards.',
      'In Woodbridge inspections, we more commonly find mold from plumbing leaks inside wall cavities, from bathroom exhaust fans that vent into attic spaces instead of outside, and from original single-pane windows that allow condensation on frames and sills.',
      '## Student Rentals Near UC Irvine',
      'University Park and the neighborhoods immediately surrounding UC Irvine have a high concentration of rental properties with significant student occupancy. High occupancy means intensive bathroom and kitchen use, generating substantial indoor moisture.',
      'These properties often have deferred maintenance. Bathroom exhaust fans that have stopped working, caulk seals around tubs that have failed, and under-sink plumbing with slow drips can go unaddressed for months in a rental context.',
      'Landlords serving the UC Irvine rental market benefit from annual mold inspections to meet their duty of care under California habitability law and to identify problems before tenants report them to the city.',
      '## Getting a Mold Inspection in Irvine',
      'OC Mold Pros serves all Irvine communities including Woodbridge, Quail Hill, Portola Springs, Northwood, University Park, Laguna Altura, Woodbury, and Turtle Rock. We are IAC2 certified, veteran owned, and inspection-only. Call 949-371-5934 for a free 20-minute consultation.'
    ]
  },
  'signs-you-have-mold-orange-county-home': {
    title: '7 Signs You Have Mold in Your Orange County Home (And What to Do Next)',
    excerpt: 'Most mold grows where you cannot see it. These seven warning signs help Orange County homeowners identify a potential problem before it becomes a serious health or property issue.',
    category: 'Education',
    date: '2026-05-21',
    content: [
      'Mold rarely announces itself with a dramatic visible outbreak. In most Orange County homes, mold grows quietly — inside wall cavities, in HVAC systems, under flooring, and in attic spaces — long before anyone notices. By the time mold is visible, a significant colony has usually already established itself.',
      'Knowing the early warning signs can help you act before a small problem becomes a large remediation project.',
      '## Sign 1: A Persistent Musty Odor',
      'A healthy home should be odor-neutral. If you notice a musty, earthy, or damp smell — especially in specific rooms or when the HVAC system runs — that is one of the strongest early indicators of active mold growth.',
      'The smell of mold comes from microbial volatile organic compounds (MVOCs) produced by mold colonies as they metabolize. You can smell mold before you can see it. If the odor is stronger in the morning or after the house has been closed up overnight, take it seriously.',
      '## Sign 2: Unexplained Health Symptoms',
      'Mold exposure can cause respiratory irritation, nasal congestion, headaches, fatigue, brain fog, and allergic reactions. The critical diagnostic clue is whether symptoms improve when you leave the home and return when you come back.',
      'If household members are experiencing unexplained symptoms that have a pattern connected to time spent at home, indoor air quality should be evaluated professionally.',
      '## Sign 3: Visible Staining on Walls or Ceilings',
      'Water stains on ceilings or walls — even old, dry-looking ones — indicate that moisture has been present. Where moisture has been, mold may have followed. Discoloration in corners, behind furniture, or along baseboards warrants investigation.',
      '## Sign 4: Peeling Paint or Warped Materials',
      'Paint that bubbles, peels, or blisters indicates moisture in the wall. Warped baseboards, buckled flooring, or swollen door frames all point to elevated moisture conditions that create ideal mold habitat.',
      '## Sign 5: Condensation on Windows',
      'Condensation on interior window surfaces indicates that indoor humidity is elevated. In Orange County, homes that consistently show window condensation are at elevated mold risk, particularly in bathrooms, kitchens, and laundry rooms.',
      '## Sign 6: HVAC Odors When the System Runs',
      'If you notice a musty or dirty smell specifically when your heating or air conditioning runs, the HVAC system itself may be the mold source. Mold in the evaporator coil, air handler, or ductwork distributes spores throughout the home with every cycle.',
      '## Sign 7: Past Water Events That Were Not Fully Addressed',
      'Roof leaks, plumbing failures, appliance overflows, and flooding events that were dried and repaired without professional assessment may have left residual moisture in building materials. Mold can continue growing inside walls and under flooring long after surfaces appear dry.',
      '## What to Do Next',
      'If you recognize any of these signs, the appropriate next step is a professional mold inspection with air sampling. A visual inspection alone cannot confirm whether mold is present inside walls or elevated in the air. Independent laboratory analysis provides objective data.',
      'OC Mold Pros serves all of Orange County with IAC2 certified, inspection-only mold evaluations. We provide a complete written report with photos and lab results within 24 hours. Call 949-371-5934 for a free 20-minute consultation.'
    ]
  },
  'hvac-mold-orange-county': {
    title: 'Your HVAC System May Be Spreading Mold Through Your Orange County Home',
    excerpt: 'HVAC systems are the most efficient mold distribution mechanism in a home — here is how mold gets into your system, how to recognize it, and what a professional inspection covers.',
    category: 'Education',
    date: '2026-05-21',
    content: [
      'When we find mold in an Orange County home, the HVAC system is involved more often than any other single source. It is not always where the mold started — but it is frequently where mold spreads.',
      'Understanding how your HVAC system can harbor and distribute mold is one of the most important things an Orange County homeowner can know.',
      '## How Mold Gets Into HVAC Systems',
      'The evaporator coil is the most common starting point. As your air conditioner runs, warm indoor air passes over the cold evaporator coil, and moisture from the air condenses on the coil surface — the same way a cold glass sweats on a warm day.',
      'That condensate is supposed to drain through a condensate line to the exterior of the home. When the line clogs — which happens regularly due to algae growth, debris, and mineral buildup — water backs up. It pools in the air handler drip pan, overflows, and saturates surrounding materials. Mold can begin growing within 24 to 72 hours.',
      '## From the Coil to Every Room',
      'Once mold establishes itself in or near the evaporator coil, every time your HVAC system runs it draws air across that mold colony and distributes spores through the ductwork into every room of the home.',
      'This is why occupants sometimes notice that symptoms worsen when the air conditioning runs, or that musty odors appear specifically when the system cycles on.',
      '## Other HVAC Mold Entry Points',
      'Beyond the evaporator coil, HVAC-related mold sources include dirty air filters that have become saturated with organic debris, ductwork that has developed leaks drawing in humid attic or crawl space air, fresh air intakes positioned near mold sources, and return air vents in bathrooms or kitchens that pull humid air into the system.',
      '## What an HVAC Mold Inspection Covers',
      'During an HVAC-focused mold inspection, we assess the evaporator coil and air handler compartment for visible mold and moisture, check the condensate drain pan for standing water and biological growth, inspect accessible ductwork for moisture and contamination, evaluate filter condition and placement, and collect air samples from supply and return vents for laboratory analysis.',
      'The lab results tell us what mold species are present and at what concentration — data that goes well beyond what a visual inspection can provide.',
      '## Coastal Orange County and HVAC Mold Risk',
      'Coastal communities in Orange County — San Clemente, Dana Point, Laguna Beach, Newport Beach, Huntington Beach, and Seal Beach — experience higher ambient humidity than inland areas. HVAC systems in these communities work harder to remove moisture from indoor air and are correspondingly more prone to condensate-related mold issues.',
      'Homes with older HVAC equipment, units that have not been serviced recently, or systems that are undersized for the home are at elevated risk.',
      '## Getting Your HVAC System Inspected',
      'OC Mold Pros provides HVAC-focused mold inspections throughout Orange County. We are IAC2 certified, veteran owned, and inspection-only — we never perform remediation, so our findings are completely objective. Call 949-371-5934 for a free 20-minute consultation.'
    ]
  },
  'mold-inspection-before-buying-home-orange-county': {
    title: 'Why Every Orange County Home Buyer Should Get a Mold Inspection Before Closing',
    excerpt: 'A general home inspection does not include the air sampling and moisture mapping needed to identify hidden mold — here is what a pre-purchase mold inspection covers and why it matters.',
    category: 'Real Estate',
    date: '2026-05-21',
    content: [
      'Buying a home in Orange County is one of the largest financial decisions most people will ever make. A general home inspection is a standard part of the process — but it is not enough to rule out mold.',
      'General home inspectors are trained to assess structural systems, roofing, electrical, plumbing, and mechanical systems. They are not trained mold specialists, and they typically do not collect air samples or use thermal imaging cameras to detect moisture behind walls. A home can pass a general inspection and still have significant mold in the HVAC system, inside wall cavities, or in the attic.',
      '## What a Mold Inspection Adds',
      'A professional pre-purchase mold inspection adds air sampling with independent laboratory analysis, thermal imaging to detect moisture behind walls and ceilings, moisture meter readings in bathrooms, kitchens, and other high-risk areas, HVAC system evaluation, attic assessment, and a complete written report with photos and lab results.',
      'The lab results identify what mold species are present and at what concentration — giving buyers objective data about the property\'s indoor air quality that goes well beyond a visual check.',
      '## Orange County Conditions That Increase Pre-Purchase Risk',
      'Several Orange County-specific factors increase the importance of pre-purchase mold inspections. Coastal humidity affects homes throughout the region, particularly in San Clemente, Dana Point, Laguna Beach, Newport Beach, and Huntington Beach. Older construction in historic neighborhoods, college-area rentals, and beach communities may have deferred maintenance and hidden moisture damage. Homes that were previously rentals may have had water events that were not properly addressed or disclosed.',
      '## What Happens If You Find Mold',
      'Finding mold before closing gives buyers options. You can request that the seller remediate the issue before transfer. You can negotiate a price reduction that accounts for the remediation cost. You can walk away from the transaction with your inspection investment intact rather than discovering the problem after moving in.',
      'Finding mold after closing means the problem is yours. Depending on what sellers knew and disclosed, legal remedies may exist — but they are expensive, time-consuming, and uncertain.',
      '## Timing Your Inspection',
      'The ideal time for a pre-purchase mold inspection is during the inspection contingency period, after an offer has been accepted. This gives you time to receive lab results (typically 24 to 48 hours after sampling), review the written report, and make informed decisions before your contingency deadline.',
      'OC Mold Pros regularly accommodates urgent inspection timelines for real estate transactions. We serve all of Orange County and deliver complete written reports with lab results within 24 hours. Call 949-371-5934 to schedule or for a free 20-minute consultation.'
    ]
  },
  'aspergillus-penicillium-mold-orange-county': {
    title: 'Aspergillus and Penicillium: The Most Common Mold Species Found in Orange County Homes',
    excerpt: 'Aspergillus and Penicillium are the mold species most frequently identified in Orange County air samples — understanding what they are and where they grow helps homeowners take the right action.',
    category: 'Education',
    date: '2026-05-21',
    content: [
      'When mold air samples come back from the laboratory, the two species names that appear most frequently in Orange County home reports are Aspergillus and Penicillium. They are so commonly found together that laboratory reports often list them as Aspergillus/Penicillium — a combined category because the spores are visually similar under the microscope.',
      'Understanding what these molds are, where they grow, and what elevated counts mean helps homeowners make informed decisions about next steps.',
      '## What Are Aspergillus and Penicillium?',
      'Aspergillus and Penicillium are both common environmental molds found outdoors throughout Southern California. They are adapted to dry conditions and grow readily on a wide range of materials including drywall paper, wood framing, ceiling tiles, insulation, and HVAC components.',
      'They are fast-growing and highly competitive. In conditions of elevated indoor moisture, they can establish colonies rapidly and reach high indoor concentrations before becoming visible.',
      '## What Elevated Counts Mean',
      'Some level of Aspergillus and Penicillium is normal in any indoor environment — spores are present in outdoor air and enter homes continuously. What matters is the relationship between indoor and outdoor concentrations.',
      'When indoor counts significantly exceed outdoor counts — particularly when total indoor spore levels are elevated across multiple sample locations — it indicates active indoor mold growth rather than normal infiltration from outside. This is the key threshold that a professional inspection with proper outdoor control samples can evaluate.',
      '## Where They Commonly Grow in Orange County Homes',
      'In Orange County inspections, the most common locations we find Aspergillus and Penicillium colonies include HVAC evaporator coils and air handler units, bathroom walls and ceiling drywall with inadequate ventilation, window frames and sills with condensation, attic sheathing from roof leaks or inadequate ventilation, and crawl spaces with ground moisture.',
      'Coastal properties in San Clemente, Dana Point, Laguna Beach, and Newport Beach see elevated Aspergillus and Penicillium counts more frequently than inland areas due to the persistent ambient humidity that keeps indoor surfaces at elevated moisture levels.',
      '## Health Considerations',
      'For healthy individuals, exposure to moderate levels of Aspergillus and Penicillium typically causes mild respiratory irritation or allergic responses. For immunocompromised individuals, the elderly, infants, and those with asthma or pre-existing respiratory conditions, elevated exposure can have more serious effects.',
      'When occupants are experiencing health symptoms that correlate with time at home, professional air sampling provides objective data to inform medical and remediation decisions.',
      '## Getting Testing Done',
      'If you suspect elevated mold in your Orange County home, air sampling with independent laboratory analysis is the most objective way to assess the situation. OC Mold Pros provides comprehensive mold inspections with IAC2 certified inspectors throughout Orange County. We are inspection-only — our findings are completely objective. Call 949-371-5934 for a free 20-minute consultation.'
    ]
  },
  'mold-inspection-san-clemente': {
    title: 'Mold Inspection in San Clemente: What the Ocean Air Does to Your Home',
    excerpt: 'San Clemente\'s coastal setting makes it one of the most mold-prone cities in Orange County — here is what local homeowners need to know about marine humidity, Spanish Colonial construction, and professional inspection.',
    category: 'City Guide',
    date: '2026-05-21',
    content: [
      'San Clemente is one of the most beautiful places to live in Southern California. The ocean views, Spanish Colonial architecture, and relaxed coastal atmosphere are unmatched. They also come with a hidden cost that many homeowners discover only after the fact: persistent marine humidity that creates ideal conditions for mold growth.',
      '## What Coastal Humidity Does to a Home',
      'The marine layer that rolls in from the Pacific Ocean during spring and summer months — and the ambient ocean humidity year-round — keeps the relative humidity of outdoor air elevated in San Clemente consistently above what inland cities experience.',
      'When that humid air enters homes through windows, doors, HVAC intake vents, and building envelope gaps, it raises the moisture content of indoor surfaces. Drywall, wood framing, insulation, and ceiling materials absorb ambient moisture. Over time, areas that stay persistently moist create the conditions mold needs to colonize.',
      '## Spanish Colonial Construction and Moisture',
      'San Clemente\'s iconic Spanish Colonial architecture — stucco exteriors, tile roofs, and plaster interior walls — is part of what makes the city so distinctive. It also presents specific moisture management challenges.',
      'Stucco exteriors can develop micro-cracks over time that allow moisture infiltration, particularly on west and south-facing walls that receive direct ocean exposure. Original plaster interior walls in older homes absorb ambient moisture differently than modern drywall. Tile roofs, while durable, require proper underlayment maintenance to prevent moisture intrusion at the roof deck level.',
      '## Common Mold Locations in San Clemente Homes',
      'During inspections in San Clemente, the most frequent mold findings involve HVAC systems dealing with high moisture loads, bathroom exhaust areas where inadequate ventilation allows moisture to accumulate on walls and ceilings, crawl spaces and foundation areas with ground moisture, window frames and sills where condensation from ocean-cooled glass surfaces deposits moisture, and attic spaces in hillside homes that trap marine fog.',
      '## Neighborhoods With Elevated Risk',
      'Homes near the pier and along the T-Street corridor have direct ocean exposure and older construction. Forster Ranch and Rancho San Clemente hillside properties trap coastal fog in canyon microclimates. Talega\'s newer construction is tightly sealed — which traps indoor moisture when HVAC systems underperform.',
      '## OC Mold Pros in San Clemente',
      'As the local mold inspection company based in San Clemente, we understand the specific moisture challenges this community faces better than any out-of-area service. We serve every neighborhood in San Clemente and deliver complete written reports with independent lab results within 24 hours.',
      'We are IAC2 certified, veteran owned, and inspection-only — our findings are always objective. Call 949-371-5934 for a free 20-minute consultation.'
    ]
  },
  'landlord-mold-responsibilities-california': {
    title: 'California Landlord Mold Responsibilities: What Orange County Property Owners Need to Know',
    excerpt: 'California law places specific mold disclosure and habitability obligations on landlords — here is what Orange County rental property owners need to understand to protect their tenants and their investments.',
    category: 'Real Estate',
    date: '2026-05-21',
    content: [
      'Mold is not just a health issue for Orange County rental property owners — it is a legal liability. California law places specific obligations on landlords regarding mold disclosure, habitability, and remediation. Understanding these obligations is essential for any investor, property manager, or individual landlord in Orange County.',
      '## California Habitability Law and Mold',
      'Under California Civil Code Section 1941, landlords are required to maintain rental properties in habitable condition. California Health and Safety Code Section 17920.3 explicitly lists visible mold that is not caused by the tenant as a condition that renders a property substandard.',
      'This means that if mold is present in a rental unit and the landlord knows about it — or should reasonably know about it — the landlord has a legal obligation to address it. Failure to do so can expose landlords to habitability claims, rent withholding, repair and deduct remedies, and in some cases civil liability.',
      '## Disclosure Requirements',
      'California law requires landlords to disclose known mold conditions to prospective tenants before occupancy. Landlords who rent properties with known mold without disclosure face additional legal exposure beyond the base habitability obligations.',
      'The disclosure requirement applies to mold that the landlord is aware of — which is one reason proactive mold inspections are valuable. Establishing what conditions exist at the time of tenancy creates a documented baseline that protects both parties.',
      '## High-Risk Rental Markets in Orange County',
      'Certain Orange County rental markets carry elevated mold risk that landlords should factor into their maintenance planning. College-area rentals near UC Irvine, Cal State Fullerton, Chapman University, and other campuses have high occupancy and intensive bathroom and kitchen use. Coastal rentals in San Clemente, Laguna Beach, Newport Beach, and Huntington Beach face persistent marine humidity. Older housing stock in Santa Ana, Anaheim, Fullerton, and Garden Grove has aging plumbing and ventilation systems that are common mold sources.',
      '## Proactive Inspection as Risk Management',
      'The most effective approach for Orange County landlords is proactive inspection. A professional mold inspection at move-in, at move-out, and annually for high-risk properties provides documentation that protects against tenant claims, establishes conditions at each tenancy transition, and identifies developing moisture issues before they become significant mold events.',
      'The cost of a professional inspection is a small fraction of the cost of a habitability dispute, remediation project, or legal proceeding.',
      '## OC Mold Pros Rental Property Inspections',
      'OC Mold Pros provides mold inspections for rental properties throughout Orange County. We work with both landlords and tenants and provide written reports with photographs and lab results suitable for legal documentation, HOA disputes, and insurance claims. We are IAC2 certified, veteran owned, and inspection-only. Call 949-371-5934 for a free 20-minute consultation.'
    ]
  },
  'ermi-testing-explained': {
    title: 'ERMI Testing Explained: When Standard Mold Air Sampling Is Not Enough',
    excerpt: 'ERMI testing uses dust analysis to identify 36 mold species and provides a different picture of mold history in a home than standard air sampling — here is when it makes sense.',
    category: 'Education',
    date: '2026-05-21',
    content: [
      'Standard mold air sampling — collecting spore trap samples and sending them to a laboratory for analysis — is the most common method of mold testing in Orange County homes. It is effective, relatively quick, and provides useful data about current airborne mold conditions.',
      'For certain situations, however, a different approach provides more comprehensive information: ERMI testing.',
      '## What Is ERMI Testing?',
      'ERMI stands for Environmental Relative Moldiness Index. It was developed by the Environmental Protection Agency as a research tool and has since been adopted in clinical and investigative contexts.',
      'Rather than collecting air samples, ERMI analysis uses a dust sample collected from the home — typically vacuumed from carpet or settled on surfaces — and analyzes it using DNA-based methods called MSQPCR (mold-specific quantitative polymerase chain reaction).',
      'This approach identifies and quantifies 36 specific mold species, grouped into two categories: Group 1 species associated with water-damaged buildings, and Group 2 species more commonly found in non-damaged environments. The ERMI score is calculated from the ratio of Group 1 to Group 2 species.',
      '## What ERMI Tells You That Air Sampling Does Not',
      'Air sampling captures a snapshot of what mold spores are airborne at the moment of sampling. ERMI dust analysis captures a historical record — the mold that has been present in the home over an extended period and has settled into the dust.',
      'This makes ERMI particularly useful for evaluating homes with a history of water damage, for occupants with mold-related illness trying to understand the extent of exposure, for post-remediation verification in complex cases, and for situations where air sampling results were inconclusive but symptoms persist.',
      '## ERMI Limitations',
      'ERMI testing has limitations that are important to understand. It does not identify where in the home mold is located — it only tells you what species are present in the dust. It is a research-derived tool that was not originally designed as a clinical diagnostic. Results must be interpreted in context alongside other inspection findings.',
      'ERMI is most valuable as part of a comprehensive inspection, not as a standalone test.',
      '## When to Consider ERMI Testing',
      'ERMI testing is most appropriate when standard air sampling has been done but questions remain, when a home has a known history of significant water damage, when occupants are experiencing health symptoms consistent with mold illness and need more detailed species data, or when a physician or environmental health professional has recommended it as part of a clinical evaluation.',
      'OC Mold Pros provides ERMI testing as part of our comprehensive inspection services throughout Orange County. We are IAC2 certified, veteran owned, and inspection-only. Call 949-371-5934 for a free 20-minute consultation and to discuss whether ERMI testing makes sense for your situation.'
    ]
  },
  'mold-illness-symptoms-home-inspection': {
    title: 'Mold Illness and Your Home: When Symptoms Point to Indoor Air Quality',
    excerpt: 'Fatigue, brain fog, and respiratory symptoms that improve when you leave home may indicate mold exposure — here is what to know and how professional inspection provides answers.',
    category: 'Health',
    date: '2026-05-21',
    content: [
      'Mold-related illness is real, it is more common than most people realize, and it is frequently misdiagnosed or dismissed. For people experiencing unexplained chronic symptoms, the indoor environment they spend the most time in — their home — is often a contributing factor that never gets evaluated.',
      '## Symptoms Associated With Mold Exposure',
      'Mold exposure affects different people differently depending on individual sensitivity, the mold species involved, and the duration and intensity of exposure. Commonly reported symptoms include respiratory irritation including coughing, wheezing, and shortness of breath, nasal congestion and sinus issues, headaches and migraines, fatigue that does not resolve with rest, cognitive difficulties sometimes described as brain fog, eye irritation, and skin rashes.',
      'For individuals with asthma, allergies, or compromised immune function, the effects can be more severe.',
      '## The Most Important Diagnostic Clue',
      'The single most important clue that mold in the home may be a contributing factor is symptom pattern: do symptoms improve when you leave the home and return or worsen when you come back?',
      'If symptoms are consistently better when traveling, at work, or away from home for extended periods, and consistently worse at home — particularly in specific rooms — the indoor environment deserves professional evaluation.',
      '## Why Mold Is Often Missed',
      'Most mold grows where it is not visible. Inside wall cavities, in HVAC systems, under flooring, and in attic spaces — these are the most common locations where mold establishes significant colonies in Orange County homes.',
      'A visual inspection of the home will not find mold in these locations. Standard medical evaluation does not typically include environmental assessment. The result is that mold-related illness often persists for months or years without anyone connecting the symptoms to the home environment.',
      '## What Professional Inspection Provides',
      'A professional mold inspection with air sampling provides objective, laboratory-verified data about what is in the indoor air. When indoor mold spore counts are significantly elevated above outdoor baseline levels — particularly when water-damage-associated species are present at elevated concentrations — it provides actionable information for both occupants and their healthcare providers.',
      'The inspection also identifies where moisture is entering or accumulating in the home, which is essential for addressing the underlying cause rather than just the mold symptoms.',
      '## Hope Past Mold',
      'OC Mold Pros works with individuals and families navigating mold-related health challenges. We understand that this is not just a property issue — it affects quality of life, relationships, and hope for recovery. We approach every inspection with the seriousness that health-driven cases deserve.',
      'We serve all of Orange County and are IAC2 certified, veteran owned, and inspection-only. Call 949-371-5934 for a free 20-minute consultation.'
    ]
  },
  'mycotoxin-testing-orange-county': {
    title: 'Mycotoxin Testing: What It Is and When Orange County Homeowners Should Consider It',
    excerpt: 'Mycotoxins are toxic compounds produced by certain mold species that standard air sampling does not detect — here is when mycotoxin testing provides meaningful additional information.',
    category: 'Education',
    date: '2026-05-21',
    content: [
      'Standard mold air sampling identifies mold spores — the reproductive particles that mold releases into the air. What it does not measure are mycotoxins: toxic chemical compounds that certain mold species produce as byproducts of their metabolism.',
      'For most mold situations, standard air sampling provides sufficient information to guide inspection findings and remediation decisions. But for specific scenarios — particularly those involving health symptoms that have not resolved despite remediation, or situations involving highly toxic mold species — mycotoxin testing adds an important layer of information.',
      '## What Are Mycotoxins?',
      'Mycotoxins are secondary metabolites produced by mold as chemical defense mechanisms. Different mold species produce different mycotoxins. Among the most concerning are aflatoxins (produced by certain Aspergillus species), ochratoxin A (produced by Aspergillus and Penicillium species), trichothecenes (produced by Stachybotrys chartarum and other species), and zearalenone.',
      'Mycotoxins are not volatile — they do not float freely in air the way mold spores do. They adhere to mold spore fragments and dust particles and are primarily relevant as an exposure pathway through inhalation of contaminated dust and through skin contact with contaminated surfaces.',
      '## Why Standard Air Sampling Does Not Detect Mycotoxins',
      'Standard spore trap air sampling is designed to capture intact mold spores for optical identification. Mycotoxins require chemical analysis methods — typically mass spectrometry or ELISA immunoassay testing — applied to dust or material samples rather than air samples.',
      'This means a home can have elevated mycotoxin levels without necessarily showing elevated spore counts, and vice versa.',
      '## When Mycotoxin Testing Makes Sense',
      'Mycotoxin testing is most appropriate when Stachybotrys chartarum (black mold) has been confirmed or suspected and the extent of toxin spread is unknown, when occupants are experiencing health symptoms consistent with mycotoxin exposure that have not resolved after apparent mold remediation, when a physician or environmental medicine specialist has recommended it as part of a clinical evaluation, or when the home has a history of severe water damage involving materials that are high-risk for toxigenic mold growth.',
      '## Realistic Expectations',
      'Mycotoxin testing is a specialized tool, not a routine screening test. Results require careful interpretation in context with other inspection findings and clinical information. It is most valuable as part of a comprehensive evaluation rather than as a standalone test.',
      'OC Mold Pros provides mycotoxin testing consultation and coordination as part of our environmental consulting services throughout Orange County. We are IAC2 certified, veteran owned, and inspection-only. Call 949-371-5934 for a free 20-minute consultation to discuss whether mycotoxin testing is appropriate for your situation.'
    ]
  },
  'mold-dana-point-laguna-beach-coastal': {
    title: 'Mold in Dana Point and Laguna Beach: A Guide for Coastal Orange County Homeowners',
    excerpt: 'Dana Point and Laguna Beach homeowners face some of the highest mold risk in Orange County — canyon microclimates, ocean exposure, and older construction create a challenging moisture environment.',
    category: 'City Guide',
    date: '2026-05-21',
    content: [
      'Dana Point and Laguna Beach sit at the heart of the Orange County coastline, offering some of the most spectacular ocean views and distinctive architecture in Southern California. They also sit in some of the most challenging moisture environments for residential properties in the region.',
      '## Dana Point: Harbor Humidity and Hillside Risk',
      'Dana Point Harbor creates a localized humidity environment that affects properties throughout the city. The Lantern District, with its older residential construction close to the bluffs, sees salt air penetration and coastal fog year-round. Properties along the coastline in Monarch Beach face direct ocean exposure that accelerates the degradation of window seals, caulking, and exterior finishes.',
      'Hillside neighborhoods in Dana Hills experience a different moisture challenge: temperature swings between warm afternoons and cool coastal nights cause condensation on cool surfaces, particularly on uphill-facing walls and in attic spaces. After rain events, hillside drainage and foundation moisture become considerations for homes with older drainage systems.',
      '## Laguna Beach: Canyon Microclimates and Historic Construction',
      'Laguna Beach adds another layer of complexity with its dramatic canyon topography. Neighborhoods like Top of the World, Arch Beach Heights, and the canyon areas above the downtown experience a phenomenon where coastal fog rolls in from the ocean and becomes trapped by surrounding hillsides, creating persistently humid microclimates.',
      'In canyon-facing homes, north-facing walls and shaded attic spaces stay persistently moist. Limited airflow between homes on narrow canyon lots means moisture accumulates rather than dispersing.',
      'Laguna Beach also has a significant stock of historic and architecturally distinctive homes — beach cottages, hillside adobes, and artist-era construction — that predate modern moisture management standards. These properties require inspection methods that are both thorough and sensitive to the historic character of the materials.',
      '## What We Find Most Often',
      'In Dana Point and Laguna Beach inspections, the most common findings involve HVAC systems overwhelmed by high moisture loads, ocean-facing walls with moisture infiltration through degraded seals and finishes, attic spaces with mold from inadequate ventilation and coastal fog penetration, and bathroom areas where exhaust ventilation is insufficient for the humidity load these coastal homes experience.',
      '## Getting a Mold Inspection',
      'OC Mold Pros serves Dana Point and Laguna Beach with the same thorough inspection approach we bring to all of Orange County. We understand the specific moisture challenges of the coastal canyon environment and know where to look in the construction styles common to these cities.',
      'We are IAC2 certified, veteran owned, and inspection-only. We deliver complete written reports with independent lab results within 24 hours. Call 949-371-5934 for a free 20-minute consultation.'
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
  
  const baseUrl = 'https://ocmoldpros.com'
  
  // Canonical v2 – services rollout
  return {
    title: `${article.title} | OC Mold Pros Blog`,
    description: article.excerpt,
    keywords: `mold inspection, ${article.category.toLowerCase()}, Orange County, San Clemente, mold testing, indoor air quality`,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${baseUrl}/blog/${slug}`,
      siteName: 'OC Mold Pros',
      type: 'article',
      publishedTime: article.date,
      authors: ['OC Mold Pros'],
      images: article.image ? [
        {
          url: `${baseUrl}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.imageAlt || article.title,
        }
      ] : undefined,
    },
    twitter: {
      card: article.image ? 'summary_large_image' : 'summary',
      title: article.title,
      description: article.excerpt,
      images: article.image ? [`${baseUrl}${article.image}`] : undefined,
    },
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

          {article.image && (
            <figure className="mb-8">
              <img 
                src={article.image} 
                alt={article.imageAlt || article.title}
                title={article.imageTitle || article.title}
                className="w-full rounded-lg shadow-md"
                loading="eager"
              />
              {article.imageCaption && (
                <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
                  {article.imageCaption}
                </figcaption>
              )}
            </figure>
          )}

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
                Call for FREE Consultation
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
