import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

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

export default function RecipeReviewCard({ title, subheader, image, description, longDesc }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 380, width: '100%', borderRadius: 4, boxShadow: 6 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "#007bff" }}>{title ? title[0] : "V"}</Avatar>}
        title={title || "Virappan"}
        subheader={subheader || "UID: 23BAI70674"}
      />
      <CardMedia
        component="img"
        height="200"
        image={image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description || "Full-stack developer and AI enthusiast exploring modern UI/UX."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton><FavoriteIcon /></IconButton>
        <IconButton><ShareIcon /></IconButton>
        <ExpandMore expand={expanded} onClick={() => setExpanded(!expanded)}>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ bgcolor: "#f1f4f8" }}>
          <Typography variant="subtitle2" fontWeight="bold">Details:</Typography>
          <Typography variant="body2">
            {longDesc ||( "I am a passionate full-stack developer at Chandigarh University. I specialize in building AI-powered web applications using the MERN stack. I have a strong foundation in JavaScript, React, Node.js, and MongoDB, and I enjoy creating intuitive user interfaces and efficient backend systems. In my free time, I explore new technologies and contribute to open-source projects.")}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}