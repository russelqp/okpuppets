module.exports = {
  mode:'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      //Estilos personalizados basado en ciertas condiciones
      backgroundImage: theme => ({
        'wave-pattern': 'url(../img/wave-white.png)',
        'wave-pattern-dots': 'url(../img/pattern-white-dots.png)',
        'pattern-characters-red': "url('../img/pattern-characters-red.png')",
        'character-mario': "url('../img/character-l.png')",
        'wave-pink': "url('../img/wave-pink.png')",
        'yellow-dots': "url('../img/pattern-yellow-dots.png')",
      }),
      screens:{
        'xsm' : '320px'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'header_mov': '200px, auto',
        'header_mov_md': '200px, auto',

        //Rows grid
        'card': '200px, 80px',
        'texto-img': '50%, auto',
        'card_vid': '40%, auto',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateRows: {
        //Rows grid
        'card': '250px, 80px',
        'card_vid': '80px, 500px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
