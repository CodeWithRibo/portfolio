/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      serif: ["Merriweather", "serif"],
    },
    colors: {
      SemiLightGreen: "#27a102",
      plainBlack: "#000000",
      LighGreen: "#1fea00",
      navy: "#070F2B",
      WhiteSmoke: "#F5F5F5",
    },
 
    extend: {
      height: {
        // home
        "section-one-screen": "95vh",
        // about
        "section-two-screen": "90vh",
        // skills
        "section-three-screen": "90vh",
        // projects
        "section-four-screen": "100vh",
        // contact
        "section-five-screen": "h-max",
      },
    },
  },
  plugins: [],
};
