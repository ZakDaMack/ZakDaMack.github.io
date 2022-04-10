import React from 'react';
import { keyframes } from '@emotion/react'

import { Typography } from '@mui/material';

export default function CursorText(props) {
    const [text, setText] = React.useState('');
    const [complete, setComplete] = React.useState(false);

    React.useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            const currentLength = text.length;
            setComplete(currentLength === props.children.length);

            if (currentLength < props.children.length) {
                setText(props.children.substring(0, currentLength + 1));
            }

        }, 200);
        return () => clearInterval(interval);
      }, [text]);

      const blink = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
      `;

    return (
        <Typography color="text.primary" variant="h4">
            {text}
            <Typography 
                color="text.primary"
                variant="h4"
                component="span" 
                ml={0.5}
                sx={complete ? { animation: `${blink} 1.5s steps(2) infinite` } : undefined }
                id="cursor">_</Typography>
        </Typography>
    );
}