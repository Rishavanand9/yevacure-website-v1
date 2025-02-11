const express = require("express")
const User = require("./user.model")
const generateToken = require("../middleware/generateToken")
const verifyToken = require("../middleware/verifyToken")
const router = express.Router()

router.get("/", async (req, res) => {
    res.send("Registration Routes ")
})

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ email, username, password });
        await user.save();
        res.status(201).send({ message: "User Registered Successfully" })
    } catch (err) {
        console.error("Error Registering User", err)
        res.status(500).send({ message: "Error registering user" })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).send({ message: 'User not found' })
        }
        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            return res.status(401).send({ message: "Unauthorized Access" })
        }

        const token = await generateToken(user._id)

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        })

        res.status(200).send({ message: "Logged in successfully", user: { ...user, token } })
    } catch (err) {
        console.log("Error logged in User", err);
        res.status(500).send({ message: "Error logged in user" })
    }
})

router.get('/users', verifyToken, async (req, res) => {
    res.send({ message: "Protected Users" })
    try{
        const users = await User.find({}, 'id, email, role').sort({createdAt: -1});
        res.status(200).send(users)
    }catch(err){
        console.error("Error in fetching all user", err)
        res.status(500).send({ message: "Error fetching all users" })
    }
})

router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).send({ message: "Logged out successfuly" })
})

//delete a user
router.delete('/user/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).send({message: "User not found"})
        }
        res.status(200).send({message: "User deleted successfully"})
    } catch (err) {
        console.error("Error in deleting user", err)
        res.status(500).send({ message: "Error deleting user" })
    }
})

//update user role
router.put('/user/:id', async(req, res) => {
    try {
        const { id } = req.params
        const role = req.body;
        const user = await User.findByIdAndUpdate(id, {role}, {new: true});
        if(!user){
            return res.status(404).send({message: "User not found"})
        }
        res.status(200).send({message: "User Role Updated successfully"})
    } catch (err) {
        console.error("Error in updating user", err)
        res.status(500).send({ message: "Error updating user" })
    }
})

//edit or update profile
router.put('/edit-profile', async(req, res) => {
    try {
        const { userId, username, profileImage, bio, profession } = req.params
        if(!userId){
            return res.status(400).send({message: "UserId required"})
        }
        const user = await User.findById(userId);
        if(!userId){
            return res.status(400).send({message: "User Not Found"})
        }

        //Update profile
        if(username !== undefined) user.username = username;
        if(profileImage !== undefined) user.profileImage = profileImage;
        if(bio !== undefined) user.bio = bio;
        if(profession !== undefined) user.profession = profession;

        user.save();
        res.status(200).send({message: "User Profile Updated successfully", user });

    } catch (err) {
        console.error("Error updating user profile", err)
        res.status(500).send({ message: "Error updating user profile" })
    }
})


module.exports = router
