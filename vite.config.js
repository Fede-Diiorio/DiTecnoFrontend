import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;700&display=swap');
        $primaryFont: "IBM Plex Sans", sans-serif;
        $primaryColor: #0167B1;
        $lightPrimaryColor: #01AEF2;
        $secondary: #FFDA74;
        $darkSecondary: #A48B47;
        $white: #ffffff;
        $black: #000000;
        $grey: #97989A;
        $darkGrey: #3d3d3d;
        `
      }
    }
  }
})
