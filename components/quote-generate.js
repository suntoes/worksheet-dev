import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const quoteArray = [
  "The sea's a vast place.",
  'Miracles only happen to those who never give up.',
  "If you don't take risks, you can't create a future.",
  'As everything happens for a reason, our destiny slowly takes form.',
  'People’s dreams... have no ends'
]

const QuoteGenerate = () => {
  const [currentCount, setCurrentCount] = useState(0)

  const countGenerator = () => {
    const initialRandom = Math.floor(
      Math.random() * (quoteArray.length - 1 - 0 + 1) + 0
    )
    setCurrentCount(initialRandom)
    let countLog = [initialRandom]

    function generateNewCount(currentLog) {
      const random = Math.floor(
        Math.random() * (quoteArray.length - 1 - 0 + 1) + 0
      )
      if (currentLog.includes(random)) return generateNewCount(currentLog)
      return random
    }

    function circulateCount() {
      let random
      if (countLog.length === quoteArray.length) {
        random = generateNewCount([])
        countLog = [random]
      } else {
        random = generateNewCount(countLog)
        countLog = [...countLog, random]
      }
      setCurrentCount(random)
    }

    setInterval(circulateCount, 10000)
  }

  useEffect(countGenerator, [])

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.span
        key={currentCount}
        style={{ display: 'inline-blok' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {quoteArray[currentCount]}
      </motion.span>
    </AnimatePresence>
  )
}

export default QuoteGenerate
