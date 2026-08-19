let rate = 0.9
let selectedVoice: SpeechSynthesisVoice | null = null
let activeUtterance: SpeechSynthesisUtterance | null = null
let activeOnEnd: (() => void) | undefined

function getSpeechSynthesis(): SpeechSynthesis | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return null
  }

  return window.speechSynthesis
}

export function stop(): void {
  const onEnd = activeOnEnd
  activeUtterance = null
  activeOnEnd = undefined
  getSpeechSynthesis()?.cancel()
  onEnd?.()
}

export function setRate(nextRate: number): void {
  if (!Number.isFinite(nextRate)) return
  rate = Math.min(2, Math.max(0.1, nextRate))
}

export function setVoice(voice: SpeechSynthesisVoice | null): void {
  selectedVoice = voice
}

export function speak(text: string, onEnd?: () => void): boolean {
  const normalizedText = text.trim()
  const synthesis = getSpeechSynthesis()

  if (!normalizedText || !synthesis) {
    onEnd?.()
    return false
  }

  activeUtterance = null
  activeOnEnd = undefined
  synthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(normalizedText)
  utterance.lang = "pt-BR"
  utterance.rate = rate
  utterance.pitch = 1
  if (selectedVoice) utterance.voice = selectedVoice

  const finish = () => {
    if (activeUtterance !== utterance) return
    activeUtterance = null
    activeOnEnd = undefined
    onEnd?.()
  }

  utterance.onend = finish
  utterance.onerror = finish
  activeUtterance = utterance
  activeOnEnd = onEnd
  synthesis.speak(utterance)
  return true
}
