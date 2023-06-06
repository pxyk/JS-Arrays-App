var now = 2022
var models = ['Toyota','Mazda','Mercedes','Opel']
var years = ['2015','2012','2016','2014']

var model = prompt("Model giriniz : ");
var year = prompt("Model yılını giriniz :");

models.push(model);
years.push(year);
for (var i = 0; i < models.length; i++) {
    console.log(models[i] +' '+years[i]+' model ve '+(now-years[i])+' yaşında bir araçtır');
    
}