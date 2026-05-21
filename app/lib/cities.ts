// APPROVED SERVICE AREAS - 34 Cities Only
// This is the single source of truth for all service area pages

export type ServiceArea = {
  name: string;
  slug: string;
  tier: 'core' | 'secondary';
  nearby: string[];
  landmarks: string[];
  neighborhoods?: { name: string; description: string }[];
}

export type CityData = {
  description: string;
  moldServices: string;
  isCoastal: boolean;
  keywords: string[];
  faqs: { q: string; a: string }[];
}

// 10 Core cities (primary service area focus)
export const CORE_CITIES: ServiceArea[] = [
  {
    name: 'San Clemente', slug: 'san-clemente-ca', tier: 'core',
    nearby: ['Dana Point', 'San Juan Capistrano', 'Laguna Niguel', 'Laguna Beach', 'Mission Viejo', 'Rancho Santa Margarita'],
    landmarks: ['San Clemente Pier', 'Casa Romantica Cultural Center', 'San Clemente State Beach', 'Trestles Beach', 'Downtown San Clemente'],
    neighborhoods: [
      { name: 'T-Street & Pier Bowl', description: 'Older beach cottages and Spanish Colonial homes near the pier face constant salt air exposure and marine humidity. These properties often lack modern vapor barriers and benefit from regular mold inspections.' },
      { name: 'Forster Ranch', description: 'Hillside homes in Forster Ranch experience temperature swings that cause condensation in wall cavities and attic spaces. Canyon-facing exposures are particularly prone to moisture accumulation from coastal fog.' },
      { name: 'Talega', description: "Talega's newer master-planned construction is energy efficient but tightly sealed — trapping humidity when HVAC systems underperform. We regularly inspect HVAC evaporator coils and condensate lines in Talega homes." },
      { name: 'San Clemente Cove & Marblehead', description: 'Coastal bluff properties in these neighborhoods face direct ocean exposure. Salt air accelerates seal degradation on windows and exterior penetrations, creating moisture entry points.' },
      { name: 'Rancho San Clemente', description: 'Hillside and canyon-adjacent homes in Rancho San Clemente can experience drainage issues on uphill foundation walls after rain events. Crawl spaces and lower-level areas are priority inspection zones.' },
      { name: 'Downtown San Clemente (Avenida Del Mar)', description: 'Historic commercial and residential buildings in downtown San Clemente include older construction with plaster walls and vintage plumbing. These properties require non-invasive inspection methods appropriate for aged materials.' },
    ],
  },
  {
    name: 'Dana Point', slug: 'dana-point-ca', tier: 'core',
    nearby: ['San Clemente', 'Laguna Niguel', 'San Juan Capistrano', 'Laguna Beach', 'Mission Viejo', 'Aliso Viejo'],
    landmarks: ['Dana Point Harbor', 'Doheny State Beach', 'Ocean Institute', 'Headlands Conservation Area', 'Salt Creek Beach Park'],
    neighborhoods: [
      { name: 'Lantern District', description: 'Historic mixed-use neighborhood with older residential construction close to the bluffs. Salt air penetration and aging window seals are the primary moisture entry points in Lantern District homes.' },
      { name: 'Monarch Beach', description: 'Luxury oceanfront and bluff-top properties here face the highest direct ocean exposure in Dana Point. Salt-laden air accelerates building material degradation and creates persistent indoor humidity challenges.' },
      { name: 'Dana Hills', description: 'Hillside residential community with homes from the 1970s-80s. Hillside drainage and foundation moisture on uphill walls are inspection priorities, along with aging HVAC systems common in this era of construction.' },
      { name: 'Capistrano Beach (Capo Beach)', description: 'Known locally as Capo Beach, this neighborhood has older beachside construction with direct marine exposure. Many homes have minimal vapor barriers and benefit from thorough inspection of attic, crawl space, and bathroom areas.' },
      { name: 'Niguel Shores', description: 'Gated coastal community with ocean-view homes. The marine environment keeps humidity elevated year-round. We inspect ocean-facing walls, window assemblies, and HVAC systems in Niguel Shores properties.' },
    ],
  },
  {
    name: 'Laguna Beach', slug: 'laguna-beach-ca', tier: 'core',
    nearby: ['Laguna Niguel', 'Aliso Viejo', 'Dana Point', 'Newport Beach', 'Laguna Hills', 'Irvine'],
    landmarks: ['Laguna Art Museum', 'Heisler Park', 'Main Beach', 'Crystal Cove State Park', 'Festival of Arts'],
    neighborhoods: [
      { name: 'Top of the World', description: 'Elevated neighborhood with panoramic views and exposure to coastal fog from multiple directions. Canyon-facing homes in Top of the World see consistent marine layer penetration, particularly in attics and north-facing walls.' },
      { name: 'Emerald Bay', description: "Private gated community with oceanfront and bluff-top properties. Older construction styles combined with direct ocean exposure make Emerald Bay one of Laguna's higher mold-risk communities." },
      { name: 'Three Arch Bay', description: 'Another private coastal enclave where homes face persistent ocean humidity. The cove setting traps marine air, creating elevated moisture levels that affect even well-maintained properties.' },
      { name: 'Arch Beach Heights', description: 'Hillside neighborhood with canyon exposure and older residential construction. Limited airflow between homes on narrow canyon lots allows moisture to accumulate, particularly in shaded north-facing areas.' },
      { name: 'South Laguna', description: 'Beachside properties in South Laguna include many older cottages and bungalows with minimal moisture protection. Direct PCH-adjacent properties face road moisture and ocean exposure simultaneously.' },
    ],
  },
  {
    name: 'Laguna Niguel', slug: 'laguna-niguel-ca', tier: 'core',
    nearby: ['Dana Point', 'Aliso Viejo', 'Laguna Beach', 'Mission Viejo', 'San Juan Capistrano', 'Laguna Hills'],
    landmarks: ['Aliso Summit Trail', 'Laguna Niguel Regional Park', 'Crown Valley Community Park', 'Laguna Niguel Skate Park', 'Salt Creek Beach'],
    neighborhoods: [
      { name: 'Bear Brand Ranch', description: 'Upscale gated community with hillside homes and ocean views. Hillside drainage and foundation moisture on uphill walls are key inspection priorities alongside aging HVAC systems.' },
      { name: 'Marina Hills', description: "Ocean-view community with homes from the 1980s-90s. Coastal humidity combined with this era's construction details — particularly window and door seals — creates conditions for moisture intrusion." },
      { name: 'Rancho Niguel', description: "One of Laguna Niguel's largest communities with diverse housing from condos to single-family homes. HVAC systems and bathroom ventilation are the most common moisture sources we find here." },
      { name: 'El Niguel Heights', description: 'Hillside neighborhood with canyon-adjacent lots. Drainage around uphill foundation walls and crawl space moisture are primary inspection focus areas after rain events.' },
      { name: 'Laguna Sur', description: 'Coastal bluff community with panoramic ocean views. Direct marine exposure and the elevated position that catches coastal fog make Laguna Sur properties candidates for regular professional inspection.' },
    ],
  },
  {
    name: 'Laguna Hills', slug: 'laguna-hills-ca', tier: 'core',
    nearby: ['Aliso Viejo', 'Lake Forest', 'Mission Viejo', 'Laguna Niguel', 'Irvine', 'Laguna Beach'],
    landmarks: ['Laguna Hills Mall', 'Nellie Gail Ranch', 'Community Center & Sports Complex', 'Laguna Hills Skate Park', 'Aliso Creek Trail'],
    neighborhoods: [
      { name: 'Nellie Gail Ranch', description: 'Equestrian community with large custom lots and homes from the 1970s-80s. Large irrigated lots and older plumbing systems are common moisture sources. Custom construction requires experienced inspection techniques.' },
      { name: 'Aliso Viejo border communities', description: 'Homes along the Laguna Hills and Aliso Viejo border share similar construction from the late 1980s-90s. HVAC moisture and bathroom ventilation failures are the most frequent findings in this corridor.' },
      { name: 'Laguna Hills central residential', description: 'The core residential areas of Laguna Hills feature a mix of townhomes and single-family homes. Shared-wall construction in attached homes means moisture in one unit can affect neighbors — a key consideration for condo owners.' },
    ],
  },
  {
    name: 'Mission Viejo', slug: 'mission-viejo-ca', tier: 'core',
    nearby: ['Lake Forest', 'Laguna Niguel', 'Aliso Viejo', 'Rancho Santa Margarita', 'Laguna Hills', 'San Juan Capistrano'],
    landmarks: ['Lake Mission Viejo', 'Oso Creek Trail', 'Kaleidoscope Shopping Center', 'Mission Viejo Country Club', 'Pavillion Park'],
    neighborhoods: [
      { name: 'Pacific Hills', description: 'Hillside community with ocean views and homes from the 1980s. Canyon-adjacent lots experience temperature swings that promote condensation. HVAC systems and attic ventilation are primary inspection priorities.' },
      { name: 'Olympiad area', description: 'Central Mission Viejo neighborhood with a mix of single-family homes from the 1970s-80s. Aging plumbing and HVAC systems in this era of construction are common moisture sources we address regularly.' },
      { name: 'Trabuco area', description: 'Eastern Mission Viejo neighborhood near the Trabuco Creek corridor. Creek-adjacent properties can experience elevated ground moisture, particularly in crawl spaces after winter rains.' },
      { name: 'Casta del Sol', description: 'Active adult community with older construction requiring attention to aging HVAC systems, plumbing fixtures, and bathroom ventilation. We provide respectful, thorough inspections for this established community.' },
      { name: 'Lake area (Marguerite Pkwy corridor)', description: 'Homes near Lake Mission Viejo experience slightly elevated ambient humidity from the lake. HVAC systems, bathroom exhaust, and any below-grade spaces are priority inspection areas for lake-adjacent properties.' },
    ],
  },
  {
    name: 'Newport Beach', slug: 'newport-beach-ca', tier: 'core',
    nearby: ['Costa Mesa', 'Irvine', 'Huntington Beach', 'Laguna Beach', 'Santa Ana', 'Fountain Valley'],
    landmarks: ['Balboa Island', 'Fashion Island', 'Corona del Mar State Beach', 'Newport Harbor', 'The Wedge'],
    neighborhoods: [
      { name: 'Balboa Peninsula', description: "One of OC's highest mold-risk areas — older beach cottages with direct ocean exposure, limited attic ventilation, and aging plumbing. Many properties date from the 1940s-60s with minimal moisture protection." },
      { name: 'Balboa Island', description: 'Island properties face marine humidity from all sides. Limited lot sizes mean homes are densely packed with minimal airflow between structures. HVAC systems and crawl spaces require particular attention.' },
      { name: 'Corona del Mar', description: 'Upscale bluff-top homes in CdM face ocean-facing moisture intrusion on west-facing walls and windows. High-value properties here benefit from thorough inspection before purchase or renovation.' },
      { name: 'Newport Coast', description: 'Newer luxury construction in Newport Coast is tightly built for energy efficiency. Without adequate mechanical ventilation, these homes trap humidity — particularly in multi-zone HVAC systems and spa or pool-adjacent rooms.' },
      { name: 'Lido Isle', description: "This harbor-facing island community experiences some of Newport's highest marine humidity levels. Homes on Lido Isle often have older HVAC systems and require inspection of all harbor-facing walls and window assemblies." },
      { name: 'West Newport', description: 'Dense residential development with older construction and high rental turnover. West Newport properties near PCH frequently show moisture issues in bathroom walls, under-sink areas, and poorly ventilated garage spaces.' },
    ],
  },
  {
    name: 'Huntington Beach', slug: 'huntington-beach-ca', tier: 'core',
    nearby: ['Fountain Valley', 'Costa Mesa', 'Westminster', 'Seal Beach', 'Newport Beach', 'Garden Grove'],
    landmarks: ['Huntington Beach Pier', 'Bolsa Chica Ecological Reserve', 'International Surfing Museum', 'Pacific City', 'Huntington Central Park'],
    neighborhoods: [
      { name: 'Downtown HB / Pier area', description: 'Older beach cottages and condos within walking distance of the pier face maximum salt air and marine humidity exposure. Many properties in this corridor were built before modern moisture barriers were standard.' },
      { name: 'Huntington Harbour', description: 'Waterfront community with homes on man-made channels. Water on multiple sides creates persistently elevated humidity. Boat garages and lower-level rooms adjacent to the water are high-priority inspection areas.' },
      { name: 'Bolsa Chica area', description: 'Homes near the Bolsa Chica Ecological Reserve experience wetland-adjacent humidity. Properties backing the reserve or the slough have unique ground moisture conditions that affect crawl spaces and slab foundations.' },
      { name: 'Seacliff', description: "Upscale planned community with bluff-top and inland homes. Seacliff's proximity to the coast combined with 1980s-90s construction makes HVAC systems and window assemblies key inspection focus areas." },
      { name: 'Oldtown Huntington Beach', description: 'Historic neighborhood with pre-war and post-war construction near the beach. These older homes often have original plumbing and minimal vapor barriers — prime candidates for thorough professional inspection.' },
    ],
  },
  {
    name: 'Costa Mesa', slug: 'costa-mesa-ca', tier: 'core',
    nearby: ['Newport Beach', 'Irvine', 'Huntington Beach', 'Santa Ana', 'Fountain Valley', 'Tustin'],
    landmarks: ['South Coast Plaza', 'Segerstrom Center for the Arts', 'Orange County Fairgrounds', 'The LAB Anti-Mall', 'TeWinkle Park'],
    neighborhoods: [
      { name: 'Eastside Costa Mesa', description: "Bordering Newport Beach's Back Bay, Eastside Costa Mesa is among the most humidity-affected areas in the city. Older single-family homes here frequently show moisture issues in attics, bathrooms, and around original plumbing." },
      { name: 'Mesa Verde', description: 'Established neighborhood with homes from the 1960s-70s. Aging HVAC systems, older plumbing connections, and dated bathroom ventilation are the most common moisture sources we find in Mesa Verde properties.' },
      { name: 'South Coast Metro area', description: 'Mix of condos and apartments near South Coast Plaza. High-density attached housing means shared-wall moisture migration is a concern. We inspect HVAC systems and all shared-wall bathrooms and kitchen areas.' },
      { name: 'Westside Costa Mesa', description: 'Older industrial-residential mix neighborhood with homes dating from the 1950s-60s. Plumbing and roof systems in this era of construction deserve particular attention during inspection.' },
      { name: 'College Park area', description: 'Residential neighborhood with post-war and mid-century construction near OCC. Aging infrastructure and older construction styles are common — we assess original plumbing, HVAC, and window seals in this area.' },
    ],
  },
  {
    name: 'Irvine', slug: 'irvine-ca', tier: 'core',
    nearby: ['Tustin', 'Costa Mesa', 'Newport Beach', 'Lake Forest', 'Santa Ana', 'Orange'],
    landmarks: ['Irvine Spectrum Center', 'University of California Irvine', 'Great Park', 'Quail Hill', 'Turtle Rock Community Park'],
    neighborhoods: [
      { name: 'Woodbridge', description: "One of Irvine's original villages with homes from the late 1970s-80s. Aging plumbing and HVAC systems are common moisture sources. Lake-adjacent areas can see slightly elevated ground moisture near lower-level living spaces." },
      { name: 'Quail Hill', description: 'Newer construction in Quail Hill is tightly built, making HVAC moisture management critical. We commonly inspect evaporator coils and condensate drain lines in this community\'s townhomes and single-family homes.' },
      { name: 'Portola Springs', description: "Portola Springs features some of Irvine's newest construction. While well-built, these homes can develop mold from construction moisture sealed in during building, or from HVAC issues in the first few years of occupancy." },
      { name: 'Northwood', description: "Northwood's mix of 1980s-90s single-family homes and condos frequently show bathroom ventilation issues and aging water heater connections as primary moisture sources." },
      { name: 'University Park', description: 'Proximity to UC Irvine means many University Park properties are rentals with higher occupancy and intensive bathroom and kitchen use. Landlords benefit from annual inspections to meet California habitability standards.' },
      { name: 'Laguna Altura', description: "Laguna Altura's hillside location creates temperature differentials that promote condensation inside wall cavities. Tightly sealed homes here can accumulate indoor humidity rapidly without proper ventilation." },
    ],
  },
]

