const {ProjectService}  =require('../services/index');

const projectService = new ProjectService();

class ProjectController {
    constructor() {
        // this.projectService = new ProjectService();
    }

    async addProject(req,res) {
        try {
            const data = {
                title : req.body.title,
                description :req.body.description,
                githubLink : req.body.githubLink,
                liveLink : req.body.liveLink,
                image : req.body.image,
                techStack : req.body.techStack,
            }
            const response = await projectService.addProject(data);
            console.log(response);
            return res.status(201).json({
                message:"Project is Successfully Added",
                success:true,
                error:{},
                data:response
            });
        } catch (error) {
            return res.status(500).json({
                message:"Something went wrong in project-controller",
                success:false,
                error:error,
                data:{}
            });
        }
    }

}

module.exports = ProjectController;