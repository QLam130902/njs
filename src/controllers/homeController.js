import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res)=> {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        })    
    } catch (e) {
        console.log(e);
    }
    
}

let getAboutMe=(req,res)=> {
    return res.render('test/about.ejs')
}
//object: {
//     key:value ,
// }

let getCRUD =(req,res)=> {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('--------------------');
    console.log(data);
    console.log('--------------------');

    return res.render('display-crud.ejs', {
        dataTable:data,
    })
}
module.exports={
    getHomePage:getHomePage,
    getAboutMe:getAboutMe,
    getCRUD:getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD:displayGetCRUD,
}