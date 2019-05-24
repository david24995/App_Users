const { app } = require('./app.js');

const { connect } = require('./database.js')

app.set('port', process.env.PORT || 4000);

async function main() {
    //Database connect
    await connect();
    // Server COnnect
    await app.listen(app.get('port'))
    console.log(`server on port ${app.get('port')} Connected`);
}

main();