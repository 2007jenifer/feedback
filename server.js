import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

let feedbacks = [];


app.get("/", (req, res) => {
  res.send("Feedback Server Running");
});


app.get("/api/feedback", (req, res) => {
  res.json(feedbacks);
});


app.post("/api/feedback", (req, res) => {
  const feedbackData = req.body;

  feedbacks.push(feedbackData);

  res.status(200).json({
    message: "Feedback submitted successfully!",
    feedback: feedbackData
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
