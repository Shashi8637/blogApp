import { User } from "../model/postSchema.js";


//CREATE USER
export const createUser = async(req,res)=>{
    const {name,title,description} = req.body;
    try {
        const addUser = await User.create(
            {
                name:name,
                title:title,
                description:description,
            }
            
        );
        res.status(201).json({
            messtitle:"Succesfully create Blog",
            user:addUser,
        }); 
    } catch (error) {
        console.log(`error in creating Blog: ${error}`);
        res.status(500).json({
            message:"Error in creating Blog",
            error:error.message,
        });
    }
};

//GET USER
export const getAllUser = async(req,res)=>{
    try {
        const getAlluser = await User.find();
        res.status(200).json({
            message:"Blog Get Succesfully",
            user:getAlluser,
        });
    } catch (error) {
        res.status(500).json({
            message:"getting Error in GetAllBlog",
            error:error.message,
        });
    }
};

//GET SINGLE USER

export const getUser = async(req,res)=>{
    const {id} = req.params;
    try {
        const singleUser = await User.findById(id);
        res.status(200).json({
            message:"User Get Succesfully",
            user:singleUser,
        })
    } catch (error) {
        res.status(500).json({
            message:"getting Error in get SingleUser",
            error:error.message
        });
    }
};

//DELETE ALL USER

export const deleteAllUser = async(req,res)=>{
    try {
        const deletealluser = await User.deleteMany();
        res.status(201).json({
            message:"All User Delete Succesfully",
            user:deletealluser,
        });
    } catch (error) {
        res.status(400).json({
            message:"Error while deleting All user",
            error:error.message,
        });
    }
};







//DELETE SINGLE USER

export const deleteUser = async(req,res)=>{
    const {id} = req.params;
    try {
        const deleteuser = await User.findByIdAndDelete(id);
        res.status(201).json({
            message:"delete User Succesfully",
            user:deleteuser,
        });
    } catch (error) {
        res.status(400).json({
            message:"error while deleting oneuser",
            error:error.message,
        });
    }
};


//UPDATE USER

export const updateUser = async(req,res)=>{
    const {id} = req.params;
  try {
    const updateuser = await User.findByIdAndUpdate(id,req.body,{new:true,});
    res.status(200).json({
        message:"Update user Successfully",
        user:updateuser,
    });
  } catch (error) {
     res.status(400).json({
        message:"Error while updating user",
        error:error.message,
     });
  }
};


