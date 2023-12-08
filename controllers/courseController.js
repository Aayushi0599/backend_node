// import course from "../model/courseModel.js";
// import courseCategory from "../model/categoryModel.js";



// const addCourse = async (req, res) => {
//   const { categoryId, courses } = req.body;

//   try {
//     const existingCategory = await courseCategory.findById(categoryId);

//     if (!existingCategory) {
//       return res.status(404).json({ error: 'Category not found' });
//     }

//     const createdCourses = await course.create(courses.map(courseData => ({
//       ...courseData,
//       categoryId: existingCategory._id, // Associate the course with the category
//     })));

//     res.send({ msg: "Successfully added courses to the category", status: "ok", data: createdCourses });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Error adding the course" });
//   }
// };


// const getCourse = async (req, res) => {
//   try {
//     const courses = await course.find();
//     res.json(courses);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching courses" });
//   }
// };
// export { addCourse, getCourse };
