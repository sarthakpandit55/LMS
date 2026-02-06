import express from "express"
import { createCourse, createLecture, editCourse, editLecture, getCourseById, getCourseLecture, getCreatorCourses, getPublishedCourse, removeCourse, removeLecture } from "../controller/courseController.js"
import isAuth from "../middleware/isAuth.js"
import upload from "../middleware/multer.js"

const courseRouter = express.Router()

// for courses
courseRouter.post("/create", isAuth,createCourse)
courseRouter.get("/getpublished", getPublishedCourse)
courseRouter.get("/getCreator", isAuth, getCreatorCourses)
courseRouter.post("/editCourse/:courseId", isAuth, upload.single("thumbnail"), editCourse)
courseRouter.get("/getcourse/:courseId", isAuth, getCourseById)
courseRouter.delete("/remove/:courseId", isAuth, removeCourse)

// for Lectures

courseRouter.post("/createlecture/:courseId", isAuth, createLecture)
courseRouter.get("/courselecture/:courseId", isAuth, getCourseLecture)
courseRouter.post("/editlecture/:lectureId", isAuth, upload.single("videoUrl"), editLecture)
courseRouter.delete("/removelecture/:lectureId", isAuth, removeLecture)



export default courseRouter