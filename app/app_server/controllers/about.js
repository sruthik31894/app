const about = function(req,res){
    res.render('about',{title: 'About us'});
};
module.exports = {
    about
};