import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var category = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
});

//Export the model
const courseCategory=mongoose.model("courseCategory",category);
export default courseCategory