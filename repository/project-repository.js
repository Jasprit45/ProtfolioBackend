const Project = require('../models/project');

class ProjectRepository {

    async createProject(data) {
        try {
            return await Project.create(data);
        } catch (error) {
            console.log(error);
        }
    }

    async getOneProject(id) {
        try {
            return await Project.findById(id);
        } catch (error) {
            console.log(error);
        }
    }

    async getAllProjects() {
        try {
            return await Project.find();
        } catch (error) {
            console.log(error);
        }
    }
    
    async deleteProject(id) {
        try {
            return await Project.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ProjectRepository;


