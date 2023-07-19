/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      width: {
        '486': '486px',
        '520': '520px',
        '1360': '1360px',
        '666.284px': '666.284px',
      },
      height: {
        '388': '388px',
        '421': '421px',
        '350': '350px',
        '556': '556px',
        '717': '717px',
        '776': '776px',
        '816': '816px',
        '996': '996px',
        '496': '496px',
        '217.934px': '217.934px',
      },
      shodow:{
        color: "box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px -5px rgba(0, 0, 0, 0.10);"
      },
      borderRadius: {
        'large': '50px',
        '2large': '100px',
        
    },
    backgroundImage: {
      'back-pattern': "url('src/images/Group 50.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}
   }