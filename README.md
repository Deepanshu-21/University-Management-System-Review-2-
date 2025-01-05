 University-Management-System

The project is a huge one and consists of a university management system, that handles everything from user-management (students/teachers/secretaries), to curriculum management (adding/editing/deleting subjects, teachers, teaching activities), schedule management, exam scheduling, grading system. 

The project consisted in 4 Milestones, each starting from the previous version and modifying it in a particular way. Here are the 4 main milestones:

	i) Swing Interface for the system, database creationg and all features available through the interface
 
	ii) Breaking the system into 3 components: client, archive server (for data that should be stored long term: grades, students, curriculum) and register (for data that should be available for the current year: schedules, exams, teaching activity, locations). The system uses RMI for communication.
 
	iii) Adding 1 more component compared to previous milestone: Journal, which add the possibility of sending messages between teachers/secretaries/students and logs different types of request. The system now uses Java Sockets for communication.
 
	iv) Conversion of the whole system to a web system, all the features (plus some additional ones) being available through a web interface, developed using JSP and servlets on a Tomcat Server.
