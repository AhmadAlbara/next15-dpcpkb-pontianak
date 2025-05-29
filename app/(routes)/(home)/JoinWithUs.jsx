import Link from 'next/link'
import React from 'react'

const JoinWithUs = () => {
  return (
    <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Bergabung Bersama PKB
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Bersama kita wujudkan Indonesia yang lebih adil, makmur, dan
          bermartabat.
        </p>
        <Link
          href="https://pkb.id/"
          target='_blank'
          className="bg-primary text-white py-3 px-6 rounded-lg shadow hover:bg-green-700 transition"
        >
          Daftar Sekarang
        </Link>
      </section>
  )
}

export default JoinWithUs
