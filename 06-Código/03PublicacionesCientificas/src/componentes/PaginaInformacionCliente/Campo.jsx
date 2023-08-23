import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Campo({titulo, imagen, dato}) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, margin: 3, }}>
      <CardMedia
        component="img"
        alt="imagen"
        height="280"
        image={imagen}

        sx={{
            objectFit: "contain"
        }}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {dato}
        </Typography>
      </CardContent>
    </Card>
  );
}