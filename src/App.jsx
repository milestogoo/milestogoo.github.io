import { ContentProvider } from './context/ContentContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EditBar from './components/EditBar'

function App() {
  return (
    <ContentProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <EditBar />
      </div>
    </ContentProvider>
  )
}

export default App