// 24 Secondary cities
export const SECONDARY_CITIES: ServiceArea[] = [
  {
    name: 'Aliso Viejo', slug: 'aliso-viejo-ca', tier: 'secondary',
    nearby: ['Laguna Niguel', 'Laguna Hills', 'Mission Viejo', 'Laguna Beach', 'Lake Forest', 'Irvine'],
    landmarks: ['Aliso Viejo Town Center', 'Aliso and Wood Canyons Wilderness Park', 'Grand Park', 'Iglesia Park', 'Soka University'],
    neighborhoods: [
      { name: 'Glenwood', description: "One of Aliso Viejo's largest communities with townhomes and condos from the early 2000s. Shared-wall construction means moisture in one unit can migrate to neighbors. HVAC systems and bathroom ventilation are primary inspection focus areas." },
      { name: 'Aliso Viejo Town Center area', description: 'Mixed residential development near the Town Center with condos and attached homes. High-density construction requires attention to shared plumbing chases and common-area mechanical systems that can distribute moisture between units.' },
      { name: 'Pacific Ridge', description: 'Hillside community with ocean views and newer construction. Tightly sealed energy-efficient homes can trap humidity when HVAC systems underperform. Canyon-facing lots experience temperature swings that promote condensation.' },
      { name: 'Soka University area', description: 'Residential neighborhoods near Soka University include a mix of attached and detached homes. The hillside setting brings coastal fog and moisture that affects attic spaces and north-facing walls in particular.' },
    ],
  },
  {
    name: 'Anaheim', slug: 'anaheim-ca', tier: 'secondary',
    nearby: ['Orange', 'Fullerton', 'Garden Grove', 'Buena Park', 'Placentia', 'Santa Ana'],
    landmarks: ['Disneyland Resort', 'Angel Stadium', 'Honda Center', 'Anaheim Packing District', 'Downtown Disney'],
    neighborhoods: [
      { name: 'Anaheim Hills', description: 'Upscale hillside community in eastern Anaheim with custom and tract homes from the 1970s-90s. Canyon locations experience temperature differentials that promote condensation. Aging HVAC systems and plumbing in this era of construction are common moisture sources.' },
      { name: 'Platinum Triangle', description: 'High-density condo and apartment development near Angel Stadium. Newer construction in multi-story buildings requires attention to shared HVAC systems, plumbing chases, and below-grade parking levels that can accumulate moisture.' },
      { name: 'Colony Historic District', description: "One of Anaheim's oldest neighborhoods with homes from the early 1900s through the 1950s. Original plumbing, plaster walls, and minimal vapor barriers make these properties higher mold-risk candidates requiring non-invasive inspection methods." },
      { name: 'West Anaheim', description: 'Older residential neighborhoods with post-war tract homes from the 1950s-60s. Aging plumbing systems, dated bathroom ventilation, and original roofing are the most common moisture sources we find in West Anaheim inspections.' },
    ],
  },
  {
    name: 'Brea', slug: 'brea-ca', tier: 'secondary',
    nearby: ['Fullerton', 'Placentia', 'Yorba Linda', 'La Habra', 'Orange', 'Anaheim'],
    landmarks: ['Brea Mall', 'Downtown Brea', 'Brea Dam Recreation Area', 'Carbon Canyon Regional Park', 'Curtis Theatre'],
    neighborhoods: [
      { name: 'Downtown Brea / Brea Mall area', description: 'Mix of older residential construction and newer infill development near the downtown corridor. Older homes in this area have original plumbing and roofing that benefit from periodic professional inspection.' },
      { name: 'Carbon Canyon area', description: 'Hillside and canyon-adjacent homes near Carbon Canyon Regional Park experience moisture from canyon breezes and marine layer. Drainage around hillside foundations is a common concern after rain events.' },
      { name: 'Olinda Ranch', description: 'Newer master-planned community with construction from the early 2000s. While well-built, these homes can develop mold from HVAC issues and construction moisture. Tightly sealed building envelopes trap humidity when ventilation is inadequate.' },
      { name: 'Brea Country Hills', description: 'Established hillside neighborhood with homes from the 1970s-80s. Canyon-facing lots and aging construction details — particularly window seals and HVAC systems — are priority inspection areas.' },
    ],
  },
  {
    name: 'Buena Park', slug: 'buena-park-ca', tier: 'secondary',
    nearby: ['Fullerton', 'Anaheim', 'Cypress', 'La Palma', 'Stanton', 'Garden Grove'],
    landmarks: ['Knotts Berry Farm', 'Medieval Times', 'Pirate Dinner Adventure', 'Buena Park Downtown', 'Ralph B. Clark Regional Park'],
    neighborhoods: [
      { name: "Knott's Berry Farm area", description: "Residential neighborhoods near Knott's have older post-war construction from the 1950s-60s. Original plumbing, limited attic ventilation, and dated bathroom exhaust systems are the most common moisture sources in this corridor." },
      { name: 'Downtown Buena Park', description: 'Older urban residential area with a mix of apartments, condos, and single-family homes. High occupancy rental properties in this area benefit from regular inspection to meet California habitability requirements.' },
      { name: 'North Buena Park', description: 'Family-oriented neighborhoods with tract homes from the 1960s-70s. Aging HVAC systems and plumbing connections are typical moisture sources. Flat-roof sections common in this era of construction also require attention.' },
    ],
  },
  {
    name: 'Cypress', slug: 'cypress-ca', tier: 'secondary',
    nearby: ['Buena Park', 'Los Alamitos', 'La Palma', 'Stanton', 'Garden Grove', 'Seal Beach'],
    landmarks: ['Cypress College', 'Arnold Cypress Park', 'Veterans Memorial', 'Oak Knoll Park', 'Cypress Community Center'],
    neighborhoods: [
      { name: 'Cypress College area', description: 'Residential neighborhoods near Cypress College include older tract homes from the 1960s-70s. High student rental occupancy in some properties increases moisture load from intensive bathroom and kitchen use.' },
      { name: 'Los Alamitos border / Katella corridor', description: 'Neighborhoods along the Cypress and Los Alamitos border have older construction with dated plumbing and ventilation systems. Proximity to the San Gabriel River watershed means certain lots experience elevated soil moisture.' },
      { name: 'Central Cypress residential', description: 'Core family neighborhoods with homes from the 1960s-80s. HVAC systems, bathroom exhaust fans venting into attic spaces, and aging water heater connections are the most frequent findings in our Cypress inspections.' },
    ],
  },
  {
    name: 'Fountain Valley', slug: 'fountain-valley-ca', tier: 'secondary',
    nearby: ['Huntington Beach', 'Costa Mesa', 'Westminster', 'Santa Ana', 'Garden Grove', 'Irvine'],
    landmarks: ['Mile Square Regional Park', 'Fountain Valley Recreation Center', 'Kingston Park', 'Courreges Park', 'Fountain Valley Summerfest'],
    neighborhoods: [
      { name: 'Mile Square Park area', description: 'Residential neighborhoods surrounding Mile Square Regional Park feature homes from the 1960s-70s. Flat terrain means drainage relies on underground systems, and older homes may have moisture near foundations after heavy rain.' },
      { name: 'Fountain Valley central residential', description: 'Core family neighborhoods with tract homes from the 1960s-70s. Aging plumbing and HVAC systems are the most common moisture sources. Proximity to Huntington Beach means the marine layer regularly affects indoor humidity levels.' },
      { name: 'Eastside Fountain Valley', description: 'Neighborhoods bordering Costa Mesa and Santa Ana with older construction. Original plumbing systems and roofing in these properties benefit from regular inspection, particularly before buying or selling.' },
    ],
  },
  {
    name: 'Fullerton', slug: 'fullerton-ca', tier: 'secondary',
    nearby: ['Placentia', 'Anaheim', 'Brea', 'Buena Park', 'La Habra', 'Yorba Linda'],
    landmarks: ['Fullerton Arboretum', 'Muckenthaler Cultural Center', 'Downtown Fullerton', 'California State University Fullerton', 'Hillcrest Park'],
    neighborhoods: [
      { name: 'Downtown Fullerton historic district', description: 'Beautiful historic homes from the early 1900s through the 1940s with original plaster walls, galvanized plumbing, and single-pane windows. These properties require non-invasive inspection methods appropriate for vintage construction.' },
      { name: 'CSUF campus area', description: 'High-density rental properties near Cal State Fullerton see intensive occupancy and frequent deferred maintenance. Bathroom ventilation, aging HVAC, and plumbing under kitchen sinks are the most common moisture sources in college-area rentals.' },
      { name: 'Fullerton Hills', description: 'Upscale hillside community with custom homes from the 1970s-90s. Canyon-facing lots experience temperature swings that promote condensation. Larger homes with complex rooflines require thorough attic inspections.' },
      { name: 'Raymond Hills', description: 'Established residential neighborhood with a mix of older and mid-century homes. Tree-lined streets and older construction make this a character-rich area that benefits from periodic professional moisture assessment.' },
    ],
  },
  {
    name: 'Garden Grove', slug: 'garden-grove-ca', tier: 'secondary',
    nearby: ['Westminster', 'Anaheim', 'Santa Ana', 'Stanton', 'Fountain Valley', 'Orange'],
    landmarks: ['Christ Cathedral', 'Atlantis Play Center', 'Garden Grove Strawberry Festival', 'Village Green Park', 'Garden Grove Historical Society'],
    neighborhoods: [
      { name: 'Little Saigon adjacent neighborhoods', description: 'Older residential areas near the Garden Grove and Westminster Little Saigon corridor have post-war construction from the 1950s-60s. Original plumbing and roofing systems in these properties are common moisture sources.' },
      { name: 'West Garden Grove', description: 'Residential neighborhoods with older tract homes bordering Stanton and Westminster. Aging infrastructure and flat terrain make drainage and foundation moisture considerations important during inspections.' },
      { name: 'Garden Grove central', description: 'Core neighborhoods with homes from the 1950s-70s near the Christ Cathedral corridor. Older window seals, bathroom ventilation, and HVAC systems are the most frequent moisture findings in this area.' },
    ],
  },
  {
    name: 'La Habra', slug: 'la-habra-ca', tier: 'secondary',
    nearby: ['Brea', 'Fullerton', 'Buena Park', 'La Palma', 'Placentia', 'Yorba Linda'],
    landmarks: ['La Habra Childrens Museum', 'La Habra Depot Theater', 'Portola Park', 'La Habra Citrus Festival', 'Imperial Park'],
    neighborhoods: [
      { name: 'Downtown La Habra', description: 'Older residential neighborhoods near downtown with homes from the 1940s-60s. Original plumbing systems and minimal vapor barriers in these properties make professional inspection particularly valuable before purchase or renovation.' },
      { name: 'La Habra Hills', description: 'Hillside community bordering Los Angeles County with custom homes and canyon-adjacent lots. Hillside drainage and uphill foundation moisture are key inspection priorities alongside aging construction details.' },
      { name: 'North La Habra', description: 'Family neighborhoods with tract homes from the 1960s-70s bordering Whittier. Aging HVAC systems and plumbing connections are common moisture sources in this era of construction.' },
    ],
  },
  {
    name: 'La Palma', slug: 'la-palma-ca', tier: 'secondary',
    nearby: ['Buena Park', 'Cypress', 'Stanton', 'Anaheim', 'Los Alamitos', 'La Habra'],
    landmarks: ['La Palma Central Park', 'La Palma Intercommunity Hospital', 'Walker Junior High School', 'George Washington Elementary', 'La Palma City Hall'],
    neighborhoods: [
      { name: 'La Palma central residential', description: "La Palma's compact residential core features homes from the 1960s-70s in well-maintained neighborhoods. Despite the city's small size, HVAC systems and bathroom ventilation are the most common moisture sources we find during inspections." },
      { name: 'La Palma / Buena Park border', description: 'Neighborhoods along the La Palma and Buena Park border share similar construction styles from the 1960s-70s. Aging plumbing and roofing in this corridor benefit from periodic professional assessment.' },
    ],
  },
  {
    name: 'Laguna Woods', slug: 'laguna-woods-ca', tier: 'secondary',
    nearby: ['Lake Forest', 'Laguna Hills', 'Irvine', 'Aliso Viejo', 'Mission Viejo', 'Laguna Beach'],
    landmarks: ['Laguna Woods Village', 'Laguna Woods City Hall', 'Aliso Creek', 'El Toro Road Shopping', 'Laguna Woods Community Center'],
    neighborhoods: [
      { name: 'Laguna Woods Village', description: 'The majority of Laguna Woods consists of this active adult community developed in the 1960s-70s. Co-op and condo structures mean shared HVAC and plumbing systems can distribute moisture between units. We provide respectful, thorough service to all Village residents.' },
      { name: 'Gate areas (1 through 9)', description: 'Laguna Woods Village is divided into gate communities, each with slightly different construction details and common-area systems. HVAC units in gate communities often share mechanical rooms that require periodic inspection for moisture and mold.' },
    ],
  },
  {
    name: 'Lake Forest', slug: 'lake-forest-ca', tier: 'secondary',
    nearby: ['Irvine', 'Mission Viejo', 'Laguna Hills', 'Laguna Woods', 'Rancho Santa Margarita', 'Aliso Viejo'],
    landmarks: ['Ethnobotany Garden', 'Pittsford Park', 'Lake Forest Sports Park', 'Borrego Park', 'Heritage Hill Historical Park'],
    neighborhoods: [
      { name: 'El Toro area', description: 'Established neighborhoods in the former El Toro community with homes from the 1970s-80s. Aging HVAC systems, plumbing connections, and bathroom ventilation are the most common moisture sources we find in El Toro area inspections.' },
      { name: 'Foothill Ranch', description: 'Master-planned community in eastern Lake Forest with homes from the 1990s-2000s. Hillside and canyon-adjacent lots experience temperature differentials. Tightly sealed newer construction can trap humidity when ventilation is inadequate.' },
      { name: 'Baker Ranch', description: 'One of Lake Forest\'s newest communities with construction from 2014 onward. While modern, these homes can develop mold from construction moisture, HVAC issues, or plumbing leaks in tight wall chases. Energy-efficient envelopes trap humidity effectively.' },
      { name: 'Serrano', description: 'Gated community in eastern Lake Forest with upscale homes and hillside lots. Canyon exposure and larger homes with complex rooflines require thorough attic and crawl space inspection alongside standard HVAC and plumbing assessment.' },
    ],
  },
  {
    name: 'Los Alamitos', slug: 'los-alamitos-ca', tier: 'secondary',
    nearby: ['Seal Beach', 'Cypress', 'Garden Grove', 'Westminster', 'Huntington Beach', 'Stanton'],
    landmarks: ['Los Alamitos Race Course', 'Arbor Dog Park', 'Little Cottonwood Park', 'Los Alamitos Community Center', 'Museum of History'],
    neighborhoods: [
      { name: 'Old Town Los Alamitos', description: 'Historic core of Los Alamitos with older residential construction near the Race Course. Homes from the 1940s-60s in this area have original plumbing and roofing that benefit from professional inspection before purchase or renovation.' },
      { name: 'Rossmoor adjacent areas', description: 'Neighborhoods bordering the Rossmoor community in unincorporated Orange County feature homes from the 1960s-70s. Well-maintained properties in this area still benefit from periodic HVAC and plumbing inspection.' },
    ],
  },
  {
    name: 'Orange', slug: 'orange-ca', tier: 'secondary',
    nearby: ['Anaheim', 'Santa Ana', 'Tustin', 'Villa Park', 'Irvine', 'Garden Grove'],
    landmarks: ['Old Towne Orange', 'Chapman University', 'The Outlets at Orange', 'Irvine Regional Park', 'Santiago Oaks Regional Park'],
    neighborhoods: [
      { name: 'Old Towne Orange', description: "National Register historic district with homes from the 1880s through the 1930s. Original plaster walls, wood lath construction, and vintage plumbing require non-invasive inspection methods. We have extensive experience with historic Orange County construction." },
      { name: 'Chapman University area', description: 'College neighborhoods surrounding Chapman University with older rental properties. High occupancy and typical deferred maintenance make HVAC systems, bathroom ventilation, and plumbing the primary moisture sources in these properties.' },
      { name: 'Orange Hills', description: 'Upscale hillside community in eastern Orange with custom homes and canyon-adjacent lots. Hillside drainage, complex rooflines, and aging HVAC systems in properties from the 1970s-90s are key inspection priorities.' },
      { name: 'Villa Park border neighborhoods', description: 'Residential areas bordering Villa Park feature larger lots and custom construction. Properties in this corridor often have original plumbing and HVAC systems from the 1960s-80s that deserve periodic professional assessment.' },
    ],
  },
  {
    name: 'Placentia', slug: 'placentia-ca', tier: 'secondary',
    nearby: ['Fullerton', 'Yorba Linda', 'Anaheim', 'Brea', 'Orange', 'Villa Park'],
    landmarks: ['Tri-City Park', 'George Key Ranch Historic Park', 'Bradford House', 'Placentia Champions Sports Complex', 'Downtown Placentia'],
    neighborhoods: [
      { name: 'Downtown Placentia historic area', description: 'Historic downtown neighborhood with homes from the early 1900s through the 1940s. Original construction with plaster walls and vintage plumbing benefits from non-invasive inspection methods appropriate for historic materials.' },
      { name: 'Placentia central residential', description: 'Core family neighborhoods with tract homes from the 1960s-70s. Aging HVAC systems, bathroom ventilation, and plumbing connections are the most common moisture sources we find during Placentia inspections.' },
      { name: 'Tri-City Park area', description: 'Established neighborhoods near Tri-City Park with homes from the 1970s-80s. A well-maintained community where HVAC systems and aging plumbing connections are the primary inspection focus areas.' },
    ],
  },
  {
    name: 'Rancho Santa Margarita', slug: 'rancho-santa-margarita-ca', tier: 'secondary',
    nearby: ['Mission Viejo', 'Lake Forest', 'San Juan Capistrano', 'Laguna Hills', 'Laguna Niguel', 'Aliso Viejo'],
    landmarks: ['Rancho Santa Margarita Lake', 'Central Park', 'Tijeras Creek Golf Club', 'Arroyo Trabuco Golf Club', 'OSO Viejo Park'],
    neighborhoods: [
      { name: 'RSM Lake area', description: 'Homes near Rancho Santa Margarita Lake experience slightly elevated ambient humidity from lake proximity. HVAC systems, bathroom exhaust, and any below-grade spaces are priority inspection areas for lake-adjacent properties.' },
      { name: 'Melinda Heights', description: 'Hillside community in northern RSM with homes from the late 1980s-90s. Canyon-adjacent lots experience temperature swings that promote condensation. HVAC systems and attic ventilation are primary inspection priorities.' },
      { name: 'Tijeras Creek area', description: 'Homes near the Tijeras Creek golf corridor experience creek-adjacent ground moisture that affects crawl spaces and lower-level areas after rain events. Well-maintained community that benefits from periodic professional inspection.' },
      { name: 'Dove Canyon', description: 'Gated community in eastern RSM with upscale homes and canyon views. The canyon setting creates unique moisture microclimates. Larger custom homes require thorough attic, crawl space, and HVAC inspection.' },
    ],
  },
  {
    name: 'San Juan Capistrano', slug: 'san-juan-capistrano-ca', tier: 'secondary',
    nearby: ['Dana Point', 'San Clemente', 'Laguna Niguel', 'Mission Viejo', 'Rancho Santa Margarita', 'Laguna Hills'],
    landmarks: ['Mission San Juan Capistrano', 'Los Rios Historic District', 'Zoomars Petting Zoo', 'ONeill Museum', 'Historic Town Center'],
    neighborhoods: [
      { name: 'Los Rios Historic District', description: "One of California's oldest neighborhoods with adobe-style construction dating to the 1700s-1800s. Adobe walls absorb ambient humidity and original construction lacks modern vapor barriers. Non-invasive inspection methods are essential for these historic structures." },
      { name: 'Rancho Viejo area', description: "Established neighborhoods with homes from the 1970s-80s near the equestrian corridor. Aging HVAC systems and plumbing, combined with the area's agricultural irrigation history, make moisture assessment particularly valuable." },
      { name: 'Ortega Highway corridor', description: 'Hillside and canyon-adjacent properties along the Ortega Highway corridor experience creek moisture and canyon temperature swings. Trabuco Creek proximity creates elevated soil moisture conditions for nearby foundations.' },
      { name: 'Mission Hills area', description: 'Residential neighborhoods near Mission San Juan Capistrano with a mix of historic and newer construction. Properties in the shadow of the hills experience limited airflow that can promote moisture accumulation in attic and crawl spaces.' },
    ],
  },
  {
    name: 'Santa Ana', slug: 'santa-ana-ca', tier: 'secondary',
    nearby: ['Orange', 'Irvine', 'Costa Mesa', 'Tustin', 'Garden Grove', 'Fountain Valley'],
    landmarks: ['Santa Ana Zoo', 'Bowers Museum', 'Discovery Cube Orange County', 'MainPlace Mall', 'Heritage Museum of Orange County'],
    neighborhoods: [
      { name: 'Floral Park', description: 'Prestigious historic neighborhood with homes from the 1920s-40s. Original plumbing, plaster walls, and single-pane windows create conditions for moisture accumulation. Professional inspection preserves these valuable properties while identifying hidden moisture issues.' },
      { name: 'Heninger Park', description: 'Historic residential neighborhood with craftsman and Spanish Colonial homes from the 1920s-30s. Older construction requires non-invasive inspection methods and experienced assessment of vintage plumbing and roofing systems.' },
      { name: 'Midtown Santa Ana', description: 'Dense urban residential area with a mix of older single-family homes and multi-family buildings. High occupancy rental properties benefit from regular inspection to meet California habitability requirements and protect tenant health.' },
      { name: 'South Coast Metro adjacent', description: 'Residential neighborhoods bordering the South Coast Plaza corridor feature a mix of construction ages. Proximity to Newport Beach and Costa Mesa means coastal humidity regularly affects indoor air quality in this area.' },
    ],
  },
  {
    name: 'Seal Beach', slug: 'seal-beach-ca', tier: 'secondary',
    nearby: ['Huntington Beach', 'Los Alamitos', 'Westminster', 'Cypress', 'Garden Grove', 'Fountain Valley'],
    landmarks: ['Seal Beach Pier', 'Main Street Seal Beach', 'Seal Beach National Wildlife Refuge', 'Eisenhower Park', 'Red Car Museum'],
    neighborhoods: [
      { name: 'Old Town Seal Beach / Main Street', description: 'Historic beach cottages and bungalows within walking distance of the pier. Built before modern moisture standards, these properties face direct ocean exposure and require thorough inspection of attics, crawl spaces, and original plumbing.' },
      { name: 'Leisure World', description: 'Large active adult community with construction from the 1960s-70s. Co-op residential structures share plumbing and HVAC systems that can distribute moisture between units. We provide respectful, thorough service to Leisure World residents.' },
      { name: 'College Park East', description: 'Established family neighborhood with homes from the 1960s-70s inland from the beach. While less exposed to direct marine humidity than coastal areas, aging HVAC systems and plumbing are common moisture sources in College Park East properties.' },
    ],
  },
  {
    name: 'Stanton', slug: 'stanton-ca', tier: 'secondary',
    nearby: ['Garden Grove', 'Cypress', 'Buena Park', 'Anaheim', 'Westminster', 'La Palma'],
    landmarks: ['Adventure City', 'Stanton Central Park', 'Veterans Memorial', 'Harry M. Dotson Park', 'Stanton Community Center'],
    neighborhoods: [
      { name: 'Central Stanton residential', description: "Core neighborhoods with older tract homes from the 1950s-60s. Stanton's flat terrain means drainage relies on underground systems, and older homes may experience foundation moisture after heavy rain. Aging plumbing and roofing are common inspection findings." },
      { name: 'Stanton / Garden Grove border', description: 'Neighborhoods along the Stanton and Garden Grove border share similar post-war construction. Original plumbing systems and dated bathroom ventilation are the most frequent moisture sources we find in this corridor.' },
    ],
  },
  {
    name: 'Tustin', slug: 'tustin-ca', tier: 'secondary',
    nearby: ['Irvine', 'Santa Ana', 'Orange', 'Costa Mesa', 'Fountain Valley', 'Villa Park'],
    landmarks: ['Old Town Tustin', 'Tustin Legacy', 'Tustin Ranch Golf Club', 'Marconi Automotive Museum', 'Peters Canyon Regional Park'],
    neighborhoods: [
      { name: 'Old Town Tustin', description: 'Charming historic district with homes from the early 1900s through the 1950s. Original plaster walls, wood framing, and vintage plumbing require non-invasive inspection methods. We have extensive experience with Old Town Tustin\'s construction styles.' },
      { name: 'Tustin Ranch', description: 'Master-planned community in eastern Tustin with homes from the 1980s-90s. While generally well-maintained, aging HVAC systems and plumbing connections in this era of construction are common moisture sources. Larger homes require thorough attic inspection.' },
      { name: 'Tustin Legacy', description: 'Newer mixed-use development on the former Marine Corps Air Station with construction from 2005 onward. Modern construction can still develop mold from HVAC issues and plumbing leaks. Energy-efficient building envelopes trap humidity when ventilation is inadequate.' },
      { name: 'Peppertree area', description: 'Established residential neighborhood in central Tustin with homes from the 1960s-70s. Aging infrastructure and dated construction details make periodic professional inspection valuable for homeowners and landlords alike.' },
    ],
  },
  {
    name: 'Villa Park', slug: 'villa-park-ca', tier: 'secondary',
    nearby: ['Orange', 'Anaheim', 'Yorba Linda', 'Placentia', 'Tustin', 'Santa Ana'],
    landmarks: ['Villa Park High School', 'Villa Park Orchards', 'Santiago Creek', 'Serrano Park', 'Villa Park Town Center'],
    neighborhoods: [
      { name: 'Villa Park equestrian estates', description: 'Large custom lots with equestrian facilities throughout Villa Park. Irrigated acreage contributes to elevated soil moisture around foundations. Custom homes from the 1960s-80s often have original plumbing and HVAC systems requiring experienced inspection.' },
      { name: 'Santiago Creek adjacent', description: 'Properties backing Santiago Creek experience creek-adjacent ground moisture that affects crawl spaces and lower-level areas after rain events. Uphill foundation walls on creek-facing lots are priority inspection areas.' },
      { name: 'Villa Park central residential', description: 'Core neighborhoods with custom single-family homes on large lots. The exclusivity of Villa Park means properties often have unique construction features that require experienced assessment. HVAC systems and custom plumbing installations are key focus areas.' },
    ],
  },
  {
    name: 'Westminster', slug: 'westminster-ca', tier: 'secondary',
    nearby: ['Garden Grove', 'Huntington Beach', 'Fountain Valley', 'Stanton', 'Seal Beach', 'Santa Ana'],
    landmarks: ['Little Saigon', 'Asian Garden Mall', 'Westminster Mall', 'Sid Goldstein Freedom Park', 'Vietnam War Memorial'],
    neighborhoods: [
      { name: 'Little Saigon', description: 'Vibrant cultural district with older residential construction from the 1950s-70s mixed with commercial development. Older homes in this corridor have post-war construction details — original plumbing and roofing systems — that benefit from professional inspection.' },
      { name: 'Westminster central residential', description: 'Core family neighborhoods with tract homes from the 1960s-70s. Aging HVAC systems, bathroom ventilation, and plumbing connections are the most common moisture sources in Westminster residential inspections.' },
      { name: 'Midway City adjacent', description: 'Neighborhoods bordering the Midway City unincorporated area feature older construction with dated infrastructure. Flat terrain and aging drainage systems make foundation moisture a consideration during inspection.' },
    ],
  },
  {
    name: 'Yorba Linda', slug: 'yorba-linda-ca', tier: 'secondary',
    nearby: ['Placentia', 'Brea', 'Anaheim', 'Fullerton', 'Orange', 'Villa Park'],
    landmarks: ['Richard Nixon Presidential Library', 'Black Gold Golf Club', 'Yorba Regional Park', 'Jessamyn West Park', 'Travis Ranch'],
    neighborhoods: [
      { name: 'Yorba Linda Country Club area', description: 'Upscale neighborhoods surrounding the country club with custom homes from the 1970s-90s. Large lots with mature landscaping and irrigation systems can contribute to foundation moisture. Aging HVAC and plumbing in these properties deserve periodic professional assessment.' },
      { name: 'Travis Ranch', description: 'Family community in eastern Yorba Linda with homes from the 1980s-90s. Canyon-adjacent lots experience temperature swings. HVAC systems and attic ventilation are primary inspection priorities in this well-maintained community.' },
      { name: 'East Lake Village', description: 'Master-planned community with a private lake and homes from the 1980s-90s. Lake-adjacent properties experience slightly elevated ambient humidity. HVAC systems, bathroom exhaust, and below-grade spaces are key inspection focus areas.' },
      { name: 'Black Gold area', description: 'Hillside neighborhoods near Black Gold Golf Club with upscale custom homes and canyon views. Hillside drainage, complex rooflines, and the canyon microclimate create unique moisture conditions that benefit from professional assessment.' },
    ],
  },
]

