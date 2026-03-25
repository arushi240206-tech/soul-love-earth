import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import ValueProps from '../components/home/ValueProps'
import Categories from '../components/home/Categories'
import Story from '../components/home/Story'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Categories />
        <Story />
      </main>
      <Footer />
    </>
  )
}