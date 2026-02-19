import { Box, Container, Typography, Grid } from "@mui/material";
import RecipeReviewCard from "../components/ReviewCard";

const Projects = () => {
  const projectList = [
    {
      title: "IONIX AI",
      sub: "MERN Stack | OpenAI API",
      img: "https://th.bing.com/th/id/OIG1.ymALOz3iNN.8lj1iwQxY?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
      desc: "An AI-driven productivity suite designed to automate daily workflows.",
      long: "Built using the MERN stack and integrated with OpenAI's GPT models. It features a smart task manager that prioritizes work based on deadlines, voice command support, and automated daily summaries. The UI is built with Material UI for a seamless, professional experience."
    },
    {
      title: "E-Store PWA",
      sub: "React | Firebase | PWA",
      img: "https://th.bing.com/th/id/OIG1..gRk7YrtFatXoukvUnti?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
      desc: "A high-performance storefront with full offline capabilities.",
      long: "This Progressive Web App (PWA) ensures that users can browse products even without an active internet connection. It uses Service Workers for caching and Firebase for real-time database updates. Optimized for mobile-first users with push notifications and a lightning-fast checkout flow."
    },
    {
      title: "Azure Cloud Bot",
      sub: "Azure AI | Node.js",
      img: "https://th.bing.com/th/id/OIG1.2UDB7bm8HH2LR_bRLPO7?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
      desc: "Intelligent chatbot trained on cloud infrastructure and DevOps docs.",
      long: "Developed using Azure Cognitive Services and Bot Framework. It acts as a 24/7 support assistant for developers, helping them troubleshoot Azure deployment issues and providing instant documentation snippets. It uses NLP (Natural Language Processing) to understand complex technical queries."
    },
    {
      title: "AI Flashcards",
      sub: "Python | NLP | React",
      img: "https://th.bing.com/th/id/OIG2.gEFIuz23PGmOILVfzN_O?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
      desc: "Smart flashcard generator that converts long notes into study materials.",
      long: "Leveraging Natural Language Processing (NLP), this tool scans long PDF documents and automatically extracts key concepts to create interactive flashcards. It uses a spaced-repetition algorithm to help students memorize information faster, making it a perfect tool for exams."
    },
    {
      title: "Smart Attendance System",
      sub: "Python | OpenCV | Firebase",
      img: "https://th.bing.com/th/id/OIG1.vWJI.ohlRpYJmFGOBb8l?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
      desc: "Face recognition-based attendance tracker for modern classrooms.",
      long: "A robust security and tracking application that uses computer vision (OpenCV) to identify students in real-time. Once identified, it automatically logs their attendance into a Firebase database. It includes a dashboard for admins to view attendance trends and generate weekly reports."
    },
    {
      title: "Predictive Health Dash",
      sub: "React | ML Models | D3.js",
      img: "https://th.bing.com/th/id/OIG4.j6OZltq7gnevJQV2GfFJ?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn",
      desc: "Data visualization dashboard that predicts health trends using user data.",
      long: "This project integrates machine learning models to analyze user lifestyle data and predict potential health risks. Using D3.js, it provides beautiful, interactive charts that help users visualize their health journey. It focuses on preventative care and personalized wellness recommendations."
    }
  ];

  return (
    <Box sx={{ bgcolor: "#ffffff", py: 8, minHeight: "100vh" }}>
      <Container>
        {/* HEADER SECTION */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="800" gutterBottom color="primary">
            Innovating with Code
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
            A collection of my experiments in Full-Stack Development, Artificial Intelligence, and modern UI design.
          </Typography>
        </Box>

        {/* PROJECTS GRID */}
        <Grid container spacing={4} justifyContent="center">
          {projectList.map((p, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <RecipeReviewCard 
                title={p.title} 
                subheader={p.sub} 
                image={p.img} 
                description={p.desc} 
                longDesc={p.long}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;