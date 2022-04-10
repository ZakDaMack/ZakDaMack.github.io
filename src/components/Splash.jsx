import React from 'react';
import { Parallax, ParallaxLayer, useSpring, useTrail, useChain, useSpringRef, animated } from '@react-spring/web'

import { styled } from '@mui/material/styles';
import { Avatar, Box, Typography, Link } from '@mui/material';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import CursorText from './CursorText';

const Jumbotron = styled(animated.div)(({theme}) => ({
  minHeight: '100vh',
  boxSizing: 'border-box',
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center'
}));

const CenterBox = styled(Box)(({theme}) => ({
  maxWidth: '80em', 
  width: '100%',
  margin: '2em'
}));

const AnimatedDownArrow = ({ springref }) => {
  const styles = useSpring({
    loop: true,
    from: { y: 0, opacity: 0 },
    to: [
      { y: -30, opacity: 1 },
      { y: 0, opacity: 1 }
    ],
    config: { duration: 800, friction: 5 },
    ref: springref
  })

  return (
    <animated.div style={styles}>
      <KeyboardDoubleArrowDownIcon sx={{ fontSize: '4em', color: 'text.primary' }} />
    </animated.div>
  );
}

const Trail = ({ children, springref }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    // config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    y: 0,
    delay: 400,
    from: { opacity: 0, y: 200 },
    config: { duration: 1000 },
    ref: springref
  })

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  )
}

export default function Splash(props) {
  const clickHandler = (e) => props.headerRef.current.scrollIntoView({
    behavior: "smooth"
  });

  const trailRef = useSpringRef();
  const arrowRef = useSpringRef();

  // create fade in of background
  const springRef = useSpringRef();
  const fadeinStyle = useSpring({
    to: { opacity:  1 },
    from: {opacity: 0},
    config: { duration: 1000 },
    ref: springRef
  });

  useChain([springRef, trailRef, arrowRef]);

  return ( 
    <Jumbotron 
      style={fadeinStyle}
      sx={{
        background: `url('${props.background}')`, 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}>

        <CenterBox>
          <Trail springref={trailRef}>
            <Typography color="text.primary" variant="h1">{props.title}</Typography>
            <CursorText>{props.subtitle}</CursorText>
          </Trail>
        </CenterBox>

        <Box sx={{position: 'absolute', bottom: '2em', cursor: 'pointer' }} onClick={clickHandler}>
          <AnimatedDownArrow springref={arrowRef} />
        </Box>
        

        <Box sx={{position: 'absolute', bottom: 0, right: 0, background: 'rgba(255, 255, 255, 0.1)' }}>
          {props.links.map(l => (
            <Box key={l.name} m={2} textAlign='center'>
              <Link color="text.primary" href={l.link} underline="hover" target="_blank" rel="noopener">
                <l.icon sx={{color: 'text.primary', fontSize: '1.5em'}} />
                <Typography color="text.primary" >{l.name}</Typography>
              </Link>
            </Box>
          ))}
        </Box>

    </Jumbotron>
  );
}

