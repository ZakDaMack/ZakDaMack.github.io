import ReactDOM from 'react-dom';
import './index.sass';
import React, { Component } from 'react';
import ResponsiveDrawer from './Header';
import Jumbotron from './Jumbotron';
import About from './AboutMe'
import Splash from './Splash'
import Theme from './styles/theme'
import CursorText from './CursorText';
import ExternalLinks from './ExternalLinks';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <Theme>
          <ResponsiveDrawer/>
          <Splash>
            <div>
              <h1>Zak Dowsett</h1>
              <p>
                <CursorText phrases={[
                  "Computer Scientist",
                  "Software Engineer",
                  "Full-Stack Developer",
                  "Blockchain Programmer",
                  "Cybersecurity Enthusiast"
                ]}/>
              </p>
            </div>
            {/* <About>
              Doggo ipsum extremely cuuuuuute borking doggo big ol fluffer dat tungg tho yapper, wow such tempt borkf much ruin diet borking doggo.
              Smol extremely cuuuuuute borking doggo boofers bork clouds, most angery pupper I have ever seen long woofer wow very biscit woofer.
              You are doin me a concern smol heck the neighborhood pupper very hand that feed shibe, wow very biscit sub woofer.
              Heckin good boys borkf maximum borkdrive big ol ur givin me a spook many pats extremely cuuuuuute, long water shoob super chub waggy wags boof.
              big ol pupper fluffer you are doing me the shock. Long bois shibe corgo fluffer aqua doggo mlem, thicc wrinkler pupper thicc. noodle horse lotsa pats.
              Fluffer heck blep you are doin me a concern adorable doggo smol, shooberino long bois tungg. Doing me a frighten what a nice floof lotsa pats pupperino, such treat.
            </About> */}
          </Splash>
          <Jumbotron id='skills' />
          <Jumbotron id='my-history' background='#03ADC5' />
          <Jumbotron background='url("/landscape.jpg")'>
            <ExternalLinks links={[
              {title: 'LinkedIn', link: 'https://www.linkedin.com/in/zak-dowsett-4a7455131/', colour: '#2867b2', icon: <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />},
              {title: 'GitHub', link: 'https://www.github.com/ZakDaMack', colour: '#000',  icon: <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />},
              {title: 'Mail Me', link: 'mailto:z.dowsett@outlook.com', colour: '#0078d4', icon: <path d="M8.56 12.03Q8.56 12.41 8.5 12.76 8.39 13.1 8.2 13.38 8 13.65 7.71 13.81 7.41 13.97 7 13.97 6.58 13.97 6.29 13.8 6 13.63 5.81 13.35 5.62 13.07 5.54 12.72 5.45 12.37 5.45 12 5.45 11.64 5.54 11.28 5.62 10.93 5.81 10.65 6 10.37 6.31 10.2 6.61 10.03 7.03 10.03 7.46 10.03 7.75 10.2 8.05 10.38 8.23 10.66 8.41 10.95 8.5 11.3 8.56 11.66 8.56 12.03M22 12V19.81Q22 20.2 21.73 20.5 21.45 20.75 21.06 20.75H7.94Q7.55 20.75 7.27 20.5 7 20.2 7 19.81V17H2.83Q2.5 17 2.24 16.76 2 16.5 2 16.17V7.83Q2 7.5 2.24 7.24 2.5 7 2.83 7H8.25V4.13Q8.25 3.76 8.5 3.5 8.76 3.25 9.13 3.25H19.87Q20.24 3.25 20.5 3.5 20.75 3.76 20.75 4.13V11.04L21.79 11.64H21.8Q21.88 11.7 21.94 11.8 22 11.89 22 12M17 5.13V7.63H19.5V5.13M17 8.88V11.38H19.5V8.88M17 12.63V14.15L19.54 12.63M12.63 5.13V7.63H15.75V5.13M12.63 8.88V11.38H15.75V8.88M12.63 12.63V14.32L14.64 15.56L15.75 14.9V12.63M9.5 5.13V7H11.27Q11.33 7 11.38 7.04V5.12M7 15.32Q7.73 15.32 8.32 15.06 8.9 14.8 9.31 14.35 9.71 13.9 9.91 13.28 10.12 12.66 10.13 11.94 10.13 11.25 9.92 10.65 9.72 10.06 9.32 9.62 8.93 9.18 8.37 8.93 7.8 8.68 7.08 8.68 6.31 8.68 5.71 8.93 5.12 9.18 4.71 9.63 4.3 10.09 4.09 10.71 3.88 11.34 3.88 12.08 3.88 12.78 4.09 13.38 4.31 13.97 4.71 14.4 5.11 14.83 5.68 15.08 6.26 15.32 7 15.32M8.25 19.5H18.57L12 15.4V16.17Q12 16.5 11.76 16.76 11.5 17 11.17 17H8.25M20.75 19.39V13.36L15.83 16.31Z" />}
            ]}/>
          </Jumbotron>
        </Theme>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
