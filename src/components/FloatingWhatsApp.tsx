import React from "react";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/966530889481"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 left-6 z-50
        bg-[#25D366]
        text-white
        w-16 h-16
        flex items-center justify-center
        rounded-full shadow-xl
        hover:scale-110 hover:shadow-2xl
        transition-all duration-300
      "
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <path d="M20.52 3.48A11.8 11.8 0 0012 0a11.85 11.85 0 00-10.2 18.1L0 24l6.17-1.62A11.83 11.83 0 0012 24a11.8 11.8 0 008.49-3.51A11.85 11.85 0 0024 12a11.8 11.8 0 00-3.48-8.52zM12 21.3a9.3 9.3 0 01-4.74-1.32l-.34-.2-3.66.96.98-3.56-.23-.37A9.3 9.3 0 1121.3 12 9.32 9.32 0 0112 21.3zm5.09-6.94c-.28-.14-1.64-.81-1.89-.9s-.44-.14-.63.14-.72.9-.89 1.09-.33.2-.61.07a7.63 7.63 0 01-2.24-1.38 8.38 8.38 0 01-1.55-1.94c-.16-.27 0-.42.12-.56s.27-.32.41-.48a1.86 1.86 0 00.27-.45.51.51 0 00-.02-.48c-.07-.14-.63-1.52-.86-2.09s-.45-.47-.63-.48h-.54a1 1 0 00-.72.34 3 3 0 00-.95 2.21 5.16 5.16 0 001.09 2.81 11.78 11.78 0 004.53 4 15.38 15.38 0 001.52.56 3.66 3.66 0 001.69.11 2.77 2.77 0 001.81-1.26 2.25 2.25 0 00.16-1.26c-.07-.14-.26-.2-.54-.34z" />
      </svg>
    </a>
  );
};
