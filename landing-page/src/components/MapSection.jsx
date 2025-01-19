import React from "react";

export default function MapSection() {
  return (
    <section className="w-full h-[70vh]">
      {/* Embed a Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093177!2d144.9537363153671!3d-37.81627974202138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57731c211e7360c!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1615241352137!5m2!1sen!2sus"
        width="100%"
        height="100%"
        className="border-0"
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </section>
  );
}
