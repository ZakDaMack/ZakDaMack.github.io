import { styled } from "@mui/material/styles";
import { Paper, Typography, Box, Link } from "@mui/material";

const FlexPaper = styled(Paper)(({}) => ({
    display: 'flex',
    justifyContent: 'display-between',
    alignItems: 'center'
}));

export default function Footer(props) {
    return (
        <FlexPaper elevation={0} square sx={{p: 1, px: 2}}>
            <Typography sx={{flexGrow: 1}}>© Some legal thing no-one understands, {new Date().getFullYear()}</Typography>
            {props.links.map(l => (
                <Box key={l.name} m={1} textAlign='center'>
                    <Link color="text.primary" href={l.link} underline="hover" target="_blank" rel="noopener">
                        <l.icon sx={{color: 'text.primary'}} />
                    </Link>
                </Box>
            ))}
        </FlexPaper>
    );
}