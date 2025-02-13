import express, { Request, Response } from "express";

const router = express.Router();

// Como o path "Produtos" ja esta espicificado no servidor, entao nao precisa colocar novamente

router.get("/", (req: Request, res: Response) =>{
    res.json({produtos: [] })
})

router.get("/:id", (req: Request, res: Response) =>{
    const { id } = req.params;

    res.json({ id, name: "Teclado XYZ", price: 90});
})

router.post("/", (req: Request, res: Response) =>{
    console.log(req.body); // Mostrando no console como pegar os dados pelo body da requisiçao
    
    res.json({ produtos: [] })
});

export default router;