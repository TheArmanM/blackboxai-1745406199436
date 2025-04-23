import React from 'react'
import PopularBooks from '../components/PopularBooks'
import GenreFilter from '../components/GenreFilter'
import ReviewsSection from '../components/ReviewsSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto">
          Buku adalah jendela ilmu, pintu imajinasi, dan sahabat setia dalam perjalanan hidup.
        </h1>
      </section>

      {/* Popular Books Section */}
      <section className="my-8 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Paling Populer</h2>
        <PopularBooks />
      </section>

      {/* Genre Filter Section */}
      <section className="my-8 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Genre Buku</h2>
        <GenreFilter />
      </section>

      {/* Reviews Section */}
      <section className="my-8 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Kata Mereka</h2>
        <ReviewsSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
