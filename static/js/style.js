
// This is the header javascript
let display = 0;
let navigatorlist = document.getElementById('displaynavigator')
let openmenu = document.getElementById('headeropenmenu')
let closemenu = document.getElementById('headerclosemenu')
let main = document.getElementById('main')
let footer = document.getElementById('footer')

function navigatoropen() {
    if (display == 0){
        navigatorlist.innerHTML = `
            <h3>My Sites</h3>
            <li><a href="Https://Tordicv.pythonanywhere.com"><i class="fa fa-home" aria-hidden="true"></i> My C.V</a></li>
            <li><a href="Https://Tordichatapp.pythonanywhere.com"><i class="fa fa-question-circle" aria-hidden="true"></i> My Chatapp</a></li>
            <li><a href="Https://tordicalculator.pythonanywhere.com"><i class="fa fa-server" aria-hidden="true"></i> My Calculator</a></li>
        `
        openmenu.innerHTML = ''
        closemenu.innerHTML = `
            <style>
                #headerclosemenu i{
                    font-size: 40px;
                    display: inline-block;
                }
            </style>
            <i class="fa fa-times" aria-hidden="true"></i>
        `
        main.style.display = 'none'
        footer.style.display = 'none'
        display = 0
    }
}
function navigatorclose() {
    if (display == 0){
        navigatorlist.innerHTML = ''
        openmenu.innerHTML = `
            <i class="fa fa-bars" aria-hidden="true"></i>
        `
        closemenu.innerHTML = ''
        main.style.display = 'block'
        footer.style.display = 'block'
        display = 0
    }
}


// This part is the courses javascript

let course1 = document.getElementById('firsteducation')
let course2 = document.getElementById('secondeducation')
let show = 0

function courses() {
    if (show == 0) {
        course1.innerHTML = `
            <li><span style="font-size: 20px;"><b>FIRST SCHOOL LEAVING CERTIFICATE</b></span> - Acquired a first school leaving certificate.</li>
            <li><span style="font-size: 20px;"><b>WAEC</b></span> - Acquired both Junior and Senior WAEC certificate.</li>
            <li><span style="font-size: 20px;"><b>BSC</b></span> - Currently a student of the university of port harcourt .</li>
            <li><span style="font-size: 20px;"><b>GREAT LEARNING</b></span> - Finshed several courses in GREAT LEARNING</li>
            <li><span style="font-size: 20px;"><b>ALX AFRICA</b></span> - Graduated from ALX AFRICA</li>
        `
        course2.innerHTML = ''
        show = 0
    }

    else {
        course1.innerHTML = ''
        course2.innerHTML = `
            <i class="fa fa-code" aria-hidden="true"></i>
            <i class="fa fa-code-fork" aria-hidden="true"></i>
        `
        show = 1
    }
}
courses() 
