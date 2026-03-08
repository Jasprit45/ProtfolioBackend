const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type:String
    },
    description: {
        type:String
    },
    githubLink: {
        type:String
    },
    liveLink:  {
        type:String
    },
    image: {
        type:String
    },
    techStack: [String],
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;

