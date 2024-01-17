const MemberAttendance = require('../models/memberAttendanceDetails');
const Member = require('../models/memberDetails');
exports.createMember = async (req, response) => {
    const {  mobileno} = req.body;
    const mobile = await MemberAttendance.findOne({ mobileno });
    if (!mobile) {
        createMember(req.body, response, memberID,count);
    }
    else {
        let errorMessage = {
            message: 'Member Attendance Already Registered',
            statusCode: 400
        }
        response.status(400).json(errorMessage);
    }
};


createMember = async (json, response, memberID,count) => {
    const member = new MemberAttendance({
        MemberID: `${memberID.prefix}${count}`,
        username: json.mobileno,
        mobileno: json.age,
        emailId: json.emailId,
        gender: json.address,
        gender: json.gender,
        createdDate: new Date(),
        createdBy: null,
        modifiedBy: null,
        modifiedDate: null,
        isDelete: 0,
        isActive: 1
    });
    await member.save();
    let SuccessMessage = {
        message: 'MemberAttendance Created Successfully...',
        statusCode: 200
    }
    return response.status(201).json(SuccessMessage);
}

exports.searchMemberList = async (req, res) => {
    try {
        console.log('sss')
        await Member.find(req.query).then((response) => {
            res.status(200).json({ message: response });
        })

    } catch (err) {
        console.log('ss')

        res.status(401).json({ error: err.message });
    }
};


// exports.searchMemberList = async (req, res) => {
//     try {
//         console.log("eee",req.query)
//         let data={memberId:req.query}
//         console.log("ddd",data)
//         await Member.find(data).then(x => {
//             console.log('sss',x)
//             res.status(200).json({ message: 'ok' });
//         })

//     } catch (err) {
//         res.status(401).json({ error: err.message });
//     }
// };

