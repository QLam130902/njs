import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";


let router=express.Router();

let initWebRoutes=(app)=> {
    router.get('/', homeController.getHomePage);
    
    router.get('/about',homeController.getAboutMe);
    
    router.get('/crud',homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);

    router.get('/get-crud', homeController.displayGetCRUD);

    router.get('/edit-crud', homeController.getEditCRUD);

    router.post('/put-crud', homeController.putCRUD);
    
    router.get('/delete-crud', homeController.deleteCRUD);

    router.post('/api/login',userController.handleLogin)

    router.get('/love',(req, res)=>{
        return res.send('Quang Lâm yêu Tường Vie quãiiii');
    });
    return app.use("/", router);
    
}

//rest API


module.exports=initWebRoutes;