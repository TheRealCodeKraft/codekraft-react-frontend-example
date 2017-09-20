import { Bootstrap } from 'codekraft-react-frontend'
import '../scss/app.scss';

import 'babel-polyfill';

import OfflineNav from './config/navigation/offline'
import DashboardNav from './config/navigation/dashboard'

const config = {
  clients: [
  ],
  navigation: {
    offline: OfflineNav,
    dashboard: DashboardNav,
  }
}

Bootstrap.launch(config)
