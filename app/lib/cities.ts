// APPROVED SERVICE AREAS - 34 Cities Only
// This is the single source of truth for all service area pages

export type ServiceArea = {
  name: string;
  slug: string;
  tier: 'core' | 'secondary';
  nearby: string[];
  landmarks: string[];
}

// 10 Core cities (primary service area focus)
export const CORE_CITIES: ServiceArea[] = [
  { name: 'San Clemente', slug: 'san-clemente-ca', tier: 'core', nearby: ['Dana Point', 'San Juan Capistrano', 'Laguna Niguel', 'Laguna Beach', 'Mission Viejo', 'Rancho Santa Margarita'], landmarks: ['San Clemente Pier', 'Casa Romantica Cultural Center', 'San Clemente State Beach', 'Trestles Beach', 'Downtown San Clemente'] },
  { name: 'Dana Point', slug: 'dana-point-ca', tier: 'core', nearby: ['San Clemente', 'Laguna Niguel', 'San Juan Capistrano', 'Laguna Beach', 'Mission Viejo', 'Aliso Viejo'], landmarks: ['Dana Point Harbor', 'Doheny State Beach', 'Ocean Institute', 'Headlands Conservation Area', 'Salt Creek Beach Park'] },
  { name: 'Laguna Beach', slug: 'laguna-beach-ca', tier: 'core', nearby: ['Laguna Niguel', 'Aliso Viejo', 'Dana Point', 'Newport Beach', 'Laguna Hills', 'Irvine'], landmarks: ['Laguna Art Museum', 'Heisler Park', 'Main Beach', 'Crystal Cove State Park', 'Festival of Arts'] },
  { name: 'Laguna Niguel', slug: 'laguna-niguel-ca', tier: 'core', nearby: ['Dana Point', 'Aliso Viejo', 'Laguna Beach', 'Mission Viejo', 'San Juan Capistrano', 'Laguna Hills'], landmarks: ['Aliso Summit Trail', 'Laguna Niguel Regional Park', 'Crown Valley Community Park', 'Laguna Niguel Skate Park', 'Salt Creek Beach'] },
  { name: 'Laguna Hills', slug: 'laguna-hills-ca', tier: 'core', nearby: ['Aliso Viejo', 'Lake Forest', 'Mission Viejo', 'Laguna Niguel', 'Irvine', 'Laguna Beach'], landmarks: ['Laguna Hills Mall', 'Nellie Gail Ranch', 'Community Center & Sports Complex', 'Laguna Hills Skate Park', 'Aliso Creek Trail'] },
  { name: 'Mission Viejo', slug: 'mission-viejo-ca', tier: 'core', nearby: ['Lake Forest', 'Laguna Niguel', 'Aliso Viejo', 'Rancho Santa Margarita', 'Laguna Hills', 'San Juan Capistrano'], landmarks: ['Lake Mission Viejo', 'Oso Creek Trail', 'Kaleidoscope Shopping Center', 'Mission Viejo Country Club', 'Pavillion Park'] },
  { name: 'Newport Beach', slug: 'newport-beach-ca', tier: 'core', nearby: ['Costa Mesa', 'Irvine', 'Huntington Beach', 'Laguna Beach', 'Santa Ana', 'Fountain Valley'], landmarks: ['Balboa Island', 'Fashion Island', 'Corona del Mar State Beach', 'Newport Harbor', 'The Wedge'] },
  { name: 'Huntington Beach', slug: 'huntington-beach-ca', tier: 'core', nearby: ['Fountain Valley', 'Costa Mesa', 'Westminster', 'Seal Beach', 'Newport Beach', 'Garden Grove'], landmarks: ['Huntington Beach Pier', 'Bolsa Chica Ecological Reserve', 'International Surfing Museum', 'Pacific City', 'Huntington Central Park'] },
  { name: 'Costa Mesa', slug: 'costa-mesa-ca', tier: 'core', nearby: ['Newport Beach', 'Irvine', 'Huntington Beach', 'Santa Ana', 'Fountain Valley', 'Tustin'], landmarks: ['South Coast Plaza', 'Segerstrom Center for the Arts', 'Orange County Fairgrounds', 'The LAB Anti-Mall', 'TeWinkle Park'] },
  { name: 'Irvine', slug: 'irvine-ca', tier: 'core', nearby: ['Tustin', 'Costa Mesa', 'Newport Beach', 'Lake Forest', 'Santa Ana', 'Orange'], landmarks: ['Irvine Spectrum Center', 'University of California Irvine', 'Great Park', 'Quail Hill', 'Turtle Rock Community Park'] },
]

