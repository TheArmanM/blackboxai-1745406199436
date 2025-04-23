import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Testimonial</h3>
          <p className="italic text-gray-700">
            "YukBaca has transformed my reading habits. Highly recommended!"
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Call to Action</h3>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Join YukBaca Now
          </button>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100"
              alt="Gallery 1"
              className="w-full h-20 object-cover rounded"
            />
            <img
              src="https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100"
              alt="Gallery 2"
              className="w-full h-20 object-cover rounded"
            />
            <img
              src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100"
              alt="Gallery 3"
              className="w-full h-20 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
