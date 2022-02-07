exports.CREATE_FACULTY_TABLE = `CREATE TABLE IF NOT EXISTS faculty(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), password varchar(255), name varchar(255), department varchar(255), mailId varchar(255), phoneNumber varchar(255), joiningDate Date, role varchar(255))`;

exports.CREATE_AWARDS_TABLE = `CREATE TABLE IF NOT EXISTS awards(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), category varchar(255),department varchar(255), filterDate Date, level varchar(255), eventName varchar(255), awardedBy varchar(255),sem varchar(255), result varchar(255), status varchar(255), date Date, description text, coe varchar(255))`;

exports.CREATE_EVENTS_ATTENDED_TABLE = `CREATE TABLE IF NOT EXISTS events_attended(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), activityType varchar(255),department varchar(255), filterDate Date, topic varchar(255), attendedAt varchar(255), activityName varchar(255), objective text, benefits text, startDate Date, endDate Date, level varchar(255), description text, coe varchar(255))`;

exports.CREATE_CLUB_ACTIVITIES_TABLE = `CREATE TABLE IF NOT EXISTS club_activities(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), clubName varchar(255), topic varchar(255), department varchar(255), filterDate Date, resourcePerson varchar(255), designation varchar(255), company varchar(255), objective text, benefits text, participantNo varchar(255), website varchar(255), startDate Date, endDate Date, sem varchar(255), coe varchar(255), description text)`;

exports.CREATE_BOOK_PUBLICATIONS_TABLE = `CREATE TABLE IF NOT EXISTS book_publications(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), rcId varchar(255), PublisherName varchar(255), BookName varchar(255), isbn varchar(255), volumeNumber varchar(255), doi varchar(255),Date Date, coe varchar(255), description text, filterDate Date)`;

exports.CREATE_INDUSTRY_CONNECT_DATABASE_TABLE = `CREATE TABLE IF NOT EXISTS industry_connect_database(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), Name varchar(255), CompanyName varchar(255), Address text, MobileNumber varchar(255), email varchar(255),OrganizedBy varchar(255), description text, filterDate Date, coe varchar(255))`;

exports.CREATE_ACADEMIA_INDUSTRY_CONNECT_TABLE = `CREATE TABLE IF NOT EXISTS academia_industry_connect_activity_attended(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255),attendedAt varchar(255), activityName varchar(255), startDate Date, awardedDate Date, objectives text, benefit text, activityType varchar(255), level varchar(255), coe varchar(255), description text, filterDate Date)`;

exports.CREATE_ACADEMIA_INDUSTRY_CONNECT_ACTIVITY_ORGANISED_TABLE = `CREATE TABLE IF NOT EXISTS academia_industry_connect_activity_organised(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), objectives varchar(255),Association varchar(255), benefit varchar(255), semester varchar(255), activityType varchar(255), level varchar(255), coe varchar(255), description text, filterDate Date)`;

exports.CREATE_AWARDS_NSS_AND_NCC_TABLE = `CREATE TABLE IF NOT EXISTS awards_nss_and_ncc(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), date Date, category varchar(255), level varchar(255),result varchar(255), coe varchar(255), description text, filterDate Date)`;

exports.CREATE_CONSULTANCY_TABLE = `CREATE TABLE IF NOT EXISTS consultancy(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), NameofPI varchar(255), COtoPI varchar(255), sanctionedDate Date,grantDate Date, duration varchar(255), topic varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), level varchar(255), coe varchar(255), description text, filterDate Date)`;

exports.CREATE_ENTREPRENEURSHIP_DETAILS_TABLE = `CREATE TABLE IF NOT EXISTS entrepreneurship_details(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), CompanyName varchar(255), CompanyAddress varchar(255), establishmentDate Date, revenue varchar(255),Association varchar(255), objectives text, benefit text, Companytype varchar(255), coe varchar(255), description text, filterDate Date)`;

exports.CREATE_FOSS_CELL_TABLE = `CREATE TABLE IF NOT EXISTS foss_cell(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), eventName varchar(255), duration varchar(255), topic varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), activityType varchar(255), level varchar(255),coe varchar(255), description text, filterDate Date, department varchar(255))`;

exports.CREATE_EE_AND_C_TABLE = `CREATE TABLE IF NOT EXISTS ee_and_c(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBY varchar(255), participantsNum varchar(255), objectives text, benefit text, semester varchar(255),Association varchar(255), activityType varchar(255), coe varchar(255), level varchar(255), description text, filterDate Date, type varchar(255))`;

exports.CREATE_FACULTY_SERVED_AS_TABLE = `CREATE TABLE IF NOT EXISTS faculty_served_as(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), college_university_name varchar(255), Eventname varchar(255), startDate Date, endDate Date, servedAs varchar(255), activityType varchar(255), coe varchar(255), description text, filterDate Date)`;

exports.CREATE_IDEA_REPOSITORY_TABLE = `CREATE TABLE IF NOT EXISTS idea_repository(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), ideadate Date, coe varchar(255), description text, filterDate Date)`;

exports.CREATE_IQAC_DATA_TABLE = `CREATE TABLE IF NOT EXISTS iqac_data(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), objectives text, benefit text, semester varchar(255),Association varchar(255), activityType varchar(255),coe varchar(255), level varchar(255), description text, filterDate Date)`;