// All 34 approved service areas (combined and deduplicated)
export const cities: ServiceArea[] = [...CORE_CITIES, ...SECONDARY_CITIES]

// Primary export for static params generation
export const APPROVED_SERVICE_AREAS = cities

// Export filtered lists
export const CORE_SERVICE_AREAS = cities.filter(c => c.tier === 'core')
export const SECONDARY_SERVICE_AREAS = cities.filter(c => c.tier === 'secondary')

// Helper function to get approved city names for validation
export const approvedCityNames = cities.map(c => c.name)

export function getCityBySlug(slug: string) {
  return cities.find(city => city.slug === slug)
}

const descriptions: Record<string, string> = {
  'Aliso Viejo': 'Aliso Viejo is one of Orange County\'s newer cities, incorporated in 2001. The planned community features modern homes, excellent amenities, and a Town Center with shopping and dining. While newer construction is generally well-built, proper ventilation remains important.',
  'Anaheim': 'Anaheim is home to Disneyland Resort and the Honda Center, making it a major tourist destination in Orange County. The city has a rich history dating back to German settlers in the 1850s. Many homes in Anaheim are older construction, which may have outdated plumbing and ventilation systems that can contribute to moisture problems and potential mold growth.',
  'Brea': 'Brea is known for the Brea Mall and its revitalized downtown area. The city offers a mix of residential neighborhoods and commercial development. Proper home maintenance helps prevent moisture issues in this inland community.',
  'Buena Park': 'Buena Park is home to Knott\'s Berry Farm, one of America\'s oldest theme parks. The city offers affordable housing and easy freeway access. Regular home maintenance, including moisture control, helps prevent mold in residential properties.',
  'Costa Mesa': 'Costa Mesa is known for South Coast Plaza, one of the largest shopping centers in the United States, and the Segerstrom Center for the Arts. The city offers a blend of urban amenities and residential charm. Its proximity to the coast means higher humidity levels that homeowners should monitor to prevent mold growth.',
  'Cypress': 'Cypress is a small, friendly city with excellent schools and family-oriented neighborhoods. The city offers convenient access to shopping and recreation. Regular home inspections help maintain healthy indoor environments.',
  'Dana Point': 'Dana Point features a picturesque harbor, whale watching, and beautiful coastal views. The city offers luxury oceanfront living and access to world-class beaches. Coastal humidity requires attention to prevent mold in homes.',
  'Fountain Valley': 'Fountain Valley is known for its excellent schools and family-friendly neighborhoods. The city offers suburban living with easy access to the coast. Proper home maintenance helps prevent moisture and mold issues.',
  'Fullerton': 'Fullerton is a historic city known for its downtown entertainment district, California State University Fullerton, and beautiful tree-lined streets. The city preserves many historic homes and buildings. These older structures, while charming, may require extra attention to moisture control and mold prevention.',
  'Garden Grove': 'Garden Grove is known for the Crystal Cathedral (now Christ Cathedral) and its diverse cultural communities. The city offers affordable housing options and family-friendly neighborhoods. Proper home maintenance, including moisture control, is essential for preventing mold in this suburban community.',
  'Huntington Beach': 'Known as "Surf City USA," Huntington Beach boasts 10 miles of uninterrupted coastline and a vibrant beach culture. The city hosts the annual US Open of Surfing and features the iconic Huntington Beach Pier. Coastal properties here face unique challenges from ocean moisture and salt air, making regular mold inspections essential for maintaining healthy indoor environments.',
  'Irvine': 'Irvine is a master-planned city known for its safe neighborhoods, excellent schools, and thriving business community. Home to the University of California, Irvine, the city features beautiful parks, the Irvine Spectrum Center, and a diverse population. The Mediterranean climate creates comfortable living conditions, though the combination of newer construction and coastal humidity can sometimes lead to hidden moisture issues in homes.',
  'La Habra': 'La Habra is located at the northern edge of Orange County, offering affordable housing and easy freeway access. The city features a mix of older and newer homes. Older properties may require extra attention to prevent moisture issues.',
  'La Palma': 'La Palma is one of the smallest cities in Orange County, known for its excellent schools and safe neighborhoods. The city offers a suburban lifestyle with easy access to regional amenities.',
  'Laguna Beach': 'Laguna Beach is a world-renowned artists colony known for its coves, galleries, and the Festival of Arts. The stunning coastal setting comes with higher humidity and salt air exposure that can promote mold growth in homes.',
  'Laguna Hills': 'Laguna Hills offers a suburban lifestyle with easy access to beaches and the toll roads. The city features diverse housing options and good schools. Proper moisture management is important for maintaining healthy homes.',
  'Laguna Niguel': 'Laguna Niguel offers hillside living with ocean views and easy beach access. The city features beautiful parks, trails, and upscale shopping. Proximity to the coast means higher humidity that homeowners should monitor.',
  'Laguna Woods': 'Laguna Woods is a unique community known for Laguna Woods Village, one of the largest active adult communities in the nation. The city offers a peaceful lifestyle with excellent amenities for residents. Proper home maintenance and moisture control are important for the community\'s well-maintained homes.',
  'Lake Forest': 'Lake Forest is a family-friendly city known for its excellent schools and recreational facilities. The city offers a suburban lifestyle with easy access to beaches and mountains. Modern construction and proper maintenance help prevent moisture issues in most homes.',
  'Los Alamitos': 'Los Alamitos is a small city known for its excellent schools and family-friendly atmosphere. The city features the Los Alamitos Race Course and convenient location. Proper home maintenance helps prevent moisture issues.',
  'Mission Viejo': 'Mission Viejo is a master-planned community known as one of the safest cities in America. The city features Lake Mission Viejo, excellent schools, and abundant recreational facilities. While newer construction dominates, homeowners should still be vigilant about moisture in bathrooms, kitchens, and HVAC systems.',
  'Newport Beach': 'Newport Beach is an affluent coastal city famous for its harbor, beaches, and upscale shopping at Fashion Island. The Balboa Peninsula and Corona del Mar offer stunning ocean views and beach lifestyle living. The coastal location brings higher humidity levels and salt air, which can accelerate mold growth in homes, particularly in bathrooms, basements, and areas with poor ventilation.',
  'Orange': 'The City of Orange features one of the largest historic districts in California, with beautiful circular Old Towne Orange at its center. Chapman University adds a collegiate atmosphere to the community. Historic homes require vigilant moisture management to prevent mold issues in their older construction.',
  'Placentia': 'Placentia is a small city with a strong sense of community and excellent schools. The city features historic neighborhoods and newer developments. Older homes may require attention to plumbing and ventilation systems.',
  'Rancho Santa Margarita': 'Rancho Santa Margarita is a master-planned community nestled in the Santa Ana Mountains. The city offers outdoor recreation, excellent schools, and a strong sense of community. Canyon locations may have unique moisture considerations.',
  'San Clemente': 'San Clemente, known as the "Spanish Village by the Sea," offers a relaxed coastal lifestyle with Spanish Colonial architecture. The city features beautiful beaches, the historic downtown area, and the famous San Clemente Pier. Coastal humidity and salt air create conditions that can promote mold growth, making regular inspections important.',
  'San Juan Capistrano': 'San Juan Capistrano is famous for Mission San Juan Capistrano and the annual return of the swallows. The historic city features beautiful Spanish architecture and equestrian trails. Historic properties require careful moisture management.',
  'Santa Ana': 'As the county seat of Orange County, Santa Ana is a vibrant city with a rich cultural heritage and historic downtown area. The city features beautiful historic neighborhoods alongside modern developments. Older homes in Santa Ana may be more susceptible to moisture intrusion and mold issues, particularly in areas with original plumbing or roofing.',
  'Seal Beach': 'Seal Beach offers a charming small-town coastal atmosphere with a historic pier and Main Street. The beachfront location means homes are exposed to ocean moisture and salt air, requiring vigilant mold prevention measures.',
  'Stanton': 'Stanton is a small city offering affordable housing in central Orange County. The city provides convenient access to employment centers and recreation. Regular home maintenance is important for preventing moisture issues.',
  'Tustin': 'Tustin blends historic charm with modern development, featuring Old Town Tustin and the former Marine Corps Air Station. The city offers diverse housing options from historic homes to new construction. Older properties may require extra attention to moisture management.',
  'Villa Park': 'Villa Park is an exclusive residential community known for its large lots and equestrian properties. The small city offers a rural feel within urban Orange County. Large properties require attention to drainage and moisture control.',
  'Westminster': 'Westminster is home to Little Saigon, the largest Vietnamese community in the United States. The city offers diverse dining, shopping, and cultural experiences. Proper ventilation and moisture control are important for maintaining healthy homes in this community.',
  'Yorba Linda': 'Known as "The Land of Gracious Living," Yorba Linda is home to the Richard Nixon Presidential Library. The city features upscale homes, excellent schools, and beautiful hillside views. Canyon locations may experience unique moisture challenges that require attention.',
}

