import React from 'react';
import { useSpring, animated } from '@react-spring/web'

import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Avatar, Typography } from '@mui/material';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Jumbotron = styled(`div`)(({theme}) => ({
  display: 'flex',
  p: '2em',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh'
}));



// @keyframes bounce { 
//   0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
//   40% {transform: translateY(-30px);} 
//   60% {transform: translateY(-15px);} 
// }

export default function Splash(props) {
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: 1 }
  });

  return ( 
    <Jumbotron 
      sx={{
        background: `url('${props.background}')`, 
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>

      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Box>
          <Typography variant="h2">{props.title}</Typography>
          <Typography variant="subtitle">{props.subtitle}</Typography>
        </Box>
        <Avatar sx={{ml: 2, width: '6em', height: '6em'}} alt={props.title} src={props.avatar}>
          {props.title.split(' ').map(w => w.charAt(0)).join('').toUpperCase()}
        </Avatar>
      </Box>

      <animated.div style={{
          transform: `translateY('${
            x.to({
              range: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1],
              output: [0, 0, -30, 0, -15, 0, 0]
            })}'`
        }}>
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: '4em' }} />
      </animated.div>

      <Box>
        {props.links.map(l => (
          <></>
        ))}
      </Box>

    </Jumbotron>
  );
}

