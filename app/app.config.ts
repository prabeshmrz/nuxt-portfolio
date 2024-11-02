export default defineAppConfig({
  appName: 'Maharjan.Dev',
  appDescription: 'Welcome to the digital portfolio of Prabesh Maharjan. Here, you\'ll find a showcase of my projects, from web development to web hosting, highlighting a blend of expertise and passion for technology.',
  profilePicture: '/assets/prabesh-image.jpg',
  footerName: 'Prabesh Maharjan',
  email: 'prabeshmrz.pm@gmail.com',
  twitterUsername: 'prabeshmaharjan',
  phone: '(+977) 9818792669',
  openGraphImage: 'https://canvas.hrcd.fr/social-preview.jpg',
  socials: {
    github: 'https://github.com/HugoRCD',
    twitter: 'https://twitter.com/HugoRCD__',
    linkedin: 'https://www.linkedin.com/in/prabesh-maharjan-04294a16b',
    instagram: 'https://www.instagram.com/hugo.rcd_',
    spotify: 'https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
