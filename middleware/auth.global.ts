export default defineNuxtRouteMiddleware((to,from)=>{
    set to false when you want to test the login page:
    const isLoggedIn = True;
    if(isLoggedIn){
        return navigateTo(to.fullPath);
    }
    else{
        return navigateTo('/login');
    }
});