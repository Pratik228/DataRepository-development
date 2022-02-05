const mysql = require("mysql2");
const util = require("util");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "root",
  password: "",
};

const CREATE_DATABASE = `Create Database data_repository_test`;

const createDBConnection = async () => {
  try {
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    if (!connection) {
      throw new Error("Could not create connection");
    }
    const execQuery = util.promisify(connection.query.bind(connection));
    await execQuery(CREATE_DATABASE);
  } catch (error) {
    console.log(error);
  }
};

createDBConnection();

// let seeddb = async () => {
//   let db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//   });

//   let promise = new Promise((resolve, reject) => {
//     let sql = "Create Database data_repository";
//     db.query(sql, (err, result) => {
//       if (err) throw err;
//       console.log("DataBase Created Successfully");
//       resolve("done");
//     });
//   });
//   let res = await promise;

//   const createDBConnection = async () => {
//     try {
//       const db = await mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "data_repository",
//       });
//       console.log("Connection Created Successfully", db);
//     } catch (error) {
//       throw error;
//       console.log(error);
//     }
//   };

//   sql =
//     "Create Table faculty(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), password varchar(255), name varchar(255), department varchar(255), mailId varchar(255), phoneNumber varchar(255), joiningDate Date, role varchar(255))";

//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Faculty Table created successfully");
//   });

//   sql =
//     "Create Table awards(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), category varchar(255),department varchar(255), filterDate Date, level varchar(255), eventName varchar(255), awardedBy varchar(255),sem varchar(255), result varchar(255), status varchar(255), date Date, description text, coe varchar(255))";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Awards Table created successfully");
//   });

//   sql =
//     "Create Table events_attended(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), activityType varchar(255),department varchar(255), filterDate Date, topic varchar(255), attendedAt varchar(255), activityName varchar(255), objective text, benefits text, startDate Date, endDate Date, level varchar(255), description text, coe varchar(255))";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Events Attended Table created successfully");
//   });

//   sql =
//     "Create Table club_activities(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), clubName varchar(255), topic varchar(255), department varchar(255), filterDate Date, resourcePerson varchar(255), designation varchar(255), company varchar(255), objective text, benefits text, participantNo varchar(255), website varchar(255), startDate Date, endDate Date, sem varchar(255), coe varchar(255), description text)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Club Activities Table created successfully");
//   });

//   sql =
//     "Create Table book_publications(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), rcId varchar(255), PublisherName varchar(255), BookName varchar(255), isbn varchar(255), volumeNumber varchar(255), doi varchar(255),Date Date, coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Book Publications Table created successfully");
//   });

//   sql =
//     "Create Table industry_connect_database(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), Name varchar(255), CompanyName varchar(255), Address text, MobileNumber varchar(255), email varchar(255),OrganizedBy varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Industry Connect Database Table created successfully");
//   });

//   sql =
//     "Create Table academia_industry_connect_activity_attended(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255),attendedAt varchar(255), activityName varchar(255), startDate Date, awardedDate Date, objectives text, benefit text, activityType varchar(255), level varchar(255), coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(
//       "Academia Industry Connect Activity Attended Table created successfully"
//     );
//   });

//   sql =
//     "Create Table academia_industry_connect_activity_organised(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), objectives varchar(255),Association varchar(255), benefit varchar(255), semester varchar(255), activityType varchar(255), level varchar(255), coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(
//       "Academia Industry Connect Activity Organised Table created successfully"
//     );
//   });

//   sql =
//     "Create Table awards_nss_and_ncc(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), date Date, category varchar(255), level varchar(255),result varchar(255), coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Academia Awards NSS And NCC Table created successfully");
//   });

//   sql =
//     "Create Table consultancy(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), NameofPI varchar(255), COtoPI varchar(255), sanctionedDate Date,grantDate Date, duration varchar(255), topic varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), level varchar(255), coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Consultancy Table created successfully");
//   });

//   sql =
//     "Create Table entrepreneurship_details(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), CompanyName varchar(255), CompanyAddress varchar(255), establishmentDate Date, revenue varchar(255),Association varchar(255), objectives text, benefit text, Companytype varchar(255), coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Entrepreneurship Details Table created successfully");
//   });

//   sql =
//     "Create Table foss_cell(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), eventName varchar(255), duration varchar(255), topic varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), activityType varchar(255), level varchar(255),coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("FOSS Cell Table created successfully");
//   });

