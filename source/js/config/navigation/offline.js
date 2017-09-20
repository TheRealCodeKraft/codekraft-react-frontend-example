import Why from 'components/offline/why'

const offline = {
  root: "/",
  menu: {
    side: {
      items: [
        {
          title: "Pourquoi?",
          route: 'why',
          component: Why
        }
      ]
    }
  }
}

export default offline
