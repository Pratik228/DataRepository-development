const mysql = require("mysql2");
const util = require("util");

const {
  CREATE_FACULTY_TABLE,
  CREATE_AWARDS_TABLE,
  CREATE_ACADEMIA_INDUSTRY_CONNECT_TABLE,
  CREATE_BOOK_PUBLICATIONS_TABLE,
  CREATE_CLUB_ACTIVITIES_TABLE,
  CREATE_EVENTS_ATTENDED_TABLE,
  CREATE_INDUSTRY_CONNECT_DATABASE_TABLE,
  CREATE_ACADEMIA_INDUSTRY_CONNECT_ACTIVITY_ORGANISED_TABLE,
  CREATE_AWARDS_NSS_AND_NCC_TABLE,
  CREATE_CLUB_NAME_TABLE,
  CREATE_COE_TABLE,
  CREATE_CONSULTANCY_TABLE,
  CREATE_EE_AND_C_TABLE,
  CREATE_ENTREPRENEURSHIP_DETAILS_TABLE,
  CREATE_FACULTY_SERVED_AS_TABLE,
  CREATE_FOSS_CELL_TABLE,
  CREATE_IDEA_REPOSITORY_TABLE,
  CREATE_IQAC_DATA_TABLE,
  CREATE_JOURNAL_PAPER_PUBLICATION_TABLE,
  CREATE_MOOC_COURSE_TABLE,
  CREATE_MOUS_TABLE,
  CREATE_PATENT_TABLE,
  CREATE_PHD_DETAILS_TABLE,
  CREATE_PROFESSIONAL_BODIES_TABLE,
  CREATE_RESULTS_TABLE,
  CREATE_SLOW_LEARNER_INITIATIVE_TABLE,
  CREATE_SPONSORED_RESEARCH_PROJECTS_TABLE,
  CREATE_TECH_TALK_TABLE,
  CREATE_VISITORS_DATABASE_TABLE,
  CREATE_VVIP_TABLE,
  CREATE_WELL_BEING_CLUB_TABLE,
  CREATE_DEPARTMENT_LIST_TABLE,
} = require("./dbTable");

const CONNECTION_CONFIG = {
  host: "localhost",
  user: "root",
  password: "pratik79",
  database: "data_repository_faculty",
};

const seedDatabase = async function () {
  try {
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    if (!connection) {
      throw new Error("Could not create connection");
    }
    const execQuery = util.promisify(connection.query.bind(connection));
    await createTable(execQuery);

    console.log("Created Tables  Successfully!");
  } catch (err) {
    console.error(err);
  }
};

const createTable = async function (execQuery) {
  try {
    await execQuery(CREATE_FACULTY_TABLE);
    await execQuery(CREATE_AWARDS_TABLE);
    await execQuery(CREATE_ACADEMIA_INDUSTRY_CONNECT_TABLE);
    await execQuery(CREATE_BOOK_PUBLICATIONS_TABLE);
    await execQuery(CREATE_CLUB_ACTIVITIES_TABLE);
    await execQuery(CREATE_EVENTS_ATTENDED_TABLE);
    await execQuery(CREATE_INDUSTRY_CONNECT_DATABASE_TABLE);
    await execQuery(CREATE_ACADEMIA_INDUSTRY_CONNECT_ACTIVITY_ORGANISED_TABLE);
    await execQuery(CREATE_AWARDS_NSS_AND_NCC_TABLE);
    await execQuery(CREATE_CLUB_NAME_TABLE);
    await execQuery(CREATE_COE_TABLE);
    await execQuery(CREATE_CONSULTANCY_TABLE);
    await execQuery(CREATE_EE_AND_C_TABLE);
    await execQuery(CREATE_ENTREPRENEURSHIP_DETAILS_TABLE);
    await execQuery(CREATE_FACULTY_SERVED_AS_TABLE);
    await execQuery(CREATE_FOSS_CELL_TABLE);
    await execQuery(CREATE_IDEA_REPOSITORY_TABLE);
    await execQuery(CREATE_IQAC_DATA_TABLE);
    await execQuery(CREATE_JOURNAL_PAPER_PUBLICATION_TABLE);
    await execQuery(CREATE_MOOC_COURSE_TABLE);
    await execQuery(CREATE_MOUS_TABLE);
    await execQuery(CREATE_PATENT_TABLE);
    await execQuery(CREATE_PHD_DETAILS_TABLE);
    await execQuery(CREATE_PROFESSIONAL_BODIES_TABLE);
    await execQuery(CREATE_RESULTS_TABLE);
    await execQuery(CREATE_SLOW_LEARNER_INITIATIVE_TABLE);
    await execQuery(CREATE_SPONSORED_RESEARCH_PROJECTS_TABLE);
    await execQuery(CREATE_TECH_TALK_TABLE);
    await execQuery(CREATE_VISITORS_DATABASE_TABLE);
    await execQuery(CREATE_VVIP_TABLE);
    await execQuery(CREATE_WELL_BEING_CLUB_TABLE);
    await execQuery(CREATE_DEPARTMENT_LIST_TABLE);
  } catch (err) {
    throw err;
  }
};

seedDatabase();
