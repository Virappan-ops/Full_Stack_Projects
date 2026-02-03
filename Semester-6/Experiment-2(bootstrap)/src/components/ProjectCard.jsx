import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProjectCard = ({ title, desc }) => {
  return (
    <Card sx={{ bgcolor: '#112240', color: 'white', height: '100%', borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'grey.400' }}>
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: '#00d2ff' }}>View Code</Button>
        <Button size="small" sx={{ color: '#00d2ff' }}>Live Demo</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;