const moldServices: Record<string, string> = {
  'Aliso Viejo': 'For Aliso Viejo\'s newer construction homes, we provide mold inspections that focus on the issues common in more recently built properties. We service the Town Center area, Glenwood, and communities throughout the city.',
  'Anaheim': 'In Anaheim, we service homes near Disneyland, in historic neighborhoods, and throughout the Hills. Our team is familiar with the older construction common in Anaheim and knows how to identify mold issues in vintage homes while respecting their historic character.',
  'Brea': 'We service Brea homes from the downtown area to the hillside communities. Our team understands the diverse housing stock in Brea and provides thorough inspections for properties of all ages.',
  'Buena Park': 'Buena Park homeowners count on us for thorough mold inspections. We service homes near Knott\'s Berry Farm, in established neighborhoods, and throughout the city\'s residential areas.',
  'Costa Mesa': 'Costa Mesa homeowners trust us for mold inspections in neighborhoods from the Eastside to Mesa Verde. We understand how the city\'s proximity to the coast influences indoor air quality and moisture levels in local homes.',
  'Cypress': 'Our Cypress mold inspection services cover the entire city, from tree-lined neighborhoods to newer developments. We provide thorough inspections for this family-oriented community.',
  'Dana Point': 'Dana Point\'s coastal properties require expert mold inspection services. We specialize in harbor-area homes, Lantern District properties, and hillside residences with ocean views.',
  'Fountain Valley': 'Our Fountain Valley mold services cover homes near Mile Square Park and throughout the city. We understand the local construction styles and provide thorough inspections for this well-maintained community.',
  'Fullerton': 'Our Fullerton mold inspection services cover the city\'s beautiful historic homes, college-area rentals, and modern developments. We\'re experienced with the older plumbing and ventilation systems common in Fullerton\'s vintage properties.',
  'Garden Grove': 'We serve Garden Grove homeowners with thorough mold inspections designed for the city\'s diverse housing stock. From post-war tract homes to newer developments, our team knows where to look for hidden moisture and mold.',
  'Huntington Beach': 'Our Huntington Beach mold services cater to both beachfront properties and inland neighborhoods. We understand how the coastal climate affects homes throughout the city and provide thorough inspections for condos, single-family homes, and beach cottages.',
  'Irvine': 'Our Irvine mold inspection team specializes in examining the city\'s master-planned communities, from Woodbridge to Quail Hill. We understand the unique construction styles used in Irvine developments and know where hidden moisture problems typically occur in these homes.',
  'La Habra': 'La Habra residents rely on us for mold inspections in their diverse community. We service homes throughout the city, from established neighborhoods to downtown areas.',
  'La Palma': 'For La Palma\'s well-maintained homes, we provide mold inspections tailored to this small-city community. We service the entire city with attention to the needs of local families.',
  'Laguna Beach': 'For Laguna Beach\'s unique homes, including hillside properties and beach cottages, we provide specialized mold inspections. We understand the artistic community\'s need for protecting valuable property and artwork from mold damage.',
  'Laguna Hills': 'We service Laguna Hills homes in communities like Nellie Gail Ranch and throughout the city. Our team understands the local housing styles and common moisture issues in this area.',
  'Laguna Niguel': 'Our Laguna Niguel mold services are tailored for the city\'s hillside homes with ocean views. We understand how the coastal climate affects properties here and provide thorough inspections from foundation to attic.',
  'Laguna Woods': 'We provide specialized mold inspection services for Laguna Woods Village and surrounding areas. Our team understands the unique needs of this community and provides thorough, respectful service to all residents.',
  'Lake Forest': 'We provide mold inspections throughout Lake Forest\'s family-friendly neighborhoods. Our team services homes in established neighborhoods and the communities near the El Toro area.',
  'Los Alamitos': 'Our Los Alamitos mold services cover this family-friendly community\'s homes and condos. We provide thorough inspections for properties near the race track and throughout the city.',
  'Mission Viejo': 'Mission Viejo residents rely on us for mold inspections in their master-planned community homes. We service properties near the lake, in the hills, and throughout the city\'s well-maintained neighborhoods.',
  'Newport Beach': 'For Newport Beach properties, we provide specialized coastal mold inspections that address the unique challenges of oceanfront and harbor-adjacent homes. Our inspectors are experienced with high-end coastal properties and understand how salt air and marine humidity affect mold growth patterns.',
  'Orange': 'For Orange properties, especially those in the historic Old Towne district, we provide careful mold inspections that respect the integrity of older construction while thoroughly identifying moisture problems. We service homes throughout Orange, including Chapman University area rentals.',
  'Placentia': 'Placentia homeowners trust us for mold inspections in their family-friendly community. We service both the historic downtown area and newer developments throughout the city.',
  'Rancho Santa Margarita': 'We service Rancho Santa Margarita homes throughout this beautiful master-planned community. Our team understands the canyon climate and how it affects moisture levels in local homes.',
  'San Clemente': 'San Clemente\'s Spanish-style homes and coastal condos require specialized mold inspection expertise. We understand how the ocean breeze and salt air affect homes throughout the city, from the pier to the hills.',
  'San Juan Capistrano': 'For San Juan Capistrano\'s historic properties and equestrian estates, we provide careful mold inspections. We understand the unique needs of adobe-style homes and historic structures near the Mission.',
  'Santa Ana': 'We provide comprehensive mold inspections throughout Santa Ana, from the historic Floral Park neighborhood to newer developments. Our inspectors understand the diverse housing stock in Santa Ana and the unique mold challenges each type presents.',
  'Seal Beach': 'For Seal Beach\'s charming coastal properties, we provide specialized mold inspections that address salt air exposure and ocean humidity. We service Main Street area homes, Leisure World, and the College Park East neighborhood.',
  'Stanton': 'Stanton homeowners trust us for affordable, thorough mold inspections. We service homes throughout this tight-knit community and provide clear guidance on any issues found.',
  'Tustin': 'From Old Town Tustin\'s historic properties to the modern homes in Tustin Ranch, we provide comprehensive mold inspection services. We\'re familiar with the city\'s diverse housing options and their unique maintenance needs.',
  'Villa Park': 'Villa Park\'s large lots and custom homes require specialized mold inspection services. We understand the unique needs of this equestrian community and provide thorough property assessments.',
  'Westminster': 'Our Westminster mold services cover the entire city, including the vibrant Little Saigon area. We understand the local housing stock and provide culturally sensitive service to all Westminster residents.',
  'Yorba Linda': 'For Yorba Linda\'s upscale homes and equestrian properties, we provide premium mold inspection services. Our team is experienced with the larger homes and hillside properties common in this community.',
}

