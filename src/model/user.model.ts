export interface User{
    id:number,
    name:string,
    username:string,
    email:string,
    address:Address,
    phone:string,
    website:string,
    company:Company,


}
export interface Address{
street:string,
suite:string,
city:string,
zipcode:string,
geo:{
    lat:string,
    lng:string
}
}
export interface Company{
    namer:string,
    catchPhrase:string,
    bs:string
}