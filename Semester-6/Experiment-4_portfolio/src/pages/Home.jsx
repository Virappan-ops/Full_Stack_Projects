import { useRef } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import RecipeReviewCard from "../components/ReviewCard";

const Home = () => {
  const contentRef = useRef(null);
  const scrollDown = () => contentRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <Box>
      <Hero scrollDown={scrollDown} />

      {/* ABOUT SECTION - CENTERED CARD */}
      <Box ref={contentRef} sx={{ bgcolor: "#2c3e50", py: 10, color: "white" }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" textAlign="center" sx={{ mb: 6 }}>
            About Me
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <RecipeReviewCard /> {/* Yeh ab bich mein aayega */}
          </Box>

          <Typography variant="body1" textAlign="center" sx={{ fontSize: "1.2rem", lineHeight: 1.8, opacity: 0.9, maxWidth: "800px", mx: "auto" }}>
            
          </Typography>
        </Container>
      </Box>

      {/* FEATURED PROJECTS */}
      <Box sx={{ bgcolor: "#f8f9fa", py: 10 }}>
        <Container>
          <Typography variant="h3" fontWeight="bold" textAlign="center" color="#333" sx={{ mb: 8 }}>
            Featured Work
          </Typography>
          <Grid container spacing={4}>
            {[
              { title: "IONIX AI", desc: "Advanced AI productivity assistant.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995" },
              { title: "E-Store PWA", desc: "Offline-first modern storefront.", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc" },
              { title: "Azure Bot", desc: "Cloud-trained intelligent chatbot.", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a" }
            ].map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <ProjectCard title={p.title} desc={p.desc} image={p.img} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;