const cityKeywords: Record<string, string[]> = {
  'San Clemente': [
    'mold inspector San Clemente CA',
    'mold testing San Clemente',
    'mold inspection near me San Clemente',
    'IAC2 certified mold inspector San Clemente',
    'coastal mold inspection San Clemente',
    'mold testing companies San Clemente CA',
  ],
  'Dana Point': [
    'mold inspector Dana Point CA',
    'mold testing Dana Point',
    'mold inspection near me Dana Point',
    'IAC2 certified mold inspector Dana Point',
    'harbor area mold inspection Dana Point',
    'mold testing Dana Point CA',
  ],
  'Laguna Beach': [
    'mold inspector Laguna Beach CA',
    'mold testing Laguna Beach',
    'mold inspection near me Laguna Beach',
    'IAC2 certified mold inspector Laguna Beach',
    'canyon home mold inspection Laguna Beach',
    'mold testing Laguna Beach CA',
  ],
  'Laguna Niguel': [
    'mold inspector Laguna Niguel CA',
    'mold testing Laguna Niguel',
    'mold inspection near me Laguna Niguel',
    'IAC2 certified mold inspector Laguna Niguel',
    'hillside home mold inspection Laguna Niguel',
    'mold testing Laguna Niguel CA',
  ],
  'Laguna Hills': [
    'mold inspector Laguna Hills CA',
    'mold testing Laguna Hills',
    'mold inspection near me Laguna Hills',
    'IAC2 certified mold inspector Laguna Hills',
    'Laguna Hills home mold inspection',
    'mold testing Laguna Hills CA',
  ],
  'Mission Viejo': [
    'mold inspector Mission Viejo CA',
    'mold testing Mission Viejo',
    'mold inspection near me Mission Viejo',
    'IAC2 certified mold inspector Mission Viejo',
    'lake area mold inspection Mission Viejo',
    'mold testing Mission Viejo CA',
  ],
  'Newport Beach': [
    'mold inspector Newport Beach CA',
    'mold testing Newport Beach',
    'mold inspection near me Newport Beach',
    'IAC2 certified mold inspector Newport Beach',
    'harbor home mold inspection Newport Beach',
    'mold testing Newport Beach CA',
  ],
  'Huntington Beach': [
    'mold inspector Huntington Beach CA',
    'mold testing Huntington Beach',
    'mold inspection near me Huntington Beach',
    'IAC2 certified mold inspector Huntington Beach',
    'Surf City mold inspection Huntington Beach',
    'mold testing Huntington Beach CA',
  ],
  'Costa Mesa': [
    'mold inspector Costa Mesa CA',
    'mold testing Costa Mesa',
    'mold inspection near me Costa Mesa',
    'IAC2 certified mold inspector Costa Mesa',
    'Eastside Costa Mesa mold inspection',
    'mold testing Costa Mesa CA',
  ],
  'Irvine': [
    'mold inspector Irvine CA',
    'mold testing Irvine',
    'mold inspection near me Irvine',
    'IAC2 certified mold inspector Irvine',
    'UCI area mold inspection Irvine',
    'mold testing Irvine CA',
  ],
  'Aliso Viejo': [
    'mold inspector Aliso Viejo CA',
    'mold testing Aliso Viejo',
    'mold inspection near me Aliso Viejo',
    'IAC2 certified mold inspector Aliso Viejo',
    'Aliso Viejo townhome mold inspection',
    'mold testing Aliso Viejo CA',
  ],
  'Anaheim': [
    'mold inspector Anaheim CA',
    'mold testing Anaheim',
    'mold inspection near me Anaheim',
    'IAC2 certified mold inspector Anaheim',
    'Anaheim Hills mold inspection',
    'mold testing Anaheim CA',
  ],
  'Brea': [
    'mold inspector Brea CA',
    'mold testing Brea',
    'mold inspection near me Brea',
    'IAC2 certified mold inspector Brea',
    'Brea hillside home mold inspection',
    'mold testing Brea CA',
  ],
  'Buena Park': [
    'mold inspector Buena Park CA',
    'mold testing Buena Park',
    'mold inspection near me Buena Park',
    'IAC2 certified mold inspector Buena Park',
    'Buena Park home mold inspection',
    'mold testing Buena Park CA',
  ],
  'Cypress': [
    'mold inspector Cypress CA',
    'mold testing Cypress',
    'mold inspection near me Cypress',
    'IAC2 certified mold inspector Cypress',
    'Cypress home mold inspection Orange County',
    'mold testing Cypress CA',
  ],
  'Fountain Valley': [
    'mold inspector Fountain Valley CA',
    'mold testing Fountain Valley',
    'mold inspection near me Fountain Valley',
    'IAC2 certified mold inspector Fountain Valley',
    'Fountain Valley home mold inspection',
    'mold testing Fountain Valley CA',
  ],
  'Fullerton': [
    'mold inspector Fullerton CA',
    'mold testing Fullerton',
    'mold inspection near me Fullerton',
    'IAC2 certified mold inspector Fullerton',
    'historic home mold inspection Fullerton',
    'mold testing Fullerton CA',
  ],
  'Garden Grove': [
    'mold inspector Garden Grove CA',
    'mold testing Garden Grove',
    'mold inspection near me Garden Grove',
    'IAC2 certified mold inspector Garden Grove',
    'Garden Grove home mold inspection',
    'mold testing Garden Grove CA',
  ],
  'La Habra': [
    'mold inspector La Habra CA',
    'mold testing La Habra',
    'mold inspection near me La Habra',
    'IAC2 certified mold inspector La Habra',
    'La Habra home mold inspection',
    'mold testing La Habra CA',
  ],
  'La Palma': [
    'mold inspector La Palma CA',
    'mold testing La Palma',
    'mold inspection near me La Palma',
    'IAC2 certified mold inspector La Palma',
    'La Palma home mold inspection Orange County',
    'mold testing La Palma CA',
  ],
  'Laguna Woods': [
    'mold inspector Laguna Woods CA',
    'mold testing Laguna Woods',
    'mold inspection near me Laguna Woods',
    'IAC2 certified mold inspector Laguna Woods',
    'Laguna Woods Village mold inspection',
    'mold testing Laguna Woods CA',
  ],
  'Lake Forest': [
    'mold inspector Lake Forest CA',
    'mold testing Lake Forest',
    'mold inspection near me Lake Forest',
    'IAC2 certified mold inspector Lake Forest',
    'Lake Forest home mold inspection',
    'mold testing Lake Forest CA',
  ],
  'Los Alamitos': [
    'mold inspector Los Alamitos CA',
    'mold testing Los Alamitos',
    'mold inspection near me Los Alamitos',
    'IAC2 certified mold inspector Los Alamitos',
    'Los Alamitos home mold inspection',
    'mold testing Los Alamitos CA',
  ],
  'Orange': [
    'mold inspector Orange CA',
    'mold testing Orange CA',
    'mold inspection near me Orange CA',
    'IAC2 certified mold inspector Orange CA',
    'Old Towne Orange mold inspection',
    'mold testing City of Orange CA',
  ],
  'Placentia': [
    'mold inspector Placentia CA',
    'mold testing Placentia',
    'mold inspection near me Placentia',
    'IAC2 certified mold inspector Placentia',
    'Placentia home mold inspection',
    'mold testing Placentia CA',
  ],
  'Rancho Santa Margarita': [
    'mold inspector Rancho Santa Margarita CA',
    'mold testing Rancho Santa Margarita',
    'mold inspection near me Rancho Santa Margarita',
    'IAC2 certified mold inspector Rancho Santa Margarita',
    'canyon home mold inspection RSM',
    'mold testing Rancho Santa Margarita CA',
  ],
  'San Juan Capistrano': [
    'mold inspector San Juan Capistrano CA',
    'mold testing San Juan Capistrano',
    'mold inspection near me San Juan Capistrano',
    'IAC2 certified mold inspector San Juan Capistrano',
    'historic property mold inspection San Juan Capistrano',
    'mold testing San Juan Capistrano CA',
  ],
  'Santa Ana': [
    'mold inspector Santa Ana CA',
    'mold testing Santa Ana',
    'mold inspection near me Santa Ana',
    'IAC2 certified mold inspector Santa Ana',
    'Santa Ana historic home mold inspection',
    'mold testing Santa Ana CA',
  ],
  'Seal Beach': [
    'mold inspector Seal Beach CA',
    'mold testing Seal Beach',
    'mold inspection near me Seal Beach',
    'IAC2 certified mold inspector Seal Beach',
    'coastal mold inspection Seal Beach',
    'mold testing Seal Beach CA',
  ],
  'Stanton': [
    'mold inspector Stanton CA',
    'mold testing Stanton',
    'mold inspection near me Stanton',
    'IAC2 certified mold inspector Stanton',
    'Stanton home mold inspection Orange County',
    'mold testing Stanton CA',
  ],
  'Tustin': [
    'mold inspector Tustin CA',
    'mold testing Tustin',
    'mold inspection near me Tustin',
    'IAC2 certified mold inspector Tustin',
    'Old Town Tustin mold inspection',
    'mold testing Tustin CA',
  ],
  'Villa Park': [
    'mold inspector Villa Park CA',
    'mold testing Villa Park',
    'mold inspection near me Villa Park',
    'IAC2 certified mold inspector Villa Park',
    'Villa Park estate mold inspection',
    'mold testing Villa Park CA',
  ],
  'Westminster': [
    'mold inspector Westminster CA',
    'mold testing Westminster',
    'mold inspection near me Westminster',
    'IAC2 certified mold inspector Westminster',
    'Westminster home mold inspection Orange County',
    'mold testing Westminster CA',
  ],
  'Yorba Linda': [
    'mold inspector Yorba Linda CA',
    'mold testing Yorba Linda',
    'mold inspection near me Yorba Linda',
    'IAC2 certified mold inspector Yorba Linda',
    'Yorba Linda hillside home mold inspection',
    'mold testing Yorba Linda CA',
  ],
}

