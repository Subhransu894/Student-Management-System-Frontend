# Student Management Portal System

A full-stack student management system app where you can browse , add , edit , update , delete and view details of students.
Built with React frontend with Redux Toolkit for state management , Express/Node backend, MongoDB database and JWT-based authenticatio. 

---

## Demo Link

[Live Demo](https://student-management-system-frontend-seven.vercel.app/login)

---

## Quick Start

```
git clone https://github.com/Subhransu894/Student-Management-System-Frontend.git
cd <your-repo>
npm install
npm run dev or # or `npm start` / `npm yarn`
```

---

## Technologies
- React JS
- Redux Toolkit
- Node Js
- Express
- MongoDB
- JWT

---

## Demo Video
Watch a walkthrough (5-7 minutes) of all the major features of this app: 
[Loom Video](https://drive.google.com/file/d/1_TqgoRrEgOD8yn_vH3I_TCEy89y0lIBf/view?usp=drive_link)

---

## Features
**Home**
- Display all the registered student list.
- For adding a new student Add Student button is there.

**Student Details**
- Click on any student will render ti details page .
- Edit and Delete button is there for edit and delete functionality.

**Student Edit**
- Edit button will render you on edit student page.
- After edit the student inforamtion clicking on update button will successfully land you on home page.

**School View**
- Display total student, top student , average mark and average attendance.

**Class View**
- Display all the student with provided information.
- Filter field and sort by options are available for easy searching.

**Authentication**
- User Signup and login with JWT.
- Protected Routes for adding/update/edit/delete student.

---

## API Reference

### **GET /api/students**<br>
Lists all students<br>
Sample Respone:<br>
```
[{_id,name,age,marks,attendance,gender,grade},...]
```

### **POST /api/students**<br>
Create or add a student<br>
Sample Response:<br>
```
{_id,name,age,marks,attendance,gender,grade}
```

### **POST /api/students/:id**<br>
Update existing student<br>
Sample Response:<br>
```
{_id,name,age,marks,attendance,gender,grade}
```

### **DELETE /api/students/:id**<br>
Delete existing student<br>
Sample Response:<br>
```
{_id,name,age,marks,attendance,gender,grade}
```

### **POST /api/auth/register**<br>
Register a new user<br>
Sample Response:<br>
```
{userId,token}
```

---

## Contact
For bugs or feature request, please reach out to subhransusekhar790@gmail.com
