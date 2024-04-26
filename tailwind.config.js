/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
  	screens: {
  		base: '0px',
  		sm: '576px',
  		md: '768px',
  		lg: '992px',
  		xl: '1200px',
  		xxl: '1440px',
  		xxxl: '1920px'
  	},
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			success: '#10B981',
  			warning: '#F59E0B',
  			error: '#EF4444',
  			info: '#3B82F6',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
        'tab-inactive': '#c9eeff',
        'tab-active': '#1f4a83',
        'tab-active-hover': '#1b457d',
        'turquoise-light': '#69dccf',
        'turquoise': '#22cdba',
        'turquoise-dark': '#18b2a0'
  		},
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '1rem',
  				sm: '2rem',
  				lg: '4rem',
  				xl: '5rem',
  				xxl: '6rem',
  				xxxl: '7rem'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'monospace'
  			]
  		},
  		fontSize: {
  			h1: [
  				'48px',
  				'1.2'
  			],
  			'h1-md': [
  				'36px',
  				'1.2'
  			],
  			h2: [
  				'36px',
  				'1.3'
  			],
  			'h2-md': [
  				'28px',
  				'1.3'
  			],
  			h3: [
  				'28px',
  				'1.4'
  			],
  			'h3-md': [
  				'24px',
  				'1.4'
  			],
  			h4: [
  				'24px',
  				'1.4'
  			],
  			'h4-md': [
  				'20px',
  				'1.4'
  			],
  			p: [
  				'18px',
  				'1.6'
  			],
  			'p-md': [
  				'16px',
  				'1.6'
  			],
  			'p-sm': [
  				'14px',
  				'1.6'
  			]
  		},
  		animation: {
  			'fade-in': 'fade-in 0.5s ease-out',
  			'fade-out': 'fade-out 0.5s ease-out',
  			'slide-in': 'slide-in 0.5s ease-out',
  			'slide-out': 'slide-out 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'slide-up': 'slide-up 0.5s forwards',
  		},
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'fade-out': {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			'slide-in': {
  				'0%': {
  					transform: 'translateY(100%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-out': {
  				'0%': {
  					transform: 'translateY(0)'
  				},
  				'100%': {
  					transform: 'translateY(100%)'
  				}
  			},
        'slide-down': {
          '0%': {
            transform: 'translateY(-50px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
        'slide-up': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-50px)', opacity: '0' },
        },
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem',
  			'30': '7.5rem'
  		},
  		borderRadius: {
  			DEFAULT: '8px',
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			xl: '16px',
  			'2xl': '20px'
  		},
  		boxShadow: {
  			sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  			DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  			md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  			lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  			xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
  		},
  		transitionDuration: {
  			DEFAULT: '300ms'
  		},
  		transitionTimingFunction: {
  			DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)'
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}
