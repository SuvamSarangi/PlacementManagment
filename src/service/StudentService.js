import axios from "axios";



const API_URL="http://localhost:35729";

class StudentService{

// save method
saveStudent(students){
    return axios.post(API_URL+"/save",students);
}




}
export default new StudentService;