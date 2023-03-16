const search = document.querySelector('.bg-sg');
const elmForm = document.querySelector('.form-search');
const elmLogo =document.querySelector('.head').querySelector('.logo-topzone');
const elmMenu =document.querySelector('.head').querySelector('.menu');
const elmSearch=document.querySelector('.head').querySelector('.search-cart');
const elmFt = document.querySelector('.ft-sort').querySelector('ul');



function searchClick(){
    search.style.display='block';
    elmForm.style.display='flex';

    elmLogo.classList.add('none');
    
    elmMenu.classList.add('none');
    elmSearch.classList.add('none');

}
function cancelSearch(){
    search.style.display='none';
    elmForm.style.display='none';

    elmLogo.classList.remove('none');
    elmMenu.classList.remove('none');
    elmSearch.classList.remove('none');
}
function ftClick(){
    
    elmFt.classList.toggle('none');
}
