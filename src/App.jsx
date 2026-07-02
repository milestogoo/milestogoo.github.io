import { useEffect, useState } from 'react'
import { ContentProvider } from './context/ContentContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Articles from './components/Articles'
import ArticleDetail from './components/ArticleDetail'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EditBar from './components/EditBar'

function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

function App() {
  const hash = useHash()
  const articleMatch = hash.match(/^#\/article\/(.+)$/)

  return (
    <ContentProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <main>
          {articleMatch ? (
            <ArticleDetail id={decodeURIComponent(articleMatch[1])} />
          ) : (
            <>
              <Hero />
              <Experience />
              <Articles />
              <Projects />
              <Skills />
              <Contact />
            </>
          )}
        </main>
        <Footer />
        <EditBar />
      </div>
    </ContentProvider>
  )
}

export default App
