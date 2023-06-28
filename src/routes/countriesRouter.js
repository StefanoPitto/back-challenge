import { Router } from "express";
import { countryManager } from "../manager/countryManager.js";


export const countriesRouter = Router();



countriesRouter.get('/',async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  try{
      const response = await countryManager.getCountries(page,pageSize);
        res.status(200).json({ok:true,countries:response});
    }  catch(error){
        res.status(400).json({ok:false,error})
    }
})



