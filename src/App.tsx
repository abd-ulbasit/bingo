import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className='p-4 border rounded-md' onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App
