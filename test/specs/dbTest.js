import dbConnectivity from "../utilities/dbConnectivity.js";

describe('Database Test', () => {
before(async () =>{
    await dbConnectivity.connectToDatabase();
});

it("fetch the data from database", async() =>{
    const query =  'Select * from accounts limit 1';
    await dbConnectivity.performDatabaseOperation(query);
});

after(async() =>{

});

});
