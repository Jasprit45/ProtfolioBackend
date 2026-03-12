const {ProjectRepository} = require('../repository/index');

class ProjectService {
    constructor () {
        this.projectRepository = new ProjectRepository();
    }

    async addProject(data) {
        try {
            return await this.projectRepository.createProject(data);
        } catch (error) {
            console.log(error);
        }
    }
    // async getProject(id) {

    // }
    // async getAllProjects() {

    // }
    // async deleteProject(id) {

    // }

}

module.exports = ProjectService;