import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  cast: {
    type: [String],
    required: true
  },
  genres: {
    type: [String],
    required: true
  },
  href: String,
  extract: {
    type: String,
    required: true
  },
  thumbnail: {
      type: String,
      default: "https://placehold.co/273x365"
    },
  thumbnail_width: {
    type: Number,
  default: 255
},
  thumbnail_height: {
    type: Number,
    default: 388
  }
});

export default mongoose.model('Movies', moviesSchema);
