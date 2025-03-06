"use client";
import { Box, Card, CardContent, Typography, TextField, Button, Grid, Paper } from "@mui/material";

export default function AssignmentDetails({ assignment }) {
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, p: 2 }}>
      {/* Assignment Details Card */}
      <Card sx={{ p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom color="primary">
            {assignment.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {assignment.description}
          </Typography>
          <Typography variant="subtitle1" color="error" sx={{ mb: 2 }}>
            Due Date: {assignment.dueDate}
          </Typography>
        </CardContent>
      </Card>

      {/* Submission Form */}
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Submit Your Assignment
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Your Answer" multiline rows={4} variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Submit Assignment
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );  
}
