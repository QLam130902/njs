import express from "express";
import homeController from "../controllers/homeController";

let router=express.Router();

let initWebRoutes=(app)=> {
    router.get('/', homeController.getHomePage);
    
    router.get('/about',homeController.getAboutMe);

    router.get('/love',(req, res)=>{
        return res.send('Quang Lâm yêu Tường Vie quãiiii')
    });
    return app.use("/", router);
    
}

//rest API


module.exports=initWebRoutes;