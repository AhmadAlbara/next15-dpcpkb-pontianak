import React from 'react'

const Location = () => {
  return (
     <section className="py-12 ">
        <h2 className="text-3xl font-bold text-center text-primary">Lokasi Sekretariat Dpc Pkb Pontianak</h2>

        {/* Alamat */}
        <div className="text-center mb-8">
          <p className="text-lg  mb-4">Jl. Suprapto V No.51, Benua Melayu Darat, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78113</p>
        </div>

        {/* Peta Lokasi */}
        <div className="max-w-4xl mx-auto h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8173657867396!2d109.33755772472337!3d-0.03963344995996296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59ac2c909ba7%3A0xee76d403c227c70e!2sSekretariat%20Dpc%20Pkb!5e0!3m2!1sen!2sid!4v1748610271825!5m2!1sen!2sid"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>

  )
}

export default Location
