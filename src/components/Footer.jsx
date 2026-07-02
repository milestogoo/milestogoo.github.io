import { useContent } from '../context/ContentContext'

export default function Footer() {
  const { content } = useContent()

  return (
    <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} {content.profile.name}. Built with React &amp; Tailwind CSS.
    </footer>
  )
}
