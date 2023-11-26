import mongoose from "mongoose";

const genresSchema = new mongoose.Schema({
  genre: {
    type: String,
    required: true
  }
});

export default mongoose.model('Genres', genresSchema);