//   sql =
//     "Create Table ee_and_c(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBY varchar(255), participantsNum varchar(255), objectives text, benefit text, semester varchar(255),Association varchar(255), activityType varchar(255), coe varchar(255), level varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("EE&C Table created successfully");
//   });

//   sql =
//     "Create Table faculty_served_as(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), college_university_name varchar(255), Eventname varchar(255), startDate Date, endDate Date, servedAs varchar(255), activityType varchar(255), coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Faculty Served As Table created successfully");
//   });

//   sql =
//     "Create Table idea_repository(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), ideadate Date, coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Idea Repository Table created successfully");
//   });

//   sql =
//     "Create Table iqac_data(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), objectives text, benefit text, semester varchar(255),Association varchar(255), activityType varchar(255),coe varchar(255), level varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("IQAC Data Table created successfully");
//   });

//   sql =
//     "Create Table journal_paper_publication(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), rcId varchar(255),type varchar(255), PublisherName varchar(255), title varchar(255), isbn varchar(255), issn varchar(255), volumeNumber varchar(255), Indexid varchar(255), nameOfJournal varchar(255), coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Journal Paper Publication Table created successfully");
//   });

//   sql =
//     "Create Table mooc_course(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), department varchar(255), Nameofdepartment varchar(255), duration varchar(255), status varchar(255), startdate Date, enddate Date, topic varchar(255), level varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("MOOC Course Table created successfully");
//   });

//   sql =
//     "Create Table mous(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, collaborationTitle varchar(255),SignedBy varchar(255), objectives text, benefit text, level varchar(255), coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("MOUs Table created successfully");
//   });

//   sql =
//     "Create Table patent(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), NameofPI varchar(255), COtoPI varchar(255), grantDate Date, submissionDate Date, duration varchar(255), topic varchar(255), submissionName varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), earning varchar(255), level varchar(255),specification varchar(255),status varchar(255),commercialised varchar(255),  coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Patent Table created successfully");
//   });

//   sql =
//     "Create Table phd_details(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), NameofPI varchar(255), COtoPI varchar(255), sanctionedDate Date, duration varchar(255), topic varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), level varchar(255), coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("PHD Details Table created successfully");
//   });

//   sql =
//     "Create Table professional_bodies(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), objectives text, benefit text, semester varchar(255),Association varchar(255), activityType varchar(255),coe varchar(255), level varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Professional Bodies Table created successfully");
//   });

//   sql =
//     "Create Table results(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), academicYear varchar(255), passPercentage varchar(255), fcd varchar(255), firstClass varchar(255), secondClass varchar(255), failures varchar(255), appeared varchar(255), passed varchar(255), resultDate Date, department varchar(255), sem varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Results Table created successfully");
//   });

//   sql =
//     "Create Table slow_learner_initiative(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), subjectName varchar(255), topic varchar(255), subjectCode varchar(255), startDate Date, endDate Date, count varchar(255),department varchar(255), activityType varchar(255), level varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Slow Learner Initiative Table created successfully");
//   });

//   sql =
//     "Create Table sponsored_research_projects(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), NameofPI varchar(255), COtoPI varchar(255), sanctionDate Date, submissionDate Date,rcid varchar(255),status varchar(255), title varchar(255), proposedAmount varchar(255), durationYear varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), received varchar(255), level varchar(255), coe varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Sponsored Research Projects Table created successfully");
//   });

//   sql =
//     "Create Table tech_talk(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255), date Date, description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tech Talk Table created successfully");
//   });

//   sql =
//     "Create Table visitors_database(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), visitorName varchar(255), number varchar(255), companyName varchar(255), address text, visitDate Date, description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Visitors Database Table created successfully");
//   });

//   sql =
//     "Create Table vvip(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), visitorName varchar(255), number varchar(255), companyName varchar(255), address text, visitDate Date, purpose varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("VVIP Table created successfully");
//   });

//   sql =
//     "Create Table well_being_club(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), eventName varchar(255), duration varchar(255), topic varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), eventLevel varchar(255), activityType varchar(255), level varchar(255), description text, filterDate Date)";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Well Being Club Table created successfully");
//   });

//   sql =
//     "Create Table coe(id int Auto_increment, name varchar(255), PRIMARY KEY(id));";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("COE table has been created sucessfully");
//   });
//   sql =
//     "Create Table club_name(id int Auto_increment, name varchar(255), PRIMARY KEY(id));";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Club name table has been created sucessfully");
//   });
// };

// seeddb();
