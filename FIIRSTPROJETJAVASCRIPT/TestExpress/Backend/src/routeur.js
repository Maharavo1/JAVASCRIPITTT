import { Router } from "express";
import { pool } from "./Connecton"; 
import AllBasic from "./Queries/Allbasic";

export const router = new Router();
router.post("/index" , (req ,  res) =>{
    const [Username , Email , Password , CPassword]= req.body;
    const [Emp_Email , Emp_Password] = req.body;

    if (Emp_Email && Emp_Password) {
        pool.query(AllBasic.getAllSignupStaff , [Emp_Email , Emp_Password] , (err , result) =>{
            if (err) {
                console.error(err.message);
                return res.status(400).send("error")
            }
            if (result.rows.length ===0) {
                return res.status(401).json({succes : false , message : "Identifiant invalides"})
            }
            res.json({succes : true , message : "Connection resussie"})
        })
    }
    else if (Username && Email && Password  ) {
        if (Username==='' ||  Email==='' || Password ==='') {
            return res.status(401).json({succes : false ,message : "Remplir le champs" })
        }
        pool.query(AllBasic.getCheckEmail , [Email] , (err , result) =>{
            if (err) {
              console.error(err.message);
              return res.status(400).send("Erreur de serveur");  
            }
            if (result.rows.length>0) {
                return res.status(500).json({succes : false , message : "Email deja utilise"})
            }
            else{
                const insertQuery = `
                INSERT INTO signup (Username, Email, Password)
                VALUES ($1, $2, $3)
              `;
              pool.query(insertQuery , [Username , Email , Password] , (err,result)=>{
                if (err) {
                    console.error(err.message);
                    return res.status(500).send("Erreur de serveur")
                }
                res.json({succes : true , message : "Inscription Reusssie"})
              })
            }
        })
    }
    else{
        const {Email , Password} = req.body;
        pool.query(AllBasic.getAllSignupUser , [Email ,  Password] ,(err , result) =>{
            if (err) {
                console.error(err.message);
                return res.status(400).send("Erreur  serveur")
            }
            if(result.rows.length===0){
              return res.status(500).json({succes : false , message : "Invalid credentials"})
            }
            res.json({succes : true , message : "Sign-in successful"})
        })
    }
})
