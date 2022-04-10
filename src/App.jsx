import React from "react";

import { styled, ThemeProvider } from "@mui/material/styles";
import themeCreate from "./theme";

import Splash from "./components/Splash";
import AboutMe from "./components/AboutMe";
import Header from './components/Header';
import Display from './components/Display';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Footer from "./components/Footer";

const externalLinks = [
    {name: 'Email', icon: EmailIcon, link: 'mailto:z.dowsett@outlook.com'},
    {name: 'GitHub', icon: GitHubIcon, link: 'https://www.github.com/ZakDaMack'},
    {name: 'LinkedIn', icon: LinkedInIcon, link: 'https://www.linkedin.com/in/zak-dowsett-4a7455131/'},
];

const HeaderGap = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar
}));

export default function App() {
    const headerRef = React.useRef(null);

    const [mode, setMode] = React.useState("dark");
    const theme = React.useMemo(() => themeCreate(mode), [mode]);

    return (
        <ThemeProvider theme={theme}>
        <Splash
            title="Zak Dowsett"
            subtitle="<h1>Hello, world!</h1>"
            background="mountains-new.jpg"
            headerRef={headerRef}
            links={externalLinks}
        />
        <Header ref={headerRef} name="Zak Dowsett" />
        <AboutMe name="Zak Dowsett" avatar="avatar.jpg" url="https://raw.githubusercontent.com/ZakDaMack/ZakDaMack/main/README.md" />
        
        <Display title="Projects" items={[
            { 
                title: 'Coming Soon!',
                img: 'coming-soon.jpg',
                text: 'Doggo ipsum super chub such treat borkdrive. Big ol pupper shoob maximum borkdrive many pats dat tungg tho big ol, smol borking doggo with a long snoot for pats tungg clouds boofers. Thicc doge heckin good boys corgo yapper, long doggo shibe. Such treat very good spot shooberino pupper adorable doggo shoob, shibe doge smol. Long bois borking doggo wow such tempt, maximum borkdrive.'
            }
        ]}/>

        <Display title="Blog" type="article" items={[
            { 
                title: 'Coming Soon!',
                date: '10th April, 2022',
                name: 'Zak Dowsett',
                img: 'coming-soon.jpg',
                text: 'Doggo ipsum super chub such treat borkdrive. Big ol pupper shoob maximum borkdrive many pats dat tungg tho big ol, smol borking doggo with a long snoot for pats tungg clouds boofers. Thicc doge heckin good boys corgo yapper, long doggo shibe. Such treat very good spot shooberino pupper adorable doggo shoob, shibe doge smol. Long bois borking doggo wow such tempt, maximum borkdrive.'
            }
        ]}/>
        <Footer links={externalLinks} />
        </ThemeProvider>
    );
}
