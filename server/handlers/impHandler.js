const ImportantEventsModel = require("../Model/ImpeventModel")

const ImportantEvents = () => {
    return new Promise((resolve, reject) => {
        ImportantEventsModel.find({}, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        })
    })
}

const SaveImportantEvent=(data)=> {
    return new Promise((resolve, reject) => {
        const importantEventsModel = new ImportantEventsModel(data);
        importantEventsModel.save((error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
}

module.exports = {
    ImportantEvents,
    SaveImportantEvent
}