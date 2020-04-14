
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path=require('path');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('picture'));
const readJson = fs.readFileSync('./data/series.json');
const readJson1=fs.readFileSync('./data/names.json');
const readJson2=fs.readFileSync('./data/departement.json');
const readJson3=fs.readFileSync('./data/salarie.json');
let data = JSON.parse(readJson);
let data1=JSON.parse(readJson1);
let list=JSON.parse(readJson2);
let list1=JSON.parse(readJson3);
app.set('views', './views'); // specify the views directory
app.set('view engine', 'ejs'); 
// register the template engine

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/search'));
//app.use(express.static('pages'));
app.get('/index', (req, res) => {
	const { filter } = req.query;
	let filterData = [];

	if (filter) {
		for (let dt of data) {
			if (
				dt.Title.toLowerCase() === filter.toLowerCase() ||
				dt.Country.toLowerCase() === filter.toLowerCase() ||
				dt.ID === parseFloat(filter)
			) {
				filterData.push(dt);
			}
		}
	}

	if (!filter) {
		filterData = data;
	}

	res.render('index', { data: filterData, filter });
});

// add Name
app.get('/', (req, res) => {
	res.render('login');
});
app.get('/search', (req, res) => {
	// console.log('hhhbbbb');
	res.sendFile(path.join(__dirname,'./search/search.html'));
});
app.get('/salarie',(req,resp)=>{
	resp.end(JSON.stringify(list1));
	});
app.get('/file', (req, res) => {
	console.log('hhhbbbb');
	res.sendFile(path.join(__dirname,'./fileTester.html'));
});

app.post('/addName', (req, res) => {
	const { name,lname,role,email,password} = req.body;

	data1.push({ ID: data1.length + 1, name: name, lname: lname,role:role,email:email,password:password });
	fs.writeFileSync('./data/names.json', JSON.stringify(data1, null, 4));
	res.redirect('/index');
});
// add company
app.get('/add', (req, res) => {
	res.render('add');
});

app.post('/add', (req, res) => {
	const { title, country,local,desc,departements} = req.body;

	data.push({ ID: data.length + 1, Title: title, Country: country,local:local,desc:desc,departements:departements });
	fs.writeFileSync('./data/series.json', JSON.stringify(data, null, 4));
	res.redirect('/');
});
app.get('/display/:id', (req, res) => {
	const { id } = req.params;
	let dataId;
	console.log(id)

	for (let i = 0; i < data.length; i++) {
		if (Number(id) === data[i].ID) {
			dataId = i;
		}console.log('helo weld nass')
	}
	res.render('select', { data: data[dataId] });

});

app.get('/edit/:id', (req, res) => {
	const { id } = req.params;
	let dataId;

	for (let i = 0; i < data.length; i++) {
		if (Number(id) === data[i].ID) {
			dataId = i;
		}
	}

	res.render('edit', { data: data[dataId] });
});

app.post('/edit/:id', (req, res) => {
	const { id } = req.params;
	const { title, country,local,desc,departements } = req.body;

	let dataId;
	for (let i = 0; i < data.length; i++) {
		if (Number(id) === data[i].ID) {
			dataId = i;
		}
	}

	data[dataId].Title = title;
	data[dataId].Country = country;
	data[dataId].local = local;
	data[dataId].desc = desc;
	data[dataId].departements= departements;

	fs.writeFileSync('./data/series.json', JSON.stringify(data, null, 4));

	res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
	const { id } = req.params;
	console.log('req.params' + req.params);
	const newData = [];
	for (let i = 0; i < data.length; i++) {
		if (Number(id) !== data[i].ID) {
			newData.push(data[i]);
		}
	}

	data = newData;
	fs.writeFileSync('./data/series.json', JSON.stringify(data, null, 4));
	res.redirect('/index');
});
//departement
app.get('/departement/:Title/:ID',(req,resp)=>{
	var {Title}= req.params;
	var {ID}=req.params;
	for(var j=0;j<data.length;j++){
	 if(data[j].ID==ID && data[j].Title==Title){
		resp.render('departement',{list,error:"Ajouter département",entreprise:Title,ID});
	  }
	}
});
/// ADD DEPARTEMENT
app.post('/addDepartement',function(req,resp){
	if(req.body.Nom==="" || req.body.chef_département==="" || req.body.description===""){
		resp.redirect('/departement/'+ req.body.entreprise+"/" + req.body.ID);
	}
	else{
	for(var i in data){
		if(data[i].ID==req.body.ID){
		list.push({
				"ID":req.body.ID,
				"Nom":req.body.Nom,
				"chef_département":req.body.chef_département,
			   "description":req.body.description,
			   "idmatricule":list.length+1
			});
			fs.writeFile('data/departement.json',JSON.stringify(list,null,5),(err)=>{
				console.log(err);
			});
			resp.redirect('/departement/'+ req.body.entreprise+"/" + req.body.ID);
	}
}

}
});

//salarie

app.get('/salarie/:Nom/:Matricule',(req,resp)=>{
	var {Nom}= req.params;
	var {Matricule}=req.params;

	for(var j=0;j<list.length;j++){
	 if(list[j].idmatricule==Matricule){
		resp.render('salarie',{list1,text:"Ajouter Salarie",departement:Nom,Matricule});
		console.log(list[j].idmatricule +"==" + Matricule);
		console.log(list[j].Nom +"==" +Nom)  
	}
}
});
// ADD Salarie
app.post('/addSalarie',function(req,resp){
	console.log( req.body.departement+"/" + req.body.Matricule);
	if(req.body.nom=="" || req.body.Prenom=="" || req.body.Age=="" || req.body.salarie==""){
		resp.redirect('/salarie/'+ req.body.departement+"/" + req.body.Matricule);
	}
	else{
	for(var i in list){
		if(list[i].idmatricule==req.body.Matricule){
		list1.push({
				"Matricule":req.body.Matricule,
				"id":list1.length +1,
				"nom":req.body.nom,
				"Prenom":req.body.Prenom,
			   "Age":req.body.Age,
			   "salaire":req.body.salaire
			});
			fs.writeFile('data/salarie.json',JSON.stringify(list1,null,5),(err)=>{
				console.log(err);
			});
			resp.redirect('/salarie/'+ req.body.departement+"/" + req.body.Matricule);
	}
}
}
});
app.listen(port, () => console.log(`youcode listening on port ${port}!`));