const cityFaqs: Record<string, { q: string; a: string }[]> = {
  'San Clemente': [
    {
      q: 'Does coastal living in San Clemente increase mold risk in my home?',
      a: 'Yes. San Clemente\'s marine layer brings consistent moisture from the ocean, and the humid air gets trapped in homes with inadequate ventilation. Spanish Colonial-style construction — common throughout the city — uses stucco exteriors that can absorb moisture over time, creating conditions for hidden mold growth. Homes near the pier and hillside properties that catch ocean fog are especially prone.',
    },
    {
      q: 'I\'m buying a home in San Clemente. Should I get a mold inspection?',
      a: 'Absolutely. San Clemente\'s real estate market includes many homes from the 1960s-90s with older plumbing and HVAC systems. A pre-purchase mold inspection provides independent, lab-verified data about the property\'s condition that a general home inspector may not cover. We issue a written report within 24 hours so you have clear information before closing.',
    },
    {
      q: 'Which parts of a San Clemente home are most likely to have mold?',
      a: 'In coastal San Clemente homes, the most common mold locations are bathroom exhaust areas and window frames from salt air condensation, crawl spaces and foundations from ground moisture, HVAC systems from recirculated humid air, and kitchen areas around dishwashers and sinks. Attic spaces in hillside homes also see elevated moisture from marine fog penetration.',
    },
  ],
  'Dana Point': [
    {
      q: 'Do homes near Dana Point Harbor have higher mold risk?',
      a: 'Yes. Properties near Dana Point Harbor and Doheny Beach are exposed to elevated marine humidity year-round. Salt Creek Beach and the Headlands areas also experience coastal fog that keeps moisture levels high. Homes in the Lantern District and along coastal bluffs are particularly prone to condensation issues that can lead to hidden mold growth.',
    },
    {
      q: 'How quickly can mold grow after a plumbing leak in Dana Point?',
      a: 'Mold can begin growing within 24-72 hours of a moisture event. In Dana Point\'s humid coastal climate, growth can be faster than in drier inland areas. If you\'ve had a plumbing leak, roof issue, or any water intrusion, we recommend scheduling an inspection within a few days to document conditions and identify any mold before it spreads.',
    },
    {
      q: 'What\'s included in a mold inspection for a Dana Point condo or townhome?',
      a: 'Our Dana Point inspections cover the full unit — bathroom and kitchen moisture checks, HVAC and ductwork assessment, wall cavity moisture mapping with professional meters, thermal imaging to detect hidden moisture behind walls, and air sampling sent to an independent lab. You receive a complete written report with photos and lab results within 24 hours.',
    },
  ],
  'Laguna Beach': [
    {
      q: 'Why are canyon homes in Laguna Beach at higher risk for mold?',
      a: 'Canyon locations in Laguna Beach experience a combination of coastal fog rolling in from the ocean and limited air circulation due to surrounding hillsides. This creates persistently humid microclimates where moisture builds up in attics, crawl spaces, and around windows. Canyon homes also tend to be older construction with less efficient insulation and ventilation than newer builds.',
    },
    {
      q: 'My Laguna Beach home is historic. Will a mold inspection damage anything?',
      a: 'No. Our inspection process is completely non-invasive. We use thermal imaging cameras and moisture meters to detect moisture through walls and ceilings without drilling or cutting. If sampling is needed, we collect air samples and small surface swabs that don\'t damage surfaces or historic finishes. We have experience working with the older construction styles common in Laguna Beach.',
    },
    {
      q: 'Can salt air from the ocean cause mold inside my Laguna Beach home?',
      a: 'Salt air itself doesn\'t cause mold, but the elevated humidity it carries does. In Laguna Beach, ocean-facing walls, window frames, and poorly ventilated bathrooms are especially prone to moisture accumulation from the humid marine air. We assess all high-risk areas and use thermal imaging to find hidden moisture that a standard visual inspection would miss.',
    },
  ],
  'Laguna Niguel': [
    {
      q: 'Do hillside homes in Laguna Niguel face unique mold risks?',
      a: 'Yes. Hillside homes in Laguna Niguel can experience moisture intrusion at the uphill side of the foundation, particularly after rain. Many hillside properties also have complex rooflines and retaining walls where water can pool or seep. Combined with proximity to the coast, hillside homes in communities near Laguna Niguel Regional Park and Crown Valley benefit from regular professional inspections.',
    },
    {
      q: 'I noticed a musty smell in my Laguna Niguel home. What should I do?',
      a: 'A musty odor is one of the most reliable early signs of mold growth. Don\'t wait for visible mold to appear. We recommend scheduling an inspection promptly — mold colonies can grow rapidly in wall cavities, under flooring, and in HVAC systems without being visible. Our inspection will identify the source of the odor and confirm whether mold is present using air sampling.',
    },
    {
      q: 'Are newer homes in Laguna Niguel immune to mold?',
      a: 'No. Even newer construction in Laguna Niguel can develop mold if there are HVAC system issues, plumbing leaks, or construction defects that allow moisture in. Newer homes with energy-efficient building envelopes can actually trap humidity inside if ventilation is insufficient. We inspect new construction as well as older homes throughout the city.',
    },
  ],
  'Laguna Hills': [
    {
      q: 'What are the most common causes of mold in Laguna Hills homes?',
      a: 'In Laguna Hills, the most common causes we find are HVAC system moisture buildup, bathroom exhaust fans that vent into attic spaces instead of outside, plumbing leaks under sinks and behind walls, and roof or window seal failures. The city\'s proximity to coastal humidity means even homes that feel dry can have elevated moisture levels in enclosed spaces.',
    },
    {
      q: 'How long does a mold inspection take in Laguna Hills?',
      a: 'A standard single-family home inspection in Laguna Hills typically takes 2-3 hours. Larger homes or properties with specific concerns like water damage history may take longer. We don\'t rush the process — thoroughness is the point. Air samples go to an independent lab, and you receive your written report within 24 hours of the inspection.',
    },
    {
      q: 'Is a mold inspection recommended when selling a home in Laguna Hills?',
      a: 'Yes. A pre-listing mold inspection in Laguna Hills gives sellers time to address any issues on their own terms before buyers are involved. Buyers benefit from independent, lab-verified data that goes beyond what a general home inspector typically covers. Having documentation ready also strengthens your position during negotiations.',
    },
  ],
  'Mission Viejo': [
    {
      q: 'Do homes near Lake Mission Viejo have higher mold risk?',
      a: 'Lake proximity can contribute to elevated humidity in the immediate vicinity, particularly for homes with ground-floor spaces or crawl areas facing the lake. However, most mold issues in Mission Viejo relate to HVAC systems, bathroom ventilation, and aging plumbing in the city\'s 1970s-80s construction — rather than the lake itself.',
    },
    {
      q: 'My Mission Viejo HOA requires documentation for mold inspections. Can you provide this?',
      a: 'Yes. We provide a complete written report with photographs, lab results, findings, and recommendations — suitable for HOA documentation, insurance claims, and real estate transactions. Reports are delivered within 24 hours of the inspection and can be formatted to meet specific HOA requirements.',
    },
    {
      q: 'Are townhomes in Mission Viejo different to inspect than single-family homes?',
      a: 'Yes. Townhomes present unique inspection challenges because shared walls can transfer moisture between units. We assess not just your unit but also check for moisture indicators near shared walls. We also evaluate HVAC systems, which in townhome construction are often in utility closets with limited airflow and higher condensation risk.',
    },
  ],
  'Newport Beach': [
    {
      q: 'Why do vacation homes in Newport Beach need mold inspections more often?',
      a: 'Vacation properties and second homes that sit empty for extended periods are at high risk for mold. When a home is unoccupied, HVAC systems may run inefficiently, plumbing leaks can go undetected for weeks, and moisture from the harbor environment accumulates without anyone noticing. We recommend annual inspections for any Newport Beach property that isn\'t occupied full-time.',
    },
    {
      q: 'Can salt-laden air from Newport Harbor get into homes and cause mold?',
      a: 'Salt-laden humid air from Newport Harbor creates persistently elevated moisture levels, especially in homes facing the harbor on the Balboa Peninsula, Bay Island, and Lido Isle. This humidity, combined with inadequate ventilation, creates ideal conditions for mold in bathrooms, kitchens, and any area with soft furnishings or porous building materials.',
    },
    {
      q: 'I\'m buying a luxury home in Newport Beach. What should a mold inspection cover?',
      a: 'For higher-value Newport Beach properties, our inspection covers all standard areas plus specific attention to any climate-controlled rooms, whole-home multi-zone HVAC systems, ocean-facing walls and windows, outdoor kitchens and covered patios, and below-grade or subterranean spaces. We provide a thorough written report with photos and lab results within 24 hours.',
    },
  ],
  'Huntington Beach': [
    {
      q: 'Are older beach cottages in Huntington Beach more susceptible to mold?',
      a: 'Yes. Many beach cottages and post-war homes near the Huntington Beach Pier and Pacific City were built before modern moisture barriers and ventilation standards. These homes often have limited attic ventilation, older plumbing with slow leaks, and windows that allow salt air condensation. We specialize in inspecting older coastal construction and know where to look.',
    },
    {
      q: 'What\'s the difference between mold and mildew in a Huntington Beach bathroom?',
      a: 'Mildew is surface-level fungal growth that can usually be cleaned with household products. Mold goes deeper — into grout, drywall, and building materials — and often indicates a moisture problem that needs to be addressed at the source. Our inspection identifies which you have, where it\'s coming from, and whether professional remediation is needed.',
    },
    {
      q: 'My Huntington Beach home passed a general home inspection but I still smell mold. What now?',
      a: 'General home inspectors are not trained mold specialists and typically don\'t collect air samples or use thermal imaging for moisture detection. A mold inspection is a different, more specialized service. We regularly find mold in homes that passed standard inspections — especially in HVAC systems, attic spaces, and wall cavities near water supply lines.',
    },
  ],
  'Costa Mesa': [
    {
      q: 'Does living near Newport Beach make my Costa Mesa home more prone to mold?',
      a: 'Costa Mesa\'s proximity to Newport Harbor means coastal humidity affects indoor air quality throughout much of the city. The Eastside Costa Mesa neighborhoods closest to the Back Bay and Newport Harbor see the highest moisture levels. Even homes further inland in Mesa Verde can experience elevated humidity from the marine layer during summer months.',
    },
    {
      q: 'How do I know if my Costa Mesa rental property has a mold problem?',
      a: 'Common signs in rental properties include tenant complaints of musty odors, unexplained respiratory symptoms that improve when tenants are away, visible dark spots on walls or ceilings, and peeling paint or warped baseboards. As a landlord, proactive mold inspections protect your tenants\' health and your legal liability under California habitability law.',
    },
    {
      q: 'What does a mold inspection cost in Costa Mesa?',
      a: 'Our fees vary based on property size and scope. A Costa Mesa single-family home inspection typically includes a full visual and physical walkthrough, thermal imaging, moisture mapping, and air sampling with lab analysis, with a complete written report within 24 hours. Call us at 949-371-5934 for a specific quote based on your property.',
    },
  ],
  'Irvine': [
    {
      q: 'Are newer homes in Irvine\'s master-planned communities at risk for mold?',
      a: 'Yes. Irvine\'s energy-efficient homes are tightly sealed, which reduces heating and cooling costs but can trap moisture inside. Without adequate mechanical ventilation, humidity from cooking, showers, and breathing accumulates. Master-planned communities like Portola Springs, Laguna Altura, and Woodbury often have similar construction styles where moisture issues follow predictable patterns.',
    },
    {
      q: 'Do student rentals near UC Irvine need special mold inspection considerations?',
      a: 'Student rentals near UCI are high-risk due to high occupancy and often deferred maintenance. Bathrooms with multiple daily users and kitchens with frequent cooking generate significant moisture. Combined with windows and doors that may not seal properly, these properties benefit from annual professional inspections for both tenant health and landlord liability.',
    },
    {
      q: 'Can mold affect my Irvine home\'s resale value?',
      a: 'Yes, significantly. Undisclosed mold discovered during escrow can delay or kill a sale. Getting a pre-listing mold inspection in Irvine gives you time to address any issues on your own terms, at a cost-effective pace, before buyers are involved. We provide written documentation that supports your California disclosure requirements.',
    },
  ],
  'Aliso Viejo': [
    {
      q: 'Are condos and townhomes in Aliso Viejo more prone to mold than single-family homes?',
      a: 'Attached homes like condos and townhomes share walls and plumbing systems, meaning a moisture problem in one unit can affect neighbors. HVAC systems in multi-unit buildings also recirculate air between units. We inspect condos and townhomes with special attention to shared walls, utility chases, and common-area mechanical systems.',
    },
    {
      q: 'How do I prevent mold in my newer Aliso Viejo home?',
      a: 'Prevention starts with proper ventilation — make sure bathroom exhaust fans vent outside (not into the attic), run range hoods when cooking, and keep your HVAC filter clean. Watch for condensation on windows or walls, and address any plumbing drips immediately. In Aliso Viejo\'s newer construction, HVAC moisture is the most common root cause we find.',
    },
    {
      q: 'Can my Aliso Viejo HOA require me to fix mold if it\'s found in my unit?',
      a: 'Yes. Most Aliso Viejo HOAs have provisions that require owners to maintain their units and prevent conditions that could affect neighboring units. An independent mold inspection report from us gives you documentation to work with both your HOA and any insurance claims, and establishes a clear record of conditions and actions taken.',
    },
  ],
  'Anaheim': [
    {
      q: 'Are older homes in Anaheim more susceptible to mold?',
      a: 'Many Anaheim homes were built in the 1950s-70s, before modern moisture barriers, vapor barriers, and ventilation standards. Older plumbing can have slow leaks that go undetected for years, and original windows and roofing may allow moisture intrusion. We regularly inspect older Anaheim properties and know what to look for in vintage construction.',
    },
    {
      q: 'My Anaheim home was near a flood zone. Should I get a mold inspection?',
      a: 'Yes, absolutely. Flood-affected properties or homes that experienced significant water intrusion should be inspected for mold. Mold can grow within 24-72 hours of moisture exposure and often develops inside walls and under flooring — out of sight but affecting indoor air quality. We document all findings with photos and independent lab results.',
    },
    {
      q: 'How do I know if my Anaheim Hills home has hidden mold?',
      a: 'Hidden mold signs include persistent musty odors, unexplained respiratory symptoms or allergies, visual water stains on ceilings or walls, peeling paint, and warped flooring. Our thermal imaging camera detects temperature anomalies that indicate moisture behind surfaces — finding hidden mold that a standard visual inspection would miss.',
    },
  ],
  'Brea': [
    {
      q: 'Do Brea\'s hillside homes near Carbon Canyon face specific mold risks?',
      a: 'Yes. Hillside homes near Carbon Canyon Regional Park experience moisture from canyon breezes and marine layer that settles in elevated areas. Drainage around hillside foundations is also a common concern — if grading doesn\'t direct water away from the home, moisture can accumulate in crawl spaces and along foundation walls, promoting mold growth.',
    },
    {
      q: 'My Brea home had a roof leak last year that was repaired. Do I need a mold inspection?',
      a: 'Yes. After any roof leak, even one that was properly repaired, mold can continue growing in materials that were wet. Drywall, insulation, and wood framing hold moisture long after the surface appears dry. An inspection confirms whether mold established itself during the wet period and whether additional remediation is needed.',
    },
    {
      q: 'Is mold inspection different for historic homes in Downtown Brea?',
      a: 'Older homes in Downtown Brea\'s historic neighborhoods require careful inspection of original plaster walls, wood framing, and older plumbing systems. We use moisture meters and thermal imaging — non-invasive methods that detect moisture without damaging historic materials. Our reports include findings appropriate for both occupant health and property preservation.',
    },
  ],
  'Buena Park': [
    {
      q: 'What\'s the most common place mold is found in Buena Park homes?',
      a: 'In the Buena Park homes we inspect, the most common locations are bathroom walls and grout from inadequate ventilation, under kitchen sinks from slow drips, HVAC air handler units from condensate drain clogs, and attic spaces from improper exhaust fan routing or roof leaks. Older homes near the 5 freeway corridor also see more moisture from aging plumbing systems.',
    },
    {
      q: 'How do I prepare my Buena Park home for a mold inspection?',
      a: 'Simply provide access to all rooms including the garage, attic, and any crawl spaces. Don\'t clean or paint over any areas you suspect might have mold — we need to see the actual conditions. Have any available documentation of past water damage, roof repairs, or plumbing work ready to share. That\'s all — we handle the rest.',
    },
    {
      q: 'Can mold in my Buena Park home make my family sick?',
      a: 'Yes. Mold exposure can cause respiratory irritation, allergic reactions, headaches, and fatigue. Certain mold species produce mycotoxins that have more serious health effects. If family members are experiencing unexplained health symptoms that improve when they leave the home, that\'s a strong indication of indoor air quality issues that warrant professional testing.',
    },
  ],
  'Cypress': [
    {
      q: 'Are Cypress homes near creek areas at higher mold risk?',
      a: 'Properties near the Coyote Creek and San Gabriel River watershed areas in Cypress can experience higher ground moisture levels, particularly after rain. Homes with older foundation drainage systems may allow moisture intrusion into crawl spaces and lower-level living areas. We assess all accessible foundation areas and drainage conditions during our inspection.',
    },
    {
      q: 'How often should I have my Cypress home inspected for mold?',
      a: 'We recommend a professional mold inspection every 2-3 years for most Cypress homes, or annually for homes with past water damage, older plumbing, or recurring humidity issues. Many homeowners schedule inspections before major renovations or when buying or selling a property.',
    },
    {
      q: 'My Cypress home has a strong smell after rain. Is that mold?',
      a: 'A musty smell after rain can indicate mold being activated by increased humidity, or it can indicate that moisture is entering the home during rain events. Either way, it warrants investigation. Our inspection will identify whether mold is present, where moisture is entering, and what needs to be addressed to prevent recurrence.',
    },
  ],
  'Fountain Valley': [
    {
      q: 'Does Fountain Valley\'s flat geography affect mold risk in homes?',
      a: 'Fountain Valley\'s flat terrain means drainage relies more on underground systems, and older homes may have irrigation or drainage issues that allow moisture to accumulate near foundations. The city\'s proximity to Huntington Beach also means the marine layer is a regular humidity source, especially in homes without adequate vapor barriers in their foundation or crawl space.',
    },
    {
      q: 'I\'m renting a home in Fountain Valley. Can I request a mold inspection?',
      a: 'Tenants have the right to a habitable home under California law, which includes freedom from mold hazards. If you suspect mold, we can inspect the property and provide a written report you can share with your landlord. In cases of landlord non-response, our documentation supports housing code complaints with the city.',
    },
    {
      q: 'What equipment do you use for mold inspections in Fountain Valley?',
      a: 'We use professional-grade moisture meters, thermal infrared cameras, and calibrated air sampling pumps with spore trap cassettes. Air samples are analyzed by an independent accredited laboratory. This combination allows us to detect moisture that may be causing hidden mold and confirm whether mold spore levels are elevated in your indoor air.',
    },
  ],
  'Fullerton': [
    {
      q: 'Are historic homes in Downtown Fullerton more susceptible to mold than newer construction?',
      a: 'Yes, generally. Older homes in Downtown Fullerton\'s historic districts often have original plaster walls, galvanized plumbing, and single-pane windows that create conditions for moisture accumulation. Cast iron pipes can develop slow leaks inside walls over decades. We have experience inspecting vintage Fullerton properties and know what to look for in older construction.',
    },
    {
      q: 'Are student rentals near CSUF campus high-risk for mold?',
      a: 'College rentals near Cal State Fullerton are typically high-occupancy and may have deferred maintenance. High bathroom use, cooking, and windows that don\'t seal well all contribute to indoor moisture. We frequently inspect rental properties near the university and can provide documentation for both tenant and landlord use.',
    },
    {
      q: 'What\'s the process after I call OC Mold Pros for a Fullerton inspection?',
      a: 'We\'ll briefly discuss your concerns on the phone, then schedule an inspection — often same-day or next-day. During the inspection (2-4 hours), we do a full property walkthrough with moisture meters and thermal imaging, collect air samples, and photograph any areas of concern. You receive a complete written report with lab results within 24 hours.',
    },
  ],
  'Garden Grove': [
    {
      q: 'Are older homes in Garden Grove at higher risk for mold?',
      a: 'Many Garden Grove homes were built in the 1950s and 60s, and these properties often have original plumbing, roofing, and minimal vapor barriers. The Santa Ana winds and marine layer humidity also affect indoor air quality. Older windows and door seals can allow humid air to enter, leading to condensation and eventual mold growth in wall cavities and attic spaces.',
    },
    {
      q: 'What should I do if I see black spots on my Garden Grove bathroom walls?',
      a: 'Dark spots in bathrooms are often mold, though they can also be mildew or staining. The key difference is how deep the growth goes and whether it indicates an ongoing moisture problem. We\'ll assess whether it\'s surface-level (manageable with cleaning) or a deeper issue requiring professional remediation, and we\'ll identify the moisture source to prevent recurrence.',
    },
    {
      q: 'Can I get a same-day mold inspection in Garden Grove?',
      a: 'We offer same-day appointments in Garden Grove when our schedule allows. Call us directly at 949-371-5934 to check availability. Same-day inspections are especially important after water damage events or if you\'re in the middle of a real estate transaction with time pressure.',
    },
  ],
  'La Habra': [
    {
      q: 'Does La Habra\'s location at the edge of the Los Angeles basin affect mold risk?',
      a: 'La Habra sits in a valley location where air can be trapped, particularly with morning marine layer from the coast. The city\'s mix of older homes — many from the 1950s-70s — and the proximity to hills with drainage considerations creates specific moisture risk factors. We\'re familiar with La Habra\'s construction patterns and common moisture pathways.',
    },
    {
      q: 'I bought a home in La Habra that had been a rental. Should I get it inspected?',
      a: 'Yes, we highly recommend this. Rental properties often have deferred maintenance, unreported water events, and moisture damage that wasn\'t disclosed. A move-in mold inspection gives you a baseline — knowing exactly what you have before you\'re settled in makes addressing any issues simpler and protects you from future liability disputes.',
    },
    {
      q: 'How do I choose the right mold inspector in La Habra?',
      a: 'Look for IAC2 certification (the industry standard), inspection-only services (never hire a company that both inspects and remediates — that\'s a conflict of interest), written reports with lab results, and verifiable reviews. OC Mold Pros is IAC2 certified, veteran owned, and never performs remediation — our findings are always objective.',
    },
  ],
  'La Palma': [
    {
      q: 'La Palma is a small city — do you still serve my area?',
      a: 'Yes. We serve all of Orange County including La Palma. Despite its small size, La Palma has many family homes that benefit from regular mold inspections. We\'re typically able to schedule La Palma appointments quickly, often within 1-2 business days, and provide the same thorough inspection and 24-hour report that we deliver throughout Orange County.',
    },
    {
      q: 'My La Palma home is well-maintained. Do I really need a mold inspection?',
      a: 'Mold often grows in places that look perfectly maintained. The most common sources — inside HVAC systems, behind dishwashers, inside wall cavities near plumbing — aren\'t visible during regular cleaning. Even a meticulously kept home can have elevated mold spore counts from hidden moisture. An inspection gives you peace of mind with actual data.',
    },
    {
      q: 'What certifications should I look for in a mold inspector serving La Palma?',
      a: 'Look for IAC2 (Indoor Air Consultants International) certification, which is the recognized standard for mold inspection professionals. Our inspector is IAC2 certified and verifiable at iac2.org. We carry appropriate insurance, use accredited laboratory partners for air sample analysis, and provide written reports that meet California disclosure requirements.',
    },
  ],
  'Laguna Woods': [
    {
      q: 'Are homes in Laguna Woods Village more prone to mold due to their age?',
      a: 'Laguna Woods Village was primarily developed in the 1960s-70s, and these homes can have aging HVAC systems, older plumbing fixtures, and less effective window seals than newer construction. The co-op and condo structure also means shared systems that can carry moisture between units. We provide respectful, thorough service to Laguna Woods residents.',
    },
    {
      q: 'Can mold in my Laguna Woods condo affect my neighbors\' units?',
      a: 'Yes. In shared-wall communities like Laguna Woods Village, moisture and mold in one unit can migrate through wall cavities, under flooring, and through shared HVAC ductwork. If you notice signs of mold or receive complaints from neighbors, an early inspection can prevent a small problem from spreading to adjacent units and becoming a larger HOA issue.',
    },
    {
      q: 'Is a mold inspection covered by Laguna Woods HOA insurance?',
      a: 'Inspection fees are generally the owner\'s responsibility and are not covered by HOA insurance. However, if mold is found and remediation is needed, HOA policies may cover common areas or shared systems depending on the moisture source. We provide documentation to support your insurance claim or HOA dispute if remediation is required.',
    },
  ],
  'Lake Forest': [
    {
      q: 'What are the most common mold issues in Lake Forest homes?',
      a: 'In Lake Forest, we most commonly find mold in HVAC systems especially evaporator coil areas and condensate drain lines, bathrooms with inadequate exhaust ventilation, and under kitchen and bathroom sinks with slow plumbing drips. Older homes in the El Toro area may also have aging plumbing that deserves extra attention during inspection.',
    },
    {
      q: 'My Lake Forest home had water damage during the last rain. What should I do?',
      a: 'Contact us as soon as possible — ideally within 24-48 hours. Early inspection after water damage documents conditions before materials dry, which is important for insurance claims and for ensuring all affected materials are identified. Mold can begin growing within 24-72 hours of a water event, so prompt inspection protects both your home and your claim.',
    },
    {
      q: 'Do you inspect attics in Lake Forest homes?',
      a: 'Yes. Attic inspection is part of our standard service. In Lake Forest, attic mold is commonly caused by bathroom exhaust fans venting into the attic space instead of outside, inadequate ridge or soffit ventilation, and roof flashing failures. Attic mold often goes undetected for years because homeowners rarely access that space.',
    },
  ],
  'Los Alamitos': [
    {
      q: 'Does Los Alamitos\'s location near the coast affect indoor mold risk?',
      a: 'Yes. Los Alamitos is close enough to Seal Beach and the coast that marine layer humidity reaches the area regularly. The city\'s flat terrain and proximity to the San Gabriel River area also means certain neighborhoods can have elevated soil moisture that affects homes with slab or crawl space foundations, particularly after winter rains.',
    },
    {
      q: 'What\'s different about mold inspection for a smaller city like Los Alamitos?',
      a: 'There\'s no difference in our inspection process or thoroughness for smaller communities. Los Alamitos homeowners receive the same comprehensive inspection — moisture mapping, thermal imaging, air sampling, and a full written report — as clients in larger cities. We serve all of Orange County with equal attention to detail.',
    },
    {
      q: 'Can mold grow in a home that doesn\'t have visible water damage?',
      a: 'Yes, commonly. Many of the mold cases we find in Los Alamitos have no prior history of visible water damage. Condensation within walls from temperature differentials, HVAC condensate overflows, slow plumbing leaks that seep only under pressure, and poor bathroom ventilation can all create mold conditions without any obvious water event.',
    },
  ],
  'Orange': [
    {
      q: 'Are historic homes in Old Towne Orange more challenging to inspect for mold?',
      a: 'Historic homes in Old Towne Orange often have original plaster walls, wood lath, and older plumbing systems that can harbor mold in ways that newer construction does not. We use non-invasive thermal imaging and moisture meters to inspect without disturbing historic materials. We\'re experienced with the construction styles common in Orange\'s historic districts.',
    },
    {
      q: 'Chapman University students often rent older Orange homes. Are these high risk for mold?',
      a: 'Student rentals near Chapman University are higher risk due to high occupancy, intensive bathroom use, and typical deferred maintenance. Older homes in Orange\'s college neighborhoods frequently have bathroom ventilation issues and aging plumbing. Landlords benefit from regular inspections to meet their duty of care under California habitability law.',
    },
    {
      q: 'If I find mold in my Orange home, do you also do the cleanup?',
      a: 'We do not — and that\'s intentional. OC Mold Pros performs inspection only. We never perform remediation, which means our findings carry zero conflict of interest. If remediation is needed, we provide independent recommendations for qualified contractors. After remediation, we can return for clearance testing to verify the work was done correctly.',
    },
  ],
  'Placentia': [
    {
      q: 'Do older Placentia homes require different mold inspection methods?',
      a: 'Older homes in Placentia\'s established neighborhoods — many built in the 1960s-80s — can have cast iron drain lines prone to slow leaks, original galvanized supply lines that corrode internally, and older roofing systems. We use thermal imaging and moisture meters calibrated for these materials, and we know the hidden spots in vintage OC construction.',
    },
    {
      q: 'My Placentia home smells musty only in the morning. Is that mold?',
      a: 'Morning mustiness is often related to overnight humidity buildup when the home cools and moisture condenses. This is a common early-warning sign of mold growth in wall cavities, attic spaces, or crawl areas. We recommend getting an inspection to identify whether this is a simple ventilation fix or an existing mold colony requiring remediation.',
    },
    {
      q: 'Can mold from a neighbor\'s Placentia property affect my home?',
      a: 'In most cases, no — outdoor mold doesn\'t typically cause indoor mold issues. However, if you share a structure like a duplex, moisture problems next door can transfer through shared walls. Outdoor mold near windows or HVAC intake areas can be drawn indoors, but this is usually a minor contributor compared to internal moisture sources.',
    },
  ],
  'Rancho Santa Margarita': [
    {
      q: 'Do canyon locations in Rancho Santa Margarita create special mold risks?',
      a: 'Yes. Homes in RSM\'s canyon communities experience temperature swings between day and night that can cause condensation on walls and windows. Canyon-adjacent properties also deal with moisture from creek areas and hillside drainage. The Santa Ana Mountains create a funnel effect for marine layer humidity on west-facing slopes, keeping certain neighborhoods consistently humid.',
    },
    {
      q: 'Is mold common in RSM\'s newer construction homes?',
      a: 'Mold isn\'t limited to older homes. RSM\'s newer construction, while generally well-built, can develop mold from HVAC system issues, plumbing leaks in tight wall chases, and insufficient bathroom ventilation. Newer homes also have tighter building envelopes that trap moisture more effectively when ventilation is inadequate.',
    },
    {
      q: 'Do you inspect Rancho Santa Margarita Lake area properties?',
      a: 'Yes. We serve the entire RSM community. Lake-adjacent properties in Rancho Santa Margarita may experience slightly higher ground moisture levels from the lake water table, though most RSM mold issues are related to HVAC systems and standard household moisture sources rather than the lake itself.',
    },
  ],
  'San Juan Capistrano': [
    {
      q: 'Are historic properties near Mission San Juan Capistrano more susceptible to mold?',
      a: 'Yes. Historic structures near the Mission — including adobe-style construction and properties in the Los Rios Historic District — face unique moisture challenges. Adobe walls absorb ambient humidity, and older construction often lacks the vapor barriers and drainage systems that prevent moisture accumulation. We use non-invasive inspection methods appropriate for historic materials.',
    },
    {
      q: 'Do equestrian properties in San Juan Capistrano require different mold inspections?',
      a: 'The residential structure is inspected the same way regardless of equestrian use. However, for equestrian properties, we can also inspect stable buildings, feed storage areas, and any attached or adjacent structures if requested. Horse properties can have elevated ambient humidity from water use that may affect nearby residential structures.',
    },
    {
      q: 'What\'s the most important reason to get a mold inspection in San Juan Capistrano?',
      a: 'San Juan Capistrano\'s proximity to the coast, mix of historic and modern construction, and the Trabuco Creek corridor all contribute to varying moisture conditions throughout the city. Whether you\'re buying an older home in Los Rios, moving into a newer hillside property, or dealing with past water damage, professional inspection gives you verifiable data — not guesswork.',
    },
  ],
  'Santa Ana': [
    {
      q: 'Are older homes in Santa Ana\'s historic neighborhoods at higher risk for mold?',
      a: 'Yes. Santa Ana\'s historic neighborhoods like Floral Park, Heninger Park, and French Park have many homes from the 1920s-50s with original plumbing, single-pane windows, and minimal vapor barriers. These homes absorb ambient moisture more readily than newer construction, and pipe failures in older plumbing systems can cause hidden water damage that develops into mold over years.',
    },
    {
      q: 'What are tenant rights regarding mold in Santa Ana rental properties?',
      a: 'Under California law, landlords are required to disclose known mold and maintain habitable conditions. If you\'re a Santa Ana tenant experiencing mold or suspected mold, you have the right to request remediation. Our inspection report provides the documentation needed for habitability complaints to the city or for legal proceedings if necessary.',
    },
    {
      q: 'Is mold inspection affordable in Santa Ana?',
      a: 'We price our services competitively and offer free 20-minute phone consultations to help you determine what level of inspection makes sense for your situation. Professional inspection is always far less expensive than undiscovered mold becoming a large remediation project — or a legal dispute over habitability.',
    },
  ],
  'Seal Beach': [
    {
      q: 'Are beach cottages on Main Street in Seal Beach especially prone to mold?',
      a: 'Yes. The historic beach cottages near Seal Beach\'s Main Street were built before modern moisture protection standards. Direct ocean exposure, salt air, and the lack of vapor barriers make these properties particularly vulnerable to moisture intrusion. We specialize in coastal property inspections and know where to look in older beach construction.',
    },
    {
      q: 'Does Leisure World Seal Beach need mold inspections differently than other communities?',
      a: 'Leisure World residences receive the same thorough inspection as any other property. The community\'s construction from the 1960s-70s means some units may have aging HVAC systems and plumbing that benefit from more frequent monitoring. We\'re experienced working with senior communities and provide respectful, clear service and documentation.',
    },
    {
      q: 'How does salt air from the Pacific affect mold in my Seal Beach home?',
      a: 'Salt air contributes to elevated humidity levels that keep surfaces in Seal Beach homes persistently moist. Salt also degrades window seals, caulking, and exterior finishes faster than in inland areas, creating entry points for moisture. Homes within a few blocks of the beach benefit from more frequent inspections than inland properties.',
    },
  ],
  'Stanton': [
    {
      q: 'What are the most common causes of mold in Stanton homes?',
      a: 'Stanton has a mix of older housing stock from the 1950s-70s where we most commonly find mold from bathroom ventilation failures, slow kitchen and bathroom plumbing leaks, HVAC condensate drain overflow, and attic moisture from exhaust fans routed into attic spaces. The flat terrain can also contribute to moisture near foundations after heavy rain.',
    },
    {
      q: 'My Stanton home has mold on the window frames. Is that serious?',
      a: 'Window frame mold is usually a sign of condensation — humid indoor air hitting cool glass and frames, depositing moisture. It\'s an indicator that indoor humidity is elevated and it can spread if the source isn\'t addressed. We\'ll assess the severity, check for deeper moisture behind the window installation, and identify the underlying moisture cause.',
    },
    {
      q: 'Can you do a mold inspection for a Stanton rental property?',
      a: 'Yes. We inspect rental properties for both landlords who want to proactively manage habitability obligations and tenants who need documentation of conditions. We provide written reports with photos and lab results that can be used for repairs, insurance claims, or legal proceedings under California habitability law.',
    },
  ],
  'Tustin': [
    {
      q: 'Are historic homes in Old Town Tustin more susceptible to mold?',
      a: 'Yes. Old Town Tustin\'s charming historic homes — many from the early 1900s through the 1950s — have original construction with limited moisture protection. Plaster walls, older drainage systems, and single-pane windows create conditions for moisture accumulation. We use non-invasive thermal imaging and moisture meters appropriate for historic materials.',
    },
    {
      q: 'What about newer developments in the Tustin Legacy area — are they at risk for mold?',
      a: 'Newer construction in the Tustin Legacy area is generally well-built, but any home can develop mold from HVAC issues, plumbing leaks, or construction moisture that was sealed in before the home was occupied. We inspect new construction as well as older homes throughout Tustin.',
    },
    {
      q: 'Can a mold inspection in Tustin be done on short notice?',
      a: 'We frequently accommodate short-notice requests in Tustin, especially for real estate transactions, water damage events, or urgent health concerns. Call us at 949-371-5934 to discuss availability — same-day and next-day appointments are often available.',
    },
  ],
  'Villa Park': [
    {
      q: 'Do large homes and estates in Villa Park require a longer inspection?',
      a: 'Yes. Larger properties — including Villa Park\'s equestrian estates with multiple structures — require more time to inspect thoroughly. We scale our inspection to the property, assessing all accessible areas including guest houses, garages, and accessory structures. Call us for an estimate based on your property size and scope.',
    },
    {
      q: 'Are Villa Park\'s older custom homes at higher risk for mold?',
      a: 'Custom homes from the 1960s-80s can have unique construction features — custom tile work, original plumbing, non-standard ventilation layouts — that require experienced inspection. We\'re familiar with the construction styles common in exclusive OC communities and know how to assess their specific moisture risk factors.',
    },
    {
      q: 'Does Villa Park\'s equestrian setting affect indoor mold risk in the home itself?',
      a: 'The home itself is inspected the same regardless of equestrian use on the property. However, large irrigated lots can contribute to ground moisture around foundations, and if horse wash racks or water troughs are adjacent to the home, additional moisture sources may warrant attention during our inspection.',
    },
  ],
  'Westminster': [
    {
      q: 'Are older homes in Westminster near Little Saigon at risk for mold?',
      a: 'Westminster has a significant stock of older homes, particularly in and around Little Saigon, that date from the 1950s-70s. These properties can have older plumbing, dated HVAC systems, and ventilation that doesn\'t meet current standards. We provide respectful, professional service to all Westminster residents and are experienced with the older construction styles in the area.',
    },
    {
      q: 'What role does Westminster\'s proximity to Huntington Beach play in mold risk?',
      a: 'Westminster is close enough to Huntington Beach that the marine layer regularly affects the area. Summer marine layer can keep homes humid for days at a time, and older homes without proper moisture barriers can develop elevated indoor humidity. Neighborhoods to the west of Westminster see the most coastal influence.',
    },
    {
      q: 'Can I schedule a mold inspection in Westminster on a weekend?',
      a: 'Yes. We offer Saturday appointments (8am-12pm) in Westminster. If you need a weekday appointment outside standard business hours, call us to discuss options at 949-371-5934. We try to accommodate working families who can\'t easily take time off during the week.',
    },
  ],
  'Yorba Linda': [
    {
      q: 'Do hillside homes in Yorba Linda face unique mold challenges?',
      a: 'Yes. Yorba Linda\'s hillside properties — especially those in canyon areas near Black Gold Golf Club and Travis Ranch — can experience soil moisture intrusion on uphill sides of foundations and drainage challenges during rain events. Canyon microclimates also trap moisture. We assess all accessible foundation areas and exterior drainage conditions during our inspection.',
    },
    {
      q: 'My upscale Yorba Linda home is newer. Can it still have mold?',
      a: 'Absolutely. We regularly find mold in newer, premium construction due to HVAC issues, plumbing leaks in tightly built wall cavities, and construction moisture that was sealed in before occupancy. Energy-efficient homes with tight building envelopes actually trap humidity more effectively than older construction if ventilation is inadequate.',
    },
    {
      q: 'What documentation can I get from a Yorba Linda mold inspection for my insurance?',
      a: 'Our written report includes a property description, all findings with photographs, moisture readings, thermal imaging documentation, and laboratory analysis of air samples. This documentation is accepted by most insurance carriers for mold claims and provides the evidence needed to support a coverage request.',
    },
  ],
}

