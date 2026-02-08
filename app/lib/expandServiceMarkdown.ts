export interface ServiceExpansionData {
  name: string
  slug: string
  city: string
  serviceAreas: string[]
  landmarks: string[]
}

const EXPANSION_BLOCK = `
## What people in {{CITY}} usually notice first

{{NEAR_ME_LINE}}

Here are common things people tell us:
- "The room smells musty but I can't see anything."
- "We had a leak months ago and I'm not sure it dried."
- "One bathroom keeps getting mildew no matter what we do."
- "My allergies feel worse at home than outside."
- "The AC smell is weird when it first turns on."

If any of that sounds familiar, start simple. Look for moisture first. Moisture is the fuel.

## Quick checks you can do today

These are simple checks that help you decide what to do next:
- Look under sinks with a flashlight. Check the back corners.
- Touch baseboards near bathrooms and kitchens. Soft or swollen is a clue.
- Check window tracks for water, especially in the morning.
- Run the bathroom fan. Hold a tissue up to the grille. It should stick.
- If you have an AC closet, look for water marks around the drain pan area.

If you find water or staining, don't ignore it. Small leaks turn into bigger issues.

## What a good {{SERVICE_NAME}} visit usually includes

A solid visit should feel clear and organized. Most people want answers like:
- What is the most likely source of moisture?
- Is the problem active right now, or old?
- What areas are highest risk?
- What's a smart next step that doesn't waste money?

We keep it simple and explain what we see in plain language.

## Common causes we see around {{CITY}}

Every area has patterns. In {{CITY}}, we often see:
- Small plumbing leaks that stay hidden in cabinets
- Shower corners and grout that stay damp
- Window condensation that keeps returning
- AC drain issues that drip slowly over time
- Poor airflow in closets and back bedrooms

And yes, coastal air can add to it. Not always, but it's part of the puzzle.

## Local service areas we're in all the time

We work in {{AREAS}}.

If you're near {{LANDMARKS}}, you're in our normal zone.

## How to pick the right next step

Here's a simple guide:
- If you see water or staining: fix the leak first.
- If you smell musty air: consider inspection and targeted testing.
- If you just had remediation: post-work verification helps.
- If symptoms improve when you leave home: indoor air testing can help.

You don't need to do everything at once. You just need the next right step.

## More questions people ask

### Can I just clean it and move on?
Sometimes you can. But if moisture is still there, it will come back.

### Is this urgent?
If water is active, yes. If it's old staining, it may be less urgent. A quick inspection helps sort that out.

### Do I need testing every time?
No. Testing helps when you need proof, clarity, or documentation.

### What should I do before you arrive?
Don't scrub or spray anything right before the visit. We want to see the real condition.

### Will you explain the results in plain English?
Yes. That's the whole point.
`

export function expandServiceMarkdown(
  baseMarkdown: string,
  service: ServiceExpansionData
): string {
  const nearMeLine = `If you searched '${service.name} near me' in ${service.city}, here's what to watch for…`
  const areasStr = service.serviceAreas.join(', ')
  const landmarksStr = service.landmarks.join(', ')

  let expanded = EXPANSION_BLOCK
    .replace(/\{\{SERVICE_NAME\}\}/g, service.name)
    .replace(/\{\{CITY\}\}/g, service.city)
    .replace(/\{\{SLUG\}\}/g, service.slug)
    .replace(/\{\{AREAS\}\}/g, areasStr)
    .replace(/\{\{LANDMARKS\}\}/g, landmarksStr)
    .replace(/\{\{NEAR_ME_LINE\}\}/g, nearMeLine)

  return baseMarkdown.trim() + '\n' + expanded
}

export const SERVICE_EXPANSION_DEFAULTS = {
  city: 'San Clemente',
  serviceAreas: ['Talega', 'Forster Ranch', 'Marblehead', 'Capistrano Beach', 'Dana Point', 'San Juan Capistrano', 'Laguna Niguel', 'Orange County'],
  landmarks: ['San Clemente Pier', 'Avenida Del Mar', 'T-Street Beach', 'Dana Point Harbor', 'San Onofre area', 'PCH / Coast Highway']
}
