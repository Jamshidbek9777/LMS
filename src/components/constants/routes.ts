export const ROUTES = {
    home: "/",
    //admin
    adminDashboard: "/admin/",
    adminApplications: "/admin/applications",
    adminGroups: "/admin/groups",
    adminCourses: "/admin/courses",
    adminNews: "/admin/news",
    adminSettings: "/admin/adminSettings",
    teacherSettings: "/admin/teacherSettings",
    studentSettings: "/admin/studentSettings",

    //teacher
    teacherDashboard: "/teacher/",
    teacherAssigments: "/teacher/assigments",
    teacherTable: "/teacher/table",
    teacherExam: "/teacher/exam",
    teacherGroup: "/teacher/group",
    teacherAbsence: "/teacher/absences",
    getTeacherNews: "/teacher/news",


    //student
    studentDashboard: "/student/",
    studentAssigments: '/student/assigments',
    studentTable: "/student/table",
    studentExams: '/student/exams',
    studentAbsences: '/student/absences',
    studentPayment: "/student/payment",
    getStudentNews: "/student/news",


    //common
    aboutMe: "/about-me",
    subjects: "/subjects",
    finals: "/finals",
    login: "/login",
    retake: "/retake",
    table: "/table",
    plan: "/plan",
} as const;