export function getCityData(cityName: string): CityData {
  const isCoastal = ['Newport Beach', 'Huntington Beach', 'Laguna Beach', 'Dana Point', 'San Clemente', 'Seal Beach'].includes(cityName)

  return {
    description: descriptions[cityName] ?? `${cityName} is a wonderful community in Orange County, California, offering residents a high quality of life with access to beaches, shopping, and entertainment.`,
    moldServices: moldServices[cityName] ?? `We provide professional mold inspection services throughout ${cityName}. Our certified inspectors understand the local housing stock and common moisture issues in this area.`,
    isCoastal,
    keywords: cityKeywords[cityName] ?? [
      `mold inspector ${cityName} CA`,
      `mold testing ${cityName}`,
      `mold inspection near me ${cityName}`,
      `IAC2 certified mold inspector ${cityName}`,
      `${cityName} home mold inspection`,
      `mold testing ${cityName} CA`,
    ],
    faqs: cityFaqs[cityName] ?? [
      {
        q: `Does ${cityName} have specific mold risks I should know about?`,
        a: `${cityName} homeowners face the same mold risks common throughout Orange County — HVAC moisture, bathroom ventilation issues, and plumbing leaks. A professional inspection with thermal imaging and air sampling gives you verified data about your specific property.`,
      },
      {
        q: `How long does a mold inspection take in ${cityName}?`,
        a: `A standard home inspection in ${cityName} takes 2-4 hours depending on property size. You receive a complete written report with photos and lab results within 24 hours of the inspection.`,
      },
      {
        q: `Do you offer same-day mold inspections in ${cityName}?`,
        a: `We offer same-day appointments in ${cityName} when our schedule allows. Call us at 949-371-5934 to check availability. We also offer Saturday appointments from 8am to 12pm.`,
      },
    ],
  }
}
