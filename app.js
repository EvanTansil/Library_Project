console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
class Book{
constructor(id,title,author,read)
{
this.id =id
   this.title=title
   this.author=author
   this.read=read 
}
}
class Library{
    constructor(){
this.bookCount=0
this.books=[]
this.nextId=0

}
markRead(id,checkbox ){
    this.books.forEach((book)=>{
        if(book.id==id){
            book.read=true
            checkbox.value=true
         } })
    
}
addBook(){
    let title=document.getElementById("title").value
    let author=document.getElementById("author").value
    let read= document.getElementById ("checkbox").checked
    let book=new Book(++this.nextId,title,author,read )
this.books.push(book)
this.bookCount++
let tr=document.createElement("tr")
let titleTd= document.createElement("td")
titleTd.textContent= title
tr.appendChild (titleTd)
let authorTd= document.createElement("td")
authorTd.textContent= author
tr.appendChild(authorTd) 
let checkboxTd= document.createElement("td")
let checkbox= document.createElement("input")
checkbox.type="checkbox"
checkbox.id=book.id
checkbox.setAttribute("aria-label", "read book")
checkbox.disabled=true
checkbox.checked=read
checkboxTd.appendChild(checkbox)
tr.appendChild(checkboxTd)
let tbody= document.getElementById ("tbody")
tbody.appendChild(tr)
}

}
let library= new Library()
let button= document.getElementById("submit")
button.addEventListener ("click",(e)=>{
library.addBook()
})
