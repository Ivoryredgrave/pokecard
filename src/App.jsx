import React from 'react';
import ProductCard from './components/productCard';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Footer from './components/footer';
import Typewriter from "typewriter-effect";

import pokeBackground from './assets/images/poke-background.webp';
import product1 from './assets/images/product1.webp'
import product2 from './assets/images/product2.webp'
import product3 from './assets/images/product3.webp'
import product4 from './assets/images/product4.webp'
import product5 from './assets/images/product5.webp'
import product6 from './assets/images/product6.webp'
import product7 from './assets/images/product7.webp'
import product8 from './assets/images/product8.webp'

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const products = [
  {
    id: '1',
    name: 'Product 1',
    description: 'Description of Product 1.',
    price: 19.99,
    condition: 'With club card. Limit 2 offer',
    image: product1,
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Description of Product 2.',
    price: 29.99,
    condition: 'With club card. Limit 2 offer',
    image: product2,
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'Description of Product 3.',
    price: 39.99,
    condition: 'With club card. Limit 2 offer',
    image: product3,
  },
  {
    id: '4',
    name: 'Product 4',
    description: 'Description of Product 4.',
    price: 49.99,
    condition: 'With club card. Limit 2 offer',
    image: product4,
  },
  {
    id: '5',
    name: 'Product 5',
    description: 'Description of Product 5.',
    price: 59.99,
    condition: 'With club card. Limit 2 offer',
    image: product5,
  },
  {
    id: '6',
    name: 'Product 6',
    description: 'Description of Product 6.',
    price: 69.99,
    condition: 'With club card. Limit 2 offer',
    image: product6,
  },
  {
    id: '7',
    name: 'Product 7',
    description: 'Description of Product 7.',
    price: 79.99,
    condition: 'With club card. Limit 2 offer',
    image: product7,
  },
  {
    id: '8',
    name: 'Product 8',
    description: 'Description of Product 8.',
    price: 89.99,
    condition: 'With club card. Limit 2 offer',
    image: product8,
  },
];

const App = () => {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        
        <Box
          sx={{
            backgroundImage: `url(${pokeBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px'
          }} />

        <AppBar position="static">
          <Toolbar>
            <Typography align="center" variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(80)
                    .typeString("Welcome to your anime shop!")
                    .deleteAll()
                    .typeString("Productcard")
                    .start();
                }}
              />
            </Typography>

          </Toolbar>
        </AppBar>

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {products.map((product) => (
            <Grid key={product.id} >
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>

        <Footer text="Developed by Ivory 💕" />

      </ThemeProvider>
    </>
  );
};

export default App;
