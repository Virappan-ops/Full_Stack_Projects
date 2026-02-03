import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', mt: 5, boxShadow: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            V
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Virappan"
        subheader="UID: 23BAI70674"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" // Tech background
        alt="Developer Profile"
      />
      <CardContent>
        <Typography variant="body1" fontWeight="bold" color="text.primary">
          Section: 23AML-7B
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Full-stack developer and AI enthusiast exploring modern UI/UX with Material UI.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6">About Me:</Typography>
          <Typography paragraph>
            Student at <strong>Chandigarh University</strong>. Currently working on React projects, 
            exploring MERN stack, and preparing for future tech challenges.
          </Typography>
          <Typography paragraph>
            Specializing in Artificial Intelligence and Machine Learning (AML) through hands-on 
            experiments like this UI design.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}