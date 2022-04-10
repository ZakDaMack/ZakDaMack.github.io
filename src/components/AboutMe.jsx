
import React from "react";
import axios from "axios";

import { styled } from "@mui/material/styles";
import { Box, Card, CardContent, Button, List, ListItem, Avatar } from "@mui/material";

const CenteredBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }));

  const FlexiContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    // justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
      },
  }));

export default function AboutMe(props) {
    const [about, setAbout] = React.useState([]);
    React.useEffect(() => {
        axios.get(props.url)
        .then(res => {
            // clean up the readme
            let data = res.data;

            // remove comments  <!-- -->
            data = data.replace(/(<!-)(-)+[\s\S]*?(-)+(->)/g,'');

            // split each line and remove beginning
            const dataarray = data.match(/(-).*/g).map(d => d.replace('- ', ''));
            setAbout(dataarray);
        })
        .catch(err => {
            console.log(err);
            setAbout(["There was an error retrieving the README from GitHub"])
        })
    }, []);

    return (
        <CenteredBox sx={{ minHeight: '50vh', bgcolor: 'success.main' }}>
            <Card sx={{ width: '80%', maxWidth: '60em', textAlign: 'center', m: 2 }}>
                <FlexiContent>
                    <List>
                    {about.map(x => (
                        <ListItem>{x}</ListItem>
                    ))}
                    </List>
                    <Avatar sx={{height: '8em', width: '8em'}} src={props.avatar} alt={props.name}>
                        {props.name.split(' ').map(x => x.charAt(0)).join('').toUpperCase()}
                    </Avatar>
                </FlexiContent>
                <Button sx={{m: 1}} variant="contained" color="primary">View My CV</Button>
            </Card>
        </CenteredBox>
    );
}