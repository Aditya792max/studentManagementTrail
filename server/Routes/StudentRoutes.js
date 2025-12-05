const express = require("express");
const StudentDetails = require("../Models/StudentDetails.js"); // adjust path if needed

const router = express.Router();

// GET API – Fetch all students
router.get("/getStudent", async (req, res) => {
     try {
          const students = await StudentDetails.find(); // returns array of student objects
          res.json(students);
     } catch (err) {
          console.error("Error fetching students:", err);
          res.status(500).json({
               error: err,
               message: "Server Error while fetching students"
          });
     }
});

// POST API – Add a new student
router.post("/addStudent", async (req, res) => {
     try {
          const { Name, Age, City } = req.body;

          if (!Name || !Age || !City) {
               return res.status(400).json({ message: "Name, Age, and City are required" });
          }

          const newStudent = new StudentDetails({
               Name,
               Age,
               City,
          });

          const savedStudent = await newStudent.save();
          res.status(201).json(savedStudent);
     } catch (err) {
          console.error("Error creating student:", err);
          res.status(500).json({
               error: err,
               message: "Server Error while creating student"

          });
     }
});

router.post("/searchByAge", async (req, res) => {
     console.log("BODY RECEIVED:", req.body);

     try {
          const { Age } = req.body;

          if (Age === undefined || Age === "") {
               return res.status(400).json({ message: "Age is required in the request body" });
          }

          const ageNumber = Number(Age);

          if (isNaN(ageNumber)) {
               return res.status(400).json({ message: "Age must be a valid number" });
          }

          const students = await StudentDetails.find({ Age: ageNumber });

          if (students.length === 0) {
               return res.status(404).json({ message: "No students found with that age" });
          }

          res.json(students);

     } catch (err) {
          console.error("Error searching students by age:", err);
          res.status(500).json({ message: "Server Error while searching students" });
     }
});

module.exports = router;
