
/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// Create the `showPage` function

function showPage(list, page) {

// console.log(list);
// console.log(page);

   var indexStart = (page * 9) - 9;
   var indexEnd = (page * 9);
   var studentList = document.querySelector('.student-list'); 
   studentList.innerHTML = " ";
   
// loop over the length of the `list` parameter

for (let i = 0; i < list.length; i++) {
   if(i >= indexStart && i<indexEnd) {

// create the elements needed to display the student information
   var studentName = list[i].name.first + ' ' + list[i].name.last
   var avatar = list[i].picture.large
   var date = list[i].registered.date
   var email = list[i].email  
     
// insert the above elements
   let studentItem = 
      `<li class="student-item cf">
         <div class= "student-details">
            <img class = "avatar" src="${avatar}">
            <h3>${studentName}<h3>
            <span class="email">${email}</span>
         </div>
         <div class = "Joined details">
         <span class = "date">${date}</span>   
         </div>
         </li> `

   console.log(avatar);
   studentList.insertAdjacentHTML('beforeend', studentItem);
   
   }
 }

}

// Create the `addPagination` function

const linkList = document.querySelector('.link-list')
   linkList.innerHTML='';
   function removeClasses(e){
   e.className=''
   };

function addPagination(listofStudents){
   const numOfPages = Math.ceil(listofStudents.length / 9)
   for(i=1; i<=numOfPages; i++){
      let button = `<li> <button type="button" class="pageButton">${i}</button> </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
   }
   
   console.log('data',listofStudents)
   const pageButtons = document.querySelector('.pageButton')
   pageButtons.className = 'active'
   
// Event listener will change the items on the page
   
   linkList.addEventListener('click', (e)=>{
      if(e.target.tagName === 'BUTTON'){
         const activeButton = document.querySelector('.active')
         removeClasses(activeButton)
         e.target.className = "active"
         showPage(listofStudents, e.target.textContent)
   
      }
      
   }) 
}

// Call functions
showPage(data, 1);
addPagination(data);