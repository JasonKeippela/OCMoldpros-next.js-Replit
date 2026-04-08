export function extractFAQ(markdown: string): { question: string; answer: string }[] {
  const faqItems: { question: string; answer: string }[] = []
  const lines = markdown.split('\n')
  let inFAQ = false
  let currentQuestion = ''
  let currentAnswer = ''

  for (const line of lines) {
    if (line.trim() === '## FAQ') {
      inFAQ = true
      continue
    }
    if (!inFAQ) continue
    if (line.startsWith('## ') && line.trim() !== '## FAQ') break

    if (line.startsWith('### ')) {
      if (currentQuestion && currentAnswer.trim()) {
        faqItems.push({ question: currentQuestion, answer: currentAnswer.trim() })
      }
      currentQuestion = line.replace('### ', '').trim()
      currentAnswer = ''
    } else if (currentQuestion) {
      currentAnswer += line + ' '
    }
  }
  if (currentQuestion && currentAnswer.trim()) {
    faqItems.push({ question: currentQuestion, answer: currentAnswer.trim() })
  }

  return faqItems
}
