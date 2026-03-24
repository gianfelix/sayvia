import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2D5016',
            light: '#4A7C2C',
            dark: '#1B3009',
        },
        secondary: {
            main: '#A8D5BA',
            light: '#C8E6D7',
            dark: '#7BC47F',
        },
        background: {
            default: '#F5F9F7',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#2D5016',
            secondary: '#6B8E65',
        },
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
        h1: {
            fontSize: '3rem',
            fontWeight: 700,
            color: '#2D5016',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            color: '#2D5016',
        },
        body1: {
            fontSize: '1rem',
            color: '#6B8E65',
        },
    },
});

const TemplateTeaGreenBlossom = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: '#F5F9F7', minHeight: '100vh' }}>
                {/* Hero Section */}
                <Box
                    sx={{
                        background: 'linear-gradient(135deg, #2D5016 0%, #4A7C2C 100%)',
                        color: 'white',
                        py: 8,
                        textAlign: 'center',
                    }}
                >
                    <Container>
                        <Typography variant="h1" sx={{ mb: 2 }}>
                            Tea Green Blossom
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            Discover the elegance of natural tea-inspired design
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#A8D5BA',
                                color: '#2D5016',
                                fontWeight: 600,
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    bgcolor: '#C8E6D7',
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    </Container>
                </Box>

                {/* Features Section */}
                <Container sx={{ py: 8 }}>
                    <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
                        Key Features
                    </Typography>
                    <Grid container spacing={3}>
                        {[1, 2, 3].map((item) => (
                            <Grid item xs={12} md={4} key={item}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        border: '2px solid #A8D5BA',
                                        '&:hover': {
                                            boxShadow: '0 8px 24px rgba(74, 124, 44, 0.15)',
                                            transform: 'translateY(-4px)',
                                            transition: 'all 0.3s ease',
                                        },
                                    }}
                                >
                                    <CardContent>
                                        <Box
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                bgcolor: '#A8D5BA',
                                                borderRadius: '12px',
                                                mb: 2,
                                            }}
                                        />
                                        <Typography variant="h6" sx={{ mb: 2 }}>
                                            Feature {item}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Elegant and beautiful design with tea green color palette that brings natural harmony.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* CTA Section */}
                <Box
                    sx={{
                        bgcolor: '#A8D5BA',
                        py: 8,
                        textAlign: 'center',
                        color: '#2D5016',
                    }}
                >
                    <Container>
                        <Typography variant="h2" sx={{ mb: 3 }}>
                            Ready to Experience?
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#2D5016',
                                color: 'white',
                                fontWeight: 600,
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    bgcolor: '#1B3009',
                                },
                            }}
                        >
                            Explore Now
                        </Button>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default TemplateTeaGreenBlossom;