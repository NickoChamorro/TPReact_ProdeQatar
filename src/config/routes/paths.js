export const HOME = '/';
export const PUBLIC = '/public';
export const LOGIN = '/public/iniciosesion';
export const REGISTER = '/public/registro';
export const FIXTURE = '/partidos';
export const RANKING = '/ranking';
export const PRIVATE = '/private';
export const PREDICTIONS = '/private/predicciones';
export const PROFILE = '/private/perfil';
export const PROFILEUPD = '/private/perfil/:id';
export const LOGOUT = '/private/cerrarsesion';
export const URLBASEAPI = 'https://tpreactprodeqatarback-production.up.railway.app/';
export const URLPATHUSER = 'users/';
export const URLPATHGAME = 'games/';
export const URLPATHPREDICT = 'predictions/';

export const AUTH_APP = 'AUTH_APP'; // variable de sesion
export const AUTH_USER = 'AUTH_USER'; // variable de sesion

export const CONFIGHEADER = {
    headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
  };
