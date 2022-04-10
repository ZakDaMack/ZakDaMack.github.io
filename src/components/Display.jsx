import { Box, Stack, Typography, Card, CardHeader, Avatar, CardMedia, CardContent } from "@mui/material";

export default function Display(props) {
    return (
        <Box sx={{minHeight: '100vh'}}>
            <Typography>{props.title}</Typography>
            <Stack>
            {props.items.map(x => (
                <Card sx={{maxWidth: 400}}>
                {props.type && props.type === 'article' && (
                    <CardHeader
                        title={x.title}
                        subheader={x.date}
                        avatar={
                            <Avatar sx={{ bgcolor: 'error.main', color: 'text.secondary' }} >
                                {x.name.split(' ').map(x => x.charAt(0)).join('').toUpperCase()}
                            </Avatar>
                        }
                    />
                )}
                <CardMedia
                    component="img"
                    height="180"
                    image={x.img}
                    alt={x.name}
                />
                <CardContent>
                    {(!props.type || props.type !== 'article') && (
                        <Typography gutterBottom variant="h5" component="div">
                        {x.title}
                        </Typography>
                    )}
                    <Typography variant="body2" color="text.secondary">
                    {x.text}
                    </Typography>
                </CardContent>
                </Card>
            ))}
            </Stack>
        </Box>
    );
}