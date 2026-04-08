export type ServiceItem = {
  name: string
  slug: string
  categorySlug: string
  canonicalHref: string
  existingHref: string
  shortDescription: string
}

export type ServiceCategory = {
  name: string
  slug: string
  description: string
  services: ServiceItem[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: 'Home Inspector',
    slug: 'home-inspector',
    description: 'Inspection-focused services for identifying mold risks, moisture concerns, and problem areas throughout the home.',
    services: [
      { name: 'Mold Sampling', slug: 'mold-sampling', categorySlug: 'home-inspector', canonicalHref: '/home-inspector/services/mold-sampling', existingHref: '/services/mold-sampling', shortDescription: 'Air and surface samples compared to outdoor controls to identify what\'s in your indoor environment. Data-driven results.' },
      { name: 'New Construction Inspections', slug: 'new-construction-inspections', categorySlug: 'home-inspector', canonicalHref: '/home-inspector/services/new-construction-inspections', existingHref: '/services/new-construction-inspections', shortDescription: 'Catch problems early at pre-drywall, final walkthrough, or 11-month warranty stage before they become costly repairs.' },
      { name: 'Rental Property Inspections', slug: 'rental-property-inspections', categorySlug: 'home-inspector', canonicalHref: '/home-inspector/services/rental-property-inspections', existingHref: '/services/rental-property-inspections', shortDescription: 'Clear documentation for move-in, move-out, or mid-lease moisture and odor complaints. Fewer disputes, better decisions.' },
      { name: 'Mold Prevention', slug: 'mold-prevention', categorySlug: 'home-inspector', canonicalHref: '/home-inspector/services/mold-prevention', existingHref: '/services/mold-prevention', shortDescription: 'Find moisture habits and fix them early before mold starts. Focused on humidity, ventilation, and plumbing risks.' },
      { name: 'Physical and Visual Inspection', slug: 'physical-and-visual-inspection', categorySlug: 'home-inspector', canonicalHref: '/home-inspector/services/physical-and-visual-inspection', existingHref: '/services/physical-and-visual-inspection', shortDescription: 'The smart first step to understand what\'s happening before spending money on testing or repairs.' },
      { name: 'HVAC System Inspection', slug: 'hvac-system-inspection', categorySlug: 'home-inspector', canonicalHref: '/home-inspector/services/hvac-system-inspection', existingHref: '/services/hvac-system-inspection', shortDescription: 'Moisture, visible condition, and airflow issues that can impact indoor air quality throughout your home.' },
      { name: 'Kitchen Inspection', slug: 'kitchen-inspection', categorySlug: 'home-inspector', canonicalHref: '/home-inspector/services/kitchen-inspection', existingHref: '/services/kitchen-inspection', shortDescription: 'Moisture, plumbing, and early warning signs. Slow leaks under sinks and dishwashers cause more damage than you think.' },
      { name: 'Bathroom Inspection', slug: 'bathroom-inspection', categorySlug: 'home-inspector', canonicalHref: '/home-inspector/services/bathroom-inspection', existingHref: '/services/bathroom-inspection', shortDescription: 'Catch moisture problems in showers, tubs, sinks, and vent fans before they turn into mold or structural damage.' },
      { name: 'Real Estate Inspection', slug: 'real-estate-inspection', categorySlug: 'home-inspector', canonicalHref: '/home-inspector/services/real-estate-inspection', existingHref: '/services/real-estate-inspection', shortDescription: 'For buyers, sellers, and agents. Focused on moisture, visible defects, and red flags that matter during transactions.' },
    ],
  },
  {
    name: 'Environmental Consultant',
    slug: 'environmental-consultant',
    description: 'Advanced testing and consulting services to evaluate indoor air quality, mold contamination, and next-step action planning.',
    services: [
      { name: 'Indoor Air Testing', slug: 'indoor-air-testing', categorySlug: 'environmental-consultant', canonicalHref: '/environmental-consultant/services/indoor-air-testing', existingHref: '/services/indoor-air-testing', shortDescription: 'Find out what\'s in the air you\'re breathing. We compare indoor results to outdoor air so the data actually means something.' },
      { name: 'Certified Mold Inspector', slug: 'certified-mold-inspector', categorySlug: 'environmental-consultant', canonicalHref: '/environmental-consultant/services/certified-mold-inspector', existingHref: '/services/certified-mold-inspector', shortDescription: 'Trained eyes matter when identifying mold issues. Professional inspections with clear documentation and next steps.' },
      { name: 'Mold Inspection', slug: 'mold-inspection', categorySlug: 'environmental-consultant', canonicalHref: '/environmental-consultant/services/mold-inspection', existingHref: '/services/mold-inspection', shortDescription: 'We find the why, not just the mold. Comprehensive inspections with moisture detection, documentation, and clear next steps.' },
      { name: 'Mold Testing', slug: 'mold-testing', categorySlug: 'environmental-consultant', canonicalHref: '/environmental-consultant/services/mold-testing', existingHref: '/services/mold-testing', shortDescription: 'Data that helps decisions. Air and surface sampling with independent lab analysis to identify mold types and concentrations.' },
      { name: 'ERMI Testing', slug: 'ermi-testing', categorySlug: 'environmental-consultant', canonicalHref: '/environmental-consultant/services/ermi-testing', existingHref: '/services/ermi-testing', shortDescription: 'Deeper data for specific situations. Dust-based mold analysis that identifies 36 species for a comprehensive indoor mold profile.' },
      { name: 'Thermal Imaging Inspection', slug: 'thermal-imaging-inspection', categorySlug: 'environmental-consultant', canonicalHref: '/environmental-consultant/services/thermal-imaging-inspection', existingHref: '/services/thermal-imaging-inspection', shortDescription: 'See what the eye can\'t. Infrared cameras detect hidden moisture behind walls, ceilings, and floors without damage.' },
      { name: 'Indoor Allergen Sampling', slug: 'indoor-allergen-sampling', categorySlug: 'environmental-consultant', canonicalHref: '/environmental-consultant/services/indoor-allergen-sampling', existingHref: '/services/indoor-allergen-sampling', shortDescription: 'When allergies don\'t make sense, testing your indoor environment can help identify triggers like mold, dust, and dander.' },
      { name: 'Mycotoxin Testing', slug: 'mycotoxin-testing', categorySlug: 'environmental-consultant', canonicalHref: '/environmental-consultant/services/mycotoxin-testing', existingHref: '/services/mycotoxin-testing', shortDescription: 'When symptoms don\'t add up, testing for toxic byproducts of mold can provide answers that standard mold testing may miss.' },
      { name: 'Custom Mold Action Plans', slug: 'custom-mold-action-plans', categorySlug: 'environmental-consultant', canonicalHref: '/environmental-consultant/services/custom-mold-action-plans', existingHref: '/services/custom-mold-action-plans', shortDescription: 'Clear steps, less chaos. We create a prioritized plan based on inspection findings so you know exactly what to do next.' },
    ],
  },
  {
    name: 'Water Damage Restoration Service',
    slug: 'water-damage-restoration-service',
    description: 'Supportive services related to mold cleanup, restoration guidance, mitigation, and remediation-related needs.',
    services: [
      { name: 'Mold Cleaning', slug: 'mold-cleaning', categorySlug: 'water-damage-restoration-service', canonicalHref: '/water-damage-restoration-service/services/mold-cleaning', existingHref: '/services/mold-cleaning', shortDescription: 'Why inspection comes first. Understanding the source of moisture before cleaning prevents mold from coming right back.' },
      { name: 'Mold Damage Restoration', slug: 'mold-damage-restoration', categorySlug: 'water-damage-restoration-service', canonicalHref: '/water-damage-restoration-service/services/mold-damage-restoration', existingHref: '/services/mold-damage-restoration', shortDescription: 'Inspections help define the scope of damage so restoration work is targeted, documented, and effective.' },
      { name: 'Mold Mitigation', slug: 'mold-mitigation', categorySlug: 'water-damage-restoration-service', canonicalHref: '/water-damage-restoration-service/services/mold-mitigation', existingHref: '/services/mold-mitigation', shortDescription: 'Inspections guide prevention by identifying moisture sources and conditions that allow mold to grow in your home.' },
      { name: 'Mold Remediation', slug: 'mold-remediation', categorySlug: 'water-damage-restoration-service', canonicalHref: '/water-damage-restoration-service/services/mold-remediation', existingHref: '/services/mold-remediation', shortDescription: 'Inspections protect the process by documenting conditions before and after remediation for proper verification.' },
    ],
  },
]

export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap(c => c.services)

export function findServiceBySlug(slug: string): ServiceItem | undefined {
  return ALL_SERVICES.find(s => s.slug === slug)
}

export function findCategoryBySlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find(c => c.slug === slug)
}