exports.CREATE_JOURNAL_PAPER_PUBLICATION_TABLE = `CREATE TABLE IF NOT EXISTS journal_paper_publication(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), rcId varchar(255),type varchar(255), PublisherName varchar(255), title varchar(255), isbn varchar(255), issn varchar(255), volumeNumber varchar(255), Indexid varchar(255), nameOfJournal varchar(255), coe varchar(255), description text, filterDate Date)`;

exports.CREATE_MOOC_COURSE_TABLE = `CREATE TABLE IF NOT EXISTS mooc_course(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), department varchar(255), Nameofdepartment varchar(255), duration varchar(255), status varchar(255), startdate Date, enddate Date, topic varchar(255), level varchar(255), description text, filterDate Date, coe varchar(255))`;

exports.CREATE_MOUS_TABLE = `CREATE TABLE IF NOT EXISTS mous(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, collaborationTitle varchar(255),SignedBy varchar(255), objectives text, benefit text, level varchar(255), coe varchar(255), description text, filterDate Date)`;

exports.CREATE_PATENT_TABLE = `CREATE TABLE IF NOT EXISTS patent(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), NameofPI varchar(255), COtoPI varchar(255), grantDate Date, submissionDate Date, duration varchar(255), topic varchar(255), submissionName varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), earning varchar(255), level varchar(255),specification varchar(255),status varchar(255),commercialised varchar(255),  coe varchar(255), description text, filterDate Date, rcid varchar(255))`;

exports.CREATE_PHD_DETAILS_TABLE = `CREATE TABLE IF NOT EXISTS phd_details(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), sanctionedDate Date, university varchar(255), centre varchar(255), guide varchar(255), coguide varchar(255), status varchar(255), coe varchar(255), description text, filterDate Date, validDate date, area varchar(255))`;

exports.CREATE_PROFESSIONAL_BODIES_TABLE = `CREATE TABLE IF NOT EXISTS professional_bodies(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255), duration varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), objectives text, benefit text, semester varchar(255),Association varchar(255), activityType varchar(255),coe varchar(255), level varchar(255), description text, filterDate Date)`;

exports.CREATE_RESULTS_TABLE = `CREATE TABLE IF NOT EXISTS results(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), academicYear varchar(255), passPercentage varchar(255), fcd varchar(255), firstClass varchar(255), secondClass varchar(255), failures varchar(255), appeared varchar(255), passed varchar(255), resultDate Date, department varchar(255), sem varchar(255), description text, filterDate Date)`;

exports.CREATE_SLOW_LEARNER_INITIATIVE_TABLE = `CREATE TABLE IF NOT EXISTS slow_learner_initiative(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), subjectName varchar(255), topic varchar(255), subjectCode varchar(255), startDate Date, endDate Date, count varchar(255),department varchar(255), activityType varchar(255), level varchar(255), description text, filterDate Date)`;

exports.CREATE_SPONSORED_RESEARCH_PROJECTS_TABLE = `CREATE TABLE IF NOT EXISTS sponsored_research_projects(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), NameofPI varchar(255), COtoPI varchar(255), sanctionDate Date, grantDate Date,rcid varchar(255),status varchar(255), title varchar(255), proposedAmount varchar(255), durationYear varchar(255), amount varchar(255), objectives text, benefit text, AgencyName varchar(255), received varchar(255), level varchar(255), coe varchar(255), description text, filterDate Date)`;

exports.CREATE_TECH_TALK_TABLE = `CREATE TABLE IF NOT EXISTS tech_talk(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), topic varchar(255), date Date, description text, filterDate Date)`;

exports.CREATE_VISITORS_DATABASE_TABLE = `CREATE TABLE IF NOT EXISTS visitors_database(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), visitorName varchar(255), number varchar(255), companyName varchar(255), address text, visitDate Date, description text, filterDate Date, department varchar(255))`;

exports.CREATE_VVIP_TABLE = `CREATE TABLE IF NOT EXISTS vvip(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), visitorName varchar(255), number varchar(255), companyName varchar(255), address text, visitDate Date, purpose varchar(255), description text, filterDate Date, department varchar(255))`;

exports.CREATE_WELL_BEING_CLUB_TABLE = `CREATE TABLE IF NOT EXISTS well_being_club(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, facultyId varchar(255), eventName varchar(255), duration varchar(255), topic varchar(255), companyName varchar(255), address text, startDate Date, endDate Date, resourcePerson varchar(255), designation varchar(255), expenditure varchar(255), fundedBy varchar(255), participantsNum varchar(255), eventLevel varchar(255), activityType varchar(255), level varchar(255), description text, filterDate Date)`;

exports.CREATE_COE_TABLE = `CREATE TABLE IF NOT EXISTS coe(id int Auto_increment, name varchar(255), PRIMARY KEY(id))`;

exports.CREATE_CLUB_NAME_TABLE = `CREATE TABLE IF NOT EXISTS club_name(id int Auto_increment, name varchar(255), PRIMARY KEY(id))`;

exports.CREATE_DEPARTMENT_LIST_TABLE = `CREATE TABLE IF NOT EXISTS department(id int AUTO_INCREMENT , name varchar(255), PRIMARY KEY(id))`;
