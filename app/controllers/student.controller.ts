import { Student } from "../models";

async function getStudents(): Promise<any[]> {
    return await Student.findAll({
        order: [['id', 'ASC']],
        attributes: ['id', 'first']
    })
}

export default {
    getStudents
}