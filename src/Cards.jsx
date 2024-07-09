


import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const cardData = [
  {
    id: 1,
    title: "Complete Site Photoshoot",
    image: "https://i.postimg.cc/SRr8SgMm/interrior1.jpg",
    description:
      "We provide a comprehensive site photoshoot after the project is completed, serving as a gesture of appreciation to our clients",
  },
  {
    id: 2,
    title: "Exclusive Colour Experience",
    image: "https://i.postimg.cc/BvpGCDHX/interrior2.jpg",
    description:
      " Visit our in-house store named ColorIdea in collaboration with Asian Paints to explore an exclusive color experience for your space.",
  },
  {
    id: 3,
    title: "Service Warranty",
    image: "https://i.postimg.cc/7hY12vD5/interrior3.jpg",
    description:
      "Enjoy peace of mind with a 3-year service warranty that ensures the quality and longevity of our painting services.",
  },
  {
    id: 4,
    title: "Pest Control Inclusion",
    image: "https://i.postimg.cc/C5B1tJsv/interrior4.jpg",
    description:
      "Our packages include pest control services as we understand the crucial role it plays in maintaining residential properties",
  },
  {
    id: 5,
    title: "Exceptional Architects and Interior Designers",
    image: "https://i.postimg.cc/MTYNw8dH/interrior5.jpg",
    description:
      "Benefit from the expertise of our in-house architects and interior designers who bring exceptional creativity and vision to every project.",
  },
  {
    id: 6,
    title: "Social Media Showcase",
    image: "https://i.postimg.cc/rmzxV194/interrior6.jpg",
    description:
      " We publish our work on various social platforms, providing designers with an opportunity to showcase their creativity and connect with a wider audience.",
  },
];

export default function Cards() {
  return (
    <Grid container spacing={3}>
      {cardData.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
              image={card.image}
              alt={card.title}
              sx={{ height: 200, objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}







