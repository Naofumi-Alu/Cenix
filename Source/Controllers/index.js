


//Contiene la logica o proceso para cada ruta


//Data Base



// ========= Main Routes ======= //
//Get
const index = (req,res)=> {
    res.render('index.ejs',{title:'Cenix'})
};

//get Page not found

const pageNotFound_404 =(req,res)=>{
    res.render('404.ejs')
};

//Get about

const about = (req,res) =>{
    res.render('Other_Pages/about.html');
}

//Get -Modificar despues
const contact =(req,res)=>{
    res.render('Other_Pages/contact.html');
};

//Get mantenimiento.html
const mantenimiento =(req,res)=>{
    res.render('Other_Pages/mantenimiento.html');
}

//Get proyectos.html
const proyectos =(req,res)=>{
    res.render('Other_Pages/proyectos.html');
}

//Get servicios.html
const servicios =(req,res)=>{
    res.render('Other_Pages/servicios.html');
}

//Get software.html
const software =(req,res)=>{
    res.render('Other_Pages/software.html');
}


 //Get soluciones.html
 const soluciones =(req,res)=>{
    res.render('Other_Pages/soluciones.html');
}

//POST Form for Contact

const formContact =(req,res)=>{
    console.log('Request POST RECIVED');
    console.log(req.body);
    res.render('Other_Pages/contact.php');
}

module.exports={
    index,
    pageNotFound_404,
    about,
    contact,
    mantenimiento,
    proyectos,
    servicios,
    software,
    soluciones,
    formContact
}



/* //  ============Routes of Development for Templates =============//

     // get blog-single
    const blog_sinlge = (req,res) => {
        res.render('Other_Pages/blog-single.html');
    }

    //Get blog

    const blog = (req,res) =>{
        res.render('Other_Pages/blog.html');
    }


    //Get ContactForm.html
    const ContactForm =(req,res)=>{
        res.render('Other_Pages/ContactForm.html');
    }
    //Get home-agency1.html
    const home_agency1 =(req,res)=>{
        res.render('Other_Pages/home-agency1.html');
    }
    //Get home-agency2.html
    const home_agency2 =(req,res)=>{
        res.render('Other_Pages/home-agency2.html');
    }
    //Get home-creative.html
    const home_creative =(req,res)=>{
        res.render('Other_Pages/home-creative.html');
    }
    //Get home-creative2.html
    const home_creative2 =(req,res)=>{
        res.render('Other_Pages/home-creative2.html');
    }
    //Get home-Landing.html
    const home_Landing =(req,res)=>{
        res.render('Other_Pages/home-Landing.html');
    }

    //Get portfolio-single.html
    const portfolio_single =(req,res)=>{
        res.render('Other_Pages/portfolio-single.html');
    }
    //Get portfolio2column.html
    const portfolio2column =(req,res)=>{
        res.render('Other_Pages/portfolio2column.html');
    }
    //Get portfolio3column.html
    const portfolio3column =(req,res)=>{
        res.render('Other_Pages/portfolio3column.html');
    }
    //Get portfolio4column.html
    const portfolio4column =(req,res)=>{
        res.render('Other_Pages/portfolio4column.html');
    }
    //Get pricing.html
    const pricing =(req,res)=>{
        res.render('Other_Pages/pricing.html');
    }

    //Get services.html
    const services =(req,res)=>{
        res.render('Other_Pages/services.html');
    }

    //Get shortcodes.html
    const shortcodes =(req,res)=>{
        res.render('Other_Pages/shortcodes.html');
    }

    //Get typography.html
    const typography =(req,res)=>{
    res.render('Other_Pages/typography.html');
}
    */

/* //=================ROUTES USED AJAX ========
    //Get
    const UserInfget = (req,res)=>{
        res.json(items);
    };

    //POST
    const UserInfPost =(req,res) =>{
        //ver lo que el navegador me envia por POST
        const {name} = req.body;
        const {email}=req.body;
        const {message}= req.body;
        items.push({
            id:items.length + 1,
            name,
            email,
            message
        })
    res.json('Data agregado ');
    
    };

    //PUT
    const UserUpdateInf = (req,res)  =>{
        console.log(req.params,req.body);
        const {id}=req.params;
        const {name} = req.body;
        const {email} = req.body;
        const {message} = req.body;

        items.forEach(item => {
            if (item.id==id) {
                item.name=name;
                item.email=email;
                item.message=message;
            }
        });

    res.json('Update Succesfully');
    };

    //DELETE
    const UserDeleteInf= (req,res)=>{
    
        const {id} = req.params;
    

        items.forEach((item,i) =>{
            if(item.id==id){
                //se coloca el nombre de el arreglo no de la variable del for each
                items.splice(i,1);
            };
        });
        res.json('Succesfully Delete');
    }
 */


 /* // ======Moudulos exportados ====== //  
 
module.exports={
    index,
    UserInfget,
    UserInfPost,
    UserUpdateInf,
    UserDeleteInf,
    
    pageNotFound_404,
    about,
    blog_sinlge,
    blog,
    contact,
    ContactForm,
    home_agency1,
    home_agency2,
    home_creative,
    home_creative2,
    home_Landing,
    mantenimiento,
    portfolio_single,
    portfolio2column,
    portfolio3column,
    portfolio4column,
    pricing,
    proyectos,
    services,
    servicios,
    shortcodes,
    software,
    soluciones,
    typography
}

 */