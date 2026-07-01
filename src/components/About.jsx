import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">About</h2>
      <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">{profile.bio}</p>
    </section>
  )
}
