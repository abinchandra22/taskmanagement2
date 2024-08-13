const projects = require('../Model/projectModel')

// add project

exports.addProject = async (req, res) => {
    console.log("Inside add project api");
    const userId = req.payload
    const { title, subject, date, statues } = req.body
    // const projectImage = req.file.filename
    console.log(title, subject, date, statues, userId);
    try {
        const exisitingProject = await projects.findOne({ title })
        if (exisitingProject) {
            res.status(406).json("project is allready exist uplode another..")
        }
        else {
            // add project
            const newProject = new projects({
                title, subject, date, statues, userId
            })
            await newProject.save()
            res.status(200).json(newProject)

        }
    } catch (err) {
        res.status(401).json(err)
    }
}


exports.getAllProject = async (req, res) => {
    try {
        const allProject = await projects.find()
        res.status(200).json(allProject)
    } catch (err) {
        res.status(401).json(err)
    }
}
// get user project

exports.getUserProject = async (req, res) => {
    const userId = req.payload
    try {
        const userProject = await projects.find({ userId })
        res.status(200).json(userProject)
    } catch (err) {
        res.status(401).json(err)
    }
}

// edit project
exports.editProject = async (req, res) => {
    console.log("inside edit project");
    // para,s is predefined
    const { pid } = req.params
    const userId = req.payload
    const { title, subject, date, statues } = req.body
    // const uploadImage = req.file?req.file.filename:projectImage

    try {
        const updateProject = await projects.findByIdAndUpdate({ _id: pid }, { title, subject, date, statues, userId },
            { new: true })
        await updateProject.save()
        res.status(200).json(updateProject)
    } catch (err) {
        res.status(401).json(err)
    }
}
// delete project
exports.removeProject = async (req, res) => {
    console.log("inside remove project");
    const { pid } = req.params
    try {
        const projectDetails = await projects.findByIdAndDelete({ _id: pid })
        res.status(200).json(projectDetails)

    } catch (err) {
        res.status(401).json(err)
    }
}
