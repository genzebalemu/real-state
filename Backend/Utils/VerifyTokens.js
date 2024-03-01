import Jwt  from "jsonwebtoken";

const VErifyToken=()=>{
    const Token = req.headers.[""].split(" ")[1]
    jwt.verify(Token,process.env.TOKEN_KEY,(err,decoded)=>{
        if(err){

        }
        req.user = {}
        req.user.email=decoded.email
        req.user.password=decoded.password
    })
}

export default VErifyToken;