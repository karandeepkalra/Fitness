const addTutor=async(req,res)=>{
    try{
        const{name,speciality,fees}=req.body
        console.log({name,speciality,fees})
    }
    catch(error)
    {

    }
}
export {addTutor}