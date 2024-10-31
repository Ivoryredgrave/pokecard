import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const ProductCard = React.memo(({ id, name, description, price, condition, image }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }} key={id}>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${price.toFixed(2)}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" color="text.secondary">
            {condition}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
});

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  condition: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default ProductCard;