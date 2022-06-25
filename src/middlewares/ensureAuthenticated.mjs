import jwtService from "jsonwebtoken";

import AppError from '../error/AppError.mjs'

export default function ensureAuthenticated(request) {
    
    const authHeader = request.headers["authorization"];

    const [, token] = authHeader.split(' ');
    const chavePrivada = "chave-secreta";
    
    jwtService.verify(token, chavePrivada, (err, userInfo) => {
        if (err) {
            throw new AppError('Invalid JWT token', 401);;
        }
        
        return ;
    });
}
