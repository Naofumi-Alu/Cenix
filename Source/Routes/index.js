
const express = require('express');
const router = express.Router();
const controller = require('../Controllers/index');
router.use(express.json());

 


//Routes
 router.get('/',controller.index);

 router.get('/about',controller.about);
 
 router.get('/contact',controller.contact);
 
 router.get('/mantenimiento',controller.mantenimiento);
 
 router.get('/proyectos',controller.proyectos);
 
 router.get('/servicios',controller.servicios);
 
 router.get('/software',controller.software);
 
 router.get('/soluciones',controller.soluciones);

 router.post('/formContact',controller.formContact);
 
 // Page Not Found 404

 router.get('*',controller.pageNotFound_404);
 
 module.exports=router;


// ======= ajax ======= //
 /*
 router.get('/UserInf',controller.UserInfget);

 router.post('/UserInf',controller.UserInfPost);

 router.put('/UserInf/:id',controller.UserUpdateInf);

 router.delete('/UserInf/:id',controller.UserDeleteInf);

 router.get('*',controller.pageNotFound_404);
*/

// ===== Routes of Development for Templates =====//

/*  
 router.get('/blog_single',controller.blog_sinlge);
 
 router.get('/blog',controller.blog);


 router.get('/ContactForm',controller.ContactForm);
 
 router.get('/home_agency1',controller.home_agency1);
 
 router.get('/home_agency2',controller.home_agency2);
 
 router.get('/home_creative',controller.home_creative);
 
 router.get('/home_creative2',controller.home_creative2);

 
 router.get('/home_Landing',controller.home_Landing);
 
 
 router.get('/portfolio_single',controller.portfolio_single);
 
 router.get('/portfolio2column',controller.portfolio2column);
 
 router.get('/aboportfolio3column',controller.portfolio3column);
 
 router.get('/portfolio4column',controller.portfolio4column);
 
 router.get('/pricing',controller.pricing);
 

 router.get('/services',controller.services);
 

 router.get('/shortcodes',controller.shortcodes);
 

 
 router.get('/typography',controller.typography);
 
 */

