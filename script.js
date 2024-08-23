// tailwindcss customize configuration script

tailwind.config = {
    theme: {
        extend: {
            // f0nt-color
            colors: {
                theme:"#F4F4F4", // body
                green1: "#abef5f",// nav-btn
                green2:"#e5f3d6", // bage btn
                green3:"#d1f3ab", //hero-btn
                dark:"#212121", //title-clr
                gray1:"#494949", // description text
                gray2:"#737373", // nav-btn
            },

            // font-family
            fontFamily:{
                manrope:`"Manrope", sans-serif`,
            },

            // font-size
            fontSize:{
                fs_1:"64px", // hero-title
                fs_2:"40px", // section-title
                fs_3:"24px", //card-title
                fs_4:"20px", // card-title1
                fs_5: "16px", // text
                fs_6:"14px" // text1
            }
        }
    }
}