// 24 Secondary cities
export const SECONDARY_CITIES: ServiceArea[] = [
  { name: 'Aliso Viejo', slug: 'aliso-viejo-ca', tier: 'secondary', nearby: ['Laguna Niguel', 'Laguna Hills', 'Mission Viejo', 'Laguna Beach', 'Lake Forest', 'Irvine'], landmarks: ['Aliso Viejo Town Center', 'Aliso and Wood Canyons Wilderness Park', 'Grand Park', 'Iglesia Park', 'Soka University'] },
  { name: 'Anaheim', slug: 'anaheim-ca', tier: 'secondary', nearby: ['Orange', 'Fullerton', 'Garden Grove', 'Buena Park', 'Placentia', 'Santa Ana'], landmarks: ['Disneyland Resort', 'Angel Stadium', 'Honda Center', 'Anaheim Packing District', 'Downtown Disney'] },
  { name: 'Brea', slug: 'brea-ca', tier: 'secondary', nearby: ['Fullerton', 'Placentia', 'Yorba Linda', 'La Habra', 'Orange', 'Anaheim'], landmarks: ['Brea Mall', 'Downtown Brea', 'Brea Dam Recreation Area', 'Carbon Canyon Regional Park', 'Curtis Theatre'] },
  { name: 'Buena Park', slug: 'buena-park-ca', tier: 'secondary', nearby: ['Fullerton', 'Anaheim', 'Cypress', 'La Palma', 'Stanton', 'Garden Grove'], landmarks: ['Knotts Berry Farm', 'Medieval Times', 'Pirate Dinner Adventure', 'Buena Park Downtown', 'Ralph B. Clark Regional Park'] },
  { name: 'Cypress', slug: 'cypress-ca', tier: 'secondary', nearby: ['Buena Park', 'Los Alamitos', 'La Palma', 'Stanton', 'Garden Grove', 'Seal Beach'], landmarks: ['Cypress College', 'Arnold Cypress Park', 'Veterans Memorial', 'Oak Knoll Park', 'Cypress Community Center'] },
  { name: 'Fountain Valley', slug: 'fountain-valley-ca', tier: 'secondary', nearby: ['Huntington Beach', 'Costa Mesa', 'Westminster', 'Santa Ana', 'Garden Grove', 'Irvine'], landmarks: ['Mile Square Regional Park', 'Fountain Valley Recreation Center', 'Kingston Park', 'Courreges Park', 'Fountain Valley Summerfest'] },
  { name: 'Fullerton', slug: 'fullerton-ca', tier: 'secondary', nearby: ['Placentia', 'Anaheim', 'Brea', 'Buena Park', 'La Habra', 'Yorba Linda'], landmarks: ['Fullerton Arboretum', 'Muckenthaler Cultural Center', 'Downtown Fullerton', 'California State University Fullerton', 'Hillcrest Park'] },
  { name: 'Garden Grove', slug: 'garden-grove-ca', tier: 'secondary', nearby: ['Westminster', 'Anaheim', 'Santa Ana', 'Stanton', 'Fountain Valley', 'Orange'], landmarks: ['Christ Cathedral', 'Atlantis Play Center', 'Garden Grove Strawberry Festival', 'Village Green Park', 'Garden Grove Historical Society'] },
  { name: 'La Habra', slug: 'la-habra-ca', tier: 'secondary', nearby: ['Brea', 'Fullerton', 'Buena Park', 'La Palma', 'Placentia', 'Yorba Linda'], landmarks: ['La Habra Childrens Museum', 'La Habra Depot Theater', 'Portola Park', 'La Habra Citrus Festival', 'Imperial Park'] },
  { name: 'La Palma', slug: 'la-palma-ca', tier: 'secondary', nearby: ['Buena Park', 'Cypress', 'Stanton', 'Anaheim', 'Los Alamitos', 'La Habra'], landmarks: ['La Palma Central Park', 'La Palma Intercommunity Hospital', 'Walker Junior High School', 'George Washington Elementary', 'La Palma City Hall'] },
  { name: 'Laguna Woods', slug: 'laguna-woods-ca', tier: 'secondary', nearby: ['Lake Forest', 'Laguna Hills', 'Irvine', 'Aliso Viejo', 'Mission Viejo', 'Laguna Beach'], landmarks: ['Laguna Woods Village', 'Laguna Woods City Hall', 'Aliso Creek', 'El Toro Road Shopping', 'Laguna Woods Community Center'] },
  { name: 'Lake Forest', slug: 'lake-forest-ca', tier: 'secondary', nearby: ['Irvine', 'Mission Viejo', 'Laguna Hills', 'Laguna Woods', 'Rancho Santa Margarita', 'Aliso Viejo'], landmarks: ['Ethnobotany Garden', 'Pittsford Park', 'Lake Forest Sports Park', 'Borrego Park', 'Heritage Hill Historical Park'] },
  { name: 'Los Alamitos', slug: 'los-alamitos-ca', tier: 'secondary', nearby: ['Seal Beach', 'Cypress', 'Garden Grove', 'Westminster', 'Huntington Beach', 'Stanton'], landmarks: ['Los Alamitos Race Course', 'Arbor Dog Park', 'Little Cottonwood Park', 'Los Alamitos Community Center', 'Museum of History'] },
  { name: 'Orange', slug: 'orange-ca', tier: 'secondary', nearby: ['Anaheim', 'Santa Ana', 'Tustin', 'Villa Park', 'Irvine', 'Garden Grove'], landmarks: ['Old Towne Orange', 'Chapman University', 'The Outlets at Orange', 'Irvine Regional Park', 'Santiago Oaks Regional Park'] },
  { name: 'Placentia', slug: 'placentia-ca', tier: 'secondary', nearby: ['Fullerton', 'Yorba Linda', 'Anaheim', 'Brea', 'Orange', 'Villa Park'], landmarks: ['Tri-City Park', 'George Key Ranch Historic Park', 'Bradford House', 'Placentia Champions Sports Complex', 'Downtown Placentia'] },
  { name: 'Rancho Santa Margarita', slug: 'rancho-santa-margarita-ca', tier: 'secondary', nearby: ['Mission Viejo', 'Lake Forest', 'San Juan Capistrano', 'Laguna Hills', 'Laguna Niguel', 'Aliso Viejo'], landmarks: ['Rancho Santa Margarita Lake', 'Central Park', 'Tijeras Creek Golf Club', 'Arroyo Trabuco Golf Club', 'OSO Viejo Park'] },
  { name: 'San Juan Capistrano', slug: 'san-juan-capistrano-ca', tier: 'secondary', nearby: ['Dana Point', 'San Clemente', 'Laguna Niguel', 'Mission Viejo', 'Rancho Santa Margarita', 'Laguna Hills'], landmarks: ['Mission San Juan Capistrano', 'Los Rios Historic District', 'Zoomars Petting Zoo', 'ONeill Museum', 'Historic Town Center'] },
  { name: 'Santa Ana', slug: 'santa-ana-ca', tier: 'secondary', nearby: ['Orange', 'Irvine', 'Costa Mesa', 'Tustin', 'Garden Grove', 'Fountain Valley'], landmarks: ['Santa Ana Zoo', 'Bowers Museum', 'Discovery Cube Orange County', 'MainPlace Mall', 'Heritage Museum of Orange County'] },
  { name: 'Seal Beach', slug: 'seal-beach-ca', tier: 'secondary', nearby: ['Huntington Beach', 'Los Alamitos', 'Westminster', 'Cypress', 'Garden Grove', 'Fountain Valley'], landmarks: ['Seal Beach Pier', 'Main Street Seal Beach', 'Seal Beach National Wildlife Refuge', 'Eisenhower Park', 'Red Car Museum'] },
  { name: 'Stanton', slug: 'stanton-ca', tier: 'secondary', nearby: ['Garden Grove', 'Cypress', 'Buena Park', 'Anaheim', 'Westminster', 'La Palma'], landmarks: ['Adventure City', 'Stanton Central Park', 'Veterans Memorial', 'Harry M. Dotson Park', 'Stanton Community Center'] },
  { name: 'Tustin', slug: 'tustin-ca', tier: 'secondary', nearby: ['Irvine', 'Santa Ana', 'Orange', 'Costa Mesa', 'Fountain Valley', 'Villa Park'], landmarks: ['Old Town Tustin', 'Tustin Legacy', 'Tustin Ranch Golf Club', 'Marconi Automotive Museum', 'Peters Canyon Regional Park'] },
  { name: 'Villa Park', slug: 'villa-park-ca', tier: 'secondary', nearby: ['Orange', 'Anaheim', 'Yorba Linda', 'Placentia', 'Tustin', 'Santa Ana'], landmarks: ['Villa Park High School', 'Villa Park Orchards', 'Santiago Creek', 'Serrano Park', 'Villa Park Town Center'] },
  { name: 'Westminster', slug: 'westminster-ca', tier: 'secondary', nearby: ['Garden Grove', 'Huntington Beach', 'Fountain Valley', 'Stanton', 'Seal Beach', 'Santa Ana'], landmarks: ['Little Saigon', 'Asian Garden Mall', 'Westminster Mall', 'Sid Goldstein Freedom Park', 'Vietnam War Memorial'] },
  { name: 'Yorba Linda', slug: 'yorba-linda-ca', tier: 'secondary', nearby: ['Placentia', 'Brea', 'Anaheim', 'Fullerton', 'Orange', 'Villa Park'], landmarks: ['Richard Nixon Presidential Library', 'Black Gold Golf Club', 'Yorba Regional Park', 'Jessamyn West Park', 'Travis Ranch'] },
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

export function getCityData(cityName: string) {
  const isCoastal = ['Newport Beach', 'Huntington Beach', 'Laguna Beach', 'Dana Point', 'San Clemente', 'Seal Beach'].includes(cityName)
  
  const descriptions: Record<string, string> = {
    'Aliso Viejo': 'Aliso Viejo is one of Orange Countys newer cities, incorporated in 2001. The planned community features modern homes, excellent amenities, and a Town Center with shopping and dining. While newer construction is generally well-built, proper ventilation remains important.',
    'Anaheim': 'Anaheim is home to Disneyland Resort and the Honda Center, making it a major tourist destination in Orange County. The city has a rich history dating back to German settlers in the 1850s. Many homes in Anaheim are older construction, which may have outdated plumbing and ventilation systems that can contribute to moisture problems and potential mold growth.',
    'Brea': 'Brea is known for the Brea Mall and its revitalized downtown area. The city offers a mix of residential neighborhoods and commercial development. Proper home maintenance helps prevent moisture issues in this inland community.',
    'Buena Park': 'Buena Park is home to Knotts Berry Farm, one of Americas oldest theme parks. The city offers affordable housing and easy freeway access. Regular home maintenance, including moisture control, helps prevent mold in residential properties.',
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
    'Laguna Woods': 'Laguna Woods is a unique community known for Laguna Woods Village, one of the largest active adult communities in the nation. The city offers a peaceful lifestyle with excellent amenities for residents. Proper home maintenance and moisture control are important for the communitys well-maintained homes.',
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
    'Yorba Linda': 'Known as "The Land of Gracious Living," Yorba Linda is home to the Richard Nixon Presidential Library. The city features upscale homes, excellent schools, and beautiful hillside views. Canyon locations may experience unique moisture challenges that require attention.'
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
    'Yorba Linda': 'For Yorba Linda\'s upscale homes and equestrian properties, we provide premium mold inspection services. Our team is experienced with the larger homes and hillside properties common in this community.'
  }

  return {
    description: descriptions[cityName] || `${cityName} is a wonderful community in Orange County, California, offering residents a high quality of life with access to beaches, shopping, and entertainment.`,
    moldServices: moldServices[cityName] || `We provide professional mold inspection services throughout ${cityName}. Our certified inspectors understand the local housing stock and common moisture issues in this area.`,
    isCoastal
  }
}
