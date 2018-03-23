import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

//import '../node_modules/kepler/less/scaffold.less';
//import '../node_modules/kepler/less/kepler.less';
import 'antd/lib/date-picker/style/index.less';
import 'antd/lib/input/style/index.less';
import 'antd/lib/time-picker/style/index.less';
import 'antd/lib/pagination/style/index.less';
import 'antd/lib/select/style/index.less';
//import '../node_modules/react-table/react-table.css';
import '../node_modules/react-table/react-table.css';
import './css/font-awesome-4.7.0/css/font-awesome.min.css';
import './css/antdesign-icon-files/iconfont.css';
import './css/orgchart.css';

// Semantic UI styles
import '../node_modules/semantic-ui-css/components/icon.min.css';
import '../node_modules/semantic-ui-css/components/button.min.css';
import '../node_modules/semantic-ui-css/components/divider.min.css';
import '../node_modules/semantic-ui-css/components/label.min.css';
import '../node_modules/semantic-ui-css/components/menu.min.css';
import '../node_modules/semantic-ui-css/components/dropdown.css';
import '../node_modules/semantic-ui-css/components/popup.min.css';
import '../node_modules/semantic-ui-css/components/segment.min.css';
import '../node_modules/semantic-ui-css/components/transition.min.css';
import '../node_modules/semantic-ui-css/components/flag.min.css';
import '../node_modules/semantic-ui-css/components/loader.min.css';
import '../node_modules/semantic-ui-css/components/breadcrumb.min.css';
import '../node_modules/semantic-ui-css/components/image.min.css';

import '../node_modules/grc-react-redux/lib/styles/base.less';
import '../node_modules/survey-react/survey.css';
import '../node_modules/iconfont-consumer-paypal/dist/iconography.less';
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

import appRoutes from './routes';
import initStore from './store';



const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};



const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
