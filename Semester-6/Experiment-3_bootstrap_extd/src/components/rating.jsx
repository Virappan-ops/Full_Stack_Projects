import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', // Center alignment for better layout
        color: 'black' 
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          mr: 2, 
          color: 'black', 
          fontWeight: '600' // Text ko bold kiya taaki highlight ho
        }}
      >
        How was my Experiment, Sir :
      </Typography>

      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        // Empty stars thode dark dikhen light background pe
        emptyIcon={<StarIcon style={{ opacity: 0.3, color: '#000' }} fontSize="inherit" />}
      />

      {value !== null && (
        <Box 
          sx={{ 
            ml: 2, 
            color: 'black', 
            fontWeight: 'bold',
            minWidth: '80px', // Label jump na kare isliye width di
            textAlign: 'left'
          }}
        >
          {labels[hover !== -1 ? hover : value]}
        </Box>
      )}
    </Box>
  );
}