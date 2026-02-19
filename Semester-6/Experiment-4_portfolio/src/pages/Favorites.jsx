import { useContext, useMemo } from "react";
import { Box, Container, Typography, Grid, Button, Paper } from "@mui/material";
import { AppContext } from "../context/AppContext";
import RecipeReviewCard from "../components/ReviewCard";

const Favorites = () => {
  const { state, dispatch } = useContext(AppContext);

  const analytics = useMemo(() => {
    const total = state.favorites.length;
    const aiRelated = state.favorites.filter(
      (item) =>
        (item.title && item.title.includes("AI")) ||
        (item.subheader && item.subheader.includes("AI")) ||
        (item.description && item.description.includes("AI")) ||
        (item.longDesc && item.longDesc.includes("AI"))
    ).length;
    
    return { total, aiRelated };
  }, [state.favorites]);

  return (
    <Box sx={{ bgcolor: "#f8f9fa", py: 8, minHeight: "100vh" }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom color="#333">
            My Bookmarked Projects
          </Typography>
          
          <Paper elevation={2} sx={{ display: "inline-block", p: 3, borderRadius: 3, mb: 4, bgcolor: "#ffffff" }}>
            <Typography variant="h6" color="text.secondary">
              Total Saved: <strong style={{ color: "#007bff" }}>{analytics.total}</strong>
            </Typography>
            <Typography variant="h6" color="text.secondary">
              AI Integrations: <strong style={{ color: "#007bff" }}>{analytics.aiRelated}</strong>
            </Typography>
          </Paper>
          
          <Box>
            <Button 
              variant="outlined" 
              color="error" 
              onClick={() => dispatch({ type: "CLEAR_FAVORITES" })}
              disabled={state.favorites.length === 0}
              sx={{ borderRadius: "20px", px: 4, fontWeight: "bold" }}
            >
              Clear All Favorites
            </Button>
          </Box>
        </Box>

        {state.favorites.length === 0 ? (
          <Typography variant="h5" textAlign="center" color="text.secondary" sx={{ mt: 10 }}>
            ⚠️ No favorites added yet 🫩. Browse the Projects page to add some! Click on ❤️ to add your favorite Projects. 
          </Typography>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {state.favorites.map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <RecipeReviewCard
                  title={p.title}
                  subheader={p.subheader}
                  image={p.image}
                  description={p.description}
                  longDesc={p.longDesc}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Favorites;