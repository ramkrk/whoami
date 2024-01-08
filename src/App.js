
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import './App.css';
import {ProfileHeader} from './components/header/header.tsx'
import {ProfileFooter} from './components/footer/footer.tsx'
import {ProfileHome} from './components/home/intro.tsx'
import {ProfileExpert} from './components/expert/expert.tsx';
import {ProfileInfo} from './components/resume/resume.tsx'
import {ProfileContact} from './components/contact/contact.tsx'
import {ProfileProjects} from './components/projects/project.tsx'
import "@fontsource/montserrat"; 
import "@fontsource/poppins"; 

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
  * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
  */
};

const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: <ProfileHome />,
        },
        {
          text: <ProfileExpert />,
        },
        {
          text: <ProfileInfo />,
        },
        {
          text: <ProfileProjects />,
        },
        {
          text: <ProfileContact />,
        },
      ],
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }


  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xs"
      >
        <div className="App">
          <ProfileHeader />
          <ReactFullpage
            debug /* Debug logging */

            // Required when using extensions
            pluginWrapper={pluginWrapper}

            // fullpage options
            licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
            navigation
            anchors={['home', 'about', 'resume', 'projects', 'contact']}
            sectionSelector={SECTION_SEL}
            onLeave={this.onLeave.bind(this)}

            render={comp => (
              <ReactFullpage.Wrapper>
                {fullpages.map(({ text }) => (
                  <div key={text} className={SEL}>
                    {text}
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )}
          />
          <ProfileFooter />
        </div>
    </ThemeProvider>
    );
  }
}


export default App;
