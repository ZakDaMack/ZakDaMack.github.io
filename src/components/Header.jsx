import React from "react";

import { styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Typography, Tabs, Tab, Hidden } from '@mui/material';

const TallTabs = styled(Tabs)(({ theme }) => ({
    ...theme.mixins.toolbar,
    margin: 0,
    flexGrow: 1,
    '& .MuiTabs-flexContainer': {
        height: '100%'
    }
}));

function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
}

const Header =  React.forwardRef((props, ref) => (
    <AppBar ref={ref} position="sticky" sx={{top: 0}}>
        <Toolbar>
            <Hidden smDown>
                <Typography sx={{position: 'absolute'}} variant="h6" component="div">
                    {props.name}
                </Typography>
            </Hidden>
            <TallTabs centered selectionFollowsFocus>
                <LinkTab label="Page One" href="/drafts" />
                <LinkTab label="Page Two" href="/trash" />
                <LinkTab label="Page Three" href="/spam" />
            </TallTabs>
        </Toolbar>
    </AppBar>
));

    export default Header;