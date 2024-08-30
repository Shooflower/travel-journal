import './App.css'
import TravelEntry from './components/TravelEntry'
import Header from './components/Header'
import entries from './assets/data.js'

function App() {
  const travelEntries = entries.map(entry => {
    // If this is the last entry, note it
    if (entry.id === entries[entries.length - 1].id) {
      entry.lastEntry = true;
    } else {
      entry.lastEntry = false;
    }

    return (
      <TravelEntry {...entry} />
    )
  })

  return (
    <>
      <Header />
      {travelEntries}
    </>
  )
}

export default